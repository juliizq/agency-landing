import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import { ReactComponent as Star} from '../../assets/brandsStar.svg'

export default function BrandIcon() {
  return (
    <Flex
      width={'100%'}
      justifyContent={'space-around'}
      flex={2}>
      <Box
        width={['20px' , '30px' , '40px']}
        height={['20px' , '30px' , '40px']}>
        <Star width={'100%'} height={'100%'} />
      </Box>
    </Flex>
  )
}
