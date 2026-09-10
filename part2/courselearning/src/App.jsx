import { useState } from 'react'
import Note from './components/Note'

const App = (props) => {
  const [notes, setNotes] = useState(props.notes)
  const [newNote, setNewNote] = useState('a new note...')
  const [showAll, setShowAll] = useState(true)
  
  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      id: String(notes.length+1),
      content: newNote,
      important: Math.random() < 0.5
    }
    setNotes(notes.concat(noteObject))
    setNewNote('')
  }

  const handleNoteChange = (event) => {
    setNewNote(event.target.value)
  }

  const flipShowing = () => {
    setShowAll(!showAll)
  }

  const notesToShow = showAll ? notes : notes.filter((note)=>note.important)

  return (
    <div>
      <h1>Notes</h1>
      
      <ul>
        {notesToShow.map((note)=>{
          return <Note key={note.id} note={note}/>
        })}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange}/>
        <button type='submit'>save</button>
      </form>
      <button onClick={flipShowing}>
        show {showAll ? 'important':'all'}
      </button>
    </div>
  )
}

export default App