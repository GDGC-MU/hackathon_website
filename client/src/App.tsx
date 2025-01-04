import { useState } from 'react'
import './App.css'
import Header from './components/header'
import Hero from './components/hero'
import Footer from './components/footer'
function App() {
  /* const [count, setCount] = useState(0) */

  return (
    <>
      <div>
        <Header />
        <Hero />
        <Footer />
      </div>
    </>
  )
}

export default App
