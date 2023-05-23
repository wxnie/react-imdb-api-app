import close from '../img/close.svg'

function MovieModal({movieDetails, open, changeOpen}) {
  const currentClass = !open ? 'active' : 'default'

  return (
    <div className={`movie-modal movie-modal--${currentClass}`}>
      <div className="container">
        <div className="row">
          <div className="col-12 d-flex align-items-center justify-content-center">
            <div className="movie-modal__box">
              <div className="movie-modal__close-wrap d-flex justify-content-end">
                <img className="movie-modal__close" src={close} onClick={changeOpen} alt="close"/>
              </div>
              <div className="movie-modal__box-content d-md-flex">
                <div className="movie-modal__box-left d-flex flex-column align-items-center d-md-block">
                  <div className="movie-modal__img-wrap">
                    <img className="movie-modal__img" src={movieDetails.Poster} alt={movieDetails.Title}/>
                  </div>
                  <p className="movie-modal__info d-md-block d-none"><span>Released:</span> {movieDetails.Released}</p>
                  <p className="movie-modal__info d-md-block d-none"><span>imdbRating:</span> {movieDetails.imdbRating}</p>
                </div>
                <div className="movie-modal__box-right">
                  <h3 className="movie-modal__title">{movieDetails.Title}</h3>
                  <p className="movie-modal__info"><span>Cast:</span> {movieDetails.Actors}</p>
                  <p className="movie-modal__desc">{movieDetails.Plot}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieModal