import React from 'react';
import { FiCreditCard, FiBarChart2, FiDollarSign, FiSettings, FiBriefcase } from 'react-icons/fi';

const All = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mt-16 md:mt-20">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Financial Solutions</h2>
          <p className="mt-4 text-lg text-gray-500">Explore our comprehensive range of financial services tailored for businesses in Australia</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {/* Banking Solutions */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <FiCreditCard className="text-6xl text-blue-500 mx-auto" />
            <h3 className="text-xl font-semibold mt-4 mb-2">Banking Solutions</h3>
            <p className="text-lg text-gray-700">Tailored banking solutions for businesses, including corporate accounts, loans, and payment processing.</p>
          </div>
          {/* Financial Analysis */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <FiBarChart2 className="text-6xl text-green-500 mx-auto" />
            <h3 className="text-xl font-semibold mt-4 mb-2">Financial Analysis</h3>
            <p className="text-lg text-gray-700">Comprehensive financial analysis services to assess performance and guide strategic decision-making.</p>
          </div>
          {/* Wealth Management */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <FiDollarSign className="text-6xl text-purple-500 mx-auto" />
            <h3 className="text-xl font-semibold mt-4 mb-2">Wealth Management</h3>
            <p className="text-lg text-gray-700">Personalized wealth management solutions to grow and protect assets, including investment planning and portfolio management.</p>
          </div>
          {/* Business Consulting */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <FiSettings className="text-6xl text-yellow-500 mx-auto" />
            <h3 className="text-xl font-semibold mt-4 mb-2">Business Consulting</h3>
            <p className="text-lg text-gray-700">Expert business consulting services to optimize operations, improve efficiency, and drive growth.</p>
          </div>
          {/* Corporate Finance */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <FiBriefcase className="text-6xl text-red-500 mx-auto" />
            <h3 className="text-xl font-semibold mt-4 mb-2">Corporate Finance</h3>
            <p className="text-lg text-gray-700">Specialized corporate finance solutions, including mergers and acquisitions, IPOs, and capital raising.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default All;
