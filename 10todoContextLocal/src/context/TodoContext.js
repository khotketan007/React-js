// Importing the createContext and useContext for react
import { createContext, useContext } from "react";

// Creating Context 
export const TodoContext = createContext({
    // Todos Array that containing the todo list with Parameter
    // Values
    todos : [
        {
            id : 1,
            todo : " Todo Message ",
            completed : false
        }
    ],
    // Function to work / Functionality
    // Methods
    addTodo : (todo) => {},
    updateTodo : (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete : (id) => {}
})

// Exporting the Context 
export const useTodo = () => {
    // Returning Context
    return useContext(TodoContext)
}

// Writting Provider
export const TodoProvider = TodoContext.Provider