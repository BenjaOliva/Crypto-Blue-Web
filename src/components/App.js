import React, { useState } from 'react';
import {
  ChakraProvider,
  Box,
  VStack,
  Grid,
  theme
} from '@chakra-ui/react';
import { Simple as Navbar } from "./navbar"
import { Body } from './Body';
import Footer from './Footer';

const App = props => {
  const [logo, setLogo] = useState(true)

  return (
    <ChakraProvider theme={theme}>
      <div id="Inicio">
      <Box fontSize="xl">
        <Grid minH="100vh" p={3}>
          <Navbar setLoading={setLogo} loading={logo} ></Navbar>
          <VStack spacing={8}>
          <Body isOpen={true}></Body>
          </VStack>
        </Grid>
      </Box>
      </div>
      
      <div id="Contacto">
      <Footer />
      </div>
      
    </ChakraProvider>
  );
}

export default App;
