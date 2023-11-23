// Importing the necessary components from Chakra UI and the NavBar component.
import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar"; // Import NavBar from the components folder.
import GameGrid from "./components/GameGrid";

function App() {
  return (
    // Grid component to create a flexible layout with named areas.
    <Grid
      templateAreas={{
        base: '"nav" "main"', // Single column layout for small screens.
        lg: '"nav nav" "aside main"', // Two-row layout for large screens.
      }}
    >
      {/* GridItem for the navigation area */}
      <GridItem area="nav">
        <NavBar />{" "}
        {/* NavBar component included inside the navigation GridItem */}
      </GridItem>

      {/* Conditionally rendered GridItem for the aside area on large screens */}
      <Show above="lg">
        <GridItem area="aside">Aside</GridItem>
      </Show>

      {/* GridItem for the main content area with a dodgerblue background. Gamegrid component is placed in this section */}
      <GridItem area="main">
        <GameGrid />
      </GridItem>
    </Grid>
  );
}
export default App; // Exporting the App function as a default export.
