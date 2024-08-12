import { useState } from 'react'
import './reset.css'
import Header from './Components/Layout/Header'
import Footer from './Components/Layout/Footer'
import About from './Components/Layout/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='bg-[#1f1f1f]'>
      <Header />
      <About />
      <Footer />
      </div>
    </>
  )
}

export default App
