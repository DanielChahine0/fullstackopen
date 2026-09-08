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

const StatisticsLine = ({text, value}) => {
  return (
    <div>
      {text}: {value}
    </div>
  )
}

const Statistics = ({good, neutral, bad}) => {
  if (good+bad+neutral===0){
    return (
      <div>
        No feedback given
      </div>
    )
  }
  return (
    <div>
      <StatisticsLine text="good" value={good} />
      <StatisticsLine text="neutral" value={neutral} />
      <StatisticsLine text="bad" value={bad} />

      <StatisticsLine text="all" value={good+neutral+bad} />
      <StatisticsLine text="average" value={(good-bad)/(good+neutral+bad)} />
      <StatisticsLine text="positive" value={(good)/(good+neutral+bad)} />
    </div>
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

  const setToBad = (newGood) => {
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
      <Statistics good={good} neutral={neutral} bad={bad} />
      
    </div>
  )
}

export default App