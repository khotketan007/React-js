import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const [isCounter, setIsCounter] = useState(0)
  const [isbuttonDisabled, setisbuttonDisabled] = useState(false)
  // const [isZero, setIsZero] = useState(false)


    const addValue = () => {
      // console.log("Clicked", isCounter);
      // counter++
      setisbuttonDisabled(isCounter >= 20)
      setIsCounter(isCounter + 1)
    }
    const removeValue = () => {
      setIsCounter(isCounter - 1)
      setisbuttonDisabled(isCounter < 20)
      setIsZero(isCounter == 0)
      setisbuttonDisabled(true)
    }

  return (
    <>
    <h1>Chai aur React</h1>
    <h2>Conuter Value : {isCounter}</h2>

    <button
      onClick={addValue} disabled={isbuttonDisabled} enabled={isbuttonDisabled}
    >Increase Value</button>
    <br />
    <button
      onClick={removeValue} enabled={isbuttonDisabled} disabled={isbuttonDisabled}
    >Decrease Value</button>
    </>
  )
}

export default App
