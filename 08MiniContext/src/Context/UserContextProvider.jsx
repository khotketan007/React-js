import React from 'react';
import UserContext from './UserContext';

// Creating the Method
const UserContextProvider = ({children}) => {
    // Provide State to access the value
    const [user, setUser] = React.useState(null)
    return(
    // Wrapping the components nameIs : UserContext.Provider 
    // Provider is used to provide the data
    <UserContext.Provider value={{user, setUser}}>
    {children}
    </UserContext.Provider>
    )
}

export default UserContextProvider;