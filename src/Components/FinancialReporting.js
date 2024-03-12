import React from 'react';

const FinancialReporting = ({ companyName, activities, revenue, expenses, profit, revenueBreakdown, expensesBreakdown }) => {
  if (!revenueBreakdown || !expensesBreakdown) {
    return (
      <div className="bg-white shadow-lg rounded-lg overflow-hidden p-6">
        <div className="text-red-500 font-semibold text-center">Data not available</div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-blue-400 to-purple-500 shadow-lg rounded-lg overflow-hidden p-8">
      <div className="mb-8">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4">{companyName}</h2>
        <p className="text-lg text-gray-600">{activities}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="bg-blue-200 text-blue-800 rounded-lg p-6">
          <h3 className="font-semibold mb-2">Revenue</h3>
          <p className="text-lg">${revenue}</p>
        </div>
        <div className="bg-green-200 text-green-800 rounded-lg p-6">
          <h3 className="font-semibold mb-2">Expenses</h3>
          <p className="text-lg">${expenses}</p>
        </div>
        <div className="bg-purple-200 text-purple-800 rounded-lg p-6">
          <h3 className="font-semibold mb-2">Profit</h3>
          <p className="text-lg">${profit}</p>
        </div>
      </div>
      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">Revenue Breakdown</h3>
        <ul className="list-disc list-inside">
          {Object.entries(revenueBreakdown).map(([category, amount], index) => (
            <li key={index} className="text-gray-700 mb-2">
              <span className="text-purple-600 mr-2">&#9679;</span>
              {category}: ${amount}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-2xl font-semibold mb-4">Expenses Breakdown</h3>
        <ul className="list-disc list-inside">
          {Object.entries(expensesBreakdown).map(([category, amount], index) => (
            <li key={index} className="text-gray-700 mb-2">
              <span className="text-green-600 mr-2">&#9679;</span>
              {category}: ${amount}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FinancialReporting;
