import React from 'react';
import { FiStar, FiCheckCircle, FiAward } from 'react-icons/fi';

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen pt-28">
      {/* Company Information */}
      <section className="py-8 px-4 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl lg:text-5xl font-bold text-center text-gray-800 mb-6 lg:mb-10">About Our Company</h2>
          <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
            Welcome to NexusTax & Accounting Firm Pty Ltd, a registered tax agent company dedicated to providing high-quality tax and accounting services to individuals and businesses. Our mission is to simplify the complex world of taxes and finance, empowering our clients to make informed decisions and achieve financial success.
          </p>
        </div>
      </section>

      {/* Mission and Values */}
      <section className="py-8 px-4 lg:px-24 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl lg:text-5xl font-bold text-center text-gray-800 mb-6 lg:mb-10">Our Mission and Values</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-12">
            {/* Quality Service */}
            <div className="flex flex-col items-center justify-center">
              <div className="bg-blue-500 text-white h-20 w-20 flex items-center justify-center rounded-full mb-4">
                <FiStar className="text-4xl" />
              </div>
              <h3 className="text-lg lg:text-xl font-semibold mb-2 text-gray-800 text-center">Quality Service</h3>
              <p className="text-base lg:text-lg text-gray-700 text-center">We are committed to delivering exceptional service that exceeds our clients' expectations.</p>
            </div>
            {/* Efficient Results */}
            <div className="flex flex-col items-center justify-center">
              <div className="bg-green-500 text-white h-20 w-20 flex items-center justify-center rounded-full mb-4">
                <FiCheckCircle className="text-4xl" />
              </div>
              <h3 className="text-lg lg:text-xl font-semibold mb-2 text-gray-800 text-center">Efficient Results</h3>
              <p className="text-base lg:text-lg text-gray-700 text-center">We focus on delivering efficient and effective results to help our clients achieve their financial goals.</p>
            </div>
            {/* Exceptional Expertise */}
            <div className="flex flex-col items-center justify-center">
              <div className="bg-yellow-500 text-white h-20 w-20 flex items-center justify-center rounded-full mb-4">
                <FiAward className="text-4xl" />
              </div>
              <h3 className="text-lg lg:text-xl font-semibold mb-2 text-gray-800 text-center">Exceptional Expertise</h3>
              <p className="text-base lg:text-lg text-gray-700 text-center">Our team of experts brings exceptional expertise and knowledge to every client engagement.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Manifesto */}
      <section className="py-8 px-4 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl lg:text-5xl font-bold text-center text-gray-800 mb-6 lg:mb-10">Company Manifesto</h2>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
              At NexusTax & Accounting Firm Pty Ltd, we are dedicated to providing top-notch financial solutions tailored to your needs. Our commitment to quality service, efficient results, and exceptional expertise sets us apart from the competition. Join us on the journey to financial success!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

