import React from 'react'
import { Link } from 'react-router'

function Nav() {
    return (
    <nav className='ct-nav'>
      <Link to={"/"}>Movies</Link>
      <Link to={"/pricing"}>Pricing</Link>
      <Link to={"/contact"}>Contact</Link>
    </nav>
  )
  
}

export default Nav
