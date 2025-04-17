import React from 'react';
import Navbar from './Navbar';

const About = () => {
  return (
    <div 
      id="About"
      className="min-h-screen bg-cover bg-center flex items-center justify-center w-full overflow-hidden bg-white py-16"
    >
      <div className="container mx-auto text-center px-4">
        <Navbar/>
        <h2 className="text-4xl sm:text-5xl font-bold text-black-800 mb-6">
          About Our Store
        </h2>
        <p className="text-lg sm:text-xl text-gray-700 mb-4">
          Welcome to India’s trusted destination for high-quality electronics, robotics parts, and DIY components.
        </p>
        <p className="text-lg sm:text-xl text-gray-700 mb-6">
          Whether you are working on a school project, building a robot, or developing a smart home device, we provide everything you need
          to turn your ideas into reality—from microcontrollers to motors and sensors.
        </p>
        <h3 className="text-2xl font-semibold text-black-600 mb-4">
          Why Shop With Us?
        </h3>
        <ul className="list-disc list-inside text-left text-gray-700 text-lg">
          <li>Wide range of products including Arduino, Raspberry Pi, and IoT modules.</li>
          <li>Fast and reliable delivery across India.</li>
          <li>High-quality components with affordable pricing.</li>
          <li>Dedicated customer support and technical assistance.</li>
          <li>Perfect for students, hobbyists, makers, and professionals.</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
