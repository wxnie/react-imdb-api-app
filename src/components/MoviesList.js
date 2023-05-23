import { useState } from "react"
import MovieBox from "./MovieBox"
import MovieModal from "./MovieModal"
import { getDetails } from "../api"

function MovieList({movies}) {
  const [movieDetails, setMovieDetails] = useState({})
  const [open, setOpen] = useState(true)

  const currentClass = !open ? 'blocked' : 'default'

  const handleClick = async (id) => {
    const result = await getDetails(id)
    setMovieDetails(result)
    setOpen(current => !current)
  }

  const changeOpen = () => {
    setOpen(current => !current)
  }

  return (
    <div className={`movie-list movie-list--${currentClass}`}>
      <MovieModal movieDetails={movieDetails} open={open} changeOpen={changeOpen}/>
      <div className="container">
        <div className="row">
          {
            movies.length > 0 ? movies.map((movie) => {
              return <MovieBox key={movie.imdbID} handleClick={handleClick} movie={movie}/>
            }) : <p className="movie-list__info">Search for Movies</p>
          }
        </div>
      </div>
    </div>
  )
}

export default MovieList