import { Box, Flex, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { ReactComponent as Title} from '../../assets/servicesTitle.svg'
import ServiceItem from './ServiceItem'
import CTASpin from '../shared/CTASpin/CTASpin'

export default function Services() {
  return (
    <Box
      mt={['80px','100px','120px']}>
      <Box position={'relative'} maxW={'100vw'}>
        <Box>
          <Title width={'100%'} height={'100%'} />
        </Box>
        <Text fontSize={['xs','sm','md','xl']} position={'absolute'} left={['20px','30px','40px','50px']} bottom={['-10px']}>
          SERVICES
        </Text>
      </Box>
      <Flex 
        position={'relative'}
        flexDirection={'row'}>
        <VStack 
          flex={'4'}
          alignItems={'flex-start'}
          ml={['10px']}
          mt={['20px','40px','60px']}
          gap={['0','2']}
          >
          <ServiceItem child='UX Consultant'/>
          <ServiceItem child='Product Interface Design'/>
          <ServiceItem child='Branding'/>
          <ServiceItem child='Marketing Design'/>
          <ServiceItem child='Mockups Design'/>
        </VStack>
        <Flex
          flex={'2'}
          >
          <CTASpin />
        </Flex> 
      </Flex>
    </Box>
  )
}
