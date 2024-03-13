import React from 'react';
import { FiCheckCircle } from 'react-icons/fi';

const WhyChooseUs = () => {
  return (
    <>
    <section className="bg-gradient-to-r from-blue-400 to-purple-600 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl lg:text-5xl font-bold text-center text-white mb-8">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg p-8 shadow-lg flex flex-col items-center transform hover:scale-105 transition duration-300 ease-in-out">
            <FiCheckCircle className="text-green-500 text-5xl mb-4" />
            <h3 className="text-2xl lg:text-3xl font-semibold mb-4">Expertise</h3>
            <p className="text-lg lg:text-xl text-center">Our team consists of experienced professionals who specialize in various financial services.</p>
          </div>
          <div className="bg-white rounded-lg p-8 shadow-lg flex flex-col items-center transform hover:scale-105 transition duration-300 ease-in-out">
            <FiCheckCircle className="text-green-500 text-5xl mb-4" />
            <h3 className="text-2xl lg:text-3xl font-semibold mb-4">Custom Solutions</h3>
            <p className="text-lg lg:text-xl text-center">We tailor our services to meet the unique needs and goals of each client.</p>
          </div>
          <div className="bg-white rounded-lg p-8 shadow-lg flex flex-col items-center transform hover:scale-105 transition duration-300 ease-in-out">
            <FiCheckCircle className="text-green-500 text-5xl mb-4" />
            <h3 className="text-2xl lg:text-3xl font-semibold mb-4">Trusted Partner</h3>
            <p className="text-lg lg:text-xl text-center">We strive to build long-term relationships with our clients based on trust and transparency.</p>
          </div>
        </div>
      </div>
    </section>
  
    </>
  );
};

export default WhyChooseUs;

