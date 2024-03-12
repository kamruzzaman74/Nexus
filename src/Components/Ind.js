import React from 'react';
import { FiSettings, FiBarChart2, FiDollarSign } from 'react-icons/fi';

const Ind = () => {
  return (
    <div className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-4xl  mt-24 lg:text-6xl font-extrabold text-white">Industrial Financial Services</h2>
          <p className="mt-4 text-lg lg:text-xl text-white">Explore our comprehensive range of financial services tailored for the industrial sector</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {/* Financial Analysis */}
          <div className="bg-white p-6 rounded-lg shadow-md transform transition duration-500 hover:scale-105 hover:bg-blue-200">
            <FiBarChart2 className="text-6xl text-blue-500 mx-auto" />
            <h3 className="text-2xl lg:text-3xl font-semibold mt-4 mb-2">Financial Analysis</h3>
            <p className="text-lg lg:text-xl text-gray-700">In-depth financial analysis to assess industrial performance and identify growth opportunities.</p>
          </div>
          {/* Strategic Planning */}
          <div className="bg-white p-6 rounded-lg shadow-md transform transition duration-500 hover:scale-105 hover:bg-green-200">
            <FiSettings className="text-6xl text-green-500 mx-auto" />
            <h3 className="text-2xl lg:text-3xl font-semibold mt-4 mb-2">Strategic Planning</h3>
            <p className="text-lg lg:text-xl text-gray-700">Customized strategic planning services to optimize industrial operations and maximize profitability.</p>
          </div>
          {/* Investment Management */}
          <div className="bg-white p-6 rounded-lg shadow-md transform transition duration-500 hover:scale-105 hover:bg-purple-200">
            <FiDollarSign className="text-6xl text-purple-500 mx-auto" />
            <h3 className="text-2xl lg:text-3xl font-semibold mt-4 mb-2">Investment Management</h3>
            <p className="text-lg lg:text-xl text-gray-700">Comprehensive investment management solutions tailored for industrial businesses to achieve financial goals.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ind;
