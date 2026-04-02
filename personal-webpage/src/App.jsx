import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
{/*import { Routes, Route } from "react-router-dom";*/}
import Navbar from "./components/Navbar";
import ScrollToTop from "./ScrollToTop";
import HomePage from "./components/HomePage";
import About from "./components/About";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import PrivacyPolicy from "./components/PrivacyPolicy";
import CookiePolicy from "./components/CookiePolicy";

function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />

      <Routes>
        {/* Homepage SPA */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contacts />} />

        {/* Legali */}
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;