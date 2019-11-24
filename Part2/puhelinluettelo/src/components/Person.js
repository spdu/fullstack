import React from 'react'

const Person = ({person, removePerson}) => {
    
    return <div>
        {person.name} {person.number}
        <button onClick={() => {if(window.confirm(`Remove the person ${person.name} ?`))removePerson()}}>remove</button>
        </div>
}

export default Person