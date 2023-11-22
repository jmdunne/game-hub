// Importing Chakra UI components for building the NavBar.
import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp"; // Importing the logo image.

const NavBar = () => {
  return (
    // HStack (Horizontal Stack) component to align items horizontally.
    <HStack>
      {/* Image component displaying the logo, with a specified box size */}
      <Image src={logo} boxSize="60px" />

      {/* Text component to display the label 'NavBar' */}
      <Text>NavBar</Text>
    </HStack>
  );
};

export default NavBar; // Exporting the NavBar as a default export for use in other files.
