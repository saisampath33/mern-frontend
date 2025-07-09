import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Home from './components/Home.jsx'
import ScoreBoard from './components/ScoreBoard.jsx'
import Register from './components/Register.jsx'

function App() {
  return (
    <div className='App-container'>
    {/* <h1 style={{ backgroundColor:"orange"}}>MERN FRONTEND</h1>
    <Home age="11"/>
    <h3>This is footer</h3> */}
    {/* <ScoreBoard/> */}
    <Register/>
    </div>
  )
}

export default App
