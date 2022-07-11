import React from "react";
import {
  Flex,
  Box,
  HStack,
  Spacer,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  VStack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { BiChevronDown } from "react-icons/bi";

function Header() {
  return (
    <div>
      <Flex
        boxShadow="sm"
        color="white"
        alignItems="center"
        backgroundColor="white"
        w="100%"
        position="fixed"
        top={0}
        p={3}
      >
        <Spacer />
        <Menu>
          <MenuButton
            py={2}
            transition="all 0.3s"
            _focus={{ boxShadow: "none" }}
          >
            <HStack>
              <VStack
                display={{ base: "none", md: "flex" }}
                alignItems="flex-start"
                spacing="1px"
                ml="2"
              >
                <Text fontSize="md" color="gray.600">
                  Admin
                </Text>
              </VStack>
              <Box display={{ base: "none", md: "flex" }}>
                <BiChevronDown color="black" />
              </Box>
            </HStack>
          </MenuButton>
          <MenuList
            bg={useColorModeValue("white", "gray.900")}
            borderColor={useColorModeValue("gray.200", "gray.700")}
            color="gray.700"
          >
            <MenuItem>Profile</MenuItem>
            <MenuItem>Settings</MenuItem>
            <MenuItem>Billing</MenuItem>
            <MenuDivider />
            <MenuItem>Sign out</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </div>
  );
}

export default Header;
