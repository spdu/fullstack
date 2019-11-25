import React from 'react'
import Person from './Person'

//const Rows = () => persons.map((value) => {return <div key={value.name}>{value.name} {value.number}</div>}) 
//if this was used, person.js would be left out
const Persons = ({persons, removePerson}) => {

    return (
        persons.map((person) => 
        <div key= {person.id}>
            <Person 
            person={person} 
            removePerson={() => removePerson(person.name)}
            />
        </div>) 
        
        
        
        )
}
export default Persons