import React from 'react';
import { FiSettings, FiTarget, FiTrendingUp } from 'react-icons/fi';

const Bus= () => {
  return (
    <div className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white">Australian Business Consulting Services</h2>
          <p className="mt-4 text-lg lg:text-xl text-white">Unlock the potential of your business with our expert consulting services</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Strategy Consulting */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <FiSettings className="text-6xl text-blue-500 mx-auto" />
            <h3 className="text-xl lg:text-2xl font-semibold mt-4 mb-2">Strategy Consulting</h3>
            <p className="text-lg lg:text-xl text-gray-700">Develop strategic plans and initiatives to drive growth and achieve long-term business objectives.</p>
          </div>
          {/* Marketing Consulting */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <FiTarget className="text-6xl text-green-500 mx-auto" />
            <h3 className="text-xl lg:text-2xl font-semibold mt-4 mb-2">Marketing Consulting</h3>
            <p className="text-lg lg:text-xl text-gray-700">Craft effective marketing strategies, campaigns, and initiatives to reach and engage your target audience.</p>
          </div>
          {/* Financial Consulting */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <FiTrendingUp className="text-6xl text-yellow-500 mx-auto" />
            <h3 className="text-xl lg:text-2xl font-semibold mt-4 mb-2">Financial Consulting</h3>
            <p className="text-lg lg:text-xl text-gray-700">Receive expert financial advice, analysis, and solutions tailored to your business needs and goals.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bus;
