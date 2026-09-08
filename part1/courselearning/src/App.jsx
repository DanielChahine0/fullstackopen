import { useState } from 'react'

const Display = ({counter}) => <div>{counter}</div>

const Button = ({onClick, text}) => {
  return (
    <div>
      <button onClick={onClick}>
        {text}
      </button>
    </div>
  )
}

const App = () => {
  const [clicks, setClicks] = useState({left:0, right:0})
  const handleLeftClicks = () => {
    setClicks({
      ...clicks, 
      left: clicks.left + 1
    })
  }
  const handleRightClicks = () => {
    setClicks({
      ...clicks, 
      right: clicks.right + 1
    })
  }
  return (
    <div>
      {clicks.left}
      <button onClick={handleLeftClicks}>left</button>
      <button onClick={handleRightClicks}>right</button>
      {clicks.right}
    </div>
  )
}
export default App