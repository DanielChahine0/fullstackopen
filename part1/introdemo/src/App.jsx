import { useState } from 'react'

const Display = ({counter}) => {
  return (
    <div>
      {counter}
    </div>
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
  const [ counter, setCounter ] = useState(0)
  const increase = () => setCounter(counter + 1);
  const decrease = () => setCounter(counter - 1);
  const double = () => setCounter(counter*2);
  const zero = () => setCounter(0);

  return (
    <div>
      <Display counter={counter} />
      <Button onClick={increase} text={"Increase!!"}/>
      <Button onClick={decrease} text={"Decrease!!"}/>
      <Button onClick={zero} text={"Zero!!"}/>
      <Button onClick={double} text={"Double!!"}/>
    </div>
  )
}

export default App