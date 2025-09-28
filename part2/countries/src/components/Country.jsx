const Country = ({ country }) => {
    // console.log(country)
    return (
        <div>
            {country.name?.common ?? country.name}
        </div>
    )
}

export default Country