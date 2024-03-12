import React from 'react';
import {  FiDollarSign, FiCheckCircle } from 'react-icons/fi';

const Payr = () => {
    return (
        <div className="bg-gradient-to-r from-green-400 via-blue-500 to-indigo-600 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h2 className="text-4xl  mt-20 font-extrabold text-white">Bookkeeping and Payroll Services</h2>
              <p className="mt-6 text-lg text-white">Efficient solutions tailored for your business</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-25">
              {/* Services Offered */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-6">
                  <FiDollarSign className="text-6xl text-blue-500 mx-auto" />
                  <h3 className="text-xl font-semibold mt-6 mb-2">Services Offered</h3>
                  <ul className="text-lg text-gray-700">
                    <li>Full-cycle bookkeeping</li>
                    <li>Payroll processing</li>
                    <li>Financial statements preparation</li>
                    <li>Tax preparation and reporting</li>
                    <li>Bank reconciliations</li>
                  </ul>
                </div>
              </div>
              {/* Problem Solving Information */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-6">
                  <FiCheckCircle className="text-6xl text-indigo-500 mx-auto" />
                  <h3 className="text-xl font-semibold mt-6 mb-2">Problem Solving Information</h3>
                  <p className="text-lg text-gray-700">Resolve bookkeeping and payroll challenges efficiently to ensure accurate financial records and timely payroll processing.</p>
                </div>
              </div>
              {/* Additional Services */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-6">
                  <div className="text-6xl text-yellow-500 mx-auto">&#9679;</div>
                  <h3 className="text-xl font-semibold mt-6 mb-2">Additional Services</h3>
                  <p className="text-lg text-gray-700">Explore our additional services such as budgeting, cash flow management, and financial analysis to enhance your business's financial health.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    };
    

export default Payr;

