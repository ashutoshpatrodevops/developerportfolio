import React, { useState } from 'react';
import { Code2, ExternalLink, Github, Globe, Database, Monitor, Layers } from 'lucide-react';

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
      longDescription: "Full-featured travel assistant platform with user registration, product catalog, secure payments via Stripe(Coming soon), order management",
      technologies: ["EJS", "Node.js", "MongoDB", "Express", "Leaflet"],
      image: "/api/placeholder/400/250",
      demoUrl: "https://travelgeeks.onrender.com/listings",
      githubUrl: "https://github.com/ashutoshpatrodevops/travelgeeks",
      status: "Completed",
      gradient: "from-blue-500 to-purple-600"
    },
    {
  id: 2,
  title: "TechPulse",
  category: "Full Stack",
  description: "A personalized blog platform for creating, reading, and sharing posts.",
  longDescription: "TechPulse is a modern full-stack blog platform built with the MERN stack. It features full CRUD functionality for blogs, comments, and user accounts, with authentication, a responsive design, and a smooth user experience.",
  technologies: ["MongoDB", "Express.js", "React", "Node.js", "Tailwind CSS"],
  image: "/api/placeholder/400/250",
  demoUrl: "https://techpulsearticles.vercel.app",   // replace with your actual deployed link
  githubUrl: "https://github.com/ashutoshpatrodevops/techpulse", // replace with your actual repo
  status: "Completed",
  gradient: "from-purple-500 to-pink-600"
},
    {
  id: 3,
  title: "MuseMate",
  category: "Full Stack",
  description: "Museum ticket booking platform with real-time features.",
  longDescription: "MuseMate is a full-stack web application for seamless museum ticket booking. It includes user authentication, responsive glassmorphic design, booking management, reviews, watchlists, dashboards, and upcoming real-time payment integration. Built with Tailwind CSS and EJS for a modern yet simple user experience.",
  technologies: ["MongoDB", "Express.js", "Node.js", "EJS", "Tailwind CSS"],
  image: "/api/placeholder/400/250",
  demoUrl: "https://musemate-demo.com", // replace with actual deployed link
  githubUrl: "https://github.com/username/musemate", // replace with your repo link
  status: "In Progress",
  gradient: "from-blue-500 to-indigo-600"
},
   {
  id: 4,
  title: "VectorApex",
  category: "Full Stack",
  description: "Stock trading and investment platform with a modern UI.",
  longDescription: "VectorApex is a Zerodha-inspired stock trading platform that enables users to manage investments seamlessly. It includes features like user authentication, real-time market data visualization, portfolio management, trade execution, and analytics dashboards. Built with a focus on performance, scalability, and a sleek, intuitive interface.",
  technologies: ["MongoDB", "Express.js", "React", "Node.js", "Chart.js"],
  image: "/api/placeholder/400/250",
  demoUrl: "inprogress", // replace with actual deployed link
  githubUrl: "inprogress", // replace with your repo link
  status: "In Progress",
  gradient: "from-emerald-500 to-teal-600"
}
,
    {
  id: 5,
  title: "Connexus",
  category: "Full Stack",
  description: "A modern networking platform to connect people and ideas.",
  longDescription: "Connexus is a full-stack social networking platform designed to help users connect, collaborate, and share content seamlessly. It features user authentication, profile customization, posts with media support, real-time chat, and community building tools. Built with scalability in mind, Connexus integrates responsive design, secure APIs, and real-time communication for a smooth user experience.",
  technologies: ["React", "Node.js", "Express.js", "MongoDB", "Socket.io", "Tailwind CSS"],
  image: "in progress",
  demoUrl: "in progress", // replace with actual deployed link
  githubUrl: "https://github.com/username/connexus", // replace with your repo link
  status: "In Progress",
  gradient: "from-pink-500 to-rose-600"
},
  {
  id: 6,
  title: "Face recognition System",
  category: "AI/Machine Learning",
  description: "A modern Attendance management system built for seamless data management",
  longDescription: "Educational Institution can use this softwares",
  technologies: ["React", "Node.js", "Express.js", "MongoDB", "Socket.io", "Tailwind CSS"],
  image: "completed",
  demoUrl: "completed", // replace with actual deployed link
  githubUrl: "completed", // replace with your repo link
  status: "In Progress",
  gradient: "from-pink-500 to-rose-600"
},
{
  id: 7,
  title: "Weatherly",
  category: "Frontend",
  description: "smart weather management system that predicts weather for today as well as forecast 5 days data",
  longDescription: "Weatherly is a versatile weather aplication",
  technologies: ["React","Tailwind CSS", "Weather API"],
  image: "completed",
  demoUrl: "completed", // replace with actual deployed link
  githubUrl: "completed", // replace with your repo link
  status: "In Progress",
  gradient: "from-pink-500 to-rose-600"
}
  ];

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  const getStatusColor = (status) => {
    return status === 'Completed'
      ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 border border-green-200 dark:border-green-700'
      : 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 border border-yellow-200 dark:border-yellow-700';
  };

  return (
    <section id="project" className="py-6 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-black min-h-screen transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-full mb-6 shadow-lg">
            <Code2 className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
            A showcase of my recent work demonstrating full-stack development skills and modern technologies
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg transform scale-105'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 shadow-md hover:shadow-lg border border-gray-200 dark:border-gray-600'
              }`}
            >
              {category.icon}
              <span className="ml-2">{category.name}</span>
            </button>
          ))}
        </div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl dark:shadow-gray-900/30 dark:hover:shadow-gray-900/50 transition-all duration-500 overflow-hidden border border-gray-100 dark:border-gray-700 transform hover:-translate-y-2"
            >
              {/* Image + Overlay */}
              <div className="relative overflow-hidden">
                <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                  <div className="text-white text-6xl font-bold opacity-20">{project.id}</div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0  bg-opacity-50 flex items-center justify-center space-x-4 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 bg-white dark:bg-gray-200 text-gray-900 dark:text-gray-800 rounded-full font-medium hover:bg-gray-100 dark:hover:bg-gray-300 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Deployment
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-full font-medium hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </a>
                </div>  

                {/* Status */}
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium transition-colors duration-300 ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Description Toggle */}
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed group-hover:hidden transition-colors duration-300">
                  {project.description}
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed hidden group-hover:block transition-colors duration-300">
                  {project.longDescription}
                </p>
                  
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-100 dark:border-gray-700 transition-colors duration-300">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
              Interested in My Work?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto transition-colors duration-300">
              These projects represent just a glimpse of what I can create. Let's discuss how I can help bring your ideas to life with cutting-edge technology and clean, efficient code.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
  <a
    href="https://github.com/ashutoshpatrodevops" 
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
  >
    <Github className="w-5 h-5 mr-2" />
    View All on GitHub
  </a>
</div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;