import React from 'react'

function Footer() {
  return (
    <footer className="bg-(--color-bg) border-t border-neutral-800 py-6 px-6 md:px-16 lg:px-24">
      <div>
        <span className="text-(--color-primary) flex items-center justify-center">CINEPHILE.</span>
        <span className="text-(--color-gris) flex items-center justify-center">PRECISION ENGINEERED STREAMING.</span>
      </div>
      <div>
        <ul className="text-(--color-gris) text-xs flex gap-4 justify-center">
            <li>PRIVACY POLICY</li>
            <li>TERMS OF SERVICE</li>
            <li>HELP CENTER</li>
            <li>API</li>
        </ul>
      </div>
        <div>
          <a  href="#" className="flex" aria-label="Twitter ">
              <i class="fa-solid fa-globe"></i>
          </a>
          <a href="#"  className="flex" aria-label="Twitter">
            <i class="fa-solid fa-share-nodes"></i>
          </a>

        </div>
        
       
    </footer>
  )
}

export default Footer
