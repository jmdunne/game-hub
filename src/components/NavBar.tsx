// Importing Chakra UI components for building the NavBar.
import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp"; // Importing the logo image.
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    // HStack (Horizontal Stack) component to align items horizontally.
    <HStack justifyContent="space-between" padding="10px">
      {/* Image component displaying the logo, with a specified box size */}
      <Image src={logo} boxSize="60px" />

      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar; // Exporting the NavBar as a default export for use in other files.
