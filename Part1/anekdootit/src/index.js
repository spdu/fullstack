import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({handleClick, text}) => (
    <button onClick={handleClick}>
    {text}
    </button>
    )
    const Votes = ({votes}) => <p>has {votes} votes</p>

    const MostVotes = ({anecdotes, votes}) => {

        const max = Math.max(...votes)
        const i = votes.indexOf(max)

        if (max !== 0) { //jos maksimi on jotain muuta kuin 0 niin ääniä on annettu
            return (
            <div>
            <h1>Anecdote with most votes</h1>
            {anecdotes[i]}    
            <p>has {max} votes</p>
            </div>
            )
        }
        return <p></p>
    }

const App = (props) => {

  const [selected, setSelected] = useState(0)
  const [voteTable, setVote] = useState(new Array(anecdotes.length).fill(0))
  const randomAnecdote = () => {
      setSelected(Math.floor((Math.random()* anecdotes.length)))
  }
  const voteAnecdote = () => {
    const copy = [...voteTable]
    copy[selected] += 1
    setVote(copy)
  }
  
  return (
    <div>
        <h1>Anecdote of the day</h1>
      {props.anecdotes[selected]}
      <Votes votes={voteTable[selected]}/>
      <p>
      <Button handleClick={voteAnecdote} text='vote'/>
      <Button handleClick={randomAnecdote} text='next anecdote'/>
      </p>
      <MostVotes anecdotes={anecdotes} votes={voteTable}/>
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