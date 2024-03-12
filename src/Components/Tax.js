import React from 'react';
import { FiBarChart2, FiTrendingUp, FiPieChart, FiAlertTriangle } from 'react-icons/fi';

const Tax = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900">Tax Services</h2>
          <p className="mt-4 text-lg lg:text-xl text-gray-500">Explore our tax-related services and solutions</p>
        </div>
        <div className="mt-12">
          {/* Tax Services Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Tax Planning */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <FiBarChart2 className="text-6xl text-blue-500 mx-auto" />
              <h3 className="text-xl lg:text-2xl font-semibold mt-4 mb-2">Tax Planning</h3>
              <p className="text-lg lg:text-xl text-gray-700">Strategic tax planning to optimize your financial position and minimize tax liabilities.</p>
            </div>
            {/* Tax Compliance */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <FiTrendingUp className="text-6xl text-green-500 mx-auto" />
              <h3 className="text-xl lg:text-2xl font-semibold mt-4 mb-2">Tax Compliance</h3>
              <p className="text-lg lg:text-xl text-gray-700">Ensure compliance with tax laws and regulations, including filing tax returns and meeting deadlines.</p>
            </div>
            {/* Tax Advisory */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <FiPieChart className="text-6xl text-pink-500 mx-auto" />
              <h3 className="text-xl lg:text-2xl font-semibold mt-4 mb-2">Tax Advisory</h3>
              <p className="text-lg lg:text-xl text-gray-700">Expert advice on complex tax matters, tax implications of business decisions, and tax-efficient strategies.</p>
            </div>
          </div>
        </div>
        {/* Tax Problem Solving Section */}
        <div className="mt-16">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex items-center justify-center">
              <FiAlertTriangle className="text-6xl text-yellow-500" />
            </div>
            <h2 className="text-2xl lg:text-3xl font-semibold text-center mt-6 mb-4">Tax Problem Solving</h2>
            <p className="text-lg lg:text-xl text-gray-700">Facing tax-related challenges? Our team of experts is here to help you navigate through tax issues, resolve disputes with tax authorities, and find solutions tailored to your needs.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tax;
