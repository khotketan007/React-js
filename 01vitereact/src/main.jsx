import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import Check from './chai.jsx'

function MyApp(){
    return(
        <div>
            <h1>Custom App Coffee</h1>
        </div>
    )
}

ReactDOM.createRoot(document.getElementById('root'))
.render(

    <MyApp /> 
)
