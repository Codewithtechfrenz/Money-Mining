import React, { useState } from "react";
import "../CSS/FAQ.css";

const faqData = [
  {
    question: "What is Money Mining?",
    answer:
      "Money mining is an automated process that helps generate daily earnings from your investment. It works in the background with no extra effort required.",
  },
  {
    question: "Is My Investment Secure?",
    answer:
      "Yes, your investment is protected with multiple security layers and transparent tracking to ensure safety and reliability.",
  },
  {
    question: "How Do I Start Investing?",
    answer:
      "Simply create an account, add funds, choose a plan, and start earning. The process is beginner-friendly and quick.",
  },
  {
    question: "How Do I Earn Daily Returns?",
    answer:
      "Daily returns are generated automatically through mining once your investment is active.",
  },
  {
    question: "How Can I Withdraw My Earnings?",
    answer:
      "You can withdraw your earnings anytime through the withdrawal section. Processing is fast and smooth.",
  },
  {
    question: "What Are Referral & Cashback Rewards?",
    answer:
      "You earn rewards by referring friends and through cashback offers available on selected plans.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq">
      {/* BACKGROUND SHAPE */}
      <div className="faq-bg-shape"></div>

      <div className="faq-container">
        {/* LEFT CONTENT */}
        <div className="faq-left">
          <h2>
            Frequently Asked <br />
            <span className="highlights">questions</span>
            <span className="arrow">→</span>
          </h2>

          <p>
            Find quick answers to common questions about investing, mining, and
            earnings. Everything you need to know to get started with confidence.
            Explore answers to the most frequently asked questions about our app
            features. Learn how investing, mining, and withdrawals work in one
            place.
          </p>
        </div>

        {/* RIGHT ACCORDION */}
        <div className="faq-right">
          {faqData.map((item, index) => (
            <div
              key={index}
              className={`faq-card ${
                activeIndex === index ? "active" : ""
              }`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">
                <span className="faq-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="faq-text">{item.question}</span>

                <div className="faq-icon">
                  {activeIndex === index ? "−" : "+"}
                </div>
              </div>

              <div className="faq-answer-wrapper">
                <div className="faq-answer">{item.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
