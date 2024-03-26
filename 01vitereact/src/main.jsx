import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import Check from './chai.jsx'

function MyApp(){
    return(
        <div>
            <h1>Custom App Coffee Happy!</h1>
        </div>
    )
}

// const reactElement = {
//     type: 'a',
//     props : {
//         href : 'https://google.com',
//         target : '_blank'
//     },
//     children: 'Click me to visit Google'
// }

const AnotherElement = (
    <a href="https://www.google.com" target='_blank'>Visit Google</a>
)

const MyName = 'chai aur react'
const reactElement = React.createElement(
    'a',
    {href : 'https://www.google.com', target: '_blank'},
    'Click Me to Visit Google ',
    MyName
)

const AnotherUser =  ' chai aur react'

ReactDOM.createRoot(document.getElementById('root'))
.render(
    reactElement
)