import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import ToSee from "./components/pages/ToSee";
import Tours from "./components/pages/Tours";
import Hotels from "./components/pages/Hotels";
import SignUp from "./components/pages/SignUp";
import Footer from "./components/Footer";
import "@fortawesome/fontawesome-free/css/all.min.css";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App(): JSX.Element {
  return (
    <Router>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/toSee" element={<ToSee />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
