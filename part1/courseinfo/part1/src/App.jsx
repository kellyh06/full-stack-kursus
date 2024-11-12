function Header(props) {
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
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course = {course} />
      <Content name = {part1} count = {exercises1} />
      <Content name = {part2} count = {exercises2}/>
      <Content name = {part3} count = {exercises3}/>
      <Total ex1 = {exercises1} ex2 = {exercises2} ex3 = {exercises3} />
      
    </div>
  )
}

export default App