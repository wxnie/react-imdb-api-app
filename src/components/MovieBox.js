function MovieBox({movie}) {
  return (
    <div className="col-sm-6 col-md-4 col-xl-3 mb-4 d-flex justify-content-center">
      <div className="movie-box d-flex flex-column justify-content-between">
        <img className="movie-box__img" src={movie.Poster} alt={movie.Title} />
        <div className="movie-box__title-wrap">
          <h3 className="movie-box__title">{movie.Title}</h3>
        </div>
      </div>
    </div>
  )
}

export default MovieBox