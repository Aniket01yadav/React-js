import { useState } from 'react'
import React from 'react'
import './App.css'
import Card from './components/card'

function App() {

  return (
    <>
     <Card UserName="Aniket" btnText="Click me"/>
     <Card UserName="Abhinash" btnText="About me"/>
    </>
  )
}

export default App
