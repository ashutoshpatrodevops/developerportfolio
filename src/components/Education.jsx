import React, { useEffect } from 'react';
import { GraduationCap, Calendar, MapPin, Award, BookOpen, Star } from 'lucide-react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const fadeInUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const slideInFromLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
};

const slideInFromRight = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const drawLine = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 1.5, ease: 'easeInOut', delay: 0.5 },
  },
};

const Education = () => {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });
  const [headerRef, headerInView] = useInView({ threshold: 0.5, triggerOnce: true });
  const controls = useAnimation();
  const headerControls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [inView, controls]);

  useEffect(() => {
    if (headerInView) {
      headerControls.start('visible');
    }
  }, [headerInView, headerControls]);

  const educationData = [
    {
      id: 1,
      degree: "Bachelors of Technology (Final Year)",
      institution: "NIST University",
      location: "Berhampur, Odisha, India",
      duration: "2022 - 2026",
      gpa: "9.34/10.0",
      status: "Ongoing",
      specialization: "Computer Science and Engineering",
      coursework: [
        "Advanced Algorithms", "Machine Learning", "Deep Learning", "Data structures", "Python", "Object Oriented Programming", "Image Processing Techniques", "Operating System", "Computer Organization and Architecture"
      ],
      achievements: ["Top 10 In 2022 batch", "Core member of NIST Data Science Club","GDG DevOps Lead'25"],
    },
    {
      id: 2,
      degree: "Intermediate",
      institution: "Khallikote Higher Secondary School",
      location: "Berhampur,Odisha,India",
      duration: "2020-2022",
      gpa: "84%",
      status: "completed",
      specialization: "Science",
      coursework: ["Physics", "Chemistry", "Maths", "Biology"],
      achievements: ["First Class with Distinction"],
    },
    {
      id: 3,
      degree: "10th",
      institution: "Government High School",
      location: "Berhampur,Odisha,India",
      duration: "2019-2020",
      gpa: "84%",
      status: "completed",
      specialization: "Science",
      coursework: ["Physics", "Chemistry", "Maths", "Biology", "Odia", "English"],
      achievements: ["First Class with Distinction"],
    },
  ];

  return (
    <section id='education' className="py-16 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-black min-h-screen relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          initial="hidden"
          animate={headerControls}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-full mb-6 shadow-lg">
            <GraduationCap className="w-8 h-8 text-white" />
          </div>
          
          <motion.h2 
            variants={fadeInUpVariant}
            className="text-4xl font-bold text-gray-900 dark:text-white mb-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent transition-colors duration-300"
          >
            Education
          </motion.h2>
          
          <motion.p 
            variants={fadeInUpVariant}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300"
          >
            My academic journey and continuous learning path in technology and innovation
          </motion.p>
        </motion.div>

        {/* Education Timeline */}
        <div ref={ref} className="space-y-16 relative">
          {/* Animated timeline line */}
          <motion.div 
            className="absolute left-8 top-16 w-0.5 bg-gradient-to-b from-blue-400 to-purple-400 dark:from-blue-300 dark:to-purple-300 opacity-30 dark:opacity-40"
            style={{ height: `${(educationData.length - 1) * 300}px` }}
            initial={{ height: 0 }}
            animate={inView ? { height: `${(educationData.length - 1) * 1000}px` } : { height: 0 }}
            transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
          />

          {educationData.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial="hidden"
              animate={controls}
              variants={fadeInUpVariant}
              transition={{ delay: index * 0.3 }}
              className="relative"
            >
              <div className="flex items-start space-x-6">
                <motion.div
                  variants={scaleIn}
                  whileHover={{ 
                    scale: 1.2, 
                    rotate: [0, -10, 10, 0],
                    transition: { duration: 0.5 }
                  }}
                  className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-400 dark:to-purple-500 rounded-full flex items-center justify-center shadow-lg relative z-10"
                >
                  <GraduationCap className="w-8 h-8 text-white" />
                </motion.div>

                <motion.div
                  variants={index % 2 === 0 ? slideInFromLeft : slideInFromRight}
                  whileHover={{ 
                    y: -5,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                    transition: { duration: 0.3 }
                  }}
                  className="flex-1 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl dark:shadow-gray-900/20 transition-all duration-300 p-8 border border-gray-100 dark:border-gray-700 backdrop-blur-sm bg-white/90 dark:bg-gray-800/90"
                >
                  <div className="grid md:grid-cols-3 gap-6">
                    <motion.div 
                      className="md:col-span-2"
                      variants={staggerContainer}
                    >
                      <motion.h3 
                        variants={fadeInUpVariant}
                        className="text-2xl font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-300"
                      >
                        {edu.degree}
                      </motion.h3>
                      
                      <motion.p 
                        variants={fadeInUpVariant}
                        className="text-lg text-blue-600 dark:text-blue-400 font-semibold mb-1 transition-colors duration-300"
                      >
                        {edu.institution}
                      </motion.p>
                      
                      <motion.div 
                        variants={fadeInUpVariant}
                        className="flex flex-wrap items-center gap-4 text-gray-600 dark:text-gray-300 transition-colors duration-300"
                      >
                        <motion.div 
                          className="flex items-center"
                          whileHover={{ scale: 1.05 }}
                        >
                          <MapPin className="w-4 h-4 mr-1" />
                          {edu.location}
                        </motion.div>
                        <motion.div 
                          className="flex items-center"
                          whileHover={{ scale: 1.05 }}
                        >
                          <Calendar className="w-4 h-4 mr-1" />
                          {edu.duration}
                        </motion.div>
                      </motion.div>
                      
                      {edu.specialization && (
                        <motion.div 
                          variants={fadeInUpVariant}
                          className="mt-4"
                        >
                          <motion.span 
                            whileHover={{ scale: 1.05 }}
                            className="inline-block bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium transition-colors duration-300"
                          >
                            {edu.specialization}
                          </motion.span>
                        </motion.div>
                      )}
                    </motion.div>

                    <motion.div 
                      variants={scaleIn}
                      className="space-y-4 text-center"
                    >
                      <motion.div 
                        whileHover={{ scale: 1.05 }}
                        className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 rounded-lg p-4 border border-green-100 dark:border-green-700/50 transition-colors duration-300"
                      >
                        <div className="flex justify-center mb-2">
                          <Star className="w-5 h-5 text-yellow-500 mr-1" />
                          <span className="font-semibold text-gray-900 dark:text-white transition-colors duration-300">GPA</span>
                        </div>
                        <motion.p 
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: index * 0.3 + 0.5, type: "spring", stiffness: 200 }}
                          className="text-2xl font-bold text-green-600 dark:text-green-400 transition-colors duration-300"
                        >
                          {edu.gpa}
                        </motion.p>
                      </motion.div>

                      <motion.div
                        whileHover={{ scale: 1.05 }}
                      >
                        <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
                          edu.status === 'completed' 
                            ? 'bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/50 dark:to-emerald-900/50 text-green-800 dark:text-green-200' 
                            : 'bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900/50 dark:to-cyan-900/50 text-blue-800 dark:text-blue-200'
                        }`}>
                          {edu.status === 'completed' ? 'Completed' : 'In Progress'}
                        </span>
                      </motion.div>
                    </motion.div>
                  </div>

                  <motion.div 
                    variants={staggerContainer}
                    className="mt-6 grid md:grid-cols-2 gap-6"
                  >
                    <motion.div variants={fadeInUpVariant}>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center transition-colors duration-300">
                        <BookOpen className="w-4 h-4 mr-2" />
                        Key Coursework
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.coursework.map((course, idx) => (
                          <motion.span
                            key={idx}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.3 + idx * 0.1 }}
                            whileHover={{ 
                              scale: 1.1,
                              backgroundColor: "rgb(59 130 246)",
                              color: "white",
                              transition: { duration: 0.2 }
                            }}
                            className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-sm cursor-pointer transition-all duration-200"
                          >
                            {course}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>

                    <motion.div variants={fadeInUpVariant}>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center transition-colors duration-300">
                        <Award className="w-4 h-4 mr-2" />
                        Achievements
                      </h4>
                      <ul className="space-y-1">
                        {edu.achievements.map((achievement, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.3 + idx * 0.2 }}
                            whileHover={{ x: 5 }}
                            className="text-gray-700 dark:text-gray-300 text-sm flex items-start transition-colors duration-300"
                          >
                            <motion.span 
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{ duration: 2, repeat: Infinity, delay: idx * 0.5 }}
                              className="w-1.5 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 rounded-full mt-2 mr-2 flex-shrink-0"
                            />
                            {achievement}
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;