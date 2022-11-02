import { Box, Center, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { ReactComponent as Star} from '../../assets/workStar.svg'
import { ReactComponent as Scroll} from '../../assets/scrollRed.svg'
import { ReactComponent as Line } from '../../assets/hline.svg'
import Text18 from '../shared/Text18'

export default function Hero() {
  return (
    <Flex
      flexDirection={'column'}
      textAlign={'center'}
      h={'90vh'}>
       <Flex 
        justifyContent={'center'}
        p={['65px']}>
        <Box position={'absolute'}
          top={['100px','105px']}>
          <Star/>
        </Box>
          <Text18 child='CREATIVE AGENCY' />
      </Flex>
      <Center
        h={['300px']}>
         <Text
          fontSize={['3xl','5xl','6xl']}>
          We make Creative <br /> Things, Everyday
        </Text>
      </Center>
      <Center position={'relative'} mt={['40px', '140px']} w={'100%'} h={['130px']}>
        <Flex boxSize={['90px', '120px']}>
          <Scroll />
        </Flex>
      </Center>
      <Box width={'100%'} opacity={'.5'}>
        <Line />
      </Box>
     
    </Flex>
  )
}
