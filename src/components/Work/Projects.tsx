import { Box, Flex, Image, Show, Text } from '@chakra-ui/react'
import React from 'react'
import { ReactComponent as WhiteArrow } from '../../assets/workArrow.svg'
import  ImagePerson  from '../../assets/workPerson.jpeg'
import Holke from '../../assets/holkeProject.png'
import necProject from '../../assets/necProject.jpeg'

export default function Projects() {
  return (
    <>
      <Flex
        flexDirection={['column' ,'column' , 'row']}
        mt={['20px' , '40px']}
        mb={['20px' , '40px']}>
        <Flex 
          ml={['10px','20px']}
          flex={'1'}
          justifyContent={'flex-start'}>
          <Text fontSize={['3xl','5xl','6xl']}>1. Nike</Text>
        </Flex>
        <Flex 
          m={['10px 0px']}
          pl={['','40px']}
          flex={'1'}
          justifyContent={'flex-end'}>
          <Text>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet exercitation veniam consequat
          </Text>
        </Flex>
      </Flex>
      <Box
        position={'relative'}
        w={'100%'}
        h={['400px','500px','800px']}>
         <Image src={ImagePerson} w={'100%'} h={'100%'} objectFit='cover' alt={'Women'}/>
         <Flex position={'absolute'} right={['10px','45px']} top={['40%','45%']} w={['120px', '200px']}>
           <WhiteArrow />
         </Flex>
      </Box>
      <Flex flexDirection={['column','row']} alignItems={'center'} pt={['20px']} gap={['5']}>
        <Flex flexBasis={['50%']} flexGrow={['1']} flexDirection={'column'}>
          <Show below='sm'>
            <Flex flexGrow={2}>
              <Text fontSize={['3xl','5xl','6xl']}>2.Holke</Text>
            </Flex>
            <Flex >
              <Image src={Holke} alt={'Holke Project'}/>
            </Flex>
          </Show>
          <Show above='sm'>
            <Flex >
              <Image src={Holke} alt={'Holke Project'} objectFit={'fill'}/>
            </Flex>
            <Flex>
              <Text py={['10px']} fontSize={['3xl','5xl','6xl']}>2.Holke</Text>
            </Flex>
          </Show>
        </Flex>
        <Flex flexBasis={['50%']} flexGrow={['1']} flexDirection={'column'}>
          <Flex py={['10px']}>
            <Text fontSize={['3xl','5xl','6xl']}>3.Nécessaire</Text>
          </Flex>
          <Flex flexGrow={4} maxH={['250px','350px','550px']}>
            <Image src={necProject} alt={'Necessaire Project'} objectFit={'cover'} />
          </Flex>
        </Flex>
      </Flex>
    </>
  )
}
