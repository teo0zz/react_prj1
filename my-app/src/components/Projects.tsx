import React from "react";
import { motion } from "framer-motion";
import { portfolioData, Project } from "../datas/portfolioData";
import "../styles/Project.css"; 

const Projects: React.FC = () => {
  return (
    <motion.div initial={{ x: -100 }} animate={{ x: 0 }} exit={{ x: -100 }} className="projects-container">
      <h2>💼 프로젝트</h2>
      <div className="project-list">
        {portfolioData.projects.map((project: Project, index: number) => (
          <motion.div key={index} whileHover={{ scale: 1.01 }} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
              자세히 보기 →
            </a>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default Projects;