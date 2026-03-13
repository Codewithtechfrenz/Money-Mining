import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import "../CSS/Privacy.css";

function Privacy() {
  const [activeSection, setActiveSection] = useState("");
  const [headerVisible, setHeaderVisible] = useState(true); // ✅ FIXED — Missing state
  const navigate = useNavigate();

  /* ============================= */
  /* Header Hide / Show On Scroll  */
  /* ============================= */

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setHeaderVisible(false);
      } else {
        setHeaderVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ============================= */
  /* Scroll Highlight Logic        */
  /* ============================= */

  useEffect(() => {
    const sections = document.querySelectorAll(".privacy-content h2[id]");

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

  /* ============================= */
  /* Smooth Scroll Function       */
  /* ============================= */

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (!element) return;

    const offset = 130;
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* ✅ Fixed Header (Outside Layout) */}
      <div
        className="privacy-header-wrapper"
        style={{
          transform: headerVisible
            ? "translateY(0)"
            : "translateY(-120%)",
          transition: "transform 260ms ease",
        }}
      >
        <Header />
      </div>

      {/* ✅ Page Layout */}
      <div className="privacy-layout">

        {/* Sidebar */}
        <aside className="privacy-sidebar">
          <ul>

            <li>
              <a
                href="#section1"
                className={activeSection === "section1" ? "active" : ""}
                onClick={(e) => scrollToSection(e, "section1")}
              >
                1. Information We Collect
              </a>
            </li>

            <li>
              <a
                href="#section2"
                className={activeSection === "section2" ? "active" : ""}
                onClick={(e) => scrollToSection(e, "section2")}
              >
                2. Purpose of Data Collection
              </a>
            </li>

            <li>
              <a
                href="#section3"
                className={activeSection === "section3" ? "active" : ""}
                onClick={(e) => scrollToSection(e, "section3")}
              >
                3. Sharing of Information
              </a>
            </li>

            <li>
              <a
                href="#section4"
                className={activeSection === "section4" ? "active" : ""}
                onClick={(e) => scrollToSection(e, "section4")}
              >
                4. International Transfers
              </a>
            </li>

            <li>
              <a
                href="#section5"
                className={activeSection === "section5" ? "active" : ""}
                onClick={(e) => scrollToSection(e, "section5")}
              >
                5. Data Retention
              </a>
            </li>

            <li>
              <a
                href="#section6"
                className={activeSection === "section6" ? "active" : ""}
                onClick={(e) => scrollToSection(e, "section6")}
              >
                6. Data Security
              </a>
            </li>

            <li>
              <a
                href="#section7"
                className={activeSection === "section7" ? "active" : ""}
                onClick={(e) => scrollToSection(e, "section7")}
              >
                7. Your Rights
              </a>
            </li>

            <li>
              <a
                href="#section8"
                className={activeSection === "section8" ? "active" : ""}
                onClick={(e) => scrollToSection(e, "section8")}
              >
                8. Cookies
              </a>
            </li>

            <li>
              <a
                href="#section9"
                className={activeSection === "section9" ? "active" : ""}
                onClick={(e) => scrollToSection(e, "section9")}
              >
                9. Children’s Privacy
              </a>
            </li>

            <li>
              <a
                href="#section10"
                className={activeSection === "section10" ? "active" : ""}
                onClick={(e) => scrollToSection(e, "section10")}
              >
                10. Policy Updates
              </a>
            </li>

          </ul>
        </aside>

        {/* Content */}
<div className="privacy-content">
  <h1>Privacy Policy</h1>

  {/* Section 1 */}
  <h2 id="section1">1. Information We Collect</h2>
  <p>
    We collect personal and non-personal information when you register,
    verify your identity, and use our Platform services.
  </p>

  <p>
    The information we collect includes:
  </p>

  <ul>
    <li>Full name, date of birth, and residential address</li>
    <li>Government-issued identification documents for KYC verification</li>
    <li>Facial recognition data for identity verification</li>
    <li>Email address and phone number</li>
    <li>Wallet addresses and transaction history</li>
    <li>Deposit, withdrawal, and referral activity</li>
    <li>Device information, IP address, browser type, and geolocation</li>
    <li>Login timestamps and system usage data</li>
  </ul>

  {/* Section 2 */}
  <h2 id="section2">2. Purpose of Data Collection</h2>
  <p>
    We collect your information to operate, improve, and secure our services.
    Data is used for:
  </p>

  <ul>
    <li>Account creation and management</li>
    <li>KYC and AML compliance verification</li>
    <li>Processing deposits and withdrawals</li>
    <li>Calculating and crediting 0.30% Daily ROI</li>
    <li>Processing 0.10% referral commission</li>
    <li>Operating automated withdrawal system</li>
    <li>Fraud detection and cybersecurity protection</li>
    <li>Regulatory compliance and audits</li>
    <li>Improving platform performance and support</li>
  </ul>

  {/* Section 3 */}
  <h2 id="section3">3. Sharing of Information</h2>
  <p>
    We may share your information with trusted third-party service providers
    who assist in operating our Platform.
  </p>

  <ul>
    <li>Payment processors</li>
    <li>Identity verification service providers</li>
    <li>Cloud hosting and server providers</li>
    <li>Legal and financial advisors</li>
    <li>Auditors and regulatory authorities</li>
  </ul>

  <p>
    We do not sell, rent, or trade your personal data to third parties.
  </p>

  {/* Section 4 */}
  <h2 id="section4">4. International Transfers</h2>
  <p>
    Your data may be stored and processed on servers located outside your
    country of residence.
  </p>

  <p>
    When data is transferred internationally, we implement appropriate
    security safeguards to ensure protection in accordance with applicable laws.
  </p>

  {/* Section 5 */}
  <h2 id="section5">5. Data Retention</h2>
  <p>
    We retain personal information only for as long as necessary to fulfill
    legal, contractual, tax, and regulatory obligations.
  </p>

  <p>
    Once retention is no longer required, data is securely deleted or
    anonymized to protect your privacy.
  </p>

  {/* Section 6 */}
  <h2 id="section6">6. Data Security</h2>
  <p>
    We implement advanced security measures including:
  </p>

  <ul>
    <li>Encryption of sensitive data</li>
    <li>Secure cloud infrastructure</li>
    <li>Access control restrictions</li>
    <li>Regular security monitoring</li>
    <li>Firewall and intrusion detection systems</li>
  </ul>

  <p>
    While we take strong security measures, no system connected to the
    internet is 100% secure.
  </p>

  {/* Section 7 */}
  <h2 id="section7">7. Your Rights</h2>
  <p>
    Depending on your jurisdiction, you may have rights to:
  </p>

  <ul>
    <li>Access your personal data</li>
    <li>Request correction or updates</li>
    <li>Request deletion of data</li>
    <li>Restrict processing of your data</li>
    <li>Withdraw consent where applicable</li>
  </ul>

  <p>
    All requests will be reviewed and may require identity verification.
  </p>

  <h2 id="section8">8. Cookies & Tracking Technologies</h2>

<p>
  We use cookies, pixel tags, local storage, and similar tracking technologies
  to improve platform functionality, security, analytics, and user experience.
</p>

<p>
  Cookies help us:
</p>

<ul>
  <li>Maintain secure user sessions</li>
  <li>Remember user preferences and settings</li>
  <li>Analyze platform performance and traffic</li>
  <li>Detect fraud and unauthorized access</li>
  <li>Improve system functionality and usability</li>
</ul>

<p>
  We may use:
</p>

<ul>
  <li><strong>Essential Cookies</strong> – Required for platform operation</li>
  <li><strong>Security Cookies</strong> – Protect against malicious activity</li>
  <li><strong>Analytics Cookies</strong> – Track usage behavior and performance</li>
  <li><strong>Session Cookies</strong> – Maintain login sessions</li>
</ul>

<p>
  Users may disable cookies through browser settings; however, disabling cookies
  may limit access to certain features of the Platform.
</p>

  <h2 id="section9">9. Children’s Privacy</h2>

<p>
  Our Platform is strictly intended for individuals who are 18 years of age
  or older. We do not knowingly provide services to minors.
</p>

<p>
  We do not intentionally collect personal data from children under the age
  of 18.
</p>

<p>
  If we become aware that personal information from a minor has been collected
  without parental consent, we will take immediate steps to delete such data.
</p>

<p>
  Parents or guardians who believe their child has provided personal
  information to us may contact our support team for data removal requests.
</p>

  <h2 id="section10">10. Policy Updates & Amendments</h2>

<p>
  We reserve the right to modify, update, or revise this Privacy Policy at any
  time to reflect changes in business operations, legal requirements, or
  regulatory compliance.
</p>

<p>
  Updates may occur due to:
</p>

<ul>
  <li>New legal or regulatory requirements</li>
  <li>Security improvements</li>
  <li>Platform feature updates</li>
  <li>Operational changes</li>
</ul>

<p>
  When changes are made, the updated policy will be posted on this page with
  a revised effective date.
</p>

<p>
  Continued use of the Platform after policy updates constitutes acceptance
  of the revised Privacy Policy.
</p>

{/* ================= CONTINUE BUTTON ================= */}
<div className="privacy-continue-section">
  <button
    className="privacy-continue-btn"
    onClick={() => window.location.href = "/"}
  >
    Continue to Website
  </button>
</div>
</div>

      </div>
    </>
  );
}

export default Privacy;