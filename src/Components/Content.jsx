import React, { useEffect, useRef, useState } from "react";
import phone1 from "../Assets/Image/phone1.png"; // Adjust path as needed
import "../CSS/Content.css";

const headingWords = [
  { text: "Join", delay: 0 },
  { text: "1k People", delay: 0.2, highlight: true },
  { text: "who", delay: 0.3 },
  { break: true },

  { text: "already trust us with", delay: 0.5 },
  { break: true },

  { text: "their Money...", delay: 0.7 },
];



const statsData = [
  { number: 1 , suffix: "K+", label: "Investors" },
  { number: 10, suffix: "M+", label: "Investments" },
  { number: 5, suffix: "yr+", label: "Experience" },
  { number: 98, suffix: "%", label: "Client Satisfaction" },
];

export default function HeroSection() {
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const imageRef = useRef(null);
  const statsRef = useRef(null);

  const [showHeading, setShowHeading] = useState(false);
  const [showParagraph, setShowParagraph] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [statsInView, setStatsInView] = useState(false);
  const [statsNumbers, setStatsNumbers] = useState(statsData.map(() => 0));

  // Button click function
  const handleJoinClick = () => {
    alert("Join button clicked!");
    // You can replace this with navigation or modal logic
    // Example:
    // navigate("/signup");
  };

  // Animate heading on scroll
  useEffect(() => {
    if (!headingRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShowHeading(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(headingRef.current);
    return () => observer.disconnect();
  }, []);

useEffect(() => {
  if (!showHeading) return;

  // total heading animation time
  const lastWordDelay = Math.max(...headingWords.map(w => w.delay || 0));
  const headingDuration = (lastWordDelay + 0.8) * 1000; 
  // 0.8 = animation duration from CSS

  const paragraphTimer = setTimeout(() => {
    setShowParagraph(true);

    const buttonTimer = setTimeout(() => {
      setShowButton(true);
    }, 400); // button after paragraph

    return () => clearTimeout(buttonTimer);
  }, headingDuration);

  return () => clearTimeout(paragraphTimer);
}, [showHeading]);


  useEffect(() => {
  if (!imageRef.current) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setShowImage(true);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 } // easier to trigger
  );

  observer.observe(imageRef.current);
  return () => observer.disconnect();
}, []);

useEffect(() => {
  if (showParagraph) {
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 300); // delay after paragraph

    return () => clearTimeout(timer);
  }
}, [showParagraph]);


// Animate stats numbers - UPDATE THIS
useEffect(() => {
  if (!statsRef.current) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate'); // ADD THIS LINE
          setStatsInView(true);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  observer.observe(statsRef.current);
  return () => observer.disconnect();
}, []);


  // Count-up animation for stats
  useEffect(() => {
    if (!statsInView) return;

    const duration = 2000;
    const stepTime = 30;
    const steps = Math.ceil(duration / stepTime);
    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      setStatsNumbers((prev) =>
        prev.map((_, i) =>
          Math.min(
            Math.floor((statsData[i].number / steps) * currentStep),
            statsData[i].number
          )
        )
      );
      if (currentStep >= steps) clearInterval(interval);
    }, stepTime);

    return () => clearInterval(interval);
  }, [statsInView]);

  return (
    
    <div className="hero-container">
      <div className="content-section">
      {/* Stats Section */}
      <div className="stats-container" ref={statsRef}>
        {statsData.map((stat, idx) => (
          <div key={idx} className="stat-item">
            <p className="stat-number">
              {statsNumbers[idx]}
              {stat.suffix}
            </p>
            <p className="stat-label">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Hero Content Section */}
      
        {/* Left Content */}
        <div className="content-left">
          <h1 ref={headingRef} className={`content-heading ${showHeading ? "show" : ""}`}>
  {headingWords.map((word, index) =>
    word.break ? (
      <br key={index} />
    ) : (
      <span
        key={index}
        className={word.highlight ? "highlight" : ""}
        style={{ animationDelay: `${word.delay}s` }}
      >
        {word.text + " "}
      </span>
    )
  )}
</h1>


          <p
            ref={paragraphRef}
            className={`content-paragraph fade-left ${showParagraph ? "show" : ""}`}

          >
            Be part of 1,000+ investors already trusting our secure investment
            platform. Grow your money effortlessly with daily returns and smart
            financial investing tools. Start building long-term wealth today
            with our trusted MoneyMining app.
          </p>

          <button
  className={`animated-button fade-left ${showButton ? "show" : ""}`}
  onClick={handleJoinClick}
>
  {/* Left arrow before text */}
  <svg className="arr-1" viewBox="0 0 24 24">
    <path
      d="M4 12h14M13 5l7 7-7 7"
      stroke="currentColor"
      strokeWidth="2.5"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>

  {/* Button text */}
  <span className="text">Download Now</span>

  {/* Right arrow after text */}
  <svg className="arr-2" viewBox="0 0 24 24">
    <path
      d="M4 12h14M13 5l7 7-7 7"
      stroke="currentColor"
      strokeWidth="2.5"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>

  {/* Circle hover effect */}
  <div className="circle"></div>
</button>





        </div>

        {/* Right Phone Image */}
        <div className="content-right">
        <div className="phone-wrapper">
        <img
  ref={imageRef}
  src={phone1}
  alt="Phone Display"
  className={`phone-image ${showImage ? "show" : ""}`}
/>
        </div>
        </div>

      </div>
    </div>
  );
}
