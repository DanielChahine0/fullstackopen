const DisplayCountry = ({ country }) => {

    console.log(country)
    

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
            
        </div>
    )
}

export default DisplayCountry