import { ChakraProvider, Box } from '@chakra-ui/react';
import React from 'react';
import './App.css';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import customTheme from './theme'
import Work from './components/Work/Work';
import Brands from './components/Brands/Brands';
import Services from './components/Services/Services';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <ChakraProvider theme={customTheme}>
      <Box className="App">
        <Box 
          padding={{base: '10px 20px', md: '18px 40px'}}>
          {/* <HStack w={'100vw'} h={'100vh'} position={'absolute'} spacing={['30%']}>
            <Line />
            <Line />
            <Line />
            <Line />
          </HStack> */}
          <Navbar />
          <Hero />
          <Work />
          <Brands />
          <Services />
          <About />
          <Contact />
          <Footer />
        </Box>
      </Box>

    </ChakraProvider>
   
  );
}

export default App;
