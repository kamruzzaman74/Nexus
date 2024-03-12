import React from 'react';
import pic1 from '../photo/k.webp';

const LandingPage = () => {
  return (
    <div className="flex flex-col lg:flex-row bg-white">
      {/* Left side - Heading and Description */}
      <div className="lg:w-1/2 p-8 flex flex-col justify-center">
        <h1 className="text-5xl font-bold mb-6 text-gray-900 animate__animated animate__fadeInLeft">Businesses Prosper and Communities Thrive</h1>
        <p className="text-lg mb-8 text-gray-800 animate__animated animate__fadeInLeft">Empower Your Finances with Cutting-Edge Technology. From personalized budgeting solutions to secure digital banking services, we're committed to helping you achieve financial success.</p>
      </div>

      {/* Right side - Picture */}
      <div className="lg:w-1/2 relative overflow-hidden mr-0 animate__animated animate__fadeInRight">
        <img src={pic1} alt="Fintech Platform" className="w-full h-full object-cover transform scale-105 hover:scale-110 transition duration-500 ease-in-out rounded-lg shadow-lg" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-75 hover:opacity-0 transition duration-500 ease-in-out"></div>
      </div>
    </div>
  );
};

export default LandingPage;
