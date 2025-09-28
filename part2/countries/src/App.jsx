import { useState, useEffect } from 'react'
import countryService from './services/countries'

const Filter = ({ value, onChange }) => {
  return (
    <div>
      find countries <input value={value} onChange={onChange} />
    </div>
  )
}

const Countries = ({ countries, filter }) => {
  const normalizedFilter = filter.trim().toLowerCase()
  const visible = normalizedFilter
    ? countries.filter(c => c.name.common.toLowerCase().includes(normalizedFilter))
    : countries

  if (visible.length > 10) {
    return <p>Too many matches, specify another filter</p>
  } else if (visible.length === 1) {
    const country = visible[0]
    return (
      <div>
        <h2>{country.name.common}</h2>
      </div>
    )
  }
  else {
    return (
      <div>
        <h2>between 2 and 10</h2>
      </div>
    )
  }
}

const App = () => {
  const [filter, setFilter] = useState('')
  const [countries, setCountries] = useState([])

  useEffect(() => {
    // fetch countries once on mount
    countryService.getAll()
      .then(data => {
        setCountries(data)
      })
      .catch(err => {
        console.error('failed to fetch countries', err)
      })
  }, [])

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }
  
  // if (!filter){
  //   return null
  // }

  return (
    <div>
      <Filter value={filter} onChange={handleFilterChange} />
      {countries.length > 0 && <Countries countries={countries} filter={filter} />}
    </div>
  )
}

export default App