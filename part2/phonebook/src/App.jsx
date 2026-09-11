import { useState } from 'react'
import PersonDisplay from './components/PersonDisplay'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('Daniel..')

  const addPerson = (event) => {
    console.log('HI?')
    event.preventDefault()

    const newPerson = {
      name: newName
    }
    console.log(newPerson)
    setPersons(persons.concat(newPerson))
  }

  const handleInputChange = (e) => {
    setNewName(e.target.value)
    console.log(e.target.value)
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