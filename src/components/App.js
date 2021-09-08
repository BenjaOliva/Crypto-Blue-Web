import React, { useState } from 'react';
import {
  ChakraProvider,
  Box,
  Button,
  VStack,
  Grid,
  Spinner,
  theme,
  useDisclosure
} from '@chakra-ui/react';
import { Simple as Navbar } from "./navbar"
import { Body } from './Body';
import Footer from './Footer';

const App = props => {
  const [logo, setLogo] = useState(true)

  const { isOpen, onToggle } = useDisclosure()

  return (
    <ChakraProvider theme={theme}>
      <div id="Inicio">
      <Box fontSize="xl">
        <Grid minH="100vh" p={3}>
          <Navbar setLoading={setLogo} loading={logo} ></Navbar>
          <VStack spacing={8}>
            {isOpen ? <Body isOpen={isOpen}></Body>:
             <Spinner size="xl" />}
          </VStack>
          <Button onClick={onToggle}>Click Me</Button>
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
