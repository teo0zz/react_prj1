import React from "react";
import { motion } from "framer-motion";
import { portfolioData } from "../datas/portfolioData";
import "../styles/Profile.css"; 

const Home : React.FC = () => {
  return(
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="home-container">
    
          <div className="profile-section">
            <motion.img 
              src="/images/profile.jpg" 
              alt="Profile" 
              className="profile-image"
              whileHover={{ scale: 1.1 }}
            />
          </div>
    
          <div className="info-section">
            <h1 className="title">{portfolioData.name}</h1>
            <p className="bio">🚀 {portfolioData.bio}</p>
            <p className="description">
              안녕하세요! 사용자 경험을 최우선으로 생각하는 프론트엔드 개발자입니다.
              React와 TypeScript를 활용하여 깔끔하고 역동적인 웹 애플리케이션을 만들고 있습니다.
              새로운 기술을 배우고 적용하는 것을 즐기며, 효율적인 코드와 아름다운 UI를 구현하는 데 집중합니다
            </p>
    
            <div className="social-links">
              <a href="https://github.com/teo0zz" target="_blank" rel="noopener noreferrer">🐱 GitHub</a>
              <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">💼 LinkedIn</a>
              <a href="#">📧 Email</a>
            </div>
    
            <div className="tech-stack">
              <h3>🛠 사용 기술</h3>
              <div className="stack-list">
                <span>React</span>
                <span>TypeScript</span>
                <span>Framer Motion</span>
                <span>Node.js</span>
              </div>
            </div>
          </div>
        </motion.div>
  );
}

export default Home;