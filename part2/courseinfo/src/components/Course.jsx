// const Header = ({ name }) => {
//   console.log("header", name)
//   return (
//     <h2>
//       {name}
//     </h2>
//   )
// }

// const Part = ({ part }) => {
//   console.log("part:", part)
//   return (
//     <p>
//       {part.name} {part.exercises}
//     </p>
//   )
// }

// const Content = ({ content }) => {
//   console.log("content:", content)
//   return (
//     <div>
//       {content.map(note => {
//         return <Part key={note.id} part={note}/>
//       })}
//     </div>
//   )
// }


// const Total = ({parts}) => {
//   console.log('total', parts)
//   const total = parts.reduce((sum, part) => {
//     return sum + part.exercises
//   },0)

//   return (
//     <div>
//       <p>
//         <strong>total of {total} exercises</strong>
//       </p>
//     </div>
//   )
// }

// const Course = ({ course }) => {
//   console.log("course "+ course.id+":",course)
//   const name = course.name
//   const parts = course.parts
//   return (
//     <div>
//       <Header name={name} />
//       <Content content={parts} />
//       <Total parts={parts}/>
//     </div>
//   )
// }

const Header = (props) => {
  const {course} = props
  console.log('header:', course)

  return (
    <h2>
      {course}
    </h2>
  )
}

const Content = (props) => {
  const {parts} = props
  console.log('parts:', parts)

  return (
    <div>
      {parts.map((part) => {
        return <Part key={part.id} part={part} />
      })}
      <Total total={parts.reduce((sum, part) => sum + part.exercises, 0)} />
    </div>
  )
}

const Part = (props) => {
  const {part} = props
  console.log('part:', part)

  return (
    <p>
      {part.name} {part.exercises}
    </p>
  )
}

const Total = (props) => {
  const {total} = props
  console.log('total', total)

  return (
    <p><strong>Total of {total} exercises</strong></p>
  )
}

const Course = (props) => {
  const {course} = props
  console.log('course', course)
  
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
    </div>
  )
}

export default Course