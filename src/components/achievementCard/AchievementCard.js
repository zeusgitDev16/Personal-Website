import React from "react";
import "./AchievementCard.scss";

export default function AchievementCard({cardInfo, isDark}) {
  const credentialLinks = cardInfo.footer || [];

  return (
    <div className={isDark ? "dark-mode certificate-card" : "certificate-card"}>
      <div className="certificate-image-div">
        {cardInfo.image ? (
          <img
            src={cardInfo.image}
            alt={cardInfo.imageAlt || "Credential badge"}
            className="card-image"
          />
        ) : (
          <div
            className="credential-placeholder"
            role="img"
            aria-label={cardInfo.imageAlt || "Credential badge"}
          >
            <span>{cardInfo.issuer || "Credential"}</span>
          </div>
        )}
      </div>
      <div className="certificate-detail-div">
        <h5 className={isDark ? "dark-mode card-title" : "card-title"}>
          {cardInfo.title}
        </h5>
        <p className={isDark ? "dark-mode card-subtitle" : "card-subtitle"}>
          {cardInfo.description}
        </p>
      </div>
      {credentialLinks.length > 0 && (
        <div className="certificate-card-footer">
          {credentialLinks.map((link, i) =>
            link.url ? (
              <a
                key={i}
                className={
                  isDark ? "dark-mode certificate-tag" : "certificate-tag"
                }
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.name}
              </a>
            ) : (
              <span
                key={i}
                className="certificate-tag certificate-tag-disabled"
                title="Add the public credential URL to enable this link"
              >
                {link.name}
              </span>
            )
          )}
        </div>
      )}
    </div>
  );
}
