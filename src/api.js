import axios from "axios";

const searchMovies = async (term) => {
  const response = await axios.get('https://www.omdbapi.com/', {
    params: {
      s: term,
      apikey: "9f62878a"
    }
  })

  return response.data.Search
}

export default searchMovies