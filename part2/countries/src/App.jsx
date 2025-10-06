import { useState, useEffect } from 'react'
import countryService from './services/countries'
import Country from './components/Country'
import DisplayCountry from './components/DisplayCountry'


const Filter = ({ value, onChange }) => {
  return (
    <div>
      find countries <input value={value} onChange={onChange} />
    </div>
  )
}

const Countries = ({ countries, filter }) => {
  const [visible, setVisible] = useState([]);
  
  const normalizedFilter = filter.trim().toLowerCase();
  const filteredCountries = normalizedFilter !== ""
    ? countries.filter(c => c.name.common.toLowerCase().includes(normalizedFilter))
    : countries;
  
  useEffect(() => {
    setVisible(filteredCountries);
  }, [filter, countries]);
  
  const handleShow = (country) => {
    setVisible([country]);
  }

  useEffect(() => {
    console.log('visible countries changed', visible);
  }, [visible]);

  // All hooks are called above - now we can do early returns
  if (filter === ""){
    return null
  }

  if (visible.length > 10) {
    return <div>Too many matches, specify another filter</div>
  }
  else if (visible.length === 1) {
    const country = visible[0]
    return (
      <div>
        <DisplayCountry country={country} />
      </div>
    )
  }
  else if (visible.length > 1){
    return (
      <div>
        {visible.map(country => (
          <Country 
            key={country.cca3}
            country={country}
            handleShow={() => handleShow(country)}
          />
        ))}
      </div>
    )
  }
  else {
    return (
      <div>There is no country with this name</div>
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