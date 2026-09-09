import React, {useContext, useState, useEffect, useCallback} from "react";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import "./Greeting.scss";
import landingPerson from "../../assets/lottie/landingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import {illustration, greeting} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import resumeFile from "./millete-mcv.pdf";

export default function Greeting() {
  const {isDark} = useContext(StyleContext);
  
  const roles = [
    {
      prefix: "I do ",
      highlight: "AI automation",
      subTitle: greeting.subTitle
    },
    {
      prefix: "I am a ",
      highlight: "Software developer",
      subTitle: greeting.subTitle
    },
    {
      prefix: "I am a ",
      highlight: "Cybersecurity specialist",
      subTitle: greeting.subTitle
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextRole = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % roles.length);
  }, [roles.length]);

  const prevRole = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + roles.length) % roles.length);
  }, [roles.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextRole();
    }, 8000);

    return () => clearInterval(interval);
  }, [nextRole]);

  if (!greeting.displayGreeting) {
    return null;
  }

  const currentRole = roles[currentIndex];

  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1
                className={isDark ? "dark-mode greeting-text" : "greeting-text"}
              >
                {currentRole.prefix}
                <span className="rotating-title">
                  {currentRole.highlight}
                </span>{" "}
                <span className="wave-emoji">{emoji("👋")}</span>
              </h1>

              {/* Moved navigation buttons into their own control row below the title for clean layout */}
              <div className="role-nav-container">
                <button onClick={prevRole} className="role-nav-btn" aria-label="Previous role">‹</button>
                <button onClick={nextRole} className="role-nav-btn" aria-label="Next role">›</button>
              </div>

              <p
                className={
                  isDark
                    ? "dark-mode greeting-text-p"
                    : "greeting-text-p subTitle"
                }
              >
                {currentRole.subTitle}
              </p>
              <div id="resume" className="empty-div"></div>
              <SocialMedia />
              <div className="button-greeting-div">
                 <Button text="Contact me" href="#contact" />
                 <Button text="My Certifications" href="#achievements" />
                   {greeting.resumeLink && (
                   <a
                     href={resumeFile}
                     download="Millete-CV.pdf"
                     className="download-link-button"
                 >
                 <Button text="Download CV" />
                </a>
                    )}     
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={landingPerson} />
            ) : (
              <img
                alt="man sitting on table"
                src={require("../../assets/images/manOnTable.svg")}
              ></img>
            )}
          </div>
        </div>
      </div>
    </Fade>
  );
}