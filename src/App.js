import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import LandingPage from "./LandingPage";
import ImpactPage from "./ImpactPage";
import ProductPage from "./ProductPage";
import AboutPage from "./About";
import ScrollToTop from "./ScrollToTop";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/impact" element={<ImpactPage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
