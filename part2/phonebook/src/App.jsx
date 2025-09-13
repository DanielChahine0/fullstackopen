import { useState, useEffect } from 'react'
import personService from './services/persons'
import Person from './components/Person'

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

const Persons = ({ persons, filteredWord, deletePerson }) => {
  return (
    <ul>
      {persons.map(person => {
        if (person.name.includes(filteredWord)){
          
          return <Person
            key={person.id} 
            person={person} 
            handleDelete={() => deletePerson(person.id)}/>
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

  const deletePerson = (id) => {
    const person = persons.find(p => p.id === id)
    if (window.confirm(`Delete ${person.name} ?`)) {
      personService.removePerson(id).then(
        () => {
          setPersons(persons.filter(p => p.id !== id))
        }
      ).catch(error => {
        console.log(error)
        alert(`the person '${person.name}' was already deleted from server`)
        setPersons(persons.filter(p => p.id !== id))
      })
    }
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
        deletePerson={(id) => deletePerson(id)}
      />
    </div>
  )
}

export default App