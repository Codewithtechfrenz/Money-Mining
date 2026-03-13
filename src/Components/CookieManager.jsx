import { useState, useEffect } from "react";
import "../CSS/CookieManager.css";

function CookieManager() {
  const [visible, setVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState({
    functional: true,
    analytics: false,
    marketing: false,
  });

useEffect(() => {
  localStorage.removeItem("cookieConsentPremium");


  const consent = localStorage.getItem("cookieConsentPremium");

  if (!consent) {
    setVisible(true);
    document
      .getElementById("app-content")
      ?.classList.add("cookie-blur");
  }
}, []);

  const saveConsent = (data) => {
    localStorage.setItem(
      "cookieConsentPremium",
      JSON.stringify(data)
    );
    setVisible(false);
    document.getElementById("app-content")?.classList.remove("cookie-blur");
  };

  const handleAccept = () => {
    saveConsent({
      accepted: true,
      preferences: {
        functional: true,
        analytics: true,
        marketing: true,
      },
    });
  };

  const handleDeny = () => {
    saveConsent({
      accepted: false,
      preferences: {
        functional: false,
        analytics: false,
        marketing: false,
      },
    });
  };

  const handleChange = (e) => {
    setPreferences({
      ...preferences,
      [e.target.name]: e.target.checked,
    });
  };

  const handleSavePreferences = () => {
    saveConsent({
      accepted: true,
      preferences,
    });
  };

  if (!visible) return null;

  return (
    <div className="cookie-overlay">
      <div className="cookie-modal">
        <button
          className="cookie-close"
          onClick={handleDeny}
        >
          ✕
        </button>

        <h2>Manage Cookie Consent</h2>

        {!showPreferences && (
          <>
            <p>
              We use cookies to enhance your browsing experience,
              serve personalized content, and analyze traffic.
            </p>

            <div className="cookie-buttons">
              <button className="accept" onClick={handleAccept}>
                Accept
              </button>
              <button className="deny" onClick={handleDeny}>
                Deny
              </button>
              <button
                className="preferences"
                onClick={() => setShowPreferences(true)}
              >
                View Preferences
              </button>
            </div>
          </>
        )}

        {showPreferences && (
          <div className="preferences-section">
            <div className="pref-item">
              <div>
                <h4>Functional Cookies</h4>
                <p>Required for basic functionality.</p>
              </div>
              <input type="checkbox" checked disabled />
            </div>

            <div className="pref-item">
              <div>
                <h4>Analytics Cookies</h4>
                <p>Help us improve our website.</p>
              </div>
              <input
                type="checkbox"
                name="analytics"
                checked={preferences.analytics}
                onChange={handleChange}
              />
            </div>

            <div className="pref-item">
              <div>
                <h4>Marketing Cookies</h4>
                <p>Used for personalized ads.</p>
              </div>
              <input
                type="checkbox"
                name="marketing"
                checked={preferences.marketing}
                onChange={handleChange}
              />
            </div>

            <div className="cookie-buttons">
              <button
                className="deny"
                onClick={() => setShowPreferences(false)}
              >
                Back
              </button>
              <button
                className="accept"
                onClick={handleSavePreferences}
              >
                Save Preferences
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CookieManager;