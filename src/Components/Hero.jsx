import React, { useEffect, useState } from "react";
import phoneCenterImg from "../Assets/Image/Hero.png";
import "../CSS/Hero.css";

const words = ["Money", "Profit", "Returns"];

const Hero = () => {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Parallax offset for circles
  const [scrollOffset, setScrollOffset] = useState(0);

  useEffect(() => {
  const currentWord = words[wordIndex];
  let typingSpeed = isDeleting ? 300 : 300;

  if (!isDeleting && charIndex === currentWord.length) {
    typingSpeed = 1000; // pause at end of word
  }

  const timeout = setTimeout(() => {
    if (!isDeleting) {
      setText(currentWord.substring(0, charIndex + 1));
      setCharIndex(charIndex + 1);

      if (charIndex + 1 === currentWord.length) {
        setIsDeleting(true);
      }
    } else {
      setText(currentWord.substring(0, charIndex - 1));
      setCharIndex(charIndex - 1);

      if (charIndex - 1 === 0) {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    }
  }, typingSpeed);

  return () => clearTimeout(timeout);
}, [charIndex, isDeleting, wordIndex]);


  // Parallax effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollOffset(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Update CSS variables for parallax
  useEffect(() => {
    document.documentElement.style.setProperty(
      "--parallax-offset",
      `${scrollOffset * 0.2}px`
    );
  }, [scrollOffset]);

  return (
    <section className="hero-section">
      {/* optional blurred background */}
      <div className="hero-layer"></div>

      {/* hero content */}
      <div className="hero-content">
        <h1>
          Grow your <span className="typing-text">{text}</span> daily with
        </h1>
        <p>smart financial investing.</p>
      </div>

      {/* phones */}
      <div className="phone-display">
        {/* Center Phone */}
        <div className="phone phone-center">
          <img src={phoneCenterImg} alt="Phone" className="phone-img" />
        </div>

        {/* Left Bottom Phone */}
        <div className="phone phone-left">
          <img src={phoneCenterImg} alt="Phone" className="phone-img" />
        </div>

        {/* Right Bottom Phone */}
        <div className="phone phone-right">
          <img src={phoneCenterImg} alt="Phone" className="phone-img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
