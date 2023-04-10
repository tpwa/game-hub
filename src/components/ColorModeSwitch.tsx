import { FormControl, FormLabel, HStack, Switch, Text } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack>
      <Switch
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
        colorScheme="green"
      />
      <Text>Dark Mode</Text>
    </HStack>
  );
};

export default ColorModeSwitch;
