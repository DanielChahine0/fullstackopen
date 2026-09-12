const Persons = ({persons, filter, deletePerson}) => {
    const filteredPeople = persons.filter((person)=>(person.name.toLowerCase()).includes(filter.toLowerCase()))
    const personsToDisplay = filter==='' ? persons : filteredPeople;
    
    return (
        <ul>
            {personsToDisplay.map((person)=>{
                return(
                    <li key={person.name}>
                        {person.name} {person.number}
                        <button onClick={()=>deletePerson(person.id)}>delete</button>
                    </li>
                )
            })}
        </ul>
    )
}

export default Persons