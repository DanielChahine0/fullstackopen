import { useState, useEffect, useRef } from 'react'
import personService from './services/persons'
import Person from './components/Person'
import Notification from './components/Notification'

const Filter = ({ value, onChange }) => (
  <div>
    filter shown with: <input value={value} onChange={onChange} />
  </div>
)

const PersonForm = ({ onSubmit, name, number, onNameChange, onNumberChange }) => (
  <form onSubmit={onSubmit}>
    <div>
      name: <input value={name} onChange={onNameChange} />
    </div>
    <div>
      number: <input value={number} onChange={onNumberChange} />
    </div>
    <div>
      <button type="submit">add</button>
    </div>
  </form>
)

const Persons = ({ persons, filter, onDelete }) => {
  const visible = filter
    ? persons.filter(p => p.name.includes(filter))
    : persons

  return (
    <ul>
      {visible.map(person => (
        <Person
          key={person.id}
          person={person}
          handleDelete={() => onDelete(person.id)}
        />
      ))}
    </ul>
  )
}

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [message, setMessage] = useState(null)
  const [isSuccess, setIsSuccess] = useState(false)

  // keep track of notification timeout so we don't stack timers
  const notifyTimeoutRef = useRef(null)

  useEffect(() => {
    const fetchPersons = async () => {
      try {
        const initial = await personService.getAll()
        setPersons(initial)
      } catch (err) {
        console.error('Failed to load persons', err)
      }
    }
    fetchPersons()
  }, [])

  const clearInputs = () => {
    setNewName('')
    setNewNumber('')
  }

  const notify = (text, success = true, duration = 5000) => {
    if (notifyTimeoutRef.current) clearTimeout(notifyTimeoutRef.current)
    setIsSuccess(success)
    setMessage(text)
    notifyTimeoutRef.current = setTimeout(() => setMessage(null), duration)
  }

  const handleNameChange = (e) => setNewName(e.target.value)
  const handleNumberChange = (e) => setNewNumber(e.target.value)
  const handleFilterChange = (e) => setFilter(e.target.value)

  const addName = async (e) => {
    e.preventDefault()
    const existing = persons.find(p => p.name === newName)

    if (existing) {
      const confirmed = window.confirm(
        `${newName} is already added to phonebook, replace the old number with a new one?`
      )
      if (!confirmed) {
        clearInputs()
        return
      }

      // update existing person
      try {
        const updated = await personService.update(existing.id, { ...existing, number: newNumber })
        setPersons(prev => prev.map(p => (p.id !== existing.id ? p : updated)))
        notify(`Updated ${updated.name}`, true)
        clearInputs()
      } catch (err) {
        console.error(err)
        notify(`Information of ${existing.name} has already been removed from the server`, false)
        setPersons(prev => prev.filter(p => p.id !== existing.id))
      }
      return
    }

    // create new person
    const newPerson = { name: newName, number: newNumber }
    try {
      const created = await personService.create(newPerson)
      setPersons(prev => prev.concat(created))
      notify(`Added ${created.name}`, true)
      clearInputs()
    } catch (err) {
      console.error(err)
      notify('Failed to add person', false)
    }
  }

  const deletePerson = async (id) => {
    const person = persons.find(p => p.id === id)
    if (!person) return

    if (!window.confirm(`Delete ${person.name} ?`)) return

    try {
      await personService.removePerson(id)
      setPersons(prev => prev.filter(p => p.id !== id))
    } catch (err) {
      console.error(err)
      alert(`the person '${person.name}' was already deleted from server`)
      setPersons(prev => prev.filter(p => p.id !== id))
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} good={isSuccess} />

      <Filter value={filter} onChange={handleFilterChange} />

      <h3>Add a New</h3>
      <PersonForm
        onSubmit={addName}
        name={newName}
        number={newNumber}
        onNameChange={handleNameChange}
        onNumberChange={handleNumberChange}
      />

      <h3>Numbers</h3>
      <Persons persons={persons} filter={filter} onDelete={deletePerson} />
    </div>
  )
}

export default App