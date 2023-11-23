import { Text } from "@chakra-ui/react";
import React from "react";
import useGames from "../hooks/useGames";

const GameGrid = () => {
  const { games, error } = useGames();

  // Rendering the component.
  return (
    <>
      {/* Displaying an error message if there is one. */}
      {error && <Text>{error}</Text>}

      {/* Rendering a list of games. */}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li> // Each game is displayed as an item in the list.
        ))}
      </ul>
    </>
  );
};

// Exporting GameGrid for use in other parts of the application.
export default GameGrid;
