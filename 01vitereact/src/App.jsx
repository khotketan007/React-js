import Check from "./chai"
import Myname from "./MyName"

function App() {
  const userID = 3449
  return (
    <>
    <h1>Your UserID : {userID}</h1>
    <Myname />
    <Check />
    </>
  )
}

export default App
