import { Avatar, Box, Button, Container, HStack, Heading, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import vg from "../../assets/images/bg.png"
import introVideo from "../../assets/videos/intro.mp4"
import { Link } from 'react-router-dom';
import { RiSecurePaymentFill } from 'react-icons/ri';
import termsAndCondition from "../../assets/docs/termsAndCondition"


const Founder = () => (
    <Stack direction={["column", "row"]} spacing={["4", "16"]} padding={"8"} >
        <VStack >
            <Avatar src={vg} boxSize={["40", "48"]} />
            <Text children="Co-Founder" opacity={0.7} />
        </VStack>
        <VStack justifyContent={"center"} alignItems={["center", "flex-start"]} >
            <Heading children="Maniesh Mehravth" size={["md", "xl"]} />
            <Text  textAlign={["center", "left"]} children={"Hi, I am a full-stack developer and a Student, My aim is to be the best of my own version at developing the software projects and with higher efficiency"} />
        </VStack>
    </Stack>

);

const VideoPlayer = () => (
    <Box >
        <video
            autoPlay
            loop
            muted
            controls
            controlsList='nodownload nofullscreen noremoteplayback'
            disablePictureInPicture
            disableRemotePlayback
            src={introVideo}
        >
        </video>
    </Box>

)
const TandC =({termsAndCondition})=>(
    <Box >
        <Heading size={"md"} children="Terms & Conditions" textAlign={["center","left"]} my='4' />
        <Box h={"sm"} p={"4"}  overflowY={"scroll"} >
            <Text textAlign={["center" ,"left"]} letterSpacing={"widest"} fontFamily={"heading"} >
                {termsAndCondition}
            </Text>
            <Heading my={"4"} size={"xs"} children="Refund Only Applicable for Cancellation within 7 days" />

        </Box>
    </Box>
)

const About = () => {
    return (
        <Container maxW={"container.lg"} padding={"16"} boxShadow={"lg"} >
            <Heading children="About Us" textAlign={["center", "left"]} />
            <Founder />
            <Stack m={"8"} direction={["column", "row"]} alignItems={"center"} >
                <Text fontFamily={"cursive"} m={"8"} textAlign={["center", "left"]} >
                    we are a video streaming platform with some premium courses available only for premium users
                </Text>
                <Link to="/subscribe" >
                    <Button variant={"ghost"} colorScheme='yellow' >Checkout Our Plans</Button>
                </Link>
            </Stack>
            <VideoPlayer />
            <TandC  termsAndCondition={termsAndCondition} />
            <HStack my={"4"} p={"4"} >
                <RiSecurePaymentFill />
                <Heading children="Payment is Secured by RazorPay" size={"xs"} fontFamily={"sans-serif"} textTransform={"uppercase"} />
            </HStack>






        </Container>

    )


}

export default About