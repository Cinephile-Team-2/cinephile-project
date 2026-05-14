import React from 'react'
import Nav from './Nav.jsx'
import Button from './Button.jsx'

function Header() {
  return (
    <div>
        <header className="md:flex items-center justify-between px-12 py-6 w-full absolute top-0 z-50">
            <div className="text-3xl font-extrabold tracking-tight text-cyan-400">
              CINEPHILE
            </div>

            <div className="flex">
                <Nav/>
            </div>
            <div className="hidden md:flex">
              <p  className="text-(--color-text) flex items-center justify-center px-12 py-6" >Sign In</p>
               <Button 
            type="submit" 
            variant="primary" 
            size="lg"
            className="w-full md:w-auto"
          >
            GET ACCESS
          </Button>
            </div>

        </header>
      
    </div>
  )
}

export default Header

