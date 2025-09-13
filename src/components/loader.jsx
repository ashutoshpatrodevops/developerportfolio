import React from "react";

const Loader = ({ isVisible }) => {
  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-black transition-opacity duration-700 ease-out ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      {/* Main loader container */}
      <div className="flex flex-col items-center justify-center space-y-8">
        
        {/* Animated logo/brand area */}
        <div className="relative">
          {/* Outer rotating ring */}
          <div className="w-20 h-20 border-4 border-pink-200 dark:border-pink-800 rounded-full animate-spin">
            <div className="w-full h-full border-t-4 border-pink-500 rounded-full animate-pulse"></div>
          </div>
          
          {/* Inner pulsing dot */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-3 h-3 bg-pink-500 rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Loading text with typewriter effect */}
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent animate-pulse">
            Portfolio Loading...
          </h2>
          
          {/* Progress dots */}
          <div className="flex justify-center space-x-2 mt-4">
            <div className="w-2 h-2 bg-pink-500 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-pink-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-2 h-2 bg-pink-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
        </div>

        {/* Subtle progress bar */}
        <div className="w-64 h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-pink-500 to-purple-600 rounded-full animate-pulse"></div>
        </div>
      </div>

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-pink-300 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-16 w-24 h-24 border border-purple-300 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-20 left-20 w-20 h-20 border border-pink-300 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 right-32 w-28 h-28 border border-purple-300 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>
    </div>
  );
};

export default Loader;