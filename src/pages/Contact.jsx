import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import Nav from "../components/Nav.jsx";
import React from "react";

function Contact() {
  return (
    <>
      <Header />
      <section className="w-full pt-28 md:pt-48 bg-bg px-4 md:px-24 font-spline md:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:px-16 items-start">
          {/* COLUMNA IZQUIERDA: Hero Text */}
          <div className="hidden md:block flex flex-col space-y-6 ">
            <p className="text-[10px] font-bold tracking-[0.3em] text-gris uppercase">
              ESTABLISH LINK
            </p>

            <h1 className="text-7xl md:text-8xl font-bold text-text leading-[0.85] tracking-tighter">
              STAY <br />
              <span className="text-text">CONNECTED</span>
            </h1>

            <p className="text-lg text-gris max-w-sm leading-relaxed font-vietnam pt-4">
              Experience precision-engineered streaming. Our specialized team is
              standing by to resolve technical queries and partnership requests
              with cinematic efficiency.
            </p>
          </div>

          {/* COLUMNA DERECHA: El Formulario Componentizado */}
          <div className="w-full ">
            <ContactForm />
          </div>
        </div>
      </section>
      <Footer />
      <div className="block md:hidden">
        <Nav />
      </div>
    </>
  );
}

export default Contact;
