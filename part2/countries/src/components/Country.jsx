const Country = ({ country }) => {
    // country.name is an object like { common, official, nativeName }
    // render the common name (string) so React doesn't receive an object as a child
    // keep the log for debugging
    console.log(country)
    return (
        <div>
            {country.name?.common ?? country.name}
        </div>
    )
}

export default Country