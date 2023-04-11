import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Home from "./components/pages/Home";
import ToSee from "./components/pages/ToSee";
import Tours from "./components/pages/Tours";
import Hotels from "./components/pages/Hotels";
import SignUp from "./components/pages/SignUp";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
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
