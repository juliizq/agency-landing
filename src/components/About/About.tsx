import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import Background from '../../assets/aboutGradientBackground.jpeg'
import People from '../../assets/aboutPersons.jpeg'

export default function About() {
  return (
    <Box 
      w={'100%'}
      h={['400px','500px','650px','750px']}
      backgroundImage={Background}
      backgroundSize={'cover'}
      mt={['80px','100px','120px']}
      p={['40px','60px','80px']}
      position={'relative'}
      >
      <Text
        fontSize={['sm','md','lg']}>
        ABOUT UAXE
      </Text>
      <Text
        mt={['10px','20px','30px']}
        fontSize={['xl','2xl','4xl','5xl']}>
        We are a <Box as='span' fontWeight={'600'}>creative studio</Box> like no other. <br />
        Located in the Ahmedabad's heart - operating <br />
        without miss any beats
      </Text>
      <Flex
        pt={['10px','20px','30px']}
        w={'100%'}
        gap={['30px','30px','40px']}
        >
      <Box
        flex={1}
        height={'auto'}
        >
        <Image
          src={People}
          alt={'People working'}
          w={['250px','350px','450px','550px']}
          h={['300px','400px','500px','650px']}
          objectFit={'cover'}
        /> 
      </Box>
      <Flex
        flex={1}
        flexDirection={'column'}
        justifyContent={'space-between'}
        >
        <Box>
          <Text
            fontSize={['xl','3xl','4xl','5xl']}
            fontWeight={'600'}
            >
            500+
          </Text>
          <Text>
            HAppy Clients
          </Text>
          <Text
            fontSize={['xl','3xl','4xl','5xl']}
            fontWeight={'600'}
            mt={['10px','20px']}
            >
            30+
          </Text>
          <Text>
            Awards
          </Text>
        </Box>
        <Box>
          <Text
            fontSize={['xl','2xl','4xl','5xl']}>
            We're the <Box as='span' fontWeight={'600'} color={'primary'}>design</Box> studio you're looking for!
          </Text>          
        </Box>
        </Flex>
      </Flex>

    </Box>
  )
}
