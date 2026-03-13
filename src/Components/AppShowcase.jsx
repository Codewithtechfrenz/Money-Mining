import React, { useEffect, useRef, useState } from "react";
import "../CSS/AppShowcase.css";

import appPreview1 from "../Assets/Image/appphone1.png";
import appPreview2 from "../Assets/Image/appphone2.png";
import appPreview3 from "../Assets/Image/appphone3.png";
import appPreview4 from "../Assets/Image/appphone4.png";

export default function AppShowcase() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section ref={sectionRef} className="showcase-container">
      {/* Gold strip */}
      <div
        className={`showcase-strip ${
          isVisible ? "showcase-strip-visible" : ""
        }`}
      />

      <div className="showcase-content">
        <h1
  className={`showcase-heading ${
    isVisible ? "showcase-visible" : ""
  }`}
>
  <span className="line back-left">Keeping your</span>
  <span className="line back-right">Investments in</span>
  <span className="line back-up highlight">One App</span>
</h1>

        {/* Image Row */}
        <div className="showcase-image-row">
          <img
            src={appPreview1}
            alt="App preview 1"
            className={`showcase-image-1 ${
              isVisible ? "showcase-image-1-visible" : ""
            }`}
          />

          <img
            src={appPreview2}
            alt="App preview 2"
            className={`showcase-image-2 ${
              isVisible ? "showcase-image-2-visible" : ""
            }`}
          />

          {/* THIRD IMAGE WITH BACKGROUND LETTER */}
          <div className="showcase-image-3-container">
            <span
              className={`background-letter ${
                isVisible ? "background-letter-visible" : ""
              }`}
            >
            </span>

            <img
              src={appPreview3}
              alt="App preview 3"
              className={`showcase-image-3 ${
                isVisible ? "showcase-image-3-visible" : ""
              }`}
            />
          </div>

          <img
            src={appPreview4}
            alt="App preview 4"
            className={`showcase-image-4 ${
              isVisible ? "showcase-image-4-visible" : ""
            }`}
          />
        </div>
      </div>
    </section>
  );
}
