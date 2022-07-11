import React from "react";
import {
  Box,
  Center,
  HStack,
  PinInput,
  PinInputField,
  Heading,
  Text,
  Divider,
  Image,
  Button,
  Link,
  VStack,
} from "@chakra-ui/react";
import "../App.css";

import verify_img from "../images/verify.png";

function Verify() {
  return (
    <div
      style={{
        background: "#f3f6f4",
        height: "960px",
        paddingTop: "80px",
      }}
    >
      <Center pt={10}>
        <Box
          px={10}
          py={14}
          width={{ base: "100%", sm: "70%", md: "50%", lg: "30%" }}
          boxShadow="sm"
          borderRadius
          background="white"
          textAlign="center"
          rounded="lg"
        >
          <Box align="center">
            <Image
              src={verify_img}
              w={{ base: "50%", sm: "70%", md: "50%", lg: "60%" }}
              mb={2}
            ></Image>
          </Box>
          <Text fontSize={{ base: "xl", sm: "lg", md: "xl", lg: "2xl" }}>
            VERIFY YOUR ACCOUNT
          </Text>
          <Box px="30">
            <Center>
              <Divider my={2} bgColor="#058e46" p="1px" w="50%" />
            </Center>
          </Box>

          <Text mt="8" color="gray.500">
            A verification code has been sent to
          </Text>
          <Text mt="1" class="bold">
            sampleuser@gmail.com
          </Text>
          <HStack justifyContent="center" mt="10">
            <PinInput focusBorderColor="#058e46">
              <PinInputField />
              <PinInputField on />
              <PinInputField />
              <PinInputField />
            </PinInput>
          </HStack>

          <VStack>
            <Button mt={10} mb={5} background="#058e46" color="white" w="35%">
              Verify
            </Button>

            <Link color="teal.600" href="/" fontSize="12px">
              Back to homepage
            </Link>
          </VStack>
        </Box>
      </Center>
    </div>
  );
}

export default Verify;
