import React, { useState, useEffect } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-4 sm:px-6 lg:px-8 pt-4 pointer-events-none">
      <nav
        className={`max-w-5xl mx-auto rounded-full backdrop-blur-md transition-all duration-300 pointer-events-auto ${
          isScrolled
            ? "bg-white/80 dark:bg-gray-900/80 shadow-lg shadow-purple-500/10"
            : "bg-white/60 dark:bg-gray-900/60 shadow-md"
        } border border-white/20 dark:border-gray-700/30`}
      >
        <div className="flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <div className="text-xl sm:text-2xl font-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-red-500">
              &lt;Ashutosh / Patro&gt;
            </span>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-1">
            <a
              href="#home"
              className="px-4 py-2 rounded-full text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white transition-all duration-300"
            >
              Home
            </a>
            <a
              href="#about"
              className="px-4 py-2 rounded-full text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white transition-all duration-300"
            >
              About
            </a>
            <a
              href="#education"
              className="px-4 py-2 rounded-full text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white transition-all duration-300"
            >
              Education
            </a>
            <a
              href="#skills"
              className="px-4 py-2 rounded-full text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white transition-all duration-300"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="px-4 py-2 rounded-full text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white transition-all duration-300"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="px-4 py-2 rounded-full text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white transition-all duration-300"
            >
              Contact
            </a>
            <a
              href="https://techpulsearticles.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 px-5 py-2 rounded-full text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-md hover:shadow-lg transition-all duration-300"
            >
              Blogs
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden relative w-10 h-10 flex flex-col justify-center items-center focus:outline-none rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle menu"
          >
            <span
              className={`absolute h-0.5 w-5 bg-gray-800 dark:bg-gray-200 transition-all duration-300 ease-in-out ${
                isMenuOpen ? "rotate-45" : "-translate-y-1.5"
              }`}
            ></span>
            <span
              className={`absolute h-0.5 w-5 bg-gray-800 dark:bg-gray-200 transition-all duration-300 ease-in-out ${
                isMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`absolute h-0.5 w-5 bg-gray-800 dark:bg-gray-200 transition-all duration-300 ease-in-out ${
                isMenuOpen ? "-rotate-45" : "translate-y-1.5"
              }`}
            ></span>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-4 pb-4 pt-2 space-y-1 border-t border-gray-200/50 dark:border-gray-700/50 mt-2">
            <a
              href="#home"
              onClick={() => setIsMenuOpen(false)}
              className="block px-4 py-2.5 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white transition-all duration-300 font-medium"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={() => setIsMenuOpen(false)}
              className="block px-4 py-2.5 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white transition-all duration-300 font-medium"
            >
              About
            </a>
            <a
              href="#education"
              onClick={() => setIsMenuOpen(false)}
              className="block px-4 py-2.5 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white transition-all duration-300 font-medium"
            >
              Education
            </a>
            <a
              href="#skills"
              onClick={() => setIsMenuOpen(false)}
              className="block px-4 py-2.5 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white transition-all duration-300 font-medium"
            >
              Skills
            </a>
            <a
              href="#projects"
              onClick={() => setIsMenuOpen(false)}
              className="block px-4 py-2.5 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white transition-all duration-300 font-medium"
            >
              Projects
            </a>
            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="block px-4 py-2.5 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white transition-all duration-300 font-medium"
            >
              Contact
            </a>
            <a
              href="https://techpulsearticles.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
              className="block px-4 py-2.5 rounded-lg text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all duration-300 font-medium text-center mt-2"
            >
              Blogs
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;