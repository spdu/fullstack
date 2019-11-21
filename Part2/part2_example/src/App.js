import React, {useState} from 'react'
import Note from './components/Note'

const App = (props) => {
  const [notes, setNotes] = useState(props.notes)
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)

  const notesToShow = showAll   
  // showall ? notes : notes.filter(note => note.important === true)
  // IF showAll is true, then notes. IF showAll is false, then notes.filter()
    ? notes
    : notes.filter(note => note.important === true) //(note => note.important) would be enough


  const rows = () => notesToShow.map(note =>
    <Note
      key={note.id}
      note={note}
    />
  )



  const addNote = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)
  }
  const handleNoteChange = (event) => {
    //tapahtumaolio 'event'
    //target vastaa nyt input kenttää
    console.log(event.target.value)
    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() > 0.5,
      id: notes.length + 1,
    }
    setNotes(notes.concat(noteObject))
    setNewNote('')
  }  

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all' }
        </button>
      </div>
      <ul>
        {rows()}
      </ul>
      <form onSubmit={addNote}>
        <input 
          value={newNote} 
          onChange={handleNoteChange}
        />
        <button type="submit">save</button>
      </form> 
    </div>
  )
}
export default App