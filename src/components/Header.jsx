import React, { useState } from "react";


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full backdrop-blur bg-white/30 dark:bg-gray-900/30 border-b border-white/20 dark:border-gray-700/20 z-50 transition-colors duration-300">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
              &lt;Ashutosh / Patro&gt;
            </span>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex space-x-8 text-gray-800 dark:text-gray-200 font-medium items-center">
           
            <a
              href="#home"
              className="relative text-gray-800 dark:text-gray-200 font-medium transition-all after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-pink-400 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300"
            >
              Home
            </a>
            <a
              href="#about"
              className="relative text-gray-800 dark:text-gray-200 font-medium transition-all after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-pink-400 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300"
            >
              About
            </a>
            <a
              href="#education"
              className="relative text-gray-800 dark:text-gray-200 font-medium transition-all after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-pink-400 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300"
            >
              Education
            </a>
            <a
              href="#skills"
              className="relative text-gray-800 dark:text-gray-200 font-medium transition-all after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-pink-400 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="relative text-gray-800 dark:text-gray-200 font-medium transition-all after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-pink-400 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300"
            >
              Project
            </a>
            <a
              href="#contact"
              className="relative text-gray-800 dark:text-gray-200 font-medium transition-all after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-pink-400 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300"
            >
              Contact
            </a>
            <a
              href="#blogs"
              className="relative text-gray-800 dark:text-gray-200 font-medium transition-all after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-pink-400 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300"
            >
              Blogs
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative w-8 h-8 flex flex-col justify-center items-center focus:outline-none md:hidden"
            >
              <span
                className={`absolute h-0.5 w-6 bg-gray-800 dark:bg-gray-200 transition-all duration-300 ease-in-out ${
                  isMenuOpen ? "rotate-45" : "translate-y-[-0.35rem]"
                }`}
              ></span>
              <span
                className={`absolute h-0.5 w-6 bg-gray-800 dark:bg-gray-200 transition-all duration-300 ease-in-out ${
                  isMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              ></span>
              <span
                className={`absolute h-0.5 w-6 bg-gray-800 dark:bg-gray-200 transition-all duration-300 ease-in-out ${
                  isMenuOpen ? "-rotate-45" : "translate-y-[0.35rem]"
                }`}
              ></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      <div className={`${isMenuOpen ? "block" : "hidden"} md:hidden bg-white/40 dark:bg-gray-900/40 backdrop-blur-md border-t border-white/30 dark:border-gray-700/30 shadow-lg transition-colors duration-300`}>
        <a href="#home" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:text-pink-500 transition">Home</a>
        <a href="#about" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:text-pink-500 transition">About</a>
        <a href="#education" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:text-pink-500 transition">Education</a>
        <a href="#projects" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:text-pink-500 transition">Projects</a>
        <a href="#contact" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:text-pink-500 transition">Contact</a>
        <a href="#blogs" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:text-pink-500 transition">Blogs</a>
        
        <div className="px-4 py-2">
          
        </div>
      </div>
    </header>
  );
};

export default Header;