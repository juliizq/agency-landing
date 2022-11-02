import React from 'react'
import { Box, Flex, Text } from '@chakra-ui/react'
import { ReactComponent as Star} from '../../assets/contactStar.svg'
import { ReactComponent as Arrow} from '../../assets/contactArrowRed.svg'
import CTASpin from '../shared/CTASpin/CTASpin'
import './Contact.css'

export default function Contact() {
  return (
    <Flex
      justifyContent={'center'}
      alignItems={'center'}
      h={['600px','800px']}
      flexDirection={'column'}
      mt={['120px','200px','350px']}
      textAlign={'center'}
      >
      <Flex
        flexDirection={'column'}
        alignItems={'center'}
        >
        <Star />
        <Text>
        CONTACT US
        </Text>        
      </Flex>
      <Text
        mt={['30px','40px','50px']}
        className='gradient'
        fontSize={['xl','4xl','5xl','6xl']}
        fontWeight={'600'}
        >
        Come on baby light my fire!
      </Text>   
      <Box
        my={['20px','30px', '40px']}>
        <CTASpin />
      </Box>
      <Flex
        alignItems={'center'}
        fontWeight={'600'}
        fontSize={['xl','2xl','3xl','4xl']}
        mt={['10px','20px', '30px']}        
        _hover={{
          color : 'primary',
          textDecoration: 'underline'
        }}>
        hello@uaxelabs.com
        <Flex
          alignItems={'flex-end'}
          ml={'5px'}
          w={['15px','25px','35px','45px']}
          h={['auto']}
          >
          <Arrow />
        </Flex>
      </Flex>
    </Flex>
  )
}
