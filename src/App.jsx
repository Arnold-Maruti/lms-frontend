import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import img1 from './assets/hero-3.png'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="hero">
      <Navbar />
      {/* <div className="hero-content">
       <div className="hero-text">
        <h1>Welcome to</h1>
        <h1>Learn </h1>
        <h1>German</h1>
        <h1><p>with</p> Elsy</h1>
        <p>Learn and grow with our Learning Management System.</p>
       </div>
       <div className="hero-image">
         <img src={img1} alt="Hero" />
       </div>
      </div> */}
      <div className="hero-contents">
      <div className="hero-text">
          <h3>Studying German online has now been made easier</h3>
          <p>Learn German step by step with engaging lessons and practical exercises</p>
      </div>
      <div className="hero-image">
        <img src={img1} alt="Hero image" />
      </div>
      </div>
    </div>

    </>
  )
}

export default App
