// Importing components from Chakra UI to build our color mode switch.
import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

// Defining the ColorModeSwitch component.
const ColorModeSwitch = () => {
  // useColorMode is a custom hook from Chakra UI that provides color mode information and functions.
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    // HStack places items horizontally next to each other.
    <HStack>
      {/* Switch component acts as a toggle between light and dark mode. */}
      <Switch
        colorScheme="green" // The color scheme for the switch is green.
        isChecked={colorMode === "dark"} // The switch is 'checked' if the current mode is dark.
        onChange={toggleColorMode} // Changes the color mode when toggled.
      />
      {/* Text component displaying a label for the switch. */}
      <Text>Dark Mode</Text>
    </HStack>
  );
};

// Exporting ColorModeSwitch so it can be used in other parts of the application.
export default ColorModeSwitch;
