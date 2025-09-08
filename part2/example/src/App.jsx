import { useState, useEffect } from 'react'
import axios from 'axios'
import Note from './components/Note'
import noteService from './services/notes'

const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('new note...')
  const [showAll, setShowAll] = useState(true)

  // Fetch the notes from the JSON server 
  useEffect(() => {
    noteService.getAll().then(
      (response) => {
        setNotes(response.data)
      }
    )
  }, [])

  const toggleImportanceOf = (id) => {
    // Copy of toggled note
    const note = notes.find(n => n.id === id)
    const changedNote = {...note, important: !note.important}

    // Update the server & the state variable 
    noteService.update(id, changedNote).then(
      (response) => {
        setNotes(notes.map(
          (note) => {
            if (note.id === id) return response.data
            return note
          }
        ))
      }
    )
  }

  

  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5
    }

    noteService.create(noteObject).then(
      (response) => {
        setNotes(notes.concat(response.data))
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
    </div>
  )
}

export default App