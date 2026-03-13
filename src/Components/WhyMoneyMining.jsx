import { useEffect, useRef, useState } from "react";
import "../CSS/WhyMoneyMining.css";

// Import images
import dailyRoiImg from "../Assets/Image/daily-roi.png";
import securePlatformImg from "../Assets/Image/secure-platform.png";
import referralIncomeImg from "../Assets/Image/referral-income.png";
import passiveIncomeImg from "../Assets/Image/passive-income.png";

function WhySection() {
  const sectionRef = useRef(null);

  const [textVisible, setTextVisible] = useState(false);
  const [cardsVisible, setCardsVisible] = useState(false);

  // Intersection observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTextVisible(true);

          // Delay cards animation until text finishes
          setTimeout(() => {
            setCardsVisible(true);
          }, 700); // match text animation duration
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Card data
  const cardsData = [
    {
      img: dailyRoiImg,
      title: "Consistent Daily ROI",
      text: "Earn 0.30% daily returns for 30 days with a reliable and transparent investment system."
    },
    {
      img: securePlatformImg,
      title: "Secure Investment Platform",
      text: "Safe, trusted, and fully digital platform protecting your funds and ensuring secure transactions."
    },
    {
      img: referralIncomeImg,
      title: "Referral Income Opportunities",
      text: "Boost earnings by inviting friends and earning 0.10% from each referral’s investment."
    },
    {
      img: passiveIncomeImg,
      title: "Passive Income & Financial Growth",
      text: "Build long-term wealth with automated earnings and a modern money investing experience."
    }
  ];

  // Spotlight effect
  const handlePointerMove = (e, ref) => {
    const rect = ref.current.getBoundingClientRect();
    let x, y;

    if (e.touches) {
      x = e.touches[0].clientX - rect.left;
      y = e.touches[0].clientY - rect.top;
    } else {
      x = e.clientX - rect.left;
      y = e.clientY - rect.top;
    }

    ref.current.style.setProperty("--mouse-x", `${x}px`);
    ref.current.style.setProperty("--mouse-y", `${y}px`);
    ref.current.style.setProperty(
      "--spotlight-color",
      "rgba(255, 235, 59, 0.3)"
    );
  };

  return (
    <section ref={sectionRef} className="why-section">
      <div className="why-header">
        <span className={`why-tag ${textVisible ? "fade-in" : ""}`}>
          Why Moneymining?
        </span>

        <h2 className={textVisible ? "fade-down" : ""}>
          “ They provides transparent earnings & financial future with smart ”
        </h2>
      </div>

      <div className={`why-cards ${cardsVisible ? "show" : ""}`}>
        {cardsData.map((card, index) => {
          const cardRef = useRef(null);

          return (
            <div
              key={index}
              ref={cardRef}
              className={`why-card card-spotlight ${
                cardsVisible ? "fade-up" : ""
              }`}
              onMouseMove={(e) => handlePointerMove(e, cardRef)}
              onTouchMove={(e) => handlePointerMove(e, cardRef)}
              style={{ animationDelay: `${index * 0.15}s` }} // stagger
            >
              <div className="why-icon">
                <img src={card.img} alt={card.title} />
              </div>

              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default WhySection;
