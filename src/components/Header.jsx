import React from 'react'
import Nav from './Nav.jsx'

function Header() {
  return (
    <div>
        <header>
            <div>
                 <img src="#" alt="Logo Cinephile"/>
            </div>

            <div>
                <Nav/>
                <p>Sign In</p>
                <button>Get Access</button>
            </div>

        </header>
      
    </div>
  )
}

export default Header

