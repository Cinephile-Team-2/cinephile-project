import React from 'react'
import Stats from './Stats.jsx'
import TextLeftContent from './TextLeftContent.jsx'
import ButtonLeftContent from './ButtonLeftContent.jsx'
import MainCard from './MainCard.jsx'
import SideCard from './SideCard.jsx'

function MainLanding() {
  return (
    /* Hero */
    <main className="flex-1 grid lg:grid-cols-2 gap-16 px-8 lg:px-14 py-12 lg:py-20 items-center">
    {/* Left Content */}
      <section className="space-y-10 max-w-2xl">
        <TextLeftContent/>
        <ButtonLeftContent/>
        {/* Stats */}
        <Stats/>
      </section>
       {/* Right Content */}
          <section className="grid grid-cols-[1.2fr_0.9fr] gap-5 max-w-xl mx-auto w-full">
            {/* Main Card */}
            <MainCard/>

            {/* Side Cards */}
            <SideCard/>
          </section>
    </main>
  )
}

export default MainLanding