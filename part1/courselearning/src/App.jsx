import { useState } from 'react'

const Display = (props) => {
  return (
    <div>{props.counter}</div>
  )
}

const Button = (props) => {
  return (
    <div>
      <button onClick={props.onClick}>
        {props.text}
      </button>
    </div>
  )
}

const App = () => {
  const [ counter, setCounter ] = useState(0)

  const increaseByOne = () => setCounter(counter + 1)
  const setToZero = () => setCounter(0)
  const decreaseByOne = () => setCounter(counter - 1)

  return (
    <div>
      <Display counter={counter}/>
      <Button 
        onClick={increaseByOne} 
        text='increase'
      />
      
      <Button 
        onClick={setToZero} 
        text='zero'
      />
      
      <Button 
        onClick={decreaseByOne} 
        text='decrease'
      />
    </div>
  )
}

export default App