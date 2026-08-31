const Hello = () => {
  return (
    <div>
      <h1>
        Hello, this is a separate component!!
      </h1>
    </div>
  )
}

const App = () => {
  const now = new Date();
  const a = 20;
  const b = 10;
  console.log(now, a+b);
  console.log("Hello from App component")
  return (
    <div>
      <Hello />
      <Hello />
      <p>It is now {now.toString()}</p>
      <p> {a} + {b} = {a+b}</p>
    </div>
  )
}

export default App