import React from "react";
import "../CSS/LandingPage.css";

export default function LandingPage() {
  return (
    <div className="page">

      {/* CTA Section */}
      <section className="cta">
        <div className="cta-content">
          <h1>Let Your Money Work for You.</h1>
          <p>
            Join a modern money mining platform that helps you earn
            consistently through simple, secure investment plans.
          </p>
        </div>

        <button className="cta-btn">
          Join now <span>↗</span>
        </button>
      </section>

    </div>
  );
}