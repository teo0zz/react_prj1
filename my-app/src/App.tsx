import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import './styles/App.css';

import Home from "./components/Home";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import portfolioData from "./datas/portfolioData";

const App: React.FC = () => {
  return (
    <Router>
      <div className='container'>
        <nav className='navbar'>
          <Link to="/">HOME</Link>
          <Link to="/Profile">PROFILE</Link>
          <Link to="/Projects">PROJECTS</Link>
          <Link to="/contact">CONTACT</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <footer className="footer">
          <p>© {new Date().getFullYear()} {portfolioData.name}. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
