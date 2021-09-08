import {
    Box,
    Image,
    Flex,
    HStack,
    Link,
    IconButton,
    useDisclosure,
    useColorModeValue,
    Stack
} from '@chakra-ui/react';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'

import { ColorModeSwitcher } from "./ColorModeSwitcher";
import InfoModal from './InfoModal';

export const Simple = (props) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [ isModalOpen, setModal ] = useState();
    const themeLogo = useColorModeValue(true, false);
    
    return (
        <>
            <Box px={1} >
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'} >
                    <IconButton
                        size={'md'}
                        icon={isOpen ? <center><FaTimes></FaTimes></center> : <center><FaBars></FaBars></center>}
                        aria-label={'Open Menu'}
                        display={{ md: 'none' }}
                        onClick={isOpen ? onClose : onOpen}
                    />
                    <HStack spacing={8} alignItems={'center'}>
                        {themeLogo ? <Image boxSize="100px" src={require("../assets/Crypto-Blue-logo.png").default}></Image> : <Image boxSize="100px" src={require("../assets/Crypto-Blue-logos-2.png").default}></Image>}
                        <HStack
                            as={'nav'}
                            spacing={4}
                            display={{ base: 'none', md: 'flex' }}>
                            <Link
                                px={2}
                                py={1}
                                rounded={'md'}
                                _hover={{
                                    textDecoration: 'none',
                                    bg: useColorModeValue('gray.200', 'gray.900'),
                                }}
                                href={'#'}>
                                Inicio
                            </Link>
                            <Link
                                px={2}
                                py={1}
                                rounded={'md'}
                                onClick={()=>{setModal(true)}}
                                _hover={{
                                    textDecoration: 'none',
                                    bg: useColorModeValue('gray.200', 'gray.900'),
                                }}
                            >
                                Acerca De
                            </Link>
                            <Link
                                px={2}
                                py={1}
                                rounded={'md'}
                                _hover={{
                                    textDecoration: 'none',
                                    bg: useColorModeValue('gray.200', 'gray.900'),
                                }}
                                href={'#Contacto'}>
                                Contacto
                            </Link>
                        </HStack>
                    </HStack>
                    <Flex alignItems={'center'}>
                        <ColorModeSwitcher justifySelf="flex-end" mr="3px" runLoading={() => { props.setLoading(prev => !prev) }} />
                    </Flex>
                </Flex>

                {isOpen ? (
                    <Box pb={4} display={{ md: 'none' }}>
                        <Stack as={'nav'} spacing={5}>
                            <Link
                                px={2}
                                py={1}
                                rounded={'md'}
                                href={'#'}>
                                Inicio
                            </Link>
                            <Link
                                px={2}
                                py={1}
                                onClick={()=>{setModal(true)}}
                                rounded={'md'}
                            >
                                Acerca De
                            </Link>
                            <Link
                                px={2}
                                py={1}
                                rounded={'md'}
                                href={'#Contacto'}>
                                Contacto
                            </Link>
                        </Stack>
                    </Box>
                ) : null}
                <InfoModal openModal={isModalOpen} setModal={setModal}/>
            </Box>
        </>
    );
}