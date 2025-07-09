import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import Home from './components/Home.jsx'
//we can write code Home.jsx here directly but we are importing it from components folder for proper code organization


createRoot(document.getElementById('root')).render(
  <App/>
)
