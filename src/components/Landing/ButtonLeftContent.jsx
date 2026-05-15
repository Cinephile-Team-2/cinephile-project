import React from 'react'
import Button from '../Button.jsx'

function ButtonLeftContent() {
  return (
    <div className="flex flex-wrap gap-4 ">
      <Button 
            type="submit" 
            variant="primary" 
            size="lg"
            className="w-full md:w-auto"
          >
            GET STARTED
          </Button>
          <Button 
            type="submit" 
            variant="ghost" 
            size="lg"
            className="w-full md:w-auto"
          >
            BROWSE FILMS
          </Button>
          
        </div>
  )
}

export default ButtonLeftContent