import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX, FiChevronDown, FiChevronUp, FiHome, FiInfo, FiDollarSign, FiPhone } from 'react-icons/fi';
import './Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setIsServicesOpen(false);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setIsServicesOpen(false);
  };

  const toggleServicesMenu = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  return (
    <header className="bg-blue-900 text-white py-4 fixed w-full z-50 top-0">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-xl font-bold md:text-center">NexusTax & Accounting Firm pty Ltd</h1>
          </div>
          <nav className="md:hidden items-end">
            {isOpen ? (
              <button onClick={closeMenu}>
                <FiX size={24} />
              </button>
            ) : (
              <button onClick={toggleMenu}>
                <FiMenu size={24} />
              </button>
            )}
          </nav>
          <nav className={`md:flex md:items-center md:w-auto order-1 md:ml-auto md:order-none ${isOpen ? 'block' : 'hidden'}`}>
            <ul className="md:flex space-x-4 bg-blue-900 md:bg-transparent w-full md:w-auto justify-end">
              <li><Link to="/" className="nav-link" onClick={closeMenu}><FiHome className="nav-icon" /> Home</Link></li>
              <li><Link to="/about" className="nav-link" onClick={closeMenu}><FiInfo className="nav-icon" /> About</Link></li>
              <li className="relative">
                <button onClick={toggleServicesMenu} className="flex items-center text-white hover:text-blue-500">
                  <span className="hover:underline">Services</span>
                  {isServicesOpen ? (
                    <FiChevronUp className="ml-1" size={16} />
                  ) : (
                    <FiChevronDown className="ml-1" size={16} />
                  )}
                </button>
                <ul className={`absolute bg-white mt-2 py-4 px-4 rounded-md shadow-lg ${isServicesOpen ? 'block' : 'hidden'}`}>
                  <li><Link to="/fin" className="dropdown-link" onClick={closeMenu}><FiDollarSign className="dropdown-icon text-yellow-500" /> Accounting & Financial Reporting</Link></li>
                  <li><Link to="/tax" className="dropdown-link" onClick={closeMenu}><FiDollarSign className="dropdown-icon text-green-500" /> Taxation</Link></li>
                  <li><Link to="/bus" className="dropdown-link" onClick={closeMenu}><FiDollarSign className="dropdown-icon text-blue-500" /> Business Consulting</Link></li>
                  <li><Link to="/payr" className="dropdown-link" onClick={closeMenu}><FiDollarSign className="dropdown-icon text-purple-500" /> Bookkeeping & Payroll</Link></li>
                  <li><Link to="/ind" className="dropdown-link" onClick={closeMenu}><FiDollarSign className="dropdown-icon text-purple-500" /> Industries</Link></li>
                  <li><Link to="/all" className="dropdown-link" onClick={closeMenu}><FiDollarSign className="dropdown-icon text-purple-500" /> Other</Link></li>
                </ul>
              </li>
              <li><Link to="/contact" className="nav-link" onClick={closeMenu}><FiPhone className="nav-icon" /> Contact</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;