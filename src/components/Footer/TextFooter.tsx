import React from 'react'
import { Text } from '@chakra-ui/react'
import { ITextFooter } from '../../interfaces/ITextFooter'

export default function TextFooter({child} : ITextFooter) {
  return (
    <Text
      _hover={{
        textDecoration:'underline',
        cursor:'pointer'
      }}
      fontSize={['sm','md','md']}
      >
      {child}
    </Text>
  )
}
