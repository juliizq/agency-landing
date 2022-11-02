import { Text } from '@chakra-ui/react'
import React from 'react'
import { IText18 } from '../../interfaces/Ih3'

export default function Text18({child} : IText18) {
  return (
    <Text
      fontSize={['14px' ,'18px']}>
      {child}
    </Text>
  )
}
