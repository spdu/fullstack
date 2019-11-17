import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({handleClick, text}) => (
<button onClick={handleClick}>
    {text}
  </button>
)
const Statistic = ({text, value}) => <tr><td>{text}</td><td>{value}</td></tr> 

const Statistics = ({good, neutral, bad}) => {
    const total = good + neutral + bad
    if (total === 0) return <div>No feedback given</div>
    return (
        <table>
            <tbody>
            <Statistic text="good" value={good}/>
            <Statistic text="neutral" value={neutral}/>
            <Statistic text="Bad" value={bad}/>
            <Statistic text="all" value={total}/>
            <Statistic text="average" value={(1*good + -1*bad)/total}/>
            <Statistic text="positive" value={good / total *100}/>
            </tbody>
        </table>
    )
}
    

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const handleGoodFeedback = () => {
        setGood(good + 1)
    }
    const handleNeutralFeedback = () => {
        setNeutral(neutral + 1)
    }
    const handleBadFeedback = () => {
        setBad(bad + 1)

    }


  return (
    <div>
        <h1>Give feedback</h1>
        <Button handleClick={handleGoodFeedback} text='good' />
        <Button handleClick={handleNeutralFeedback} text='neutral' />
        <Button handleClick={handleBadFeedback} text='bad' />
        <h1>Statistics</h1>
        <Statistics good={good} neutral = {neutral} bad = {bad}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)