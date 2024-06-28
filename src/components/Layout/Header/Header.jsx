import React from 'react'
import { ColorModeSwitcher } from "../../../ColorModeSwitcher"
import { RiDashboardFill, RiLogoutBoxLine, RiMenu5Fill } from "react-icons/ri"
import { Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, HStack, VStack, useDisclosure } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logout } from '../../../redux/actions/user'

const LinkButton = ({ url = "/", title = "Home",onClose }) => (
  <Link onClick={onClose} to={url} >
    <Button variant={"ghost"}  >{title}</Button>
  </Link>
)



const Header = ({isAuthenticated=false,user}) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  // const isAuthenticated = false;

  // const user = {
  //   role : "admin",
  // };

  const dispatch = useDispatch();

  const logoutHandler =() =>{
    // console.log("logged out");
    dispatch(logout());
    onClose();
  }
  return (
    <>
      <ColorModeSwitcher />

      <Button 
      onClick={onOpen} 
      zIndex={"overlay"}
      colorScheme={"yellow"} 
      width="12" 
      height="12" 
      rounded="full" 
      position={"fixed"} 
      top="6" 
      left="6">

        <RiMenu5Fill />
      </Button>
      <Drawer placement='left' onClose={onClose} isOpen={isOpen} >

        <DrawerOverlay backdropFilter={"blur(3px)"} />
        <DrawerContent>
          <DrawerHeader borderBottomWidth={"1px"}>COURSE BUNDLER</DrawerHeader>
          <DrawerBody>
            <VStack spacing={"4"} alignItems={"flex-start"} >
              <LinkButton onClose={onClose} url='/' title="Home" />
              <LinkButton onClose={onClose} url="/courses" title="Browse All Courses" />
              <LinkButton onClose={onClose} url='/request' title="Request a Course" />
              <LinkButton onClose={onClose} url='/contact' title="Contact Us" />
              <LinkButton  onClose={onClose} url='/about' title="About" />

              <HStack justifyContent={"space-evenly"} position={"absolute"} bottom={"3rem"} width={"80%"} >
                {isAuthenticated ? (<>
                  <VStack >
                    <HStack >
                      <Link to="/profile" onClick={onClose}  >
                        <Button colorScheme='yellow' variant={"ghost"}  >Profile</Button>
                      </Link>
                      <Button variant={"ghost"} onClick={logoutHandler} > <RiLogoutBoxLine />LogOut</Button>
                    </HStack>
                    {
                      user && user.role === "admin" && <Link to="/admin/dashboard" onClick={onClose}>
                        <Button colorScheme={"purple"}  variant={"ghost"} >
                        <RiDashboardFill style={{margin:"4px"}} />
                          Dashboard
                        </Button>

                      </Link>
                    }
                  </VStack>

                </>) : (<>
                  <Link to="/login" onClick={onClose} >
                    <Button colorScheme='yellow'  >Login</Button>
                  </Link>
                  <p>OR</p>
                  <Link to="/register" onClick={onClose}  >
                    <Button colorScheme='yellow'  >SignUp</Button>
                  </Link>
                </>)}




              </HStack>


            </VStack>
          </DrawerBody>
        </DrawerContent>

      </Drawer>


    </>



  )
}

export default Header

