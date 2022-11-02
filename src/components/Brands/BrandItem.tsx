import { Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { IBrandItem } from '../../interfaces/IBrandItem'

export default function BrandItem({child} : IBrandItem) {
  return (
    <Flex
      transition={'.2s'}
      _hover={{
        color : 'primary',
        
      }}
      w='100%'
      fontSize={['lg', '2xl', '5xl']}
      flex={5}>
      <Text
        fontSize={['lg', '2xl', '5xl']}
        fontWeight={400}>
         {child}
      </Text>  
    </Flex>
  )
}
