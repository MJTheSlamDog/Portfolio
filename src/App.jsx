import React from 'react'
import Navbar from './sections/Navbar';

const App = () => {
  return (
    <div className="relative w-screen min-h-screen overflow-x-auto">
      <Navbar />
      <section id="home" className="min-h-screen" />
      <section id="about" className="min-h-screen bg-amber-900" />
      <section id="services" className="min-h-screen bg-amber-400" />
    </div>
  )
}

export default App
