import MovieBox from "./MovieBox"

function MovieList({movies}) {
  return (
    <div>
      {movies.map((movie) => {
        return <MovieBox key={movie.imdbID} movie={movie}/>
      })}
    </div>
  )
}

export default MovieList