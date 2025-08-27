const Header = ({ name }) => {
  console.log("header", name)
  return (
    <h2>
      {name}
    </h2>
  )
}

const Part = ({ part }) => {
  console.log("part:", part)
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  )
}

const Content = ({ content }) => {
  console.log("content:", content)
  return (
    <div>
      {content.map(note => {
        return <Part key={note.id} part={note}/>
      })}
    </div>
  )
}


const Total = ({parts}) => {
  console.log('total', parts)
  const total = parts.reduce((sum, part) => {
    return sum + part.exercises
  },0)

  return (
    <div>
      <p>
        <strong>total of {total} exercises</strong>
      </p>
    </div>
  )
}

const Course = ({ course }) => {
  console.log("course "+ course.id+":",course)
  const name = course.name
  const parts = course.parts
  return (
    <div>
      <Header name={name} />
      <Content content={parts} />
      <Total parts={parts}/>
    </div>
  )
}

export default Course