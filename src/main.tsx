// We are importing essential building blocks from React and ReactDOM libraries to create and display our React application.
import React from "react";
import ReactDOM from "react-dom/client";

// Here, we're bringing in ChakraProvider and ColorModeScript from the Chakra UI library.
// ChakraProvider allows us to use Chakra UI's design system in our app.
// ColorModeScript is a special tool that remembers our user's color mode preference (like dark or light mode).
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";

// App is the main component of our application where we will put most of our UI.
import App from "./App";

// The theme file contains our custom design settings, including the dark mode we set earlier.
import theme from "./theme";

// index.css is a file where we can write additional custom styles for our app.
import "./index.css";

// This line finds the root element in our HTML and attaches our React app to it.
// Think of it as the anchor point where our entire application will display.
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    {/* ChakraProvider wraps around our entire app to apply the Chakra UI design system, including our custom dark theme. */}
    <ChakraProvider theme={theme}>
      {/* ColorModeScript ensures that our app starts with the right color mode (dark or light) based on user preference or our default setting. */}
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      {/* Here we are placing our main App component to be rendered on the screen. */}
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
