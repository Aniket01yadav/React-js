import { useState } from 'react'
import React from 'react'
import './App.css'

function App() {
  const [Color, setColor] = useState('')

  const Red = () => {
    setColor('red')
  }

  const Gray = () => {
    setColor('gray')
  }
  const Green = () => {
    setColor('green')
  }
  const Yellow = () => {
    setColor('yellow')
  }
  const Blue = () => {
    setColor('blue')
  }
  const Olive = () => {
    setColor('olive')
  }
  const Purple = () => {
    setColor('purple')
  }
  const White = () => {
    setColor('white')
  }
  const Black = () => {
    setColor('black')
  }
  
  return (
    <>
      <div className="w-full h-screen duration-200" style={{ backgroundColor: Color }}>
          <div className="w-full h-screen duration-200" style={{ backgroundColor: Color }}>
            <div className="fixed bottom-12 left-1/2 -translate-x-1/2 flex flex-wrap justify-center items-center gap-3 p-3 bg-white shadow-lg rounded-3xl w-max">
                <button className="outline-none px-4 py-1 rounded-full text-white" style={{ backgroundColor: "red" }} onClick={Red}>Red</button>

                 <button className="outline-none px-4 py-1 rounded-full text-white" style={{ backgroundColor: "gray" }} onClick={Gray}>Gray</button>

                <button className="outline-none px-4 py-1 rounded-full text-white" style={{ backgroundColor: "green" }} onClick={Green}>Green</button>

                <button className="outline-none px-4 py-1 rounded-full text-black" style={{ backgroundColor: "yellow" }} onClick={Yellow}>Yellow</button>

                <button className="outline-none px-4 py-1 rounded-full text-white" style={{ backgroundColor: "blue" }} onClick={Blue}>Blue</button>

                <button className="outline-none px-4 py-1 rounded-full text-white" style={{ backgroundColor: "olive" }} onClick={Olive}>Olive</button>

                <button className="outline-none px-4 py-1 rounded-full text-white" style={{ backgroundColor: "purple" }} onClick={Purple}>Purple</button>

                <button className="outline-none px-4 py-1 rounded-full text-black" style={{ backgroundColor: "#F1F0F9" }} onClick={White}>White</button>
                
                <button className="outline-none px-4 py-1 rounded-full text-white" style={{ backgroundColor: "black"}} onClick={Black}>Black</button>
            </div>
        </div>

      </div>
    </>
  )
}

export default App
