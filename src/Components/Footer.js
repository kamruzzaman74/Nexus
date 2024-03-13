import React, { useState, useEffect } from 'react';
import { FaLinkedin, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  const [animation, setAnimation] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimation(true);
    }, 1000); // Delay animation by 1 second
    return () => clearTimeout(timeout);
  }, []);

  return (
    <footer className="bg-black py-6">
      <div className="container mx-auto text-center text-white">
        <p className="text-lg font-bold mb-2">NexusTax & Accounting Firm Pty Ltd</p>
        <p className="text-sm">Phone: <span className="text-green-600 font-semibold">0444540084</span></p>
        <p className="text-sm">Email: <span className="text-red-600 font-semibold">kt@nexustax.com.au</span></p>
        <p className="text-sm">All Rights Reserved by <span className="text-purple-600 font-semibold">@growMore19</span></p>
        <div className="flex justify-center mt-4">
          <a href="#" className="mr-4 inline-block">
            <FaLinkedin size={30} color="#0077B5" className={animation ? "hover:text-blue-600 animate-bounce" : ""} />
          </a>
          <a href="#" className="inline-block">
            <FaFacebook size={30} color="#3b5998" className={animation ? "hover:text-blue-600 animate-bounce" : ""} />
          </a>
        </div>
        <p className="text-xs mt-4 text-purple-600">Empowering Your Financial Future</p>
      </div>
    </footer>
  );
};

export default Footer;










