import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import About from './About';
import './App.css'

function App() {

  return (
    <>
      <div>
      <nav>
        <Link to="/">Home</Link> |
        <Link to="/about"> About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
    </>
  )
}

function Home() {
  return (
    <div>
      <h1>Home</h1>
    </div>
  )
}

export default App
