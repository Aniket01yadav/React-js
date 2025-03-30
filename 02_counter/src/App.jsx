import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setcounter]= useState(5)

  // let counter = 5;

  let AddCounter = () => {

    if(counter == 20){
      setcounter(counter = 20)
    }
    else{
      setcounter(counter+1)
    }
  }

  let RemoveCounter = () => {
    if(counter > 0){
      counter = counter-1;
      setcounter(counter)
    }

  }

  const ResetCounter = () => {
    setcounter(counter = 0)
  }

  return (
    <>
      <h1>Aniket yadav</h1>
      <h2>Counter is : {counter}</h2>
      <button
      onClick={AddCounter} id='Add'>Add counter</button>
      <br />
      <br />
      <button
      onClick={RemoveCounter} id='Remove'>Remove counter</button>
      <br />
      <br />
      <button
      onClick={ResetCounter} id='Reset'>Rest counter</button>
    </>
  )
}

export default App
