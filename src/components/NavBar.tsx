// Importing necessary components from Chakra UI, a library that helps style our application.
import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp"; // This line brings in the logo image for our NavBar.
import ColorModeSwitch from "./ColorModeSwitch"; // Importing the ColorModeSwitch component, which we'll use to switch between light and dark modes.
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px" />
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};


export default NavBar;
