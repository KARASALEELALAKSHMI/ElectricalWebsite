import React, { useState } from 'react';
import {
  projectsBg,
  smartAgriImg,
  energyMonitorImg,
  homeAutomationImg,
  evChargerImg,
} from '../assets/assets';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Smart Agriculture',
      image: smartAgriImg,
      description: 'Innovative solutions for sustainable farming practices.',
      fullDetails:
        'This Smart Agriculture system integrates IoT sensors to monitor soil moisture, humidity, and temperature, enabling precise irrigation and crop management. It reduces water wastage and increases yield efficiency.',
    },
    {
      id: 2,
      title: 'Energy Monitoring',
      image: energyMonitorImg,
      description: 'Real-time energy usage and optimization solutions.',
      fullDetails:
        'Our energy monitoring solution captures real-time data, analyzes usage trends, and identifies inefficiencies, helping users optimize electricity consumption for homes and industries.',
    },
    {
      id: 3,
      title: 'Home Automation',
      image: homeAutomationImg,
      description: 'Seamless automation for smarter living.',
      fullDetails:
        'Automate lighting, appliances, security, and more using smart devices. Our system ensures convenience, security, and energy savings, all controlled from your smartphone.',
    },
    {
      id: 4,
      title: 'EV Charger',
      image: evChargerImg,
      description: 'Efficient electric vehicle charging stations.',
      fullDetails:
        'We provide fast and safe EV charging solutions tailored for homes and commercial spaces, compatible with major electric vehicle brands and standards.',
    },
  ];

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <section
      id="projects"
      className="py-16 px-6 text-white"
      style={{
        backgroundImage: `url(${projectsBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="bg-black/60 p-8 rounded-xl">
        <h2 className="text-3xl font-bold text-center mb-10">Our Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => handleProjectClick(project)}
              className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl transition"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-900">{project.title}</h3>
                <p className="text-sm text-gray-700">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center px-4">
          <div className="bg-white rounded-xl max-w-xl w-full p-6 relative">
            <button
              className="absolute top-2 right-4 text-2xl text-gray-500 hover:text-black"
              onClick={handleCloseModal}
            >
              &times;
            </button>
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-64 object-cover rounded-md mb-4"
            />
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              {selectedProject.title}
            </h3>
            <p className="text-gray-700">{selectedProject.fullDetails}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
