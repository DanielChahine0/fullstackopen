import { useState, useEffect } from 'react'
import countryService from './services/countries'

const Filter = ({ value, onChange }) => {
  return (
    <div>
      find countries <input value={value} onChange={onChange} />
    </div>
  )
}

const App = () => {
  const [filter, setFilter] = useState('')
  const [countries, setCountries] = useState([])

  useEffect(() => {
    const searchedCountries = countryService.getAll()
    setCountries(searchedCountries);
  }, [filter])

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }
  
  // if (!filter){
  //   return null
  // }

  return (
    <div>
      <Filter value={filter} onChange={handleFilterChange} />
      {console.log(countries)}
    </div>
  )
}

export default App