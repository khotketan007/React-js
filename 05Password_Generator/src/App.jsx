import { useState } from 'react'

function App() {

  // To Track the Length
  const [length, setLength] = useState(8)
  // To track the number checkBack
  const [numberAllowed, setNumberAllowed] = useState(false)
  // to teact the characters
  const [charactersAllowed, setCharactersAllowed] = useState(false)
  // to get reflected in input field
  const [password, setPassword] = useState("")

  //Password Generator
  const passwordGenerator = () => {
    
  }

  return (
    <>
      <h1 className='text-3xl text-blue-600 text-center'>Password Generator</h1>
    </>
  )
}

export default App
