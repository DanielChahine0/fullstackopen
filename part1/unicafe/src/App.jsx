import { useState } from 'react'

const Display = ({text}) => {
  return (
    <h1>
      {text}
    </h1>
  )
}

const Button = ({onClick, text}) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setToGood = (newGood) => {
    return () => {
      setGood(newGood)
    }
  }

  const setToNeutral = (newGood) => {
    return () => {
      setNeutral(newGood)
    }
  }

  const setToBad=  (newGood) => {
    return () => {
      setBad(newGood)
    }
  }
  return (
    <div>
      <Display text="Give Feedback" />
      <Button onClick={setToGood(good + 1)} text="good"/>
      <Button onClick={setToNeutral(neutral + 1)} text="neutral"/>
      <Button onClick={setToBad(bad + 1)} text="bad"/>

      <Display text="Statistics" />
      <div>good: {good} </div>
      <div>neutral: {neutral} </div>
      <div>bad: {bad} </div>

    </div>
  )
}

export default App