import React from 'react';
import './Home.css';
import LandingPage from './landing page';
import { FaAngleDoubleDown } from 'react-icons/fa';
import ServiceCard from './ServiceCard';
import Book from './Book';
import Make from './Make';
import TaxAgentComponent from './TaxAgentComponent';
import Footer from './Footer';

function Home() {
  return (
    <>
      <div className="homepage-container  bg-blue-900 text-white flex justify-center items-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full z-0"></div>
        <div className="text-center mt-20">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate__animated animate__fadeInDown">Welcome to Our Company</h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-10 animate__animated animate__fadeInDown delay-500">Empowering Financial Solutions for a Better Tomorrow</p>
          <FaAngleDoubleDown className="text-white text-3xl animate-bounce" />
        </div>
      </div>
      <LandingPage />
      <ServiceCard/>
      <Book/>
      <Make/>
      <TaxAgentComponent/>
     
      <Footer/>
    </>
  );
}

export default Home;








