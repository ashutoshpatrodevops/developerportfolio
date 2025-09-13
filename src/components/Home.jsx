import React from "react";
import Typewriter from "typewriter-effect";
import { FaGithub, FaLinkedinIn, FaFileDownload } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-1 md:px-20 gap-10 md:gap-16 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-black transition-colors duration-300"
    >
      {/* Left: Image */}

      {/* Right: Text and Buttons */}
      <div className="text-center md:text-left max-w-2xl">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-800 dark:text-white mb-6 leading-tight">
          Hi, I'm{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
            Ashutosh Patro
          </span>
        </h1>

        <h2 className="text-2xl md:text-3xl font-medium text-gray-600 dark:text-gray-300 mb-6">
          I build things for the web & cloud
        </h2>

        <div className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-200 min-h-[4rem] flex items-center justify-center md:justify-start mb-8">
          <Typewriter
            options={{
              strings: [
                "Building Scalable Systems",
                "A DevOps Enthusiast",
                "A MERN Stack Developer",
                "An Open Source Enthusiast",
                "A Coder",
                "Cloud Expert",
              ],
              autoStart: true,
              loop: true,
              delay: 80,
              deleteSpeed: 50,
            }}
          />
        </div>

        {/* Action Buttons and Social Links */}
        <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-6 mt-8">
          {/* Download CV Button */}
          <a
            href="/Ashutosh_Patro_CV.pdf"
            download="Ashutosh_Patro_CV.pdf"
            className="px-8 py-3 flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl shadow-lg hover:shadow-xl hover:from-purple-600 hover:to-pink-600 transition-all duration-300 text-lg font-medium"
          >
            <FaFileDownload />
            Download CV
          </a>

          {/* Social Icons */}
          <div className="flex gap-6 mt-4 sm:mt-0">
            <a
              href="https://github.com/your-github-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:text-purple-500 hover:shadow-xl transition-all duration-300"
              aria-label="GitHub Profile"
            >
              <FaGithub className="text-2xl" />
            </a>
            <a
              href="https://linkedin.com/in/your-linkedin-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:text-purple-500 hover:shadow-xl transition-all duration-300"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedinIn className="text-2xl" />
            </a>
            <a
              href="https://medium.com/in/your-linkedin-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:text-purple-500 hover:shadow-xl transition-all duration-300"
              aria-label="Twitter Profile"
            >
              <FaXTwitter className="text-2xl" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
