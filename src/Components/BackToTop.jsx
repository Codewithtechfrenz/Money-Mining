import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import "../CSS/BackToTop.css";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`back-to-top ${visible ? "show" : ""}`}
      onClick={scrollToTop}
      aria-label="Back to top"
    >
      {/* Circular Text */}
      <svg className="circular-text" viewBox="0 0 120 120">
        <defs>
          <path
            id="circlePath"
            d="
              M 60,60
              m -50,0
              a 50,50 0 1,1 100,0
              a 50,50 0 1,1 -100,0
            "
          />
        </defs>

        <text
          fill="#f6c400"
          fontSize="14"
          letterSpacing="4"
        >
          <textPath
            href="#circlePath"
            startOffset="0%"
            textLength="314"
          >
            MONEY&nbsp;MINING&nbsp;&nbsp;•&nbsp;&nbsp;
            MONEY&nbsp;MINING&nbsp;&nbsp;•&nbsp;&nbsp;
          </textPath>
        </text>
      </svg>

      {/* Center Icon */}
      <div className="icon">
        <FaArrowUp />
      </div>
    </div>
  );
}


