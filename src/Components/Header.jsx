import { useState, useEffect } from "react";
import "../CSS/Header.css";

// Image Imports
import MMLogo from "../Assets/Image/MM Logo.png";
import GooglePlay from "../Assets/Image/Google play-store.png";
import AppStore from "../Assets/Image/App-store.png";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Redirect based on device
  const handleStoreRedirect = () => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (/android/i.test(userAgent)) {
      window.location.href =
        "https://play.google.com/store/apps/details?id=YOUR_APP_ID";
    } else if (/iPad|iPhone|iPod/.test(userAgent)) {
      window.location.href =
        "https://apps.apple.com/app/idYOUR_APP_ID";
    } else {
      window.location.href =
        "https://play.google.com/store/apps/details?id=YOUR_APP_ID";
    }
  };

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      
      {/* LOGO */}
      <div className="logo-container">
        <img
          src={MMLogo}
          alt="Money Mining"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        />
      </div>

      {/* STORE BUTTONS */}
      <div className="store-links">
        <img
          src={GooglePlay}
          alt="Get it on Google Play"
          onClick={handleStoreRedirect}
        />
        <img
          src={AppStore}
          alt="Download on App Store"
          onClick={handleStoreRedirect}
        />
      </div>

    </header>
  );
};

export default Header;
