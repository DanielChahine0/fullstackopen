import { useState, useEffect } from 'react'
import axios from 'axios'
import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('Daniel')
  const [newNumber, setNewNumber] = useState('xxx-xxx-xxxx')
  const [filter, setFilter] = useState('')

  const hook = () => {
    personService.getAll().then((response) =>
      setPersons(response)
    )
  }
  useEffect(hook, [])

  const addPerson = (e) => {
    e.preventDefault()

    if (persons.some((person)=> person.name === newName)){
      if (confirm(`${newName} is already added to the phone book, want to update his number?`)){
        const newPerson = persons.find(p=>p.name === newName)
        const newObject = {...newPerson, number: newNumber}
        updatePerson(newObject.id, newObject)
      }
      return
    }
    const newPerson = {name: newName, number: newNumber}
    personService.addPerson(newPerson).then(response =>
      setPersons(persons.concat(response))
    )
  }

  const updatePerson = (id, newObject) => {
    const newPersons = persons.map(p => (p.id===id ? newObject : p))
    personService.updatePerson(id, newObject).then(response =>{
      setPersons(newPersons)
    })
  }

  const deletePerson = (id) => {
    if (confirm("Are you sure?")){
      const personsNotDeleted = persons.filter(p=>p.id !== id)
      console.log(personsNotDeleted)
      personService.deletePerson(id).then(response =>{
        setPersons(personsNotDeleted)
      })
    }
  }

  const handleInputChangeN = (e) => {
    setNewName(e.target.value)
  }
  const handleInputChangeP = (e) => {
    setNewNumber(e.target.value)
  }
  const handleInputChangeF = (e) => {
    setFilter(e.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleinput={handleInputChangeF}/>

      <h2>add a new</h2>
      <PersonForm addPerson={addPerson} newName={newName} newNumber={newNumber} handleInputChangeN={handleInputChangeN} handleInputChangeP={handleInputChangeP}/>

      <h2>Numbers</h2>
      
      <Persons persons={persons} filter={filter} deletePerson={deletePerson}/>
    </div>
  )
}

export default App