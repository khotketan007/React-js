import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let obj1 = {
    name : 'Ram Sita',
    id : 646544
  }
  let newArray = [1,2,3]
  return (
    <>
      <h1 className='bg-slate-50 text-blue-800 p-5 rounded-2xl mb-5'>Tailwind Test!</h1>
      <Card username='Ketan' textBtn='Click Me!' meDetails='My some info'/>
      <Card username='Dj Proxy' textBtn='Visit Me!' meDetails='Some info'/>
    </>
  )
}

export default App
