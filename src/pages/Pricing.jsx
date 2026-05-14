import Header from '../components/Header'
import Footer from '../components/Footer'
import PricingSection from '../components/Pricing/PricingSection'
import Nav from "../components/Nav.jsx";
import React from 'react'

function Pricing() {
  return (
    <>
      <Header />
      <PricingSection />
      <Footer />
      <div className="block md:hidden">
        <Nav />
      </div>
    </>
  );
}

export default Pricing