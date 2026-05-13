import React from 'react'
import Nav from './Nav.jsx'

function Header() {
  return (
    <div>
        <header>
            <div className="text-3xl font-extrabold tracking-tight text-cyan-400">
              CINEPHILE
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

