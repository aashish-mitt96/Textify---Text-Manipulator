import React from "react";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/700.css";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-blue-50 backdrop-blur-md shadow-sm font-[Poppins]">
      <div className="max-w-7xl mx-auto px-6 py-2 relative">
        <div className="absolute top-1 left-5">
          <img
            src={logo}
            alt="Textify Logo"
            className="h-12 w-12 transition-transform duration-300 hover:rotate-50"
          />
        </div>

        <div className="flex flex-col items-center justify-center text-center h-10">
          <h1 className="hidden md:block text-2xl font-extrabold text-blue-900 drop-shadow-sm tracking-wide">
            Textify - Text Manipulation
          </h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
