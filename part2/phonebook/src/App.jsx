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
      alert(newName + " is already in the phonebook")
      return
    }
    const newPerson = {name: newName, number: newNumber}
    personService.addPerson(newPerson).then( response =>
      setPersons(persons.concat(response))
    )
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