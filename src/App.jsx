import { Routes, Route } from "react-router-dom";

import AboutUs from "./components/AboutUs";
import Navbar from "./components/Navbar";
import TopBar from "./components/TopBar";
import Home from "./components/Home";
import SideBadge from "./components/ui/SideBadge";
import AdmissionPopup from "./components/AdmissionPopup";
import Contact from "./components/Contact";
import BranchPage from "./components/BranchPage";
import ScrollToTopButton from "./components/homepage/ScrollToTopButton";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import MainCampus from "./components/MainBranch";
import Admission from "./components/Admission";
import Gallery from "./components/Gallery";
import StaffPage from "./components/Staff";

const App = () => {
  return (
    <>
      <TopBar />
      <Navbar />
      <SideBadge />
      <AdmissionPopup />
      <ScrollToTopButton />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admission" element={<Admission />} />
        <Route path="/main-campus" element={<MainCampus />} />
        <Route path="/staff" element={<StaffPage />} />
        <Route path="/branches/:branch" element={<BranchPage />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
