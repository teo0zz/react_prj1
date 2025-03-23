import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./style/App.css";

import Home from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import portfolioData from "./data/portfolioData";


const App: React.FC = () => {
  return (
    <div>
      <div className="container">
        <nav className="navbar">
          <Link to="/">HOME</Link>
          <Link to="/projects">PROJECT</Link>
          <Link to="/contact">CONTACT</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <footer className="footer">
          <p>© {new Date().getFullYear()} {portfolioData.name}. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
