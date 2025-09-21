import React from 'react';
import {
  Brain,
  Database,
  Globe,
  Cloud,
  Code,
  Server,
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6 text-white" />,
      color: "bg-gradient-to-r from-blue-400 to-yellow-500",
      skills: [
        { name: "Java", level: 90, description: "Data Structures and Algorithms" },
        { name: "C", level: 75, description: "Data Structures and Algorithms" },
        { name: "Python", level: 80, description: "Machine Learning" },
        { name: "JavaScript", level: 80, description: "For website Logics and Servers" },
      ]
    },
    {
      title: "Frontend Development",
      icon: <Globe className="w-6 h-6 text-white" />,
      color: "bg-gradient-to-r from-blue-400 to-cyan-500",
      skills: [
        { name: "React", level: 80, description: "Component-based UI development" },
        { name: "Next.js", level: 80, description: "Full-stack React framework" },
        { name: "JavaScript", level: 88, description: "Modern ES6+ development" },
        { name: "CSS", level: 82, description: "Responsive design & animations" }
      ]
    },
    {
      title: "Backend Development",
      icon: <Server className="w-6 h-6 text-white" />,
      color: "bg-gradient-to-r from-green-400 to-emerald-500",
      skills: [
        { name: "Node.js", level: 87, description: "Server-side JavaScript runtime" },
        { name: "Express", level: 85, description: "JS based Web application framework" },
      ]
    },
    {
      title: "Database & Storage",
      icon: <Database className="w-6 h-6 text-white" />,
      color: "bg-gradient-to-r from-purple-400 to-pink-500",
      skills: [
        { name: "MongoDB", level: 86, description: "NoSQL document database" },
        { name: "MySQL", level: 80, description: "Relational Database" }
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="w-6 h-6 text-white" />,
      color: "bg-gradient-to-r from-orange-400 to-red-500",
      skills: [
        { name: "AWS", level: 60, description: "Amazon Web Services" },
        { name: "Google Cloud", level: 70, description: "Google Cloud Platform" },
        { name: "Docker", level: 80, description: "Containerization platform" },
        { name: "Kubernetes", level: 60, description: "Containerization orchestration" }
      ]
    },
  ];

  return (
    <section id='skills' className="py-16 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-black min-h-screen relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-full mb-6 shadow-lg">
            <Brain className="w-8 h-8 text-white" />
          </div>

          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Expertise
          </h2>

          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A snapshot of my technical proficiencies across frontend, backend, and cloud technologies.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 mb-12">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl border border-gray-100 dark:border-gray-700 flex flex-col relative overflow-hidden transition-colors duration-300"
            >
              {/* Card background gradient overlay */}
              <div className={`absolute inset-0 ${category.color} rounded-2xl opacity-5`} />

              <div className="flex items-center mb-4 relative z-10">
                <div className={`inline-flex items-center justify-center w-10 h-10 ${category.color} rounded-xl mr-3 shadow-lg`}>
                  {category.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-3 flex-grow relative z-10">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                        {skill.name}
                      </span>
                      <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>

                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                      <div
                        className={`h-full rounded-full ${category.color}`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>

                    {skill.description && (
                      <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                        {skill.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>

              {/* Static indicator */}
              <div className="absolute top-4 right-4 w-3 h-3 bg-gradient-to-r from-green-400 to-blue-500 dark:from-green-600 dark:to-blue-700 rounded-full opacity-60" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
