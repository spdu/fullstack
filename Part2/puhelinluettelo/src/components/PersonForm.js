import React from 'react'

const PersonForm = ({persons, newName, newNumber, setNewName, setNewNumber, setPersons}) => {

  
  
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
    setPersons(persons.concat(personObject))
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