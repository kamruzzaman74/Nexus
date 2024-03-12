import React, { useState } from 'react';
import { AiOutlineDollarCircle, AiFillCheckCircle } from 'react-icons/ai';

const TaxAgentComponent = () => {
  const [income, setIncome] = useState('');
  const [taxResult, setTaxResult] = useState(null);

  const calculateTax = () => {
    // Tax calculation logic
    const incomeAmount = parseFloat(income);
    let taxAmount = 0;

    if (incomeAmount <= 18200) {
      taxAmount = 0;
    } else if (incomeAmount <= 45000) {
      taxAmount = (incomeAmount - 18200) * 0.19;
    } else if (incomeAmount <= 120000) {
      taxAmount = 5092 + (incomeAmount - 45000) * 0.325;
    } else if (incomeAmount <= 180000) {
      taxAmount = 29467 + (incomeAmount - 120000) * 0.37;
    } else {
      taxAmount = 51667 + (incomeAmount - 180000) * 0.45;
    }

    setTaxResult(taxAmount);
  };

  return (
    <div className="max-w-lg mx-auto p-8 bg-white rounded-md shadow-md">
      <h2 className="text-3xl font-bold text-center mb-6">Australian Tax Calculator</h2>
      <div className="mb-6">
        <label htmlFor="income" className="block text-sm font-medium text-gray-700 mb-2">Enter your annual taxable income:</label>
        <div className="flex items-center border border-gray-300 rounded-md px-4 py-2">
          <input 
            type="number" 
            id="income" 
            className="outline-none flex-1 mr-2 text-lg font-medium"
            placeholder="e.g., 60000"
            value={income}
            onChange={(e) => setIncome(e.target.value)}
          />
          <AiOutlineDollarCircle className="text-blue-500" size={24} />
        </div>
      </div>
      <button 
        className="bg-blue-500 text-white px-6 py-3 rounded-md w-full hover:bg-blue-600 transition-colors"
        onClick={calculateTax}
      >
        Calculate Tax
      </button>
      {taxResult !== null && (
        <div className="mt-8">
          <p className="text-lg font-semibold mb-4">Tax Payable: ${taxResult.toFixed(2)}</p>
          <p className="text-sm text-gray-600">This calculator provides an estimate of your annual tax liability based on the Australian tax brackets. Actual tax payable may vary depending on individual circumstances. For accurate tax advice, consult a qualified tax professional.</p>
        </div>
      )}
      <div className="mt-8">
        <h3 className="text-xl font-bold mb-2">Services Offered by Registered Tax Agents:</h3>
        <ul className="list-disc pl-6">
          <li className="text-gray-700 mb-2 flex items-center"><AiFillCheckCircle className="text-green-500 mr-2" size={18}/> Personal income tax return preparation</li>
          <li className="text-gray-700 mb-2 flex items-center"><AiFillCheckCircle className="text-green-500 mr-2" size={18}/> Business activity statement (BAS) lodgement</li>
          <li className="text-gray-700 mb-2 flex items-center"><AiFillCheckCircle className="text-green-500 mr-2" size={18}/> Tax planning and advice</li>
          <li className="text-gray-700 mb-2 flex items-center"><AiFillCheckCircle className="text-green-500 mr-2" size={18}/> GST registration and compliance</li>
          <li className="text-gray-700 mb-2 flex items-center"><AiFillCheckCircle className="text-green-500 mr-2" size={18}/> Capital gains tax (CGT) calculations</li>
          <li className="text-gray-700 mb-2 flex items-center"><AiFillCheckCircle className="text-green-500 mr-2" size={18}/> Superannuation fund tax returns</li>
          <li className="text-gray-700 mb-2 flex items-center"><AiFillCheckCircle className="text-green-500 mr-2" size={18}/> Representation in dealings with the Australian Taxation Office (ATO)</li>
        </ul>
        <p className="text-sm text-gray-600">Registered tax agents are licensed professionals authorized to provide taxation services to individuals and businesses. They undergo rigorous training and adhere to strict professional standards to ensure compliance with Australian tax laws.</p>
      </div>
    </div>
  );
};

export default TaxAgentComponent;

