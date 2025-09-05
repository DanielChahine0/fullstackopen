import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' , id: 1}
  ]) 
  const [newName, setNewName] = useState('')

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const addName = (event) => {
    event.preventDefault()
    console.log(event)
    if (persons.map(p => p.name).indexOf(newName) !== -1) {
      alert(`${newName} is already added to phonebook`)
      
      return
    }

    const newPerson = {
      name: newName,
      id: persons.length + 1
    }
    setPersons(persons.concat(newPerson))
    setNewName('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      
      <h2>Numbers</h2>

      <ul>
        {persons.map(person => 
          <li key={person.id}>{person.name}</li>
        )}
      </ul>
    </div>
  )
}

export default App