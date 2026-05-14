import React from "react";
import { Link, useLocation } from "react-router";
import { useEffect, useState } from "react";

const MOBILE_BREAKPOINT = 768;

function Nav() {
  const { pathname } = useLocation();
  const isActive = (path) => pathname === path;

  const [isMobile, setIsMobile] = useState(
    window.innerWidth < MOBILE_BREAKPOINT,
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const baseClasses =
    "left-0 right-0 z-50 flex items-center bg-bg font-vietnam px-6 py-4 transition-colors duration-300";
  const positionClasses = isMobile
    ? "fixed bottom-0 border-t border-gray-200 justify-around"
    : "top-0 justify-start gap-12";

  const activeStyle = "text-primary relative transition-all";
  const inactiveStyle = "text-gris hover:text-text transition-all";

  return (
    <>
      {/* NAVEGACIÓN DESKTOP (Se integra en el centro del Header) */}
      <nav className={`${baseClasses} ${positionClasses}`}>
        <Link
          to="/"
          className={`${isActive("/") ? activeStyle : inactiveStyle} text-sm font-medium tracking-wide`}
        >
          Movies
          {isActive("/") && (
            <div className="absolute -bottom-1 left-0 h-[2px] w-full bg-primary shadow-[0_0_8px_rgba(0,244,254,0.6)]" />
          )}
        </Link>
        <Link
          to="/pricing"
          className={`${isActive("/pricing") ? activeStyle : inactiveStyle} text-sm font-medium tracking-wide`}
        >
          Pricing
          {isActive("/pricing") && (
            <div className="absolute -bottom-1 left-0 h-[2px] w-full bg-primary shadow-[0_0_8px_rgba(0,244,254,0.6)]" />
          )}
        </Link>
        <Link
          to="/contact"
          className={`${isActive("/contact") ? activeStyle : inactiveStyle} text-sm font-medium tracking-wide`}
        >
          Contact
          {isActive("/contact") && (
            <div className="absolute -bottom-1 left-0 h-[2px] w-full bg-primary shadow-[0_0_8px_rgba(0,244,254,0.6)]" />
          )}
        </Link>
      </nav>
    </>
  );
}

export default Nav;
