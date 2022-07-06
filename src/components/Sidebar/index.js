import { VStack, Button, Box } from "@chakra-ui/react";
import React from "react";

import { BiGridAlt, BiUser, BiWrench } from "react-icons/bi";
import { TbBuildingHospital } from "react-icons/tb";

function SidebarComponent() {
  const list = [
    { name: "Dashboard", icon: <BiGridAlt />, path: "/dashboard" },
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
          height="3em"
          leftIcon={item.icon}
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
        p={5}
        w="300px"
        top={0}
        h="100%"
        bg="white"
        boxShadow="md"
      >
        <SidebarContent />
      </Box>
    </div>
  );
}

export default SidebarComponent;
