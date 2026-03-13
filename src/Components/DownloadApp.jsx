import React, { useEffect, useRef, useState } from "react";
import "../CSS/DownloadApp.css";
import phoneImage from "../Assets/Image/phone2.png";

export default function DownloadSection() {
  const sectionRef = useRef(null);
  const [startAnim, setStartAnim] = useState(false);
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartAnim(true);

          // start image animation after text animation
          setTimeout(() => {
            setShowImage(true);
          }, 800); // match text animation duration
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="download-section" ref={sectionRef}>
      <div className="download-container">
        
        {/* Left text content */}
        <div className={`download-text ${startAnim ? "animate-left" : ""}`}>
          <h2>
            Download our <br />
            <span>Mobile App</span>
          </h2>

          <p>
            Get the mobile investment app and start earning daily ROI with a secure online investing platform. 
            Manage your investments, track real-time earnings, and grow passive income anytime, anywhere. 
            Designed for fast performance and easy use, the app offers a smooth digital investing experience. 
            Get started today and take control of your financial growth from your smartphone.
          </p>

          <button className="download-btn">Download Now</button>
        </div>

        {/* Right image */}
        <div className={`download-image ${showImage ? "animate-right" : ""}`}>
          <img src={phoneImage} alt="Mobile App" />
        </div>

      </div>
    </section>
  );
}
