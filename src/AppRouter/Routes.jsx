import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Home from "../pages/Home/Home";
import Contact from "../pages/Contact/Contact";
import About from "../pages/About/About";
import Portfolio from "../pages/Portfolio/Portfolio";
import Services from "../pages/Services/Services";
import NotFound from "../pages/404";

const AppRoutes = () => {
  const location = useLocation();
  const isCMS = location.pathname.startsWith("/cms");

  return (
    <>
      <Navbar />
      <main className={isCMS ? "min-h-screen" : "pt-16"}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      && <Footer />
    </>
  );
};
export default AppRoutes;
