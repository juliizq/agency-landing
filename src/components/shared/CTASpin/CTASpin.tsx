import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import './CTASpin.css'
import { ReactComponent as CTAText} from '../../../assets/servicesCTA.svg'
import { ReactComponent as CTAPhone} from '../../../assets/servicesCTAPhone.svg'

export default function CTASpin() {
  return (
    <Flex
      position={'relative'}
      alignItems={'center'}
      justifyContent={'space-around'}
      >
      <Box w={['100px','150px','200px','250px']}>
        <CTAText className='ctaText' />
      </Box>
      <Box position={'absolute'} w={['20px','40px','60px','80px']}>
        <CTAPhone />       
      </Box>
    </Flex>
  )
}
