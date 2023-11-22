import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "a1923c92e8db48b386b1b095c6d3c3df",
  },
});
