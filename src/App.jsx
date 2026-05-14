import { useEffect, useState } from "react";

import './App.css'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

import MainLanding from './components/Landing/MainLanding.jsx'
import MainLandingMobile from './components/Landing/MainLandingMobile.jsx'
import Nav from './components/Nav.jsx'

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  return (
    <>
      <Header/>
      {isMobile ? <MainLandingMobile /> : <MainLanding />}
      <Footer/>
    </>
  )
}

export default App
