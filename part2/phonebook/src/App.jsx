import { useState } from 'react'
import PersonDisplay from './components/PersonDisplay'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: '123-456-7890' }
  ]) 
  const [newName, setNewName] = useState('Daniel')
  const [newPhone, setNewPhone] = useState('xxx-xxx-xxxx')

  const addPerson = (e) => {
    e.preventDefault()

    if (persons.some((person)=> person.name === newName)){
      alert(newName + " is already in the phonebook")
      return
    }
    const newPerson = {name: newName, phone: newPhone}
    setPersons(persons.concat(newPerson))
  }

  const handleInputChangeN = (e) => {
    setNewName(e.target.value)
  }
  const handleInputChangeP = (e) => {
    setNewPhone(e.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          <div>name: <input value={newName} onChange={handleInputChangeN}/></div>
          <div>number: <input value={newPhone} onChange={handleInputChangeP} /></div>
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