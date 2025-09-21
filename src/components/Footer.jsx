import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-50 via-pink-50 to-blue-50 dark:from-[#0f0f23] dark:via-[#1b1b32] dark:to-[#0f0f23] shadow-2xl border border-purple-200/30 dark:border-purple-800/40 rounded-3xl mx-4 my-8 px-3 py-3 max-w-7xl mx-auto backdrop-blur-sm">
      <div className="flex flex-col gap-6">
        
        {/* Top Section: Name and tagline */}
        <div className="text-center">
          <div className="text-3xl md:text-4xl font-bold mb-2">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 dark:from-purple-400 dark:via-pink-400 dark:to-blue-400">
              &lt;Ashutosh / Patro&gt;
            </span>
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base font-medium">
            Building the future, one line of code at a time
          </p>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent dark:via-purple-800"></div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          {/* Social Icons */}
          <div className="flex space-x-6">
            {[
              { href: 'https://github.com/ashutoshpatrodevops', Icon: Github },
              { href: 'www.linkedin.com/in/ashutosh-patro-2054b7239', Icon: Linkedin },
              { href: 'https://x.com/CoderAshu', Icon: Twitter },
            ].map(({ href, Icon }, idx) => (
              <a
                key={idx}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center w-12 h-12 rounded-full bg-white/50 dark:bg-white/10 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-white/80 dark:hover:bg-white/20 hover:border-purple-300/50 hover:shadow-lg transition-all duration-300 transform hover:scale-110"
              >
                <Icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm">
            <span>© 2025 All Rights Reserved</span>
          </div>
        </div>

        {/* Optional: Nav Links */}
        <div className="text-center">
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500 dark:text-gray-400">
            <a href="#about" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200">About</a>
            <span className="text-gray-300 dark:text-gray-600">•</span>
            <a href="#project" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200">Projects</a>
            <span className="text-gray-300 dark:text-gray-600">•</span>
            <a href="#contact" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200">Contact</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

