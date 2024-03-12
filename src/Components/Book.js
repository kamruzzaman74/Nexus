import React from 'react';
import { FiTrendingUp, FiUserCheck, FiShield } from 'react-icons/fi';

const AustralianEconomyFacts = () => {
  return (
    <div className="container mx-auto mt-10 p-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg shadow-md animate__animated animate__fadeIn">
      <h2 className="text-4xl font-bold mb-8 text-white text-center">Australian Economy Facts</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-blue-400 rounded-lg p-6 shadow-md flex flex-col items-center justify-center animate__animated animate__fadeInLeft">
          <FiTrendingUp className="text-6xl mb-4 text-blue-700" />
          <h3 className="text-2xl font-bold mb-2 text-blue-800">Increasing Digital Transactions</h3>
          <p className="text-gray-900 text-center">
            With the rise of online shopping and digital payments, there's a growing need for secure and efficient fintech solutions to facilitate transactions.
          </p>
        </div>
        <div className="bg-purple-400 rounded-lg p-6 shadow-md flex flex-col items-center justify-center animate__animated animate__fadeInUp">
          <FiUserCheck className="text-6xl mb-4 text-purple-700" />
          <h3 className="text-2xl font-bold mb-2 text-purple-800">Demand for Personalized Financial Services</h3>
          <p className="text-gray-900 text-center">
            Consumers increasingly seek personalized financial advice and services tailored to their individual needs, driving the demand for fintech innovations.
          </p>
        </div>
        <div className="bg-pink-400 rounded-lg p-6 shadow-md flex flex-col items-center justify-center animate__animated animate__fadeInRight">
          <FiShield className="text-6xl mb-4 text-pink-700" />
          <h3 className="text-2xl font-bold mb-2 text-pink-800">Regulatory Changes and Compliance</h3>
          <p className="text-gray-900 text-center">
            Regulatory changes and compliance requirements in the financial sector necessitate advanced fintech solutions to ensure transparency, security, and compliance.
          </p>
        </div>
      </div>
      <p className="mt-12 text-center text-lg text-white">
        Explore how fintech innovations are shaping the Australian economy and transforming the financial landscape.
      </p>
    </div>
  );
};

export default AustralianEconomyFacts;

