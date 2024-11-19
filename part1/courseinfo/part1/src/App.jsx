function Header(props) {
  console.log(props)
  return(
    <h1>{props.course}</h1>
  )
}

function Content(props){
  return(
    <p>{props.name} {props.count}</p>
  )
}

function Total(props){
  return(
    <p>Number of exercises {props.ex1 + props.ex2 + props.ex3}</p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course = {course.name} />
      <Content name = {course.parts[0].name} count = {course.parts[0].exercises} />
      <Content name = {course.parts[1].name} count = {course.parts[1].exercises}/>
      <Content name = {course.parts[2].name} count = {course.parts[2].exercises}/>
      <Total ex1 = {course.parts[0].exercises} ex2 = {course.parts[1].exercises} ex3 = {course.parts[2].exercises} />
      
    </div>
  )
}

export default App