import { useState } from "react"
import searchMovies from "./api"
import SearchBar from "./components/SearchBar"
import MovieList from "./components/MoviesList"


function App() {
  const [movies, setMovies] = useState([])

  const handleSearch = async (term) => {
    const result = await searchMovies(term)
    setMovies(result)
  }

  return (
    <div>
      <SearchBar handleSearch={handleSearch} />
      <MovieList movies={movies} />
    </div>
  )
}

export default App