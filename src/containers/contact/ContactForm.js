import React, {useContext, useState} from "react";
import "./ContactForm.scss";
import StyleContext from "../../contexts/StyleContext";

const formspreeEndpoint = process.env.REACT_APP_FORMSPREE_ENDPOINT;

export default function ContactForm() {
  const {isDark} = useContext(StyleContext);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({type: "", message: ""});

  const handleSubmit = async event => {
    event.preventDefault();
    if (!formspreeEndpoint) {
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);
    setIsSubmitting(true);
    setSubmitStatus({type: "", message: ""});

    try {
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        body: formData,
        headers: {Accept: "application/json"}
      });

      if (!response.ok) {
        setSubmitStatus({
          type: "error",
          message:
            "Your message could not be sent. Please try again or email me directly."
        });
        return;
      }

      form.reset();
      setSubmitStatus({
        type: "success",
        message: "Thanks for reaching out! Your message has been sent."
      });
    } catch {
      setSubmitStatus({
        type: "error",
        message:
          "Your message could not be sent. Please check your connection and try again, or email me directly."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      className={isDark ? "dark-mode contact-form" : "contact-form"}
      action={formspreeEndpoint}
      method="POST"
      onSubmit={handleSubmit}
      onChange={event => setIsFormValid(event.currentTarget.checkValidity())}
    >
      <div className="contact-form-field">
        <label htmlFor="contact-email">Your email</label>
        <input
          id="contact-email"
          type="email"
          name="email"
          placeholder="name@example.com"
          autoComplete="email"
          maxLength="254"
          required
        />
      </div>
      <div className="contact-form-field">
        <label htmlFor="contact-message">Your message</label>
        <textarea
          id="contact-message"
          name="message"
          rows="5"
          maxLength="5000"
          required
        />
      </div>
      <div className="contact-form-honeypot" aria-hidden="true">
        <label htmlFor="contact-website">Leave this field empty</label>
        <input
          id="contact-website"
          type="text"
          name="_gotcha"
          tabIndex="-1"
          autoComplete="off"
        />
      </div>
      <button
        className="contact-form-submit"
        type="submit"
        disabled={!formspreeEndpoint || !isFormValid || isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Send message"}
      </button>
      {submitStatus.message && (
        <p
          className={`contact-form-status ${submitStatus.type}`}
          role={submitStatus.type === "error" ? "alert" : "status"}
        >
          {submitStatus.message}
        </p>
      )}
    </form>
  );
}
