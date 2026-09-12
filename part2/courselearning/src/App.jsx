import { useState, useEffect } from 'react'
import axios from 'axios'
import Note from './components/Note'

const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)

  const hook = () => {
    // console.log('effect')
    axios
      .get('http://localhost:3001/notes')
      .then(response => {
        // console.log('promise fulfilled')
        setNotes(response.data)
      })
  }

  useEffect(hook, [])

  const addNote = (event) => {
    event.preventDefault()

    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5
    }

    axios
      .post('http://localhost:3001/notes', noteObject)
      .then((response)=>{
        setNotes(notes.concat(response.data))
        setNewNote('')
      })
  }

  const handleNoteChange = (event) => {
    setNewNote(event.target.value)
  }

  const flipShowing = () => {
    setShowAll(!showAll)
  }
  const toggleImportance = (id) => {
    const url = `http://localhost:3001/notes/${id}`
    const note = notes.find(n => n.id === id)
    const changedNote = { ...note, important: !note.important }

    axios.put(url, changedNote).then(response => {
      setNotes(notes.map(note => note.id === id ? response.data : note))
    })
  }

  const notesToShow = showAll ? notes : notes.filter((note)=>note.important)

  return (
    <div>
      <h1>Notes</h1>
      
      <ul>
        {notesToShow.map((note)=>{
          return <Note 
            key={note.id} 
            note={note}
            toggleImportance={()=>toggleImportance(note.id)}
          />
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