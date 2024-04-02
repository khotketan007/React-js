import './App.css'
import UserContextProvider from './Context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
      // Taking the components
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
