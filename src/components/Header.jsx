import React from "react";
import Nav from "./Nav.jsx";
import Button from "./Button.jsx";

function Header() {
  return (
    <div>
      <header className="bg-bg/95 backdrop-blur-sm border-b border-white/5 flex items-center justify-between px-6 md:px-12 py-5 w-full absolute top-0 z-50">
        <div className="text-primary font-spline text-2xl font-black tracking-tighter cursor-pointer">
          CINEPHILE
        </div>

        <div className="hidden md:flex items-center">
          <Nav />
        </div>
        <div className="flex items-center gap-4 md:gap-8">
          <button className="text-gris font-vietnam text-sm font-medium hover:text-primary transition-colors">
            Sign In
          </button>
          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="bg-primary text-bg font-bold px-6 py-2.5 rounded-lg text-sm hover:opacity-90 transition-opacity"
          >
            GET ACCESS
          </Button>
        </div>
      </header>
    </div>
  );
}

export default Header;
