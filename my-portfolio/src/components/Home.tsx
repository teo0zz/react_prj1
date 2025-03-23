import React from "react";
import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";

const Home: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }} 
      className="home-container"
    >
      <div className="profile-section">
        <img src={portfolioData.profileImage} alt="Profile" className="profile-image" />
      </div>
      <div className="info-section">
        <h1>{portfolioData.name}</h1>
        <p className="bio">{portfolioData.bio}</p>
        <p className="contact">📧 {portfolioData.contact}</p>
      </div>
    </motion.div>
  );
};

export default Home;