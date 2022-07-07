import React from "react";
import {
  Text,
  Flex,
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Button,
} from "@chakra-ui/react";

import { BiUser, BiLockAlt, BiRightArrowAlt } from "react-icons/bi";
import { VscEye, VscEyeClosed } from "react-icons/vsc";

import "../css/login.css";

function Login() {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <div>
      <Flex alignItems="center" justify="center" height="100vl">
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
          </Box>
        </Flex>
      </Flex>
      \
    </div>
  );
}

export default Login;
