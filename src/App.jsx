import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Aside from './components/Aside'
import Trending from './components/Trending'
import Footer from './components/Footer'


function App() {
  

  return (
    <>
      <Navbar />
      <Aside />
      <Trending />
      <Footer />
    </>
  )
}

export default App
