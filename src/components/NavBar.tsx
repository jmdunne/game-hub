// Importing necessary components from Chakra UI, a library that helps style our application.
import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp"; // This line brings in the logo image for our NavBar.
import ColorModeSwitch from "./ColorModeSwitch"; // Importing the ColorModeSwitch component, which we'll use to switch between light and dark modes.

// Defining the NavBar component.
const NavBar = () => {
  return (
    // HStack is a horizontal stack that lines up items side by side.
    <HStack justifyContent="space-between" padding="10px">
      {/* Here, we're displaying our logo using the Image component from Chakra UI. */}
      <Image src={logo} boxSize="60px" />

      {/* Including the ColorModeSwitch component which lets users switch between light and dark mode. */}
      <ColorModeSwitch />
    </HStack>
  );
};

// Making the NavBar component available for use in other parts of our application.
export default NavBar;
