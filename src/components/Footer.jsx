import React from 'react'

function Footer() {
  return (
    <footer className="bg-bg border-t border-white/5 py-8 px-6 md:px-16 lg:px-24 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4">
      <div className="flex flex-col md:flex-row items-center gap-2 font-spline">
        <span className="text-primary font-bold tracking-tighter text-lg">CINEPHILE.</span>
        <span className="text-gris text-[10px] md:text-xs font-medium tracking-widest">PRECISION ENGINEERED STREAMING.</span>
      </div>
      <div>
        <ul className="text-gris text-[10px] md:text-xs font-vietnam flex flex-wrap justify-center gap-4 md:gap-8 tracking-widest">
            <li className="hover:text-primary cursor-pointer transition-colors">PRIVACY POLICY</li>
            <li className="hover:text-primary cursor-pointer transition-colors">TERMS OF SERVICE</li>
            <li className="hover:text-primary cursor-pointer transition-colors">HELP CENTER</li>
            <li className="hover:text-primary cursor-pointer transition-colors">API</li>
        </ul>
      </div>
        <div className="hidden md:flex items-center gap-6 text-gris">
          <a  href="#" className="hover:text-primary transition-colors" aria-label="Twitter ">
              <i class="fa-solid fa-globe text-lg"></i>
          </a>
          <a href="#"  className="hover:text-primary transition-colors" aria-label="Twitter">
            <i class="fa-solid fa-share-nodes text-lg"></i>
          </a>

        </div>
        
       
    </footer>
  )
}

export default Footer
