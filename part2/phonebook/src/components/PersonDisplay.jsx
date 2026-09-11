const PersonDisplay = ({persons, filter}) => {
    const filteredPeople = persons.filter((person)=>(person.name.toLowerCase()).includes(filter.toLowerCase()))
    const personsToDisplay = filter==='' ? persons : filteredPeople;
    
    return (
        <ul>
            {personsToDisplay.map((person)=>{
                return(
                    <li key={person.name}>{person.name} {person.phone}</li>
                )
            })}
        </ul>
    )
}

export default PersonDisplay