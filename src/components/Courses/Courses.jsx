import { Button, Container, HStack, Heading, Image, Input, Stack, Text, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { getAllCourses } from '../../redux/actions/course'
import toast from "react-hot-toast"
import {loadUser} from "../../redux/actions/user"
import {addToPlaylist} from "../../redux/actions/profile"






const Course = ({ views, title, imageSrc, id, addToPlaylistHandler, creator, description, lectureCount ,loading}) => {

    return (
        <VStack className='course' alignItems={["center", "flex-start"]} >
            <Image src={imageSrc} boxSize={"60"} objectFit={"contain"} />
            <Heading
                textAlign={["center", "left"]}
                maxW="200px"
                size={"sm"}
                fontFamily={"sans-serif"}
                noOfLines={3}
                children={title}

            />
            <Text children={description} noOfLines={2} />
            <HStack>
                <Text children={"Creator"} fontWeight={"bold"} textTransform="uppercase" />
                <Text children={creator} fontFamily={"body"} textTransform="uppercase" />
                {/* <Text children={description} noOfLines={2} /> */}
            </HStack>
            <Heading textAlign={"center"} size="xs" children={` Lectures - ${lectureCount}`} textTransform="uppercase" />

            <Heading size="xs" children={`Views - ${views}`} textTransform="uppercase" />
            <Stack direction={["column", "row"]} alignItems="center" >
                <Link to={`/course/${id}`} >
                    <Button colorScheme='yellow' >Watch Now</Button>
                </Link>
                <Button colorScheme='yellow' isLoading={loading} variant={'ghost'} onClick={() => { addToPlaylistHandler(id) }} >Add to Playlist</Button>

            </Stack>
        </VStack>

    )


}
const Courses = () => {
    const [keyword, setKeyword] = useState('');
    const [category, setCategory] = useState('')

    const dispatch = useDispatch()

    const addToPlaylistHandler = async (courseId) => {
        await dispatch(addToPlaylist(courseId));
        // console.log("ADDEdd to playlist")
        dispatch(loadUser());
    }


    const categories = [
        "web development",
        "Artificial Intelligence",
        "Data Structure & Algorithms",
        "App Development",
        "Data Science",
        "Game Development"
    ];

    const {loading,  courses, error,message } = useSelector(state => state.course)
    useEffect(() => {
        dispatch(getAllCourses(category, keyword));
        if (error) {
            toast.error(error);
            dispatch({ type: "clearError" })
        }
        if (message) {
            toast.success(message);
            dispatch({ type: "clearMessage" })
        }

    }, [category, keyword, dispatch, error,message]);

    return (
        <Container minH={"95vh"} maxW="container.lg" paddingY={"8"} >
            <Heading children="All Courses" m={'8'} />
            <Input value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                placeholder='Search a Course...'
                type='text'
                focusBorderColor='yellow.500'


            />
            <HStack
                overflowX={"auto"}
                paddingY="8"
                css={{
                    "&::-webkit-scrollbar": {
                        display: 'none',
                    }
                }}
            >
                {
                    categories.map((item, index) => (
                        <Button key={index} onClick={() => setCategory(item)} minW={"60"} ><Text children={item} /></Button>
                    ))
                }
            </HStack>
            <Stack direction={["column", "row"]}
                flexWrap="wrap"
                justifyContent={["flex-start", "space-evenly"]}
                alignItems={["center", "flex-start"]}

            >
                {
                    courses.length > 0 ? (courses.map(item => (
                        <Course
                            key={item._id}
                            title={item.title}
                            description={item.description}
                            views={item.views}
                            imageSrc={item.poster.url}
                            id={item._id}
                            creator={item.createdBy}
                            lectureCount={item.numOfVideos}
                            addToPlaylistHandler={addToPlaylistHandler}
                            loading={loading}
                        />

                    ))):<Heading  mt={"4"} children="Courses Not Found :(" />
                }
            </Stack>

        </Container>
    );
};

export default Courses;