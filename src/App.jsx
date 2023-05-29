import React from "react";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Contact from "./components/contact/Contact";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Project from "./pages/projects/Project";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Contact />
      <div className="container mx-auto">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Project />} />
      </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
