import React, { useState } from "react";
import {
  Text,
  Flex,
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Button,
  useToast,
  Center,
  Link,
} from "@chakra-ui/react";

import axios from "axios";
import { BiUser, BiLockAlt, BiRightArrowAlt } from "react-icons/bi";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import { MdAlternateEmail } from "react-icons/md";
import "../css/login.css";

function Signup() {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const toast = useToast();

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  //Save value to {data} by name
  const handleInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost/referral_api/api/registration.php", data)
      .then(function (response) {
        if (response.data.status === 1) {
          toast({
            title: response.data.message,
            status: "success",
            position: "top",
            duration: 2000,
            isClosable: true,
          });
        } else {
          toast({
            title: response.data.message,
            position: "top",
            status: "warning",
            duration: 2000,
            isClosable: true,
          });
        }
      });
  };

  return (
    <div
      style={{ background: "#f3f6f4", height: "960px", paddingTop: "120px" }}
    >
      <Center>
        <Flex
          alignItems="center"
          justify="center"
          mt={10}
          height="60vh"
          boxShadow="md"
          background="white"
          rounded="lg"
        >
          <Flex direction="column" p="14" width="55vh">
            <Text fontSize="3xl" fontWeight="600">
              Registration
            </Text>
            <Text
              fontSize="sm"
              fontWeight="300"
              mt={2}
              mb={5}
              textTransform="uppercase"
            >
              Zamboanga City Medical Center
            </Text>
            <Box padding="" bg="white" mt={5}>
              <form onSubmit={handleSubmit}>
                <InputGroup mb={3}>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<BiUser color="#058e46" />}
                  />
                  <Input
                    type="text"
                    placeholder="First name"
                    focusBorderColor="#058e46"
                    fontSize="14.5px"
                    name="firstName"
                    onChange={handleInput}
                    required
                  />
                </InputGroup>

                <InputGroup mb={3}>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<BiUser color="#058e46" />}
                  />
                  <Input
                    type="text"
                    placeholder="Last name"
                    focusBorderColor="#058e46"
                    fontSize="14.5px"
                    name="lastName"
                    onChange={handleInput}
                    required
                  />
                </InputGroup>

                <InputGroup mb={3}>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<MdAlternateEmail color="#058e46" />}
                  />
                  <Input
                    type="email"
                    placeholder="Email"
                    focusBorderColor="#058e46"
                    fontSize="14.5px"
                    name="email"
                    onChange={handleInput}
                    required
                  />
                </InputGroup>

                <InputGroup size="md">
                  <InputLeftElement
                    pointerEvents="none"
                    children={<BiLockAlt color="#058e46" />}
                  />
                  <Input
                    pr="4.5rem"
                    type={show ? "text" : "password"}
                    placeholder="Password"
                    focusBorderColor="#058e46"
                    color="gray.600"
                    name="password"
                    fontSize="14.5px"
                    onChange={handleInput}
                    required
                  />
                  <InputRightElement>
                    <Button
                      h="1.75rem"
                      size="sm"
                      bgColor="white"
                      onClick={handleClick}
                      p="0"
                      _hover={{ bgColor: "white" }}
                    >
                      {show ? (
                        <VscEye color="gray.400" />
                      ) : (
                        <VscEyeClosed color="gray.400" />
                      )}
                    </Button>
                  </InputRightElement>
                </InputGroup>

                <Button
                  type="submit"
                  h="2.7rem"
                  size="sm"
                  bgColor="#058e43"
                  width="100%"
                  color="white"
                  mt="8"
                  p="4"
                  rounded="lg"
                  _hover={{
                    bgColor: "green.600",
                  }}
                  fontWeight="400"
                  rightIcon={<BiRightArrowAlt />}
                >
                  Register
                </Button>
              </form>

              <Center>
                <Link color="teal.600" href="/" fontSize="14px" mt={5}>
                  Sign in here
                </Link>
              </Center>
            </Box>
          </Flex>
        </Flex>
      </Center>
    </div>
  );
}

export default Signup;
