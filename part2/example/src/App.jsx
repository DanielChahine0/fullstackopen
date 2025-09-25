import { useState, useEffect } from 'react'
import Note from './components/Note'
import Notification from './components/Notification'
import Footer from './components/Footer'
import noteService from './services/notes'

const App = () => {
  const [notes, setNotes] = useState(null)
  const [newNote, setNewNote] = useState('new note...')
  const [showAll, setShowAll] = useState(true)
  const [errorMessage, setErrorMessage] = useState('some error happened...')


  // Fetch the notes from the JSON server 
  useEffect(() => {
    noteService.getAll().then(
      initialNotes => {
        setNotes(initialNotes)
      }
    )
  }, [])

  if (notes === null) {
    return null
  }

  // Changes the importance of a note
  const toggleImportanceOf = (id) => {
    // Copy of toggled note
    const note = notes.find(n => n.id === id)
    const changedNote = {...note, important: !note.important}

    // Update the server & the state variable 
    noteService.update(id, changedNote).then(
      returnedNotes => {
        setNotes(notes.map(note => note.id === id ? returnedNotes : note))
      }
    ).catch(
      error => {
        setErrorMessage(`Note ${note.content} was already removed from the server`)
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
        setNotes(notes.filter(n => n.id !== id))
      }
    )
  }

  // Adds a new note
  const addNote = (event) => {
    // Prevent Default Behaviour
    event.preventDefault()

    // Create a note Object
    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5
    }

    // Add the note to the server
    noteService.create(noteObject).then(
      returnedNotes => {
        setNotes(notes.concat(returnedNotes))
        setNewNote('')
      }
    )
    
  }

  const handleNoteChange = (event) => {
    setNewNote(event.target.value)
  }

  const notesToShow = showAll ? notes : notes.filter(note => note.important === true)

  return (
    <div>
      <h1>Notes</h1>
      <Notification message={errorMessage}/>
      <div>
        <button onClick={()=> setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all'}
        </button>
      </div>
      <ul>
        {notesToShow.map(note =>
          <Note 
            key={note.id} 
            note={note}
            toggleImportance={() => toggleImportanceOf(note.id)}
          />
          )}
      </ul>

      <form onSubmit={addNote}>
          <input value={newNote} onChange={handleNoteChange} />
          <button type="submit">save</button>
      </form>

      <Footer />
    </div>
  )
}

export default App