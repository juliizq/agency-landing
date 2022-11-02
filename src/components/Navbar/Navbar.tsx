import { Box, Flex, Show } from '@chakra-ui/react'
import React from 'react'
import { ReactComponent as Logo } from '../../assets/logo.svg'
import Desktop from './Desktop'
import Mobile from './Mobile'
import { ReactComponent as Line } from '../../assets/hline.svg'


export default function Navbar() {
  return (
    <Box>
      <Flex
        justifyContent={'space-between'}
        alignItems={'center'}>
        <Logo width={'65px'} height={'36px'}/>
        <Box>
          <Show below='sm'>
            <Mobile />
          </Show>
          <Show above='sm'>
            <Desktop />
          </Show>
        </Box>
      </Flex>
      <Box maxW={'100vw'}>
        <Line />
      </Box>
    </Box>

  )
}
