const Header = (props) => {
  return (
    <div>
      <p> {props.course}</p>
    </div>
  )
}

const Part1 = () => {
  const part1 = 'Fundamentals of React'
  const exercises1 = 10

  return (
    <div>
      <p>{part1}{exercises1}</p>
    </div>
  )
}

const Part2 = () => {
  const part2 = 'Using props to pass data'
  const exercises2 = 7

  return (
    <div>
      <p>{part2}{exercises2}</p>
    </div>
  )
}

const Part3 = () => {
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <p>{part3}{exercises3}</p>
    </div>
  )
}

const Content = () => {
  return (
    <div>
      <Part1 />
      <Part2 />
      <Part3 />
    </div>
  )
}

const Total = () => {
  const exercises1 = 10
  const exercises2 = 7
  const exercises3 = 14

  return (
    <div>
      <p>Total Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'

  return (
    <div>
      <h1><Header course={course} /></h1>
      <Content />
      <Total />
    </div>
  )
}

export default App