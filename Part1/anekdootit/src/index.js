import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({handleClick, text}) => (
    <button onClick={handleClick}>
        {text}
      </button>
    )
    const Votes = ({votes}) => {
        return <p>has {votes} votes</p>
    }

const App = (props) => {

  const [selected, setSelected] = useState(0)
  const [voteTable, setVote] = useState([0,0,0,0,0,0])
  //const pisteTaulu = new Array(anecdotes.length+1).join('0').split('')
  

 
  const randomAnecdote = () => {
      console.log(Math.floor((Math.random()* anecdotes.length)))
      //setSelected(anecdotes[Math.floor((Math.random()* anecdotes.length)+1)])
      setSelected(Math.floor((Math.random()* anecdotes.length)))
  }
  const voteAnecdote = () => {

    const copy = [...voteTable]
    copy[selected] += 1
    console.log('table', copy[selected])
    setVote(voteTable[selected] = copy[selected])
    //const copy = [...pisteTaulu]
    //console.log('taulu', voteTable[selected])
    //copy[selected]++
    //pisteTaulu[selected]++
  }
  


  return (
    <div>
      {props.anecdotes[selected]}
      <Votes votes={voteTable[selected]}/>
      <p>
      <Button handleClick={voteAnecdote} text='vote'/>
      <Button handleClick={randomAnecdote} text='next anecdote'/>
      </p>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)