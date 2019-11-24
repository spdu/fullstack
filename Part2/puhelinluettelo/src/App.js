import React, { useState, useEffect } from 'react'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import personService from './services/service'
import Notification from './components/Notification'

const App = () => {
  const [ persons, setPersons] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [notificationMessage, setNotificationMessage] = useState(null)

  useEffect(() => {
    console.log('effect')
    personService
      .getAll()
      .then(initialPersons => {
        console.log('promise fulfilled')
        setPersons(initialPersons)
      })
  }, [])

  const removePerson = name => {
    const person = persons.find(n => n.name === name)
    console.log("person is:", person)
    personService
    .remove(person.id)
    .then( 
      setPersons(persons.filter(n => n.name !== name)),
      setNotificationMessage(
        `Removed ${person.name}`
      ),
      setTimeout(() => {
        setNotificationMessage(null)
      }, 5000)
    )
  }


//Passing all these props to the PersonForm component... there must be a way to refactor it
//No filter as doing the 3 credit course as of now
  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notificationMessage} />
      <h3>Add a new</h3>
        <PersonForm persons={persons} newName={newName} newNumber={newNumber} notificationMessage={notificationMessage}
        setNewName={setNewName} setNewNumber={setNewNumber} setPersons={setPersons} setNotificationMessage={setNotificationMessage}/> 
      <h2>Numbers</h2>
      <div>
        <Persons persons={persons} removePerson={removePerson}/> 
      </div>
    </div>
  )

}

export default App