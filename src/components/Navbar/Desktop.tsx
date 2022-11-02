import { Box, Flex, HStack, Text } from '@chakra-ui/react'
import React from 'react'
import { ReactComponent as Arrow } from '../../assets/contactArrow.svg'
import { ReactComponent as Star} from '../../assets/workStar.svg'


export default function Desktop() {
  return (
    <HStack
      fontWeight={'300'}
      fontSize={'18px'}
      spacing={'5'}>
      <Flex 
        justifyContent={'center'}>
        <Box position={'absolute'} top={'15px'} >
          <Star/>
        </Box>
        Work
      </Flex>
      <Text>Service</Text>
      <Text>About</Text>
      <Flex flexDirection={'row'} alignItems={'center'}>Contact <Arrow /> </Flex>
    </HStack>
  )
}
