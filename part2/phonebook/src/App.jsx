import { useState } from 'react'
import PersonDisplay from './components/PersonDisplay'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('Daniel')

  const addPerson = (e) => {
    e.preventDefault()

    if (persons.some((person)=> person.name === newName)){
      alert(newName + " is already in the phonebook")
      return
    }
    const newPerson = {name: newName}
    setPersons(persons.concat(newPerson))
  }

  const handleInputChange = (e) => {
    setNewName(e.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleInputChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      
      <PersonDisplay persons={persons}/>
    </div>
  )
}

export default App