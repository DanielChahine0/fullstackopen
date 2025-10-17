import axios from 'axios'
import { useState, useEffect } from 'react'

const DisplayCountry = ({ country }) => {
    console.log('Displaying country:', country)
    const [weather, setWeather] = useState(null)

    const apiKey = import.meta.env.VITE_API_KEY

    useEffect(() => {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${country.capital[0]}&appid=${apiKey}&units=metric`;
        
        axios.get(url).then(response => {
            setWeather(response.data)
        })
    }, [])



    return (
        <div>
            <h1>{country.name.common}</h1>
            <div>
                capital {country.capital[0]}<br />
                area {country.area}
            </div>
            <h2>Languages:</h2>
            <ul>
                {Object.values(country.languages).map(lang => (
                    <li key={lang}>{lang}</li>
                ))}
            </ul>

            <img src={country.flags.png} alt={`flag of ${country.name.common}`} width="200" />

            <h2>Weather in {country.capital[0]}</h2>
            <div>Temperature {weather ? weather.main.temp : 'Loading...'}°C</div>
            <img src={weather ? `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png` : null} alt="Weather icon" />
            <div>Wind {weather ? weather.wind.speed : 'Loading...'} m/s</div>

            
        </div>
    )
}

export default DisplayCountry