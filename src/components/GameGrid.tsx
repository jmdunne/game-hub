// Importing necessary UI components and React.
import { Text, SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames"; // Importing our custom hook, useGames.
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

// GameGrid component that will display a grid of games.
const GameGrid = () => {
  // Using the useGames hook to get games data and any error messages.
  const { data, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];

  // Rendering the GameGrid component.
  return (
    <>
      {/* Conditionally displaying an error message if there's an error */}
      {error && <Text>{error}</Text>}

      {/* Creating a list to display the games */}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={3}
        padding="10px"
      >
        {isLoading && skeletons.map(skeleton => <GameCardContainer> <GameCardSkeleton key={skeleton} /> </GameCardContainer> )}
        {data && data.map((game) => (
          // Rendering each game as an item in the list.
          <GameCardContainer>
            <GameCard key={game.id} game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

// Exporting GameGrid so it can be used in other parts of the application.
export default GameGrid;
