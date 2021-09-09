import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Center,
  Heading,
  Select,
  Text,
  Stack,
  Stat,
  StackDivider,
  StatNumber,
  Skeleton,
  StatHelpText,
  useDisclosure,
  useColorModeValue,
  Collapse
} from '@chakra-ui/react';

import { StatCard } from './StatCard';

import {
  FaDollarSign,
} from "react-icons/fa";

import { getDolar } from '../services/getDolar';

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = dd + '/' + mm + '/' + yyyy;

export const Body = () => {
  const { isOpen, onToggle } = useDisclosure()
  const [dolarBlue, setDolarBlue] = useState()
  const [dolarOficial, setDolarOficial] = useState()

  useEffect(() => {
    getDolar("blue")
      .then(res => setDolarBlue(res))

    getDolar()
      .then(res => setDolarOficial(res))
  }, [])


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
          <Select mb={1} size="lg" onChange={() => { if (isOpen) onToggle() }}>
            <option value="BTC">Bitcoin</option>
            <option value="ETH">Ethereum</option>
            <option value="LTC">Litecoin</option>
            <option value="BNB">Binance Coin</option>
          </Select>
          <Stack
            spacing="5"
            justify="space-between"
            direction={{ base: 'column', md: 'row' }}
            divider={<StackDivider />}>
            <Stat>
            <Text mb="8px">Precio Dólar Blue:</Text>
              {dolarBlue ? <StatNumber>$ {dolarBlue}</StatNumber> : <Skeleton height="30px" />}
              <StatHelpText as="i"><strong>Fecha de cotización:</strong> {today}</StatHelpText>
            </Stat>
            <Stat>
            <Text mb="8px">Precio Dólar Oficial:</Text>
              {dolarOficial ? <StatNumber>$ {dolarOficial}</StatNumber> : <Skeleton height="30px" />}
              <StatHelpText as="i"><strong>Fecha de cotización:</strong> {today}</StatHelpText>
            </Stat>
          </Stack>
        </Stack>
        <Button w="100%" colorScheme="blue" onClick={onToggle} mt={3} isDisabled={!dolarBlue}> Calcular!</Button>
        <Collapse in={isOpen} animateOpacity>
          <Box
            p="40px"
            color="white"
            mt="4"
            bg="teal.700"
            rounded="lg"
            shadow="md"
          >
            <Stack
              spacing="8"
              justify="space-between"
              direction={{ base: 'column', md: 'row' }}
              divider={<StackDivider />}
            >
              <StatCard
                accentColor="blue.600"
                icon={<FaDollarSign />}
                data={{ label: 'Conversión a Dólar Blue', value: '5.000.000', change: -2.1 }}
              />
              <StatCard
                accentColor="green.500"
                icon={<FaDollarSign />}
                data={{ label: 'Conversión a Dólar Oficial', value: '4.820.000', change: 4.31 }}
              />
            </Stack>
          </Box>
        </Collapse>
      </Box>
    </Center>
  )
}
