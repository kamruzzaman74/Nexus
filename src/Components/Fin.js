import React from 'react';
import { FiBarChart2, FiTrendingUp, FiPieChart } from 'react-icons/fi';

const Fin = () => {
  return (
    <div className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 min-h-screen flex justify-center items-center">
      <div className="max-w-4xl text-center text-white p-4 md:p-8">
        <h1 className="text-4xl lg:text-6xl font-bold mt-12 md:mt-20 lg:mt-40 mb-4">Welcome to NexusTax & Accounting Firm</h1>
        <p className="text-lg lg:text-xl mb-8">Your trusted partner for tax and accounting solutions</p>
        <div className="mt-8 md:mt-12 lg:mt-20">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Empowering Your Financial Success</h2>
          <p className="text-lg lg:text-xl mb-8">At NexusTax & Accounting Firm, we understand the challenges businesses face in managing their finances. That's why we offer a wide range of services tailored to meet your specific needs.</p>
          <p className="text-lg lg:text-xl mb-8">Whether you're looking for tax planning, financial reporting, or strategic financial advice, our team of experts is here to help you navigate the complexities of the financial world.</p>
          <div className="flex flex-wrap justify-center items-center mb-12">
            <div className="bg-white text-blue-500 rounded-lg p-6 mx-4 mb-6 lg:mx-8 lg:mb-8 flex flex-col items-center justify-center max-w-sm shadow-lg transition duration-300 transform hover:scale-105">
              <FiBarChart2 className="text-5xl mb-4" />
              <h3 className="text-xl lg:text-2xl font-bold mb-2">Income Statement</h3>
              <p className="text-lg lg:text-xl text-center">Track your revenue and expenses to understand your financial performance.</p>
            </div>
            <div className="bg-white text-green-500 rounded-lg p-6 mx-4 mb-6 lg:mx-8 lg:mb-8 flex flex-col items-center justify-center max-w-sm shadow-lg transition duration-300 transform hover:scale-105">
              <FiTrendingUp className="text-5xl mb-4" />
              <h3 className="text-xl lg:text-2xl font-bold mb-2">Financial Analysis</h3>
              <p className="text-lg lg:text-xl text-center">Get insights into your financial data to make informed business decisions.</p>
            </div>
            <div className="bg-white text-pink-500 rounded-lg p-6 mx-4 mb-6 lg:mx-8 lg:mb-8 flex flex-col items-center justify-center max-w-sm shadow-lg transition duration-300 transform hover:scale-105">
              <FiPieChart className="text-5xl mb-4" />
              <h3 className="text-xl lg:text-2xl font-bold mb-2">Custom Reports</h3>
              <p className="text-lg lg:text-xl text-center">Tailored financial reports to meet your specific business needs.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fin;







