import { useState } from 'react'
import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'

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
      <Filter handleinput={handleInputChangeF}/>

      <h2>add a new</h2>
      <PersonForm addPerson={addPerson} newName={newName} newPhone={newPhone} handleInputChangeN={handleInputChangeN} handleInputChangeP={handleInputChangeP}/>

      <h2>Numbers</h2>
      
      <Persons persons={persons} filter={filter}/>
    </div>
  )
}

export default App