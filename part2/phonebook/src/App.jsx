import { useState } from 'react'
import PersonDisplay from './components/PersonDisplay'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: '040-123456', id: 1 },
    { name: 'Ada Lovelace', phone: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', phone: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', phone: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('Daniel')
  const [newPhone, setNewPhone] = useState('xxx-xxx-xxxx')
  const [filter, setFilter] = useState('')

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
  const handleInputChangeF = (e) => {
    setFilter(e.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>filter shown with<input onChange={handleInputChangeF}/></div>
      <h2>add a new</h2>
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
      
      <PersonDisplay persons={persons} filter={filter}/>
    </div>
  )
}

export default App