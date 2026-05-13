import { useState } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import MainLanding from './components/MainLanding.jsx'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <MainLanding/>
      <Footer/>
    </>
  )
}

export default App
