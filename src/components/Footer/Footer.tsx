import { Box, Flex, Link, Text } from '@chakra-ui/react'
import React from 'react'
import { ReactComponent as Line } from '../../assets/footerLine.svg'
import TextFooter from './TextFooter'

export default function Footer() {
  return (
    <Flex
      as='footer'
      alignItems={['center']}
      flexDirection={['column','column','row']}
      justifyContent={['space-between']}
      gap={['2','4']}
      >
      {/* <Box w={'100vw'} maxW={'100vw'}>
        <Line />
      </Box> */}
      <Text fontSize={['sm','md','md']}>
        Copyright © 2022 Mobio Solutions LLP
      </Text>
      <Link isExternal href='https://www.figma.com/community/file/1125709951771353052'>
        <TextFooter child='Made by ❤️'/>
      </Link>
      <Flex gap={'4'}>
        <TextFooter child='Instagram'/>
        <TextFooter child='Twitter'/>
        <TextFooter child='Linkedin'/>
      </Flex>
    </Flex>
  )
}
