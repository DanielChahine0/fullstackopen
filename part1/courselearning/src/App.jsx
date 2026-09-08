import { useState } from 'react'

const History = (props) => {
  if (props.allClicks.length === 0){
    return (
      <div>
        This app is used by clicking
      </div>
    )
  }
  else{
    return (
      <div>
        <p>{props.allClicks.join(' ')}</p>
        <p>total {props.total}</p>
      </div>
      
    )
  }
}

const Display = ({value}) => {
  return (
    <div>
      {value}
    </div>
  )
}

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
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])
  const [total, setTotal] = useState(0)
  const [value, setValue] = useState(10)

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    const newLeft = left + 1
    setLeft(newLeft)
    setTotal(newLeft + right)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    const newRight = right + 1
    setRight(newRight)
    setTotal(left + newRight)
  }

  const setToValue = (newVal) => {
    const setter = () => {
      console.log("New Value: ", newVal)
      setValue(newVal)
    }
    return setter
  }

  return (
    <div>
      <Display value={value}/>
      <Button onClick={setToValue(0)} text={"Zero"}/>
      <Button onClick={setToValue(10)} text={"Ten"}/>
      <Button onClick={setToValue(value + 1)} text={"Increase"}/>
      <Button onClick={setToValue(value - 1)} text={"Decrease"}/>
    </div>
  )
}

export default App