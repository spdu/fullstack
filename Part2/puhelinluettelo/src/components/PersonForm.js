import React from 'react'
import personService from '../services/service'

const PersonForm = ({persons, newName, newNumber, notificationMessage, setNewName, setNewNumber, setPersons, setNotificationMessage}) => {

  
  
const AddPerson = (event) => {

    event.preventDefault()
    const names = persons.map(persons => persons.name)
    const numbers = persons.map(persons => persons.number)
    const checkNumber = () => numbers.includes(newNumber) ? alert(`The number ${newNumber} is already in the phonebook`) : setPerson()
    names.includes(newName) ? alert(`${newName} is already in the phonebook`) : checkNumber()
    
    setNewName('')
    setNewNumber('') 
  }
  const setPerson = () => {
    const personObject = {
      name: newName,
      number: newNumber
    }
    personService
    .create(personObject)
    .then(returnedPerson => {
      setPersons(persons.concat(returnedPerson))
    })
    setNotificationMessage(
      `Added ${newName}`
    )
    setTimeout(() => {
      setNotificationMessage(null)
    }, 5000)
  }
  const handleNameChange = (event) => setNewName(event.target.value)
  const handleNumberChange = (event) => setNewNumber(event.target.value)


  
  return (
    <form onSubmit={AddPerson} >
        <div>
          name: <input value={newName} onChange= {handleNameChange}/>
          
        </div>
        <div>
          number: <input value={newNumber} onChange= {handleNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
)
}
  

  export default PersonForm