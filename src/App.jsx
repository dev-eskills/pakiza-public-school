import { Routes, Route } from "react-router-dom";

import AboutUs from "./components/AboutUs";
import Navbar from "./components/Navbar";
import TopBar from "./components/TopBar";
import Home from "./components/Home";

const App = () => {
  return (
    <>
      <TopBar />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </>
  );
};

export default App;
