// Importing React hooks for state and effect management.
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
const useGames = (selectedGenre: Genre | null, selectedPlatform: Platform | null) => useData<Game>('/games', { params: { genres: selectedGenre?.id, platforms: selectedPlatform?.id}}, [selectedGenre?.id, selectedPlatform?.id]);

// Exporting the custom hook for use in other components.
export default useGames;
