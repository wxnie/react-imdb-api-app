import MovieBox from "./MovieBox"

function MovieList({movies}) {
  return (
    <div className="movie-list">
      <div className="container">
        <div className="row">
          {
            movies.length > 0 ? movies.map((movie) => {
              return <MovieBox key={movie.imdbID} movie={movie}/>
            }) : <p className="movie-list__info">Search for Movies</p>
          }
        </div>
      </div>
    </div>
  )
}

export default MovieList