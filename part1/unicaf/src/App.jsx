import { useState } from 'react'

const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad
  const average = (good - bad) / total
  const positive = good / total * 100
  return (
    <div>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>total {total}</p>
      <p>average {average}</p>
      <p>positive {positive} %</p>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseGood = () => {
    const newGood = good+1
    setGood(newGood);
  }

  const increaseNeutral = () => {
    const newNeutral = neutral+1
    setNeutral(newNeutral)
  }

  const increaseBad = () => {
    const newBad = bad + 1
    setBad(newBad)
  }
  return (
    <div>
      <h1>Give Feedback</h1>
      <Button onClick={increaseGood} text='good'/>
      <Button onClick={increaseNeutral} text='neutral'/>
      <Button onClick={increaseBad} text='bad'/>
      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App