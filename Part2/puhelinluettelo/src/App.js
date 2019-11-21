import React, { useState } from 'react'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas',
      number: '040-1234567' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')


//Passing all these props to the PersonForm component... there must be a way to refactor it
//No filter as doing the 3 credit course as of now
  return (
    <div>
      <h2>Phonebook</h2>
      <h3>Add a new</h3>
        <PersonForm persons={persons} newName={newName} newNumber={newNumber}
        setNewName={setNewName} setNewNumber={setNewNumber} setPersons={setPersons}/> 
      <h2>Numbers</h2>
      <div>
        <Persons persons={persons}/> 
      </div>
    </div>
  )

}

export default App