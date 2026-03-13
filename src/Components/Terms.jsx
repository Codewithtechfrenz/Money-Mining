import React, { useState, useEffect } from "react";
import Header from "./Header";
import "../CSS/Terms.css";
import { useNavigate } from "react-router-dom";

function Terms() {
  const [headerVisible, setHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isChecked, setIsChecked] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  

  const navigate = useNavigate();

  /* ===================================== */
  /* HEADER HIDE ON SCROLL */
  /* ===================================== */
  useEffect(() => {
    const handleHeaderScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setHeaderVisible(false);
      } else {
        setHeaderVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleHeaderScroll, { passive: true });
    return () =>
      window.removeEventListener("scroll", handleHeaderScroll);
  }, [lastScrollY]);

  /* ===================================== */
  /* PERFECT SCROLL SPY (NO 15TH STOP ISSUE) */
  /* ===================================== */
  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll(".terms-content h2[id]")
    );

    if (!sections.length) return;

    const handleScrollSpy = () => {
      const scrollPosition = window.scrollY + 160; // header offset
      let currentSectionId = sections[0].id;

      for (let i = 0; i < sections.length; i++) {
        if (scrollPosition >= sections[i].offsetTop) {
          currentSectionId = sections[i].id;
        }
      }

      // 🔥 GUARANTEE LAST SECTION ACTIVATION
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2
      ) {
        currentSectionId = sections[sections.length - 1].id;
      }

      setActiveSection(currentSectionId);
    };

    window.addEventListener("scroll", handleScrollSpy);
    return () =>
      window.removeEventListener("scroll", handleScrollSpy);
  }, []);

  /* ===================================== */
  /* SMOOTH SCROLL TO SECTION */
  /* ===================================== */
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;

    const headerOffset = 140;
    const elementPosition =
      el.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  /* ===================================== */
  /* ACCEPT / DOWNLOAD LOGIC */
  /* ===================================== */
const handleAccept = () => {
  if (!isChecked) return;

  localStorage.setItem("termsAccepted", "true");
  navigate("/");
};

const handleDecline = () => {
  localStorage.removeItem("termsAccepted");
  navigate("/");
};

  return (
    <>
      <div
        className="terms-header-wrapper"
        style={{
          transform: headerVisible
            ? "translateY(0)"
            : "translateY(-120%)",
          transition: "transform 260ms ease",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          width: "100%",
          zIndex: 220,
        }}
      >
        <Header />
      </div>

      <div className="terms-layout">

        {/* Sidebar */}
        <div className="terms-sidebar">
          <ul>
            {Array.from({ length: 16 }, (_, i) => (
              <li key={i}>
                <a
                  href={`#section${i + 1}`}
                  onClick={(e) =>
                    scrollToSection(e, `section${i + 1}`)
                  }
                  className={
                    activeSection === `section${i + 1}`
                      ? "active"
                      : ""
                  }
                >
                  {i + 1}.{" "}
                  {
                    [
                      "Acceptance of Terms",
                      "Eligibility",
                      "Risk Disclosure",
                      "Account Registration",
                      "KYC Compliance",
                      "Daily ROI Structure",
                      "Referral Program",
                      "ROI Withdrawal",
                      "Deposits & Withdrawals",
                      "Prohibited Activities",
                      "Limitation of Liability",
                      "Indemnification",
                      "Suspension",
                      "Modifications",
                      "Data Protection",
                      "Contact Information",
                    ][i]
                  }
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Content */}
        <div className="terms-content">

          <h1>Terms & Conditions</h1>
          <p><strong>Effective Date :</strong> 17/11/2025</p>

          <h2 id="section1">1. Acceptance of Terms</h2>
          <p>
            By downloading, registering, or using the Money Mining App you agree to be bound by these Terms & Conditions.
            If you do not agree, you must discontinue use immediately.
          </p>

          <h2 id="section2">2. Eligibility</h2>
          <p>To use the Platform, you must:</p>
          <ul>
            <li>Be at least 18 years old (or legal age in your jurisdiction)</li>
            <li>Have the legal capacity to enter into a binding contract</li>
            <li>Provide accurate and complete registration information</li>
            <li>Comply with applicable financial regulations</li>
          </ul>
          <p>
            We reserve the right to verify identity (KYC) and refuse service at our discretion.
          </p>

          <h2 id="section3">3. Risk Disclosure</h2>
          <p>By using the Platform, you acknowledge and accept that:</p>
          <ul>
            <li>Investments are subject to market volatility</li>
            <li>Returns are not guaranteed</li>
            <li>You may lose some or all of your invested capital</li>
            <li>Regulatory or economic changes may affect performance</li>
          </ul>
          <p>You are solely responsible for your investment decisions.</p>

          <h2 id="section4">4. Account Registration & Security</h2>
          <ul>
            <li>Users must provide accurate information during registration</li>
            <li>You are responsible for maintaining the confidentiality of login credentials</li>
            <li>You must notify us immediately of unauthorized access</li>
            <li>We may suspend accounts suspected of fraud or illegal activity.</li>
          </ul>

          <h2 id="section5">5. KYC Compliance</h2>
          <p>
            We may require identity verification in compliance with Know Your Customer (KYC) regulations.
            Failure to provide requested documentation may result in account suspension or termination.
          </p>

          <h2 id="section6">6. Daily ROI Structure</h2>
          <p>
            Subject to the selected investment plan and compliance with these Terms, the Platform may provide a
            Daily Return on Investment (“Daily ROI”) of 0.30% on active investment balances.
          </p>
          <p>The Daily ROI:</p>
          <ul>
            <li>Is calculated daily based on the user’s active invested capital</li>
            <li>Is credited to the user’s account balance</li>
            <li>May be adjusted, suspended, or modified at the Company’s discretion</li>
            <li>Does not constitute a guaranteed or fixed profit</li>
          </ul>

          <h2 id="section7">7. Referral Commission Program</h2>
          <p>
            Money Mining offers a referral reward program. Users may earn a 0.10% referral commission based on the qualifying active investment of directly referred users.
          </p>
          <p>Referral terms include:</p>
          <ul>
            <li>Commissions apply only to verified and compliant accounts</li>
            <li>Fraudulent referrals are strictly prohibited</li>
            <li>Self-referrals or multiple account abuse may result in termination</li>
            <li>The Company may modify or discontinue the referral program at any time</li>
          </ul>
          <p>Referral rewards do not guarantee ongoing income.</p>

          <h2 id="section8">8. Automated ROI Withdrawal System</h2>
          <p>The Platform operates an automated ROI distribution system.</p>
          <p>Accumulated Daily ROI may be automatically processed for withdrawal between 12:01 AM and 12:10 AM (Platform system time) each day, subject to the following:
          </p>
          <ul>
            <li>Unlimited withdrawal</li>
            <li>Applicable transaction fees</li>
            <li>System availability</li>
            <li>Compliance and security verification</li>
          </ul>
          <p>
            Processing times may vary due to maintenance, network congestion, security reviews, or force majeure events. The Company does not guarantee uninterrupted automatic withdrawals.
          </p>

          <h2 id="section9">9. Deposits & Withdrawals</h2>
          <ul>
            <li>Users must deposit funds using approved payment methods</li>
            <li>Withdrawal requests may be subject to verification</li>
            <li>The Company reserves the right to delay withdrawals for compliance review</li>
            <li>Fees may apply and will be disclosed within the Platform</li>
          </ul>

          <h2 id="section10">10. Prohibited Activities</h2>
          <p>Users must not:</p>
          <ul>
            <li>Engage in fraud, hacking, or system manipulation</li>
            <li>Use stolen payment methods</li>
            <li>Create multiple accounts to exploit bonuses</li>
            <li>Engage in money laundering or other illegal activities</li>
          </ul>
          <p>Violations may result in immediate termination and possible legal action.</p>

          <h2 id="section11">11. Limitation of Liability</h2>
          <p>To the fullest extent permitted by law, Money Mining shall not be liable for:</p>
          <ul>
            <li>Loss of profits</li>
            <li>Loss of investment capital</li>
            <li>System downtime</li>
            <li>Cybersecurity breaches beyond reasonable control</li>
            <li>Indirect, incidental, or consequential damages</li>
          </ul>
          <p>Users accept full responsibility for investment decisions.</p>

          <h2 id="section12">12. Indemnification</h2>
          <p>Users agree to indemnify and hold the Company harmless from any claims, damages, losses, or legal expenses arising from:</p>
          <ul>
            <li>Violation of these Terms</li>
            <li>Misuse of the Platform</li>
            <li>Breach of applicable laws</li>
          </ul>

          <h2 id="section13">13. Suspension & Termination</h2>
          <p>The Company may suspend or terminate accounts for any of the following reasons:</p>
          <ul>
            <li>Violations of these Terms</li>
            <li>Regulatory requirements</li>
            <li>Suspected fraudulent activity</li>
          </ul>
          <p>The Company may freeze funds where legally required.</p>

          <h2 id="section14">14. Modifications to Terms</h2>
          <p>The Company reserves the right to update or modify these Terms at any time. Continued use of the Platform constitutes acceptance of revised Terms.</p>

          <h2 id="section15">15. Data Protection & Privacy</h2>

<p>
  Money Mining is committed to protecting the privacy and personal data of its users.
  By accessing or using the Platform, you acknowledge and consent to the collection,
  processing, storage, and use of your personal information in accordance with this
  Policy and applicable data protection laws.
</p>

<h3>15.1 Information We Collect</h3>

<p>
  We may collect and process the following types of information:
</p>

<ul>
  <li>Personal identification information (full name)</li>
  <li>Contact details (email address, phone number)</li>
  <li>Government-issued identification documents (for KYC verification)</li>
  <li>Financial information (wallet addresses, transaction records, payment details)</li>
  <li>Device and technical information (IP address, browser type, device identifiers)</li>
  <li>Usage data (login times, activity logs, referral activity)</li>
</ul>


<h2 id="contact-info">16. Contact Information</h2>

<p>
  For privacy-related inquiries, please contact:
</p>

<p>
  <strong>Data Protection Officer</strong><br />
  <strong>Company :</strong> Money Mining<br />
  <strong>Email :</strong> moneyminingindia@gmail.com<br /><br />

  <strong>Address :</strong><br />
  Building No. / Flat No.: 3/131, <br />
  Road/Street: North Street, 66. M Usilampatti, <br />
  Locality/Sub Locality: Mettupatti, <br />
  City/Town/Village: Palamedu, <br />
  District: Madurai, <br />
  State: Tamil Nadu,<br />
  PIN Code: 625503. <br /><br />

  <strong>GST No :</strong> 33AXIPT1598B2ZC
</p>

<div className="terms-agreement">

  <label className="checkbox-container">
    <input
      type="checkbox"
      checked={isChecked}
      onChange={(e) => setIsChecked(e.target.checked)}
    />
    I agree to the Terms & Conditions
  </label>

  <div className="terms-buttons">
    <button
      className="accept-btn"
      onClick={handleAccept}
      disabled={!isChecked}
    >
      Accept
    </button>

    <button
      className="decline-btn"
      onClick={handleDecline}
    >
      Decline
    </button>
  </div>

</div>
        </div>
      </div>
    </>
  );
}

export default Terms;