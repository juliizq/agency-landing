import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import { IServiceItem } from '../../interfaces/IServiceItem'
import { ReactComponent as Arrow } from '../../assets/serviceItemArrow.svg'
import './ServiceItem.css'

export default function ServiceItem({child} : IServiceItem) {
  return (
      <Flex
        className='text'
        fontSize={['md','lg','4xl','5xl']}
        _hover={{
          color : 'primary'
        }}>
        {child}
        <Flex
          as='span'
          className='arrow'
          alignItems={'flex-end'}
          ml={'5px'}
          w={['15px','25px','35px','45px']}
          h={['auto']}
          >
          <Arrow />
        </Flex>
      </Flex>
  )
}
