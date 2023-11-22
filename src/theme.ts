// This file is used to customize the appearance of our application.

// We start by importing tools from the Chakra UI library. Chakra UI helps in styling our app.
import { extendTheme, ThemeConfig } from "@chakra-ui/react";

// Here, we define our theme settings. A 'theme' is like a set of design rules for our app.
const config: ThemeConfig = {
  initialColorMode: "dark", // We set the initial color mode of our app to 'dark'. This means the app will have a dark background with light text by default.
};

// The 'extendTheme' function takes our settings (like the dark mode setting) and applies them to the default theme provided by Chakra UI.
// Think of it as customizing the default design.
const theme = extendTheme({ config });

// Finally, we make our customized theme available to be used in other parts of our app.
export default theme;
