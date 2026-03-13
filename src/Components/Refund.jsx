import React, { useEffect, useState } from "react";
import Header from "./Header";
import "../CSS/Refund.css";

export default function Refund() {
  const [activeSection, setActiveSection] = useState("");
  const [headerVisible, setHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  /* ================= HEADER HIDE ON SCROLL ================= */

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setHeaderVisible(false);
      } else {
        setHeaderVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  /* ================= SCROLL SPY ================= */

  useEffect(() => {
    const sections = document.querySelectorAll(".refund-content h2[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-150px 0px -60% 0px",
        threshold: 0.3,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  /* ================= SMOOTH SCROLL ================= */

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (!element) return;

    const offset = 140;
    const elementPosition =
      element.getBoundingClientRect().top + window.pageYOffset;

    window.scrollTo({
      top: elementPosition - offset,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* Fixed Header */}
      <div
        className="refund-header-wrapper"
        style={{
          transform: headerVisible
            ? "translateY(0)"
            : "translateY(-120%)",
          transition: "transform 260ms ease",
        }}
      >
        <Header />
      </div>

      <div className="refund-layout">

        {/* Sidebar */}
        <aside className="refund-sidebar">
          <ul>
            {[ 
              "Acceptance",
              "Eligible Refunds",
              "Non Refundable",
              "Subscription Refunds",
              "Payment Processing",
              "Fraud & Chargebacks",
              "Policy Updates",
              "Contact"
            ].map((title, index) => (
              <li key={index}>
                <a
                  href={`#section${index + 1}`}
                  className={
                    activeSection === `section${index + 1}`
                      ? "active"
                      : ""
                  }
                  onClick={(e) =>
                    scrollToSection(e, `section${index + 1}`)
                  }
                >
                  {index + 1}. {title}
                </a>
              </li>
            ))}
          </ul>
        </aside>

        {/* Content */}
        <div className="refund-content">

  <h1>Refund Policy</h1>
  <p><strong>Effective Date:</strong> 17/11/2025</p>

  {/* ================= SECTION 1 ================= */}
  <h2 id="section1">1. Acceptance of Refund Policy</h2>
  <p>
    By making any deposit, subscription payment, or financial transaction
    through our platform, you acknowledge and agree to the terms of this
    Refund Policy.
  </p>

  <p>
    Refund eligibility is determined based on transaction status,
    service activation, and compliance verification.
    We reserve the right to approve or reject refund requests
    after proper investigation.
  </p>

  {/* ================= SECTION 2 ================= */}
  <h2 id="section2">2. Eligible Refund Situations</h2>

  <p>Refunds may be considered under the following conditions:</p>

  <ul>
    <li>Duplicate payments processed accidentally</li>
    <li>Technical errors during transaction processing</li>
    <li>Unauthorized transactions confirmed after investigation</li>
    <li>System failures or payment gateway errors</li>
    <li>Payments made but service not activated</li>
  </ul>

  <p>
    Refund requests must be submitted within the specified timeframe
    along with valid proof of payment and transaction details.
  </p>

  {/* ================= SECTION 3 ================= */}
  <h2 id="section3">3. Non-Refundable Cases</h2>

  <p>Refunds will not be issued in the following situations:</p>

  <ul>
    <li>Services already activated or utilized</li>
    <li>Rewards or incentives already credited</li>
    <li>Completed transactions processed successfully</li>
    <li>Participation funds used for investment cycles</li>
    <li>Violation of platform policies</li>
  </ul>

  <p>
    Once benefits or services are processed and credited,
    refund eligibility may be restricted.
  </p>

  {/* ================= SECTION 4 ================= */}
  <h2 id="section4">4. Subscription Refunds</h2>

  <p>
    Subscription fees are charged in advance for the selected billing period.
  </p>

  <ul>
    <li>Users may cancel subscriptions anytime</li>
    <li>No refund for unused subscription period unless required by law</li>
    <li>Access remains active until the billing cycle ends</li>
    <li>Refunds apply only in case of billing errors or duplicate charges</li>
  </ul>

  {/* ================= SECTION 5 ================= */}
  <h2 id="section5">5. Payment Processing & Refund Method</h2>

  <p>
    All transactions are processed through authorized third-party payment
    gateways such as Razorpay or other approved providers.
  </p>

  <ul>
    <li>Refunds are processed through the original payment method</li>
    <li>Bank processing time may vary</li>
    <li>Platform is not responsible for banking delays</li>
    <li>Processing time depends on payment provider policies</li>
  </ul>

  <h2 id="section6">6. Fraud, Disputes & Chargebacks</h2>

<p>
  All transactions are monitored for security, fraud prevention, and compliance.
  Users must immediately report any unauthorized activity to our support team.
</p>

<p>In case of disputes or suspected fraud:</p>

<ul>
  <li>An internal investigation will be initiated upon receiving a complaint</li>
  <li>Users must provide valid proof of transaction and identity verification</li>
  <li>Account activity logs may be reviewed during investigation</li>
  <li>Temporary account restrictions may apply during review process</li>
  <li>Refund decisions will be made based on investigation findings</li>
</ul>

<p>
  Chargebacks initiated through banks or payment providers may result in:
</p>

<ul>
  <li>Immediate suspension of platform access</li>
  <li>Restriction of withdrawal privileges</li>
  <li>Freezing of funds until dispute resolution</li>
  <li>Permanent termination for repeated or malicious chargebacks</li>
</ul>

<p>
  Fraudulent transactions, payment misuse, or intentional dispute abuse
  may result in legal action and permanent account banning.
</p>

  <h2 id="section7">7. Policy Updates & Amendments</h2>

<p>
  We reserve the right to modify, update, or revise this Refund Policy
  at any time without prior notice to reflect:
</p>

<ul>
  <li>Operational improvements</li>
  <li>Changes in payment gateway regulations</li>
  <li>New legal or compliance requirements</li>
  <li>Security enhancements</li>
  <li>Business model updates</li>
</ul>

<p>
  Updated versions of this policy will be posted on the platform
  with a revised effective date.
</p>

<p>
  Continued use of our services after policy updates constitutes
  full acceptance of the revised Refund Policy.
</p>

<p>
  It is the user's responsibility to periodically review this policy
  for any changes or modifications.
</p>

  <h2 id="section8">8. Contact for Refund Requests</h2>

<p>
  For refund inquiries, transaction disputes, or payment-related concerns,
  users may contact our support team using the details below:
</p>

<p>
  📧 <strong>Email:</strong> moneyminingindia@gmail.com
</p>

<p>
  Users must include the following information when submitting a refund request:
</p>

<ul>
  <li>Transaction ID / Payment Reference Number</li>
  <li>Date & Time of Transaction</li>
  <li>Screenshot or proof of payment</li>
  <li>Registered email or account details</li>
  <li>Reason for refund request</li>
</ul>

<p>
  Refund requests without proper documentation may experience delays
  or may be rejected due to incomplete information.
</p>

  {/* ================= CONTINUE BUTTON ================= */}
  <div className="refund-continue">
    <button
      onClick={() => (window.location.href = "/")}
      className="refund-btn"
    >
      Continue to Website
    </button>
  </div>

</div>
      </div>
    </>
  );
}