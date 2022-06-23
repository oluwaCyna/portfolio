import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home"
import Portfolio from "./Portfolio"
import CV from "./Cv"
import Skills from "./Skills";

const Main = () => {
  return (
    <BrowserRouter>
      <>
        <NavBar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/cv" element={<CV />} />
        </Routes>
      </>
    </BrowserRouter>
  );
};

export default Main;
