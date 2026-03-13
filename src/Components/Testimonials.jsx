import React, { useEffect, useRef, useState } from "react";
import "../CSS/Testimonials.css";

const testimonials = [
  {
    name: "Ram",
    rating: 4.9,
    text:
      "I like how easy it is to track my earnings in real time.",
      titles: "Investor (Golden Customers)"
  },
  {
    name: "Michael",
    rating: 3.2,
    text:
      "A simple and effective app for earning daily mining rewards.",
      titles: "Investor (Golden Customers)"
  },
  {
    name: "Priya",
    rating: 4.9,
    text:
      "Very easy to use and the daily earnings are clearly visible.",
      titles: "Investor (Golden Customers)"
  },
  {
    name: "Shanmugam",
    rating: 4.9,
    text:
      "Great app with smooth withdrawals and a clean interface.",
      titles: "Investor (Golden Customers)"
  },
  {
    name: "Raja",
    rating: 3.2,
    text:
      "Beginner-friendly platform with simple and transparent mining.",
      titles: "Investor (Golden Customers)"
  },
  {
    name: "Siva",
    rating: 4.9,
    text:
      "Fast support and a very user-friendly investment experience.",
      titles: "Investor (Golden Customers)"
  },
];

const Testimonials = () => {
  const sectionRef = useRef(null);
  const [textVisible, setTextVisible] = useState(false);
  const [cardsVisible, setCardsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTextVisible(true);

          // 🔥 trigger cards ONLY after text animation finishes
          setTimeout(() => {
            setCardsVisible(true);
          }, 900); // match text animation duration
        }
      },
      { threshold: 0.35 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section className="testimonials" ref={sectionRef}>
      {/* STEP 1 — LEFT */}
      <h2 className={`title fade-left ${textVisible ? "show" : ""}`}>
        What our <span>Happy Users</span> say
      </h2>

      <p className={`intro-text fade-left ${textVisible ? "show" : ""}`}>
        Our happy users enjoy a seamless, secure, and powerful investment
        experience — all in one app designed to make financial growth simple.
      </p>

      {/* STEP 2 — RIGHT */}
      <div className="cards-grid">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className={`card fade-right ${cardsVisible ? "show" : ""}`}
            style={{ transitionDelay: `${index * 0.15}s` }}
          >
            <div className="rating">
              <span>{item.rating}</span>
              <span className="star">★</span>
            </div>
            <p className="text">"{item.text}"</p>
            <h4 className="name">{item.name}</h4>
            <p className="titles">{item.titles}</p>
            
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
