import { useState } from "react"

function SearchBar({handleSearch}) {
  const [term, setTerm] = useState('')
  const [error, setError] = useState('')

  const handleChange = (event) => {
    setTerm(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if(term) {
      setError('')
      handleSearch(term)
    } else {
      setError('Enter movie title')
    }
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <form className="search-bar d-flex flex-column align-items-center" onSubmit={handleSubmit}>
            <input className="search-bar__input" value={term} onChange={handleChange} placeholder="Movie title"/>
            <p className="search-bar__error">{error}</p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SearchBar