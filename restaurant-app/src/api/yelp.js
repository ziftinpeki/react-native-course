import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer ULjbohjJcc-Fd0bNfgLhB6WeEJNftnurcHKX9t1JkMUFnKmQ-XNpVM3NLBnfivycZZftYXvHJCe4fsSLUkpvyoyBSfpuZK0fttfF0dM25k0y8XQhB3-EUCAhtISHXnYx",
  },
});
