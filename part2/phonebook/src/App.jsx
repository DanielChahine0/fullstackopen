import { useState, useEffect } from 'react'
import personService from './services/persons'

const Filter = ({ filteredWord, handleFilterChange }) => {
  return (
    <div>
      filter shown with: <input value={filteredWord} onChange={handleFilterChange}/>
    </div>
  )
}

const PersonForm = ({addName, newName, newNumber, handleNameChange, handleNumberChange}) => { 
  return (
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
  )
}

const Persons = ({ persons, filteredWord }) => {
  return (
    <ul>
      {persons.map(person => {
        if (person.name.includes(filteredWord)){
          return <li key={person.id}>{person.name} {person.number}</li>
        }
      })}
    </ul>
  )
}

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filteredWord, setFilteredWord] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setFilteredWord(event.target.value)
  }

  // Load all the persons
  useEffect(() => {
    personService.getAll().then(
      initialPersons => {
        setPersons(initialPersons)
      }
    )
  }, [])

  const addName = (event) => {
    // Prevent the Default Behaviour
    event.preventDefault()
    
    // Check if the person already exist
    if (persons.map(p => p.name).indexOf(newName) !== -1) {
      alert(`${newName} is already added to phonebook`)
      return
    }

    // If not, then create it
    const newPerson = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    }

    // Add that person to the server
    personService.create(newPerson).then(
      returnedPersons => {
        setPersons(persons.concat(returnedPersons))
        setNewName('')
        setNewNumber('')
      }
    )
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter 
        filteredWord={filteredWord} 
        handleFilterChange={handleFilterChange}
      />

      <h3>Add a New</h3>
      <PersonForm 
        addName={addName} 
        newName={newName} 
        newNumber={newNumber} 
        handleNameChange={handleNameChange} 
        handleNumberChange={handleNumberChange}
      />

      <h3>Numbers</h3>
      <Persons 
        persons={persons} 
        filteredWord={filteredWord} 
      />
    </div>
  )
}

export default App