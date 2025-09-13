import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import aboutImg from "../assets/developer.png";

const About = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      id="about"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={fadeInUp}
      className="flex items-center justify-center px-3 py-3 bg-gradient-to-br from-gray-50"
    >
      <div className="max-w-5xl w-full flex flex-col md:flex-row items-center gap-12">
        {/* Left: Image */}
        <div className="flex-1 flex justify-center">
          <div className="w-60 h-60 md:w-72 md:h-72 ">
            <img
              src={aboutImg}
              alt="Full Stack Developer Ashutosh Patro"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right: Text */}
        <div className="flex-1 text-gray-800">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-3">
            About Me
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-gray-700">
            <strong className="text-gray-900">Hi! I'm Ashutosh Patro</strong>, a Full Stack Developer & DevOps Enthusiast from Odisha, India. I’m driven by a passion for clean, scalable code and a love for solving real-world problems through technology. Whether it's frontend polish or backend logic, I aim to build solutions that are both elegant and efficient.
          </p>
        </div>
      </div>
      <section class="w-full overflow-hidden">
  <div id="scroller">
                <div id="scroller-in">
                   <h4>#Web Developement</h4>
                    <h4>#DevOps</h4>
                    <h4>#BackEnd</h4>
                    <h4>#UI/UX</h4>
                    <h4>#Turning Your Ideas Into Reality</h4>
                </div>
                <div id="scroller-in">
                    <h4>#Web Developement</h4>
                    <h4>#DevOps</h4>
                    <h4>#BackEnd</h4>
                    <h4>#UI/UX</h4>
                    <h4>#Turning Your Ideas Into Reality</h4>
                </div>
            </div>
</section> 
    </motion.section>
  );
};

export default About;
