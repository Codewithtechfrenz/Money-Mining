import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import logoImage from "../Assets/Image/MM Logo.png";
import "../CSS/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">

        {/* Brand */}
        <div className="footer-brand">
          <div className="logo">
            <img src={logoImage} alt="Money Mining Logo" />
          </div>

          <p className="desc">
            We are a modern money investment company dedicated to helping
            individuals grow their wealth through smart and automated money
            mining solutions.
          </p>

          {/* Social */}
          {/* <div className="social">
            <h3 className="follow-title">Follow Us</h3>

            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebookF />
              </a>

              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>

              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn />
              </a>
            </div>
          </div>*/}

          
        </div>

        {/* Support */}
        <div className="footer-support">
          <h4>Support</h4>

          <ul>
            <li>Help Center</li>
            <li>FAQs</li>

            <li>
              <Link to="/terms">Terms & Conditions</Link>
            </li>

            <li>
              <Link to="/privacy">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/refund">Refund Policy</Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-contact">
          <h4>Contact Us</h4>

          <p>Email: moneyminingindia@gmail.com</p>
          <p>Customer Support: 24/7 Assistance Available</p>
        </div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <div className="copyright">
          © 2026 Money Mining. All Rights Reserved.
        </div>

        {/* <div className="designed-by">
          Designed by{" "}
          <a href="https://techfrenz.in/" target="_blank" rel="noopener noreferrer">
            <span style={{ color: "yellow" }}>Techfrenz</span>
          </a>{" "}
          /{" "}
          <a
            href="https://softwaredevelopmentandgraphicdesign.tech/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span style={{ color: "yellow" }}>SDGD</span>
          </a>
        </div> */}
      </div>
    </footer>
  );
}