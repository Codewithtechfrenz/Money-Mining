import { BrowserRouter, Routes, Route } from "react-router-dom";

import Terms from "./Components/Terms";
import MoneyMining from "./Components/MoneyMining";
import ScrollToTop from "./Components/ScrollToTop";
import Privacy from "./Components/Privacy";
import Refund from "./Components/Refund";
import CookieManager from "./Components/CookieManager";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MoneyMining />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/refund" element={<Refund />} />
      </Routes>
      <CookieManager />
    </BrowserRouter>
  );
}

export default App;