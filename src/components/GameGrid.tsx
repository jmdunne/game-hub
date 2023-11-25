// Importing necessary UI components and React.
import { Text, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import useGames from "../hooks/useGames"; // Importing our custom hook, useGames.
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

// GameGrid component that will display a grid of games.
const GameGrid = () => {
  // Using the useGames hook to get games data and any error messages.
  const { games, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];

  // Rendering the GameGrid component.
  return (
    <>
      {/* Conditionally displaying an error message if there's an error */}
      {error && <Text>{error}</Text>}

      {/* Creating a list to display the games */}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={10}
        padding={10}
      >
        {isLoading && skeletons.map(skeleton => <GameCardSkeleton key={skeleton} /> )}
        {games.map((game) => (
          // Rendering each game as an item in the list.
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

// Exporting GameGrid so it can be used in other parts of the application.
export default GameGrid;
