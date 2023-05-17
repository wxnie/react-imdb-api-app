function MovieBox({movie}) {
  return (
    <div>
      <img src={movie.Poster} />
      <div>
        <h3>{movie.Title}</h3>
        <p>{movie.Year}</p>
      </div>
    </div>
  )
}

export default MovieBox