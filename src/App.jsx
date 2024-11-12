const Hello = (props) => {
  console.log(props)
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old
      </p>
    </div>
  )
}

const Footer = () => {
  return (
    <div>
      greeting app created by <a href='https://github.com/kellyh06/full-stack-kursus'>Kelly Hurt</a>
    </div>
  )
}

const App = () => {
  const friends = [ 'Peter ', 'Maia ']

  return (
    <div>
      <p>{friends}</p>
    </div>
  )
}

export default App