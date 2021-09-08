import React from 'react';
import {
  Box,
  Button,
  Center,
  Heading,
  Select,
  Text,
  Stack,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  useDisclosure,
  useColorModeValue,
  Collapse
} from '@chakra-ui/react';

export const Body = (props) => {
  const { isOpen, onToggle } = useDisclosure()

  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();

  today = dd + '/' + mm + '/' + yyyy;

  return (
    <Center mt={4} mb={6}>
      <Box
        maxW={'195vh'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow="dark-lg"
        rounded={'md'}
        p={6}
        overflow={'hidden'}>
        <Stack>
          <Text
            color={'green.500'}
            textTransform={'uppercase'}
            fontWeight={800}
            fontSize={'sm'}
            letterSpacing={1.1}>
            Crypto Blue
          </Text>
          <Heading
            color={useColorModeValue('gray.700', 'white')}
            fontSize={'2xl'}
            fontFamily={'body'}>
            Seleccione una Cripto...
          </Heading>
          <Text color={'gray.500'}>
            Seleccione una Criptomoneda para obtener su precio en pesos Argentinos.
          </Text>
        </Stack>
        <Stack mt={6} spacing={3}>
          <Select mb={1} size="lg">
            <option value="BTC">Bitcoin</option>
            <option value="ETH">Ethereum</option>
            <option value="BNB">Binance Coin</option>
          </Select>
          <Text mb="8px">Precio Dólar Blue:</Text>
          <Stack>
            <Stat>
              <StatNumber>$ 182.23</StatNumber>
              <StatHelpText as="i"><strong>Fecha de cotización:</strong> {today}</StatHelpText>
            </Stat>
          </Stack>
        </Stack>
        <Button w="100%" colorScheme="blue" onClick={onToggle} mt={3}> Calcular!</Button>
        <Collapse in={isOpen} animateOpacity>
          <Box
            p="40px"
            color="white"
            mt="4"
            bg="teal.500"
            rounded="md"
            shadow="md"
          >
            <Stat>
              <StatLabel>Cantidad en Pesos Argentinos</StatLabel>
              <StatNumber>$ 10.12</StatNumber>
              <StatHelpText as="i">Las cantidades son estimativas, el precio puede variar segun donde se consiga la cotización del Dólar paralelo.</StatHelpText>
            </Stat>
          </Box>
        </Collapse>
      </Box>
    </Center>
  )
}
