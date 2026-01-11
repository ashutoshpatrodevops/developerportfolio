import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, BookOpen, Star } from 'lucide-react';

const Education = () => {
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
      location: "Berhampur, Odisha, India",
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
      location: "Berhampur, Odisha, India",
      duration: "2019-2020",
      gpa: "84%",
      status: "completed",
      specialization: "Science",
      coursework: ["Physics", "Chemistry", "Maths", "Biology", "Odia", "English"],
      achievements: ["First Class with Distinction"],
    },
  ];

  return (
    <section id='education' className="py-20 bg-white dark:bg-black min-h-screen transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl mb-6 shadow-lg">
            <GraduationCap className="w-8 h-8 text-white" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Education
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My academic journey and continuous learning path in technology
          </p>
        </div>

        {/* Education Cards */}
        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <div
              key={edu.id}
              className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden"
            >
              <div className="p-6 md:p-8">
                
                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div className="flex-1">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center shadow-md">
                        <GraduationCap className="w-6 h-6 text-white" />
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                          {edu.degree}
                        </h3>
                        
                        <p className="text-lg text-purple-600 dark:text-purple-400 font-semibold mb-3">
                          {edu.institution}
                        </p>
                        
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            <span>{edu.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{edu.duration}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {edu.specialization && (
                      <div className="mb-4">
                        <span className="inline-block bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 px-4 py-1.5 rounded-full text-sm font-medium">
                          {edu.specialization}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* GPA and Status */}
                  <div className="flex md:flex-col gap-4 md:gap-3 md:items-end">
                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl px-6 py-3 border border-green-200 dark:border-green-800/50 text-center">
                      <div className="flex items-center justify-center gap-1 mb-1">
                        <Star className="w-4 h-4 text-yellow-500" />
                        <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">GPA</span>
                      </div>
                      <p className="text-2xl font-bold text-green-600 dark:text-green-400">
                        {edu.gpa}
                      </p>
                    </div>

                    <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap ${
                      edu.status === 'completed' 
                        ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300' 
                        : 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300'
                    }`}>
                      {edu.status === 'completed' ? '✓ Completed' : '⟳ In Progress'}
                    </span>
                  </div>
                </div>

                {/* Coursework and Achievements */}
                <div className="grid md:grid-cols-2 gap-6 pt-6 border-t border-gray-100 dark:border-gray-700">
                  
                  {/* Coursework */}
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-purple-600" />
                      Key Coursework
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course, idx) => (
                        <span
                          key={idx}
                          className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-lg text-sm hover:bg-purple-600 hover:text-white transition-colors duration-200"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                      <Award className="w-4 h-4 text-purple-600" />
                      Achievements
                    </h4>
                    <ul className="space-y-2">
                      {edu.achievements.map((achievement, idx) => (
                        <li
                          key={idx}
                          className="text-gray-700 dark:text-gray-300 text-sm flex items-start gap-2"
                        >
                          <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-1.5 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;