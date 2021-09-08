import React from 'react'

import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    Button,
    ModalFooter,
    ModalHeader,
    ModalCloseButton,
    Divider
} from '@chakra-ui/react';

const InfoModal = ({ openModal, setModal }) => {
    return (
        <Modal
            isCentered
            onClose={() => { setModal(false) }}
            isOpen={openModal}
            motionPreset="slideInBottom"
        >
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Acerca De</ModalHeader>
                <Divider m={2} />
                <ModalCloseButton />
                <ModalBody>
                    <Accordion allowToggle>
                        <AccordionItem>
                            <AccordionButton>
                                <Box as="i" flex="1" textAlign="left">
                                    <strong>Que es Crypto Blue ?</strong>
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            <AccordionPanel pb={4}>
                                Crypto Blue es una herramienta Web que ayuda a sus usuarios a obtener un Precio
                                estimado de un criptoactivo valuados segun los diferentes valores que toma el Dólar 
                                en Argentina, facilitando así el calculo al usuario final.
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionButton>
                                <Box as="i" flex="1" textAlign="left">
                                <strong>Los datos son oficiales ?</strong>
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            <AccordionPanel pb={4}>
                                Los datos que utiliza Crypto Blue estan sujetos a variaciones. Como ambos activos
                                (Criptomonedas y Dólar Paralelo) son mercados informales, sus valores pueden variar
                                levemente dependiendo donde se busque.
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                </ModalBody>
                <ModalFooter>
                    <Button colorScheme="blue" mr={3} onClick={() => { setModal(false) }}>
                        Cerrar
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export default InfoModal