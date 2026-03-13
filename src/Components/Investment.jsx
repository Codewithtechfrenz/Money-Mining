import React, { useEffect, useRef, useState } from "react";
import "../CSS/Investment.css";

import slide1 from "../Assets/Image/earnings.png";
import slide2 from "../Assets/Image/referral.png";
import slide3 from "../Assets/Image/withdrawal.png";
import slide4 from "../Assets/Image/support.png";

const slides = [slide1, slide2, slide3, slide4];

const Investment = () => {
  const textRef = useRef([]);
  const [visibleText, setVisibleText] = useState([false, false, false]);

  // Slider state
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideInterval = useRef(null);

  // Intersection observer for text fade-in
  useEffect(() => {
    const observerOptions = { threshold: 0.3 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const index = Number(entry.target.dataset.index);
        if (entry.isIntersecting) {
          setVisibleText((prev) => {
            const updated = [...prev];
            updated[index] = true;
            return updated;
          });
        }
      });
    }, observerOptions);

    textRef.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Auto slide every 4 seconds
  useEffect(() => {
    slideInterval.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(slideInterval.current);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="investment-section">
      {/* Heading */}
      <div className="investment-heading">
        <h1
          ref={(el) => (textRef.current[0] = el)}
          data-index={0}
          className={`animate-heading ${visibleText[0] ? "in-view" : ""}`}
        >
          Do more with investments on your
          <br />
          <span className="aurora-text">Money Mining</span>
        </h1>
      </div>

      {/* Content Row */}
      <div className="investment-content">
        {/* Left Side Text */}
        <div className="investment-left">
          <p
            ref={(el) => (textRef.current[1] = el)}
            data-index={1}
            className={`investment-desc ${visibleText[1] ? "in-view" : ""}`}
          >
            Smart investing starts with choosing a reliable platform that offers daily ROI,
            secure earnings, and sustainable growth. Online money investment apps help users
            earn consistently while exploring passive income opportunities. Take control of
            your financial future with a modern digital investment experience.
          </p>

          <ul
            ref={(el) => (textRef.current[2] = el)}
            data-index={2}
            className={`investment-list ${visibleText[2] ? "in-view" : ""}`}
          >
            {[
              "Experience daily ROI investing through a secure, transparent, and modern digital investment platform.",
              "Smart online investing with daily returns, secure earnings, and long-term passive income growth.",
              "Build passive income with a trusted online investment app offering consistent daily returns.",
            ].map((text, idx) => (
              <li key={idx} style={{ transitionDelay: `${idx * 0.2}s` }}>
                {text}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side Slider */}
        <div className="investment-right">
          <div className="slider">
            {slides.map((src, idx) => (
              <div key={idx} className={`slide ${currentSlide === idx ? "active" : ""}`}>
                <img src={src} alt={`Slide ${idx + 1}`} />
              </div>
            ))}
          </div>

          {/* Navigation Dots outside slider */}
          <div className="dots">
            {slides.map((_, idx) => (
              <div
                key={idx}
                className={`dot ${currentSlide === idx ? "active" : ""}`}
                onClick={() => goToSlide(idx)}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Investment;
