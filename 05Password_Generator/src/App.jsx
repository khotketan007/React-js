import { useState, useCallback, useEffect } from 'react'

function App() {

  // To Track the Length
  const [length, setLength] = useState(8)
  // To track the number checkBack
  const [numberAllowed, setNumberAllowed] = useState(false)
  // to teact the characters
  const [charactersAllowed, setCharactersAllowed] = useState(false)
  // to get reflected in input field
  const [password, setPassword] = useState("")

  //Password Generator using callBack
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    // for the chhecking the button if it's checked then insert the Data accorfingly
    if(numberAllowed) str += "0123456789"
    if(charactersAllowed) str += "~!@#$%^&*()_+{}:?><,./|[];'"

    // Genersting the Password Here
    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass = str.charAt(char)
    }
    setPassword(pass)
  }, [length, numberAllowed, charactersAllowed, setPassword])


  //useEffect Hook
  useEffect
  // passwordGenerator()

  return (
    <>
      <div className='w-full max-w-2xl mx-auto shadow-md rounded-lg bg-slate-100 px-6 py-3 my-8 '>
        <h1 className='text-yellow-400 text-center mb-6 text-3xl'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input  
          type="text"
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='Password'
          readOnly
          />
          <button className='outline-none bg-orange-600 text-white px-5 py-1.5 shrink-0'>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2 px-24'>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => {setLength(e.target.value)}} />
            <label className='text-orange-600 text-sm font-bold ml-1'>Length : {length}</label>
          </div>
          <div className='flex items-center gap-x-1 ml-6'>
            <input 
            type="checkbox"
            defaultChecked={numberAllowed}
            id='numberInput'
            onChange={() => {
              setNumberAllowed((prev) => !prev)
            }}
             />
             <label className='text-orange-600 text-sm font-bold ml-1'>Numbers</label>
          </div>
          <div className='flex items-center gap-x-1 ml-6'>
            <input 
            type="checkbox"
            defaultChecked={charactersAllowed}
            id='numberInput'
            onChange={() => {
              setCharactersAllowed((prev) => !prev)
            }}
             />
             <label className='text-orange-600 text-sm font-bold ml-1'>Charaters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
