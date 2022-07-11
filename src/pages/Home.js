import React from "react";
// import Hero from "../components/Hero";
import {
  Button,
  HStack,
  Tabs,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Box,
  PinInput,
  PinInputField,
} from "@chakra-ui/react";

function Home() {
  return (
    <div>
      <HStack>
        <Button>Home</Button>
        <Button>About</Button>
        <Button>Services</Button>
        <Button>Contact Us</Button>
      </HStack>

      <Box m={{ base: "50px" }}>
        <Tabs>
          <TabList>
            <Tab>Tab 1</Tab>
            <Tab>Tab 2</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <HStack>
                <PinInput>
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                </PinInput>
              </HStack>
            </TabPanel>
            <TabPanel>Tab 2</TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </div>
  );
}

export default Home;
