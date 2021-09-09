import {
    Box,
    Image,
    Button,
    chakra,
    Container,
    Stack,
    Text,
    useColorModeValue,
    VisuallyHidden,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    ModalFooter,
    ModalHeader,
    ModalCloseButton,
    useDisclosure
} from '@chakra-ui/react';
import { FaInstagram, FaLinkedin, FaWhatsapp, FaEnvelope, FaQrcode } from 'react-icons/fa';

const SocialButton = ({
    children,
    label,
    href,
}) => {
    return (
        <chakra.button
            bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
            rounded={'full'}
            w={8}
            h={8}
            as="a"
            cursor={'pointer'}
            href={href}
            display={'inline-flex'}
            alignItems={'center'}
            justifyContent={'center'}
            transition={'background 0.3s ease'}
            rel="noopener noreferrer"
            target="_blank"
            _hover={{
                bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
            }}>
            <VisuallyHidden>{label}</VisuallyHidden>
            {children}
        </chakra.button>
    );
};

const QrModal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Button onClick={onOpen} bg={'green.800'} leftIcon={<FaQrcode />}> Compartir este Sitio</Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Comparte el Sitio!</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Image src={require("../assets/QrCode.png").default} />
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme="blue" mr={3} onClick={onClose}>
                            Cerrar
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default function Footer() {
    return (
        <Box
            bg={useColorModeValue('gray.50', 'gray.900')}
            color={useColorModeValue('gray.700', 'gray.200')}>
            <Container
                as={Stack}
                maxW={'6xl'}
                py={4}
                direction={{ base: 'column', md: 'row' }}
                spacing={4}
                justify={{ base: 'center', md: 'space-between' }}
                align={{ base: 'center', md: 'center' }}>
                <QrModal />
                <Text>© 2021 Crypto Blue Web - Oliva Benjamin</Text>
                <Stack direction={'row'} spacing={6}>
                    <SocialButton as="a" label={'LinkedIn'} href={'https://www.linkedin.com/in/benjamin-oliva-clari%C3%A1-953454181/'} rel="noopener noreferrer" target={"_blank"}>
                        <FaLinkedin />
                    </SocialButton>
                    <SocialButton as="a" label={'WhatsApp'} href={'https://api.whatsapp.com/send?phone=5493513390283'} rel="noopener noreferrer" target="_blank">
                        <FaWhatsapp />
                    </SocialButton>
                    <SocialButton as="a" label={'Instagram'} href={'https://www.instagram.com/benjaaoliva/'} rel="noopener noreferrer" target="_blank">
                        <FaInstagram />
                    </SocialButton>
                    <SocialButton label={'Mail'} href={'mailto:benjaminoliva14@gmail.com'}>
                        <FaEnvelope />
                    </SocialButton>
                </Stack>
            </Container>
        </Box>
    );
}