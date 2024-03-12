import React from 'react';
import { FiInfo } from 'react-icons/fi';
import pic5 from '../photo/la.webp';

const Make = () => {
  // Define an array of financial tips with additional information
  const financialTips = [
    {
      title: "Create a Monthly Budget",
      description: "Track your expenses and savings to better manage your finances. Consider using budgeting apps like Pocketbook or MoneyBrilliant for easy budget tracking.",
    },
    {
      title: "Start Investing Early",
      description: "Take advantage of compound interest by starting to invest as soon as possible. Consider investing in diversified portfolios, including stocks, bonds, and real estate.",
    },
    {
      title: "Diversify Your Portfolio",
      description: "Reduce risk by diversifying your investment portfolio across different asset classes and industries. This helps protect your investments from market fluctuations.",
    },
    {
      title: "Review Financial Goals Regularly",
      description: "Set clear financial goals and review them periodically to ensure you're on track. Adjust your plans as needed to accommodate changes in your life or financial situation.",
    },
    {
      title: "Seek Advice from Financial Advisor",
      description: "Consider seeking advice from a qualified financial advisor who can provide personalized guidance tailored to your specific needs and goals.",
    },
  ];

  return (
    <div className="make-container bg-white p-6 md:flex md:items-center md:justify-between">
      <div className="md:w-1/2 md:pr-12">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">Our Financial Tips</h1>
        <div className="tips">
          {financialTips.map((tip, index) => (
            <div key={index} className="tip mb-6">
              <h3 className="tip-title flex items-center text-orange-500 mb-2"><FiInfo className="mr-2" /> {tip.title}</h3>
              <p className="tip-description text-gray-700 ml-8 md:ml-0">{tip.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="md:w-1/2 md:pl-12">
        <div className="image-container">
          <img src={pic5} alt="Financial Image" className="financial-image" />
        </div>
      </div>
    </div>
  );
};

export default Make;

