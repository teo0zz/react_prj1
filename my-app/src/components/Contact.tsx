import React from "react";
import portfolioData from "../datas/portfolioData";
import { Heading } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { EmailIcon } from '@chakra-ui/icons'
import { VStack } from '@chakra-ui/react'

const Contact: React.FC = () => (
  <>
    <VStack>
      <Heading as='h2' size='md' fontSize='28px'><EmailIcon></EmailIcon> 연락처</Heading>
      <Text fontSize='22px' color='#444'>email: {portfolioData.contact}</Text>
      <Text fontSize='22px' color='#444'>phone: {portfolioData.phone}</Text>
    </VStack> 
  </>
);

export default Contact;