import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Ani from './Ani.jsx'


// createRoot(document.getElementById('root')).render(
//   <>
//     <App />
//     <Ani />
//   </>
// )


// ______________________________________________________________________________________

function MyApp(){
    return (
        <div>
            <h1>Custom App | Ani</h1>
        </div>
    )
}

// createRoot(document.getElementById('root')).render(
//     <MyApp />
// )

// ______________________________________________________________________________________


// This object gives us error because vite have their own rule to define the element

// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// }

// ______________________________________________________________________________________

// const anotherElement = (
//     <a href="https://google.com" target='_blank'>Visit google</a>
// )

const anotherUser = "Aniket yadav"

// ______________________________________________________________________________________

// This is the way to create element in react and this is done by babel.

const reactElement = React.createElement(
    'a',
    {href: 'https://google.com',target: '_blank' },
    'click me to visit google',
    anotherUser
)

createRoot(document.getElementById('root')).render(
  reactElement
)