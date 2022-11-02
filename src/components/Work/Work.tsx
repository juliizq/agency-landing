import { Box, Flex, Image, Show, Text } from '@chakra-ui/react'
import React from 'react'
import Text18 from '../shared/Text18'
import { ReactComponent as Line } from '../../assets/aboutline.svg'
import { ReactComponent as Scroll } from '../../assets/scrollabout.svg'
import Projects from './Projects'

export default function Work() {
  return (
    <Box>
      <Box mb={['20px']} mt={['20px']}>
        <Text18 child='WORK' />
      </Box>
      <Box>
        <Show below='sm'>
          <Text fontSize={['3xl','5xl','6xl']}>
            Over the past <span color={'primary'}>10 years</span> <br />
            We had the chance to work <br />
            with many great teams <br />
            and global brands across <br />
            various industries. <br />
          </Text>
        </Show>
        <Show above='sm'>
          <Text fontSize={['3xl','5xl','6xl']}>
            Over the past <Text as='span' color='primary'>10 years</Text> We had the <br />
            chance to work with many great <br />
            teams and global brands across <br />
            various industries. <br />
          </Text>
        </Show>        
      </Box>
      <Box m={'20px 20px'}>
        <Text fontSize={['lg','xl','3xl']}>
        Focused on Strategy, <br />
        Interactive Design, <br /> 
        Creative Coding, <br /> 
        Experience Design, Branding, <br /> 
        Visual Systems and Product Design.
        </Text>
      </Box>
      <Flex
         mt={['20px' , '40px']}>
        <Flex 
          flex={'1'}
          justifyContent={'center'}>
          <Line />
        </Flex>
        <Flex 
          m={['0 20px 0 0']}
          flex={'1'}
          justifyContent={'flex-end'}
          boxSize={['10px']}>
          <Scroll />
        </Flex>
      </Flex>
      <Projects />
    </Box>
  )
}
