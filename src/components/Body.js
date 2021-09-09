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
import { getCrypto } from '../services/getCrypto';
import { formatter } from '../services/Formatter';

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = dd + '/' + mm + '/' + yyyy;

export const Body = () => {
  const { isOpen, onToggle } = useDisclosure()
  const [dolarBlue, setDolarBlue] = useState()
  const [dolarOficial, setDolarOficial] = useState()
  const [converOficial, setConveroficial] = useState()
  const [converBlue, setConverBlue] = useState()
  const [crudValue, setCrudValue] = useState()

  const [selectedClient, setSelectedClient] = useState('bitcoin');
  const [dolarBlueCrud, setCrud] = useState()
  const [dolarOficialCrud, setCrudOficial] = useState()


  useEffect(() => {
    getDolar("blue")
      .then(res => {
        setCrud(res)
        setDolarBlue(formatter.format(parseFloat(parseFloat(res.replace(',', '.')).toFixed(2))))
      })

    getDolar()
      .then(res => {
        setCrudOficial(res)
        setDolarOficial(formatter.format(parseFloat(parseFloat(res.replace(',', '.')).toFixed(2))))
      })
  }, [])

  function handleSelectChange(event) {
    setSelectedClient(event.target.value)
    if (isOpen) { onToggle() }
  }

  function calculateFunc() {
    if(!isOpen) onToggle()
    getCrypto(selectedClient, "usd")
      .then(res => {
        setCrudValue(formatter.format(res))
        setConveroficial(res * parseFloat(parseFloat(dolarOficialCrud.replace(',', '.')).toFixed(2)))
        let numero = (res * parseFloat(parseFloat(dolarBlueCrud.replace(',', '.')).toFixed(2)))
        setConverBlue(formatter.format(numero))
      })

  }

  return (
    <Center mt={4} mb={6}>
      <Box
        maxW={'92vw'}
        w={'900px'}
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
          <Select mb={1} size="lg" borderColor onChange={handleSelectChange}>
            <option value="bitcoin">Bitcoin</option>
            <option value="ethereum">Ethereum</option>
            <option value="litecoin">Litecoin</option>
            <option value="binancecoin">Binance Coin</option>
            <option value="dogecoin">DogeCoin</option>
          </Select>
          <Stack
            spacing="5"
            justify="space-between"
            direction={{ base: 'column', md: 'row' }}
            divider={<StackDivider />}>
            <Stat>
              <Text mb="8px">Precio Dólar Blue:</Text>
              {dolarBlue ? <StatNumber>{dolarBlue}</StatNumber> : <Skeleton height="30px" />}
              <StatHelpText as="i"><strong>Fecha de cotización:</strong> {today}</StatHelpText>
            </Stat>
            <Stat>
              <Text mb="8px">Precio Dólar Oficial:</Text>
              {dolarOficial ? <StatNumber>{dolarOficial}</StatNumber> : <Skeleton height="30px" />}
              <StatHelpText as="i"><strong>Fecha de cotización:</strong> {today}</StatHelpText>
            </Stat>
          </Stack>
        </Stack>
        <Button w="100%" colorScheme="blue" bg='cyan.600' onClick={calculateFunc} mt={3} isDisabled={!dolarBlue}> Calcular!</Button>
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
                data={{ label: 'Conversión a Dólar Blue', value: converBlue, change: -2.1 }}
              />
              <StatCard
                accentColor="green.500"
                icon={<FaDollarSign />}
                data={{ label: 'Conversión a Dólar Oficial', value: formatter.format(converOficial), change: 4.31 }}
              />
              <StatCard
                accentColor="yellow.600"
                icon={<FaDollarSign />}
                data={{ label: 'Precio en Dólares', value: crudValue, change: 4.31 }}
              />
            </Stack>
          </Box>
        </Collapse>
      </Box>
    </Center>
  )
}
