import {
    Box,
    Circle,
    Heading,
    HStack,
    Stack,
  } from '@chakra-ui/react'

  import React from 'react'
  
  export const StatCard = ({ accentColor, icon , data}  ) => {
    const { label, value } = data
  
    return (
      <Stack mx="auto" spacing="3">
        <Box fontWeight="medium">
          {label}
        </Box>
        <HStack spacing="3">
          <Circle flexShrink={0} size="7" bg={accentColor} color="white">
            {icon}
          </Circle>
          <Heading as="p" size="lg" fontWeight="">
            {value}
          </Heading>
        </HStack>
      </Stack>
    )
  }
  