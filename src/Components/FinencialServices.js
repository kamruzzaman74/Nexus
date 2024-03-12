
import React from 'react';

const FinencialServices= ({ title, description, features, icon }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 w-80 mx-auto mb-8 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
      <div className="flex items-center justify-center bg-gray-200 rounded-full w-16 h-16 mx-auto mb-4">
        {icon}
      </div>
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">{title}</h2>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="list-disc list-inside mb-4">
        {features.map((feature, index) => (
          <li key={index} className="text-gray-600">{feature}</li>
        ))}
      </ul>
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline transition duration-300 ease-in-out transform hover:-translate-y-1">
        Learn More
      </button>
    </div>
  );
};

export default FinencialServices;






