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

const getDetails = async (id) => {
  const response = await axios.get('https://www.omdbapi.com/', {
    params: {
      i: id,
      apikey: "9f62878a",
      plot: 'full'
    }
  })

  return response.data
}

export {searchMovies, getDetails}