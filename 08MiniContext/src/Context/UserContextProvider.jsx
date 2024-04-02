import React from 'react';
import Usercontext from './UserContext';

// Creating the Method
const UserContextProvider = ({children}) => {
    // Provide State to access the value
    const [user, setUser] = React.useState(null)
    return(
    // Wrapping the components nameIs : UserContext.Provider 
    // Provider is used to provide the data
    <Usercontext.Provider value={{user, setUser}}>
    // Pass the Children as it is to forward the same value / Data
    {children}
    </Usercontext.Provider>
    )
}

export default UserContextProvider;