import { Routes, Route } from "react-router-dom";

import AboutUs from "./components/AboutUs";
import Navbar from "./components/Navbar";
import TopBar from "./components/TopBar";
import Home from "./components/Home";
import SideBadge from "./components/ui/SideBadge";
import AdmissionPopup from "./components/AdmissionPopup";
import Contact from "./components/Contact";
import BranchPage from "./components/BranchPage";

const App = () => {
  return (
    <>
      <TopBar />
      <Navbar />
      <SideBadge />
      <AdmissionPopup />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/branches/:branch" element={<BranchPage />} />
      </Routes>
    </>
  );
};

export default App;
