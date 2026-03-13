import { useEffect } from "react";
import Lenis from "lenis";
import Header from "./Header";
import Hero from "./Hero";
import Content from "./Content";
import Investment from "./Investment";
import WhyMoneyMining from "./WhyMoneyMining";
import AppShowcase from "./AppShowcase";
import DownloadApp from "./DownloadApp";
import Testimonials from "./Testimonials";
import FAQ from "./FAQ";
import LandingPage from "./LandingPage";
import Footer from "./Footer";
import BackToTop from "./BackToTop";

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      lerp: 0.1
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="app">
      <Header />
      <Hero />
      <Content />
      <Investment />
      <WhyMoneyMining />
      <AppShowcase />
      <DownloadApp />
      <Testimonials />
      <FAQ />
      <LandingPage />
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;






















