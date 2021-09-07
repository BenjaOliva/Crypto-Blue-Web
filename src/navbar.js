import {
    Box,
    Text,
    Image,
    Flex,
    Avatar,
    HStack,
    Link,
    IconButton,
    useDisclosure,
    useColorModeValue,
    Stack,
    Popover,
    PopoverContent,
    PopoverArrow,
    PopoverBody,
    PopoverCloseButton,
    PopoverHeader,
    PopoverTrigger
} from '@chakra-ui/react';

import { FaBars, FaTimes } from 'react-icons/fa'

import { ColorModeSwitcher } from "./ColorModeSwitcher";

const Links = ['Inicio', 'Acerca De', 'Contacto'];

const NavLink = ({ children }) => (
    <Link
        px={2}
        py={1}
        rounded={'md'}
        _hover={{
            textDecoration: 'none',
            bg: useColorModeValue('gray.200', 'gray.900'),
        }}
        href={'#' + children}>
        {children}
    </Link>
);

export const Simple = (props) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const runLoading = () => {
        props.setLoading(prev => !prev)
    }

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
                        {!props.loading ? <Image boxSize="100px" src={require("./assets/Crypto-Blue-logo.png").default}></Image> : <Image boxSize="100px" src={require("./assets/Crypto-Blue-logos-2.png").default}></Image>}
                        <HStack
                            as={'nav'}
                            spacing={4}
                            display={{ base: 'none', md: 'flex' }}>
                            {Links.map((link) => (
                                <NavLink key={link}>{link}</NavLink>
                            ))}
                        </HStack>
                    </HStack>
                    <Flex alignItems={'center'}>
                        <ColorModeSwitcher justifySelf="flex-end" mr="3px" runLoading={runLoading} />
                        <Text fontSize="xs" pr="10px" as="i">...coded by Benjamin</Text>
                        <Popover>
                            <PopoverTrigger>
                                <Avatar alt="Benjamin Oliva" size={'md'} src={require("./assets/test.jpg").default}></Avatar>
                            </PopoverTrigger>
                            <PopoverContent>
                                <PopoverArrow />
                                <PopoverCloseButton />
                                <PopoverHeader>Hola!</PopoverHeader>
                                <PopoverBody as="i">Gracias por visitar mi sitio!</PopoverBody>
                            </PopoverContent>
                        </Popover>
                    </Flex>
                </Flex>

                {isOpen ? (
                    <Box pb={4} display={{ md: 'none' }}>
                        <Stack as={'nav'} spacing={5}>
                            {Links.map((link) => (
                                <NavLink key={link}>{link}</NavLink>
                            ))}
                        </Stack>
                    </Box>
                ) : null}
            </Box>
        </>
    );
}