import { Box, HStack, Heading, Stack, VStack } from '@chakra-ui/react'
import React from 'react'
import { TiSocialLinkedinCircular, TiSocialInstagramCircular } from "react-icons/ti"
import { DiGithub } from "react-icons/di"

const Footer = () => {
  return (
    <Box padding={"4"} bg={"blackAlpha.900"} minH={"10vh"}>
    <Stack direction={["column","row"]} >
    <VStack alignItems={["center","flex-start"]} width={"full"} >
    <Heading  children="All Right Reserved " color={"white"}  />
    <Heading  children="@Maniesh Mehravth" color={"yellow.400"} fontFamily={"body"} size={"sm"}  />
 
    </VStack>
    <HStack  spacing={["2","10"]} justifyContent={"center"} color={"white"} fontSize={"50"}>
    <a href='https://www.linked.in' target= {'_blank'} rel='noreferrer'>
    <TiSocialLinkedinCircular />
    </a>
    <a href='https://instagram.com/maniesh._._' target= {'_blank'} rel='noreferrer'>
    <TiSocialInstagramCircular />
    </a>
    <a href='https://github.com/git-maniesh' target= {'_blank'} rel='noreferrer'>
    <DiGithub />
    </a>


    </HStack>
        
    </Stack>

    </Box>
  )
}

export default Footer