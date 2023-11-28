// Importing React hooks for state and effect management.
import { GameQuery } from "../App";
import useData from "./useData";
import { Genre } from "./useGenres";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform} []
  metacritic: number;
}

// Custom hook useGames for fetching games data.
const useGames = (gameQuery: GameQuery) => useData<Game>('/games', 
{ 
  params: { 
  genres: gameQuery.genre?.id, 
  platforms: gameQuery.platform?.id}
}, 
  [gameQuery]);

// Exporting the custom hook for use in other components.
export default useGames;
