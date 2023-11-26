// Importing React hooks for state and effect management.
import useData from "./useData";

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
const useGames = () => useData<Game>('/games');

// Exporting the custom hook for use in other components.
export default useGames;
