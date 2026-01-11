import React, { useState } from 'react';
import { Code2, ExternalLink, Github, Globe, Database, Monitor, Layers } from 'lucide-react';
import connexus from "../assets/connexus.png";
// import techpulse from "../assets/techpulse.png"
const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Projects', icon: <Code2 className="w-4 h-4" /> },
    { id: 'fullstack', name: 'Full Stack', icon: <Monitor className="w-4 h-4" /> },
    { id: 'frontend', name: 'Frontend', icon: <Globe className="w-4 h-4" /> },
    { id: 'backend', name: 'Backend', icon: <Database className="w-4 h-4" /> },
    { id: 'Aiml', name: 'AI/Machine Learning', icon: <Layers className="w-4 h-4" /> },
  ];

  const projects = [
    {
      id: 1,
      title: "TravelGeeks",
      category: "fullstack",
      description: "A complete full stack solution with user authentication, maps integration, and admin dashboard.",
      technologies: ["EJS", "Node.js", "MongoDB", "Express", "Leaflet"],
      image: "/api/placeholder/600/400",
      demoUrl: "https://travelgeeks.onrender.com/listings",
      githubUrl: "https://github.com/ashutoshpatrodevops/travelgeeks",
      status: "Completed",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      id: 2,
      title: "TechPulse",
      category: "fullstack",
      description: "A personalized blog platform for creating, reading, and sharing posts.",
      technologies: ["MongoDB", "Express.js", "React", "Node.js", "Tailwind CSS"],
      image: "/api/placeholder/600/400",
      demoUrl: "https://techpulsearticles.vercel.app",
      githubUrl: "https://github.com/ashutoshpatrodevops/techpulse",
      status: "Completed",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      id: 3,
      title: "MuseMate",
      category: "fullstack With AI",
      description: "Museum ticket booking platform with real-time features.",
      technologies: ["MongoDB", "Express.js", "Node.js", "EJS", "Tailwind CSS"],
      image: "/api/placeholder/600/400",
      demoUrl: "https://github.com/ashutoshpatrodevops/Musemate",
      githubUrl: "https://github.com/ashutoshpatrodevops/Musemate",
      status: "In Progress",
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      id: 4,
      title: "VectorApex",
      category: "fullstack",
      description: "Stock trading and investment platform with a modern UI.",
      technologies: ["MongoDB", "Express.js", "React", "Node.js", "Chart.js"],
      image: "/api/placeholder/600/400",
      demoUrl: "https://vectorapex.vercel.app",
      githubUrl: "https://github.com/ashutoshpatrodevops/VectorApex-Frontend",
      status: "In progress",
      gradient: "from-emerald-500 to-teal-600"
    },
    {
      id: 5,
      title: "Connexus Conferencing Solutions",
      category: "fullstack",
      description: "A modern networking platform to connect people and ideas.",
      technologies: ["React", "Node.js", "Express.js", "MongoDB", "Socket.io", "Tailwind CSS"],
      image: connexus,
      demoUrl: "https://github.com/ashutoshpatrodevops/connexus-frontend",
      githubUrl: "https://github.com/username/connexus",
      status: "Completed",
      gradient: "from-pink-500 to-rose-600"
    },
    {
      id: 6,
      title: "Face Recognition System",
      category: "Aiml",
      description: "A modern Attendance management system built for seamless data management",
      technologies: ["Python", "OpenCV", "TensorFlow", "Flask", "MongoDB"],
      image: "/api/placeholder/600/400",
      demoUrl: "in progress",
      githubUrl: "inprogress",
      status: "inprogress",
      gradient: "from-orange-500 to-red-600"
    },
    {
      id: 7,
      title: "Weatherly",
      category: "frontend",
      description: "Smart weather management system that predicts weather for today as well as forecast 5 days data",
      technologies: ["React", "Tailwind CSS", "Weather API"],
      image: "/api/placeholder/600/400",
      demoUrl: "https://weathervector.vercel.app",
      githubUrl: "https://github.com/ashutoshpatrodevops/WeatherApp",
      status: "Completed",
      gradient: "from-cyan-500 to-blue-600"
    },

    {
      id: 8,
      title: "TaskForce",
      category: "frontend",
      description: "Smart kanban board with drag and drop fetaures",
      technologies: ["React", "Tailwind CSS"],
      image: "/api/placeholder/600/400",
      demoUrl: "https://task-force-pro.vercel.app/",
      githubUrl: "https://github.com/ashutoshpatrodevops/TaskForce",
      status: "Completed",
      gradient: "from-green-500 to-yellow-600"
    },
  ];

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  const getStatusColor = (status) => {
    return status === 'Completed'
      ? 'bg-green-500/90 text-white'
      : 'bg-yellow-500/90 text-white';
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-black min-h-screen transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl mb-6 shadow-lg">
            <Code2 className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A showcase of my recent work demonstrating full-stack development skills and modern technologies
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg scale-105'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 shadow-md border border-gray-200 dark:border-gray-700'
              }`}
            >
              {category.icon}
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative h-[450px] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02]"
            >
              {/* Background Image with Gradient */}
              {/* Background Image with fallback */}
<div className="absolute inset-0">
  {project.image && !project.image.includes('placeholder') ? (
    <img 
      src={project.image} 
      alt={project.title} 
      className="w-full h-full object-cover"
    />
  ) : (
    <div className={`w-full h-full bg-gradient-to-br ${project.gradient} flex items-center justify-center text-white/20 text-8xl font-bold`}>
      
    </div>
  )}
</div>
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30"></div>

              {/* Status Badge */}
              <div className="absolute top-4 right-4 z-10">
                <span className={`px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg ${getStatusColor(project.status)}`}>
                  {project.status}
                </span>
              </div>

              {/* Content at Bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                
                {/* Title */}
                <h3 className="text-2xl font-bold mb-3 group-hover:text-purple-300 transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-200 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-lg text-xs font-medium border border-white/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons - Show on Hover */}
                <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-white text-gray-900 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-200"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 transition-colors duration-200 border border-white/30"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-8 shadow-lg border border-purple-100 dark:border-gray-700">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Interested in My Work?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              These projects represent just a glimpse of what I can create. Let's discuss how I can help bring your ideas to life.
            </p>
            <a
              href="https://github.com/ashutoshpatrodevops"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <Github className="w-5 h-5" />
              View All on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;