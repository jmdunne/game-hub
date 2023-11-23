// Importing axios, a popular library for making HTTP requests.
import axios from "axios";

// Creating an instance of axios with default settings for making requests.
export default axios.create({
  baseURL: "https://api.rawg.io/api", // Base URL for all requests. It's like the starting point for API endpoints.
  params: {
    key: "a1923c92e8db48b386b1b095c6d3c3df", // Adding an API key as a parameter to authenticate our requests.
  },
});
