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
  Link,
  Center,
} from "@chakra-ui/react";

import { BiUser, BiLockAlt, BiRightArrowAlt } from "react-icons/bi";
import { VscEye, VscEyeClosed } from "react-icons/vsc";

import "../css/login.css";
import axios from "axios";

function Login() {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  //Save value to {data} by name
  const handleInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((values) => ({ ...values, [name]: value }));
  };

  //SEND DATA TO API
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost/referral_api/api/login.php", data)
      .then(function (response) {
        if (response.data.message === "Success") {
          toast({
            title: "You are now logged in!",
            position: "top",
            isClosable: true,
          });
        } else if (response.data.message === "No Email") {
          toast({
            position: "top",
            title: "Email does not exist.",

            status: "warning",
            duration: 2000,
            isClosable: true,
          });
        } else {
          toast({
            position: "top",
            title: "Invalid password.",

            status: "error",
            duration: 2000,
            isClosable: true,
          });
        }
        console.log(response.data);
      });
  };

  const toast = useToast();

  return (
    <div>
      <Flex alignItems="center" justify="center" mt={10} pt={10} height="100vl">
        <Flex direction="column" p="12" rounded="md" width="50vh">
          <Text fontSize="3xl" fontWeight="600">
            Sign in
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
          <Box padding="" bg="white" mt={7}>
            <form onSubmit={handleSubmit}>
              <InputGroup mb={3}>
                <InputLeftElement
                  pointerEvents="none"
                  children={<BiUser color="#058e46" />}
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
                  fontSize="14.5px"
                  name="password"
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
                h="2.5rem"
                size="sm"
                bgColor="#058e43"
                width="100%"
                color="white"
                mt="6"
                p="4"
                rounded="lg"
                _hover={{
                  bgColor: "green.600",
                }}
                fontWeight="400"
                rightIcon={<BiRightArrowAlt />}
              >
                Sign in
              </Button>
            </form>

            <Center>
              <Link color="teal.600" href="/register" fontSize="14px" mt={5}>
                Register
              </Link>
            </Center>
          </Box>
        </Flex>
      </Flex>
      \
    </div>
  );
}

export default Login;
