import React from 'react'
import ReactDOM from 'react-dom'

const Header = ({title}) => {
    
    return <h1>{title}</h1>

}
const Part = ({part}) => {
return <div>{part.name} {part.exercises}</div>
}

const Content = ({course}) => {

return (
    <div>
        <Part part={course.parts[0]} />
        <Part part={course.parts[1]} />
        <Part part={course.parts[2]} />
    </div>  
)
}
const Total = ({parts}) => {
  const reducer = (accumulator, currentValue) => accumulator + currentValue

  const sum = parts.reduce(reducer)
  console.log('summa on:', sum.exercises)
return (
<p>Total of </p>
)
}
const Course = ({course}) => {
  console.log("Course name", course.name)
  return (
    <div>
      <Header title={course.name} />
      <Content course={course}/>
      <Total parts={course.parts} />

    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return (
    <div>
      <Course course={course} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))