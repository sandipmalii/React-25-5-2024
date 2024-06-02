import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

 let [counter, setCounter] = useState (1)

  //let counter = 15

  const addValue=()=>{
    // console.log("value added", Math.random());
    counter = counter + 1
    setCounter(counter)
    // console.log( "clicked", counter());
  }

  const removeValue=()=>{
    setCounter(counter -1)
  }
  return (
    <>
    <h1>chai aur react</h1>
    <h2>Counter value: {counter}</h2>

    <button
      onClick ={addValue} >Add value</button>
    <br/> <br/>
    <button
    onClick = {removeValue}>remove value { counter }</button>
<p>footer: {counter}</p>
    </>
  )
}

export default App
