import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Link as ReactRouterLink } from 'react-router-dom'

import Home from "./components/Home";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import portfolioData from "./datas/portfolioData";

import {Box, HStack, VStack} from '@chakra-ui/react';
import {Button, Text} from '@chakra-ui/react';
import { Link as ChakraLink, LinkProps } from '@chakra-ui/react'


const App: React.FC = () => {
  return (
    
    <Router>
      <VStack w="100vw" h='100vh'>
        <HStack bg='black' justify='center' gap='30px' h="7vh" w="100%">
          <Button colorScheme='gray' variant='ghost' fontSize='20px' textColor='white'><ChakraLink as={ReactRouterLink} to='/'>HOME</ChakraLink></Button>
          <Button colorScheme='gray' variant='ghost' fontSize='20px' textColor='white'><ChakraLink as={ReactRouterLink} to='/Profile'>PROFILE</ChakraLink></Button>
          <Button colorScheme='gray' variant='ghost' fontSize='20px' textColor='white'><ChakraLink as={ReactRouterLink} to='/Projects'>PROJECTS</ChakraLink></Button>
          <Button colorScheme='gray' variant='ghost' fontSize='20px' textColor='white'><ChakraLink as={ReactRouterLink} to='/contact'>CONTACT</ChakraLink></Button>
        </HStack>

        <Box display="flex" justifyContent="center" alignItems="center" height="86vh" width="100%">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Box> 
        <Box as='footer' bg='black' display="flex" justifyContent="center" alignItems="center" h="7vh" w="100%">
          <Text fontSize='16px' color='white'>© {new Date().getFullYear()} {portfolioData.name}. All rights reserved.</Text>
        </Box>
      </VStack>

    </Router>
  );
}


// const App: React.FC = () => {
//   return (
//     <Router>
//       <div className='container'>
//         <nav className='navbar'>
//           <Link to="/">HOME</Link>
//           <Link to="/Profile">PROFILE</Link>
//           <Link to="/Projects">PROJECTS</Link>
//           <Link to="/contact">CONTACT</Link>
//         </nav>

//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/Profile" element={<Profile />} />
//           <Route path="/projects" element={<Projects />} />
//           <Route path="/contact" element={<Contact />} />
//         </Routes>

//         <footer className="footer">
//           <p>© {new Date().getFullYear()} {portfolioData.name}. All rights reserved.</p>
//         </footer>
//       </div>
//     </Router>
//   );
// }

export default App;
