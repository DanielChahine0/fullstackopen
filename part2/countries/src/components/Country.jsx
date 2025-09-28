const Country = ({ country }) => {
    console.log(country)
    return (
        <li>
            {country.name}
        </li>
    )
}

export default Country