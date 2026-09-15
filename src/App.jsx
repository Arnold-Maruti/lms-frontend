import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import img1 from './assets/Girlreadingbook.png'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="hero">
      <Navbar />
      <div className="hero-content">
       <div className="hero-text">
        <h1>Welcome to</h1>
        <h1>Learn </h1>
        <p>Learn and grow with our Learning Management System.</p>
       </div>
       <div className="hero-image">
         <img src={img1} alt="Hero" />
       </div>
      </div>
    </div>

    </>
  )
}

export default App
