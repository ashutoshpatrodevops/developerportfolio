import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import SmoothScroll from 'smooth-scroll';
import { useState, useEffect } from 'react';
import Header from "./components/Header"
import Home from "./components/Home"
import About from "./components/About"
import Education from "./components/Education"
import Skills from "./components/Skills"
import Projects from "./components/Project"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Loader from "./components/loader"
import { Analytics } from "@vercel/analytics/next"
function App() {
  const [loading, setLoading] = useState(true);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });

    // Initialize SmoothScroll
    new SmoothScroll('a[href*="#"]', {
      speed: 800,
      speedAsDuration: true,
      easing: 'easeInOutCubic',
    });

    // Start fade out process
    const fadeTimer = setTimeout(() => {
      setLoading(false);
    }, 2500); // Show loader for 2.5 seconds

    // Remove loader from DOM after fade completes
    const removeTimer = setTimeout(() => {
      setShowLoader(false);
    }, 3200); // Remove after fade transition (2.5s + 0.7s transition)

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  return (
    <>
      {showLoader && <Loader isVisible={loading} />}
      
      <div className={`transition-opacity duration-700 ${loading ? 'opacity-0' : 'opacity-100'}`}>
        <Header />
        <Home />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default App;