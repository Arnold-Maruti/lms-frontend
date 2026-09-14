import React from 'react'
import { Routes, Route } from 'react-router-dom'
import About from './components/About'
import Contact from './components/Contact'

function Routes2() {
  return (
    <div>
     <Routes>
        {/* <Route path="/" element={<App />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default Routes2