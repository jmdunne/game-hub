// Importing the necessary components from Chakra UI and the NavBar component.
import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar"; // Import NavBar from the components folder.
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";

function App() {
const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

  return (
    <Grid
      templateAreas={{
        base: '"nav" "main"', // Single column layout for small screens.
        lg: '"nav nav" "aside main"', // Two-row layout for large screens.
      }}
      templateColumns={{
        base: "1fr",
        lg: '200px 1fr' 
      }}
    >
      {/* GridItem for the navigation area */}
      <GridItem area="nav">
        <NavBar />{" "}
        {/* NavBar component included inside the navigation GridItem */}
      </GridItem>

      {/* Conditionally rendered GridItem for the aside area on large screens */}
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList onSelectGenre={(genre) => setSelectedGenre(genre)}/>
        </GridItem>
      </Show>

      {/* GridItem for the main content area with a dodgerblue background. Gamegrid component is placed in this section */}
      <GridItem area="main">
        <GameGrid selectedGenre={selectedGenre} />
      </GridItem>
    </Grid>
  );
}
export default App; // Exporting the App function as a default export.
