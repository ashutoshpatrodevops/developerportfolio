import React, { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import { FaGithub, FaLinkedinIn, FaFileDownload } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 md:px-20 pt-30 md:pt-19 bg-white dark:bg-black transition-colors duration-300"
    >
      {/* Main Content - Centered */}
      <div className="max-w-4xl mx-auto w-full">
        <div className={`text-center transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Greeting Badge */}
          {/* Greeting Badge - Live Project Link */}
          <a
            href="https://kermedix.in"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-4 py-2 mb-8 bg-white/80 dark:bg-gray-900/50 backdrop-blur-md rounded-full border border-emerald-500/30 dark:border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.1)] hover:shadow-[0_0_20px_rgba(16,185,129,0.2)] hover:scale-105 transition-all duration-300 group cursor-pointer"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <span className="text-sm font-semibold text-gray-700 dark:text-gray-200 flex items-center gap-2">
              Kermedix is Live
              <span className="text-emerald-500 group-hover:translate-x-1 transition-transform duration-300">
                →
              </span>
            </span>
          </a>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-800 dark:text-white mb-4 leading-tight">
            Hi, I'm{" "}
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-red-600">
              Ashutosh Patro
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-6 leading-relaxed max-w-2xl mx-auto">
            Transforming ideas into production-ready applications with cutting-edge technologies
          </p>

          {/* Typewriter Effect */}
          <div className="text-xl md:text-2xl font-semibold text-gray-700 dark:text-gray-200 min-h-[3rem] flex items-center justify-center mb-8">
            <span className="text-purple-600 dark:text-purple-400 mr-2">→</span>
            <Typewriter
              options={{
                strings: [
                  "DevOps Engineer",
                  "Full Stack Developer",
                  "Cloud Enthusiast",
                  "Problem Solver",
                  "Tech Blogger",
                ],
                autoStart: true,
                loop: true,
                delay: 80,
                deleteSpeed: 50,
              }}
            />
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a
              href="https://drive.google.com/file/d/10paMCA8MAucn0JrXZTAt8252hGVrJPok/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl shadow-lg font-semibold text-base overflow-hidden w-full sm:w-auto"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative flex items-center justify-center gap-2">
                <FaFileDownload className="text-xl" />
                Download Resume
              </span>
            </a>

            <a
              href="#contact"
              className="group px-8 py-4 bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-xl shadow-lg border-2 border-purple-600 hover:bg-purple-600 hover:text-white dark:hover:bg-purple-600 hover:scale-105 transition-all duration-300 font-semibold text-base w-full sm:w-auto"
            >
              <span className="flex items-center justify-center gap-2">
                Let's Connect
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </span>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">
              Connect with me:
            </span>
            <div className="flex gap-3">
              <a
                href="https://github.com/ashutoshpatrodevops"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center w-11 h-11 rounded-full bg-white dark:bg-gray-800 shadow-md border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-purple-500 hover:text-purple-600 hover:shadow-lg hover:scale-110 transition-all duration-300"
                aria-label="GitHub Profile"
              >
                <FaGithub className="text-xl" />
              </a>
              <a
                href="https://www.linkedin.com/in/ashutosh-patro-2054b7239"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center w-11 h-11 rounded-full bg-white dark:bg-gray-800 shadow-md border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-purple-500 hover:text-purple-600 hover:shadow-lg hover:scale-110 transition-all duration-300"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedinIn className="text-xl" />
              </a>
              <a
                href="https://x.com/CoderAshu"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center w-11 h-11 rounded-full bg-white dark:bg-gray-800 shadow-md border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-purple-500 hover:text-purple-600 hover:shadow-lg hover:scale-110 transition-all duration-300"
                aria-label="Twitter Profile"
              >
                <FaXTwitter className="text-xl" />
              </a>
              <a
                href="https://medium.com/@coderashu7847"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center w-11 h-11 rounded-full bg-white dark:bg-gray-800 shadow-md border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-purple-500 hover:text-purple-600 hover:shadow-lg hover:scale-110 transition-all duration-300"
                aria-label="Medium Blog"
              >
                <FaMedium className="text-xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;