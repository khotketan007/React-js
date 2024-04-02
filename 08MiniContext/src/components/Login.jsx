import React, {useState, useContext} from 'react';
import UserContext from '../Context/UserContext';


// Function to return the Value of Login
function Login(){
    // to provide some value to the username and passward take the useState
    const [username, setUsername] = useState('')
    const [passward, setPassward] = useState('')

    // Now using useContext to fetch the value and add to context
    const {setUser} = useContext(UserContext)

    //Creating the handleSubmit Method to handle the event
    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, passward})
    }
    return(
        <div>
            <h2>Login</h2>
            <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder='username' />
            <input value={passward} onChange={(e) => setPassward(e.target.value)} type="text" placeholder='password' />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

// Exporting the login form
export default Login;