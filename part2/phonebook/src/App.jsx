import { useState } from 'react'

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
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  
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

  const addName = (event) => {
    event.preventDefault()
    console.log(event)
    if (persons.map(p => p.name).indexOf(newName) !== -1) {
      alert(`${newName} is already added to phonebook`)
      
      return
    }

    const newPerson = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    }
    setPersons(persons.concat(newPerson))
    setNewName('')
    setNewNumber('')
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