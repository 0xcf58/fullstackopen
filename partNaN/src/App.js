const Hello = function(props) {
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
    </div>
  )
}

const Footer = function() {
  return (
    <div>
      greetings app created by <a href="https://github.com/0xcf58">0xcf58</a>
    </div>
  )
}

const App = function() {
  const name = 'Peter'
  const age = 10

  return (
    <>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} />
      <Footer />
    </>
  )
}

export default App
