import React from "react";
import { Box, Button, Flex } from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

function Main() {
  return (
    <div>
      <Box>
        <Header />
      </Box>

      <Sidebar />

      <Flex
        position="inherit"
        left={205}
        top={50}
        p={10}
        w="100%"
        h="1000px"
        background="gray.100"
      ></Flex>
    </div>
  );
}

export default Main;
