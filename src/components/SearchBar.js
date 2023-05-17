import { useState } from "react"

function SearchBar({handleSearch}) {
  const [term, setTerm] = useState('')

  const handleChange = (event) => {
    setTerm(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    handleSearch(term)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input value={term} onChange={handleChange}/>
    </form>
  )
}

export default SearchBar