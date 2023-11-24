// Importing React hooks for state and effect management.
import { useState, useEffect } from "react";
import apiClient from "../services/api-client"; // Importing our API client for making HTTP requests.
import { CanceledError } from "axios"; // Importing CanceledError to handle canceled API requests.

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

// Defining the expected structure of the response from the API.
interface FetchGamesResponse {
  count: number;
  results: Game[];
}

// Custom hook useGames for fetching games data.
const useGames = () => {
  // useState hook for managing games data and error state.
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  // useEffect hook to perform side effects (fetching data in this case).
  useEffect(() => {
    // Creating an AbortController to cancel the fetch request if needed.
    const controller = new AbortController();

    // Making an API request to fetch games.
    apiClient
      .get<FetchGamesResponse>("/games", { signal: controller.signal })
      .then((res) => setGames(res.data.results)) // Updating the 'games' state on successful response.
      .catch((err) => {
        // Handling errors, ignoring canceled requests.
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    // Cleanup function to cancel the request when the component unmounts or dependencies change.
    return () => controller.abort();
  }, []); // Empty dependencies array means this effect runs once after the component mounts.

  // Returning the games data and any error message.
  return { games, error };
};

// Exporting the custom hook for use in other components.
export default useGames;
