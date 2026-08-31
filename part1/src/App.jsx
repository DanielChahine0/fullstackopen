const Hello = (props) => {
  console.log(props)
  console.log(props.name)
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
    </div>
  )
}

const App = () => {
  const name = "Daniel"
  const age = 22
  return (
    <div>
      <Hello name={name} age={age}/>
      <Hello name="Freddy" age={10+25}/>
    </div>
  )
}

export default App