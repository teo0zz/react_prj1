import React from "react";
import { portfolioData, Project } from "../datas/portfolioData";
import { VStack } from '@chakra-ui/react'
import { Heading, Box, Text, Link, Card } from '@chakra-ui/react'

const Projects: React.FC = () => {
  return (
    <VStack w='100%'>
      <Heading as='h2' size='md'>💼 프로젝트</Heading>
      {portfolioData.projects.map((project: Project, index: number) => (
        <Card bg='white' w='98%' p={10} borderRadius='10px' color='black' textAlign='left' _hover={{ transform: 'scale(1.01)' }}>
          <Heading as='h3' size='md'>{project.title}</Heading>
          <Text>{project.description}</Text>
          <Link href={project.link} target="_blank" color='#007bff' fontWeight='bold'>자세히 보기 →</Link>
        </Card>
      ))}
    </VStack>
  );
}

// const Projects: React.FC = () => {
//   return (
//     <motion.div initial={{ x: -100 }} animate={{ x: 0 }} exit={{ x: -100 }} className="projects-container">
//       <h2>💼 프로젝트</h2>
//       <div className="project-list">
//         {portfolioData.projects.map((project: Project, index: number) => (
//           <motion.div key={index} whileHover={{ scale: 1.01 }} className="project-card">
//             <h3>{project.title}</h3>
//             <p>{project.description}</p>
//             <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
//               자세히 보기 →
//             </a>
//           </motion.div>
//         ))}
//       </div>
//     </motion.div>
//   );
// }

export default Projects;