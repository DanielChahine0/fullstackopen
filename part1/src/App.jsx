const App = () => {
  const now = new Date();
  const a = 20;
  const b = 10;
  console.log(now, a+b);
  console.log("Hello from App component")
  return (
    <div>
      <p>Hello world</p>
      <p>It is now {now.toString()}</p>
      <p> {a} + {b} = {a+b}</p>
    </div>
  )
}

export default App