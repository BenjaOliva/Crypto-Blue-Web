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


const ModalItem = ({ title, text }) => {

    return (
        <AccordionItem>
            <AccordionButton>
                <Box as="i" flex="1" textAlign="left">
                    <strong>{title}</strong>
                </Box>
                <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
                {text}
            </AccordionPanel>
        </AccordionItem>
    )
}

const InfoModal = ({ openModal, setModal }) => {
    return (
        <Modal
            isCentered
            onClose={() => { setModal(false) }}
            isOpen={openModal}
            size={'2xl'}
            motionPreset="slideInBottom"
        >
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Acerca De</ModalHeader>
                <Divider m={2} />
                <ModalCloseButton />
                <ModalBody>
                    <Accordion allowToggle>
                        <ModalItem
                            title='Que es Crypto Blue ?'
                            text='Crypto Blue es una herramienta Web que ayuda a sus usuarios a obtener un Precio
                                estimado de un criptoactivo valuados segun los diferentes valores que toma el Dólar
                                en Argentina, facilitando así el calculo al usuario final.'
                        />
                        <ModalItem
                            title='Los datos son oficiales ?'
                            text='Los datos que utiliza Crypto Blue estan sujetos a variaciones. Como ambos activos
                                (Criptomonedas y Dólar Paralelo) son mercados informales, sus valores pueden variar
                                levemente dependiendo donde se busque.'
                        />
                        <ModalItem
                            title='De donde vienen las cotizaciones ?'
                            text='Las cotizaciones Provienen de 2 plataformas, 
                                CoinGeko y DolarSi, a traves de sus API.'
                        />
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