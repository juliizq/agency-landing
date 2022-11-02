import { Box, Flex, Grid, GridItem } from '@chakra-ui/react'
import React from 'react'
import BrandIcon from './BrandIcon'
import BrandItem from './BrandItem'

export default function Brands() {
  return (
    <Flex flexDirection={'column'} my={['40px','80px']}>
      <Flex
        flexWrap={'wrap'}
        w={'100%'}
        alignItems={'center'}>
        <BrandItem child='CocaCola'/>
        <BrandIcon />
        <BrandItem child='Apple'/>
        <BrandIcon />
        <BrandItem child='Alphabate'/>
        <BrandIcon />
        <BrandItem child='Byjus'/>
      </Flex>
      <Flex
        w={'100%'}
        flexWrap={'wrap'}
        alignItems={'center'}>
        <BrandIcon />
        <BrandItem child='MasterCard'/>
        <BrandIcon />
        <BrandItem child='Louis Vuitton'/>
        <BrandIcon />
        <BrandItem child="L'Oréal"/>
      </Flex>
    </Flex>
  )
}
