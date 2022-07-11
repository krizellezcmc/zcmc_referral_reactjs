import { VStack, Button, Box, Text } from "@chakra-ui/react";
import React from "react";
import "../css/sidebar.css";

import { BiGridAlt, BiUser, BiWrench } from "react-icons/bi";
import { TbBuildingHospital } from "react-icons/tb";

function SidebarComponent() {
  const list = [
    {
      name: "Dashboard",
      icon: <BiGridAlt />,
      path: "/dashboard",
    },
    { name: "Hospitals", icon: <TbBuildingHospital />, path: "/hospitals" },
    { name: "Users", icon: <BiUser />, path: "/users" },
    { name: "Settings", icon: <BiWrench />, path: "/settings" },
  ];

  const SidebarContent = () => (
    <VStack>
      {list.map((item) => (
        <Button
          width="100%"
          justifyContent="start"
          height="2.7em"
          leftIcon={item.icon}
          fontSize="15.5px"
          backgroundColor="white"
          py={6}
        >
          {item.name}
        </Button>
      ))}
    </VStack>
  );

  return (
    <div>
      <Box
        position="fixed"
        left={0}
        p={6}
        w="220px"
        top={0}
        h="100%"
        bg="white"
        boxShadow="sm"
      >
        <Text fontSize="xl" ms={4} mb={10}>
          Logo here
        </Text>
        <SidebarContent />
      </Box>
    </div>
  );
}

export default SidebarComponent;
