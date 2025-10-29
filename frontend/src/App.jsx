import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import About from './components/About';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import CookiePolicy from './components/CookiePolicy';




function App() {
  const location = useLocation();

  const hideNavbarOnRoutes = ['/privacy-policy', '/cookie-policy'];
  const showNavbar = !hideNavbarOnRoutes.includes(location.pathname);

  return (
    <>
       {showNavbar && <Navbar />}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HomePage />
              <About />
              <Contacts />
              <Footer />
            </>
          }
        />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
      </Routes>
    </>
  );
}

export default App;
