import React from "react";
import { motion } from "framer-motion";
import portfolioData from "../data/portfolioData";

const Contact: React.FC = () => (
  <motion.div initial={{ y: 50 }} animate={{ y: 0 }} exit={{ y: 50 }} className="contact-page">
    <h2>📩 연락처</h2>
    <p>이메일: {portfolioData.contact}</p>
  </motion.div>
);

export default Contact;