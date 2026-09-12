import { useState, useEffect } from 'react'
import axios from 'axios'
import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('Daniel')
  const [newPhone, setNewPhone] = useState('xxx-xxx-xxxx')
  const [filter, setFilter] = useState('')

  const hook = () => {
    console.log('effect')

    const promise = axios.get('http://localhost:3001/persons')
    
    const eventHandler = (response) => {
      console.log('promise fulfilled')
      setPersons(response.data)
    }

    promise.then(eventHandler)
  }
  
  useEffect(hook, [])

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