import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  // responsible for changing the state
  // propagate the changes to the UI
    
    let [counter , setCounter] = useState(0)
    const [error , setError] = useState("")
    const incrementValue = () => {
      
      if (counter < 20) {
        setCounter(counter + 1)
        setError("")
      }
      else {
        setError("Counter cannot be more than 20")
      }
    }
    const decrementValue = () => {
      if (counter > 0) {
        setCounter(counter - 1)
        setError("")
      }
      else {
        setError("Counter cannot be less than 0")
      }
    }  

  return (
    <>
    <h1> Counter App </h1>
    <h2> Counter Value: {counter} </h2>
    <button
    onClick={ incrementValue }> Increment value </button>
    {error && <p style={{ color: 'red', fontWeight: 'bold' }}> {error}</p>}

    <br />
    <br />
    
    <button  
    onClick={ decrementValue }> Decrement value </button>
    
    
    
    </>
  )



}

export default App
