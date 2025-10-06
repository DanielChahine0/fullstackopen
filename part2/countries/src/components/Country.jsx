const Country = ({ country, handleShow }) => {
    return (
        <div>
            {country.name?.common ?? country.name}
            <button onClick={handleShow} className="show-button"> Show Details</button>
        </div>
    )
}

export default Country