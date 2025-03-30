import React from "react";
import { portfolioData } from "../datas/portfolioData"; 
import {HStack, VStack} from '@chakra-ui/react'
import {Heading, Text, Link, Box, Image} from '@chakra-ui/react'

const Home : React.FC = () => {
  return(
    <HStack justify="center" spacing={7}>
      <Image objectFit='cover' borderRadius='full' boxSize='300px' border='3px solid grey' transition='transform 0.3s ease' src='/images/profile.jpg' alt='img'/>
      <VStack maxWidth='800px'>
        <Box> 
        <Heading as='h1' textAlign="left" fontSize='36px' fontWeight='bold' color='black'>{portfolioData.name}</Heading>
        <Text fontSize='20px' mt={2.5} color='#222222' textAlign="left">🚀 {portfolioData.bio}</Text>
        <Text whiteSpace="pre-line" fontSize='16px' mt={2.5} color="#494949" textAlign="left">
          {"안녕하세요! 사용자 경험을 최우선으로 생각하는 프론트엔드 개발자입니다.\nReact와 TypeScript를 활용하여 깔끔하고 역동적인 웹 애플리케이션을 만들고 있습니다.\n새로운 기술을 배우고 적용하는 것을 즐기며, 효율적인 코드와 아름다운 UI를 구현하는 데 집중합니다\n"}</Text>
        <HStack mt={5} gap='15px' mb={5}> 
          <Link href="https://github.com/teo0zz" target="_blank" rel="noopener noreferrer" fontSize='16px' fontWeight="bold" _hover={{ color: 'blue' }}>🐱 GitHub</Link>
          <Link href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" fontSize='16px' fontWeight="bold" _hover={{ color: 'blue' }}>💼 LinkedIn</Link>
          <Link href="#" fontSize='16px' fontWeight="bold" _hover={{ color: 'blue' }}>📧 Email</Link>
        </HStack>
        <Heading as='h3' fontSize="22px" mb={5} color='black' textAlign="left">🛠 사용 기술</Heading>
        <HStack> 
          <Text borderRadius="8px" fontSize='16px' fontWeight="bold" p={1}>React</Text>
          <Text borderRadius="8px" fontSize='16px' fontWeight="bold" p={1}>TypeScript</Text>
          <Text borderRadius="8px" fontSize='16px' fontWeight="bold" p={1}>Framer Motion</Text>
          <Text borderRadius="8px" fontSize='16px' fontWeight="bold" p={1}>Node.js</Text>
        </HStack>
        </Box>
      </VStack>
    </HStack>
    
  );
}

// const Home : React.FC = () => {
//   return(
//     <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="home-container">
    
//           <div className="profile-section">
//             <motion.img 
//               src="/images/profile.jpg" 
//               alt="Profile" 
//               className="profile-image"
//               whileHover={{ scale: 1.1 }}
//             />
//           </div>
    
//           <div className="info-section">
//             <h1 className="title">{portfolioData.name}</h1>
//             <p className="bio">🚀 {portfolioData.bio}</p>
//             <p className="description">
//               안녕하세요! 사용자 경험을 최우선으로 생각하는 프론트엔드 개발자입니다.
//               React와 TypeScript를 활용하여 깔끔하고 역동적인 웹 애플리케이션을 만들고 있습니다.
//               새로운 기술을 배우고 적용하는 것을 즐기며, 효율적인 코드와 아름다운 UI를 구현하는 데 집중합니다
//             </p>
    
//             <div className="social-links">
//               <a href="https://github.com/teo0zz" target="_blank" rel="noopener noreferrer">🐱 GitHub</a>
//               <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">💼 LinkedIn</a>
//               <a href="#">📧 Email</a>
//             </div>
    
//             <div className="tech-stack">
//               <h3>🛠 사용 기술</h3>
//               <div className="stack-list">
//                 <span>React</span>
//                 <span>TypeScript</span>
//                 <span>Framer Motion</span>
//                 <span>Node.js</span>
//               </div>
//             </div>
//           </div>
//         </motion.div>
//   );
// }

export default Home;