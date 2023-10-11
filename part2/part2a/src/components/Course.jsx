const Header = ({coursename}) => {
    return (
      <div><h3>{coursename}</h3></div>
    )
  }
  
  const Part = ({part}) => {
    return <p>{part.name} {part.exercises}</p>
  }
  
  const Content = ({parts}) => {
    return (
      <div>
        {parts.map(part => (
          <Part key={part.id} part={part} />
        ))}
      </div>
    )
  }
  
  const Course = ({course}) => {
  
    const total = course.parts.reduce((total, parts) => total + parts.exercises, 0)
  
    return <div>
      <Header coursename={course.name} />
      <Content parts={course.parts} />
      <p><strong>Total of {total} exercises</strong></p>
    </div>
  }

export default Course