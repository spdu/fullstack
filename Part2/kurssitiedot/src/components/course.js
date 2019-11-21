import React from 'react'

const Course = ({course}) => {
    return (
      
      <div>
        {course.map((value, index) => { //Read through the course array and handle each course name separately
          return <div key={index}> //index might not be needed
          <Header title={value.name} />
          <Content course={value}/>
          <Total parts={value.parts} />
          </div>
        })}
      </div>
    )
    
}

const Header = ({title}) => <h1>{title}</h1>
const Part = ({part}) => <p>{part.name} {part.exercises}</p>

const Content = ({course}) => {
  //console.log("course in Content",course)
    return (
        <div>
            {course.parts.map((value, index) => { return <div key={index}> <Part part={value} /> </div>})}
        </div>
    )
}

const Total = ({parts}) => {
    //map the number of exercises
    const totalExercises = parts.map(value => value.exercises)
    const reducer = (accumulator, currentValue) => accumulator + currentValue //task 2.3*
    const sum = totalExercises.reduce(reducer)
    return (<b>Total of {sum} exercises</b>)
}


export default Course