const PersonDisplay = ({persons}) => {
    return (
        <ul>
            {persons.map((person)=>{
                return(
                    <li key={person.name}>{person.name}</li>
                )
            })}
        </ul>
    )
}

export default PersonDisplay