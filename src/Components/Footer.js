import React from 'react';
import { FaLinkedin, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 py-6">
      <div className="container mx-auto text-center text-white">
        <p className="text-sm">NexusTax & Accounting Firm Pty Ltd</p>
        <p className="text-sm">Phone: 0444540084</p>
        <p className="text-sm">Email: kt@nexustax.com.au</p>
        <p className="text-sm">All Rights Reserved by GrowMore19</p>
        <div className="flex justify-center mt-4">
          <a href="#" className="mr-4 inline-block">
            <FaLinkedin size={30} color="#0e76a8" className="hover:text-blue-600 animate-bounce" />
          </a>
          <a href="#" className="inline-block">
            <FaFacebook size={30} color="#3b5998" className="hover:text-blue-600 animate-bounce" />
          </a>
        </div>
        <p className="text-xs mt-4">Empowering Your Financial Future</p>
      </div>
    </footer>
  );
};

export default Footer;





