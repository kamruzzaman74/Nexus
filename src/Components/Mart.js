import React from 'react';
import { Link } from 'react-router-dom';

import pic2 from '../photo/ll.jpg';
import pic3 from '../photo/e.PNG';
import pic4 from '../photo/kk.webp';

function Mart() {
  return (
    <div className="service-container flex flex-col items-center gap-8">
      <h1 className="service-heading text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-center text-cyan-500 mt-8 sm:mt-12 sm:ml-auto sm:mr-auto">
        Our Professional Services
      </h1>

      <div className="service-cards-container flex flex-wrap justify-center gap-4 sm:gap-8">
        <ServiceCard image={pic2} title="Financial Solutions" description="We help individuals, businesses, and organizations manage their finances effectively." link="/fin" />
        <ServiceCard image={pic4} title="Tax Management" description="To achieve specific financial objectives for individuals, businesses, or institutions." link="/Fin" />
        <ServiceCard image={pic3} title="Other Services" description="To achieve specific financial objectives for individuals, businesses, or institutions." link="/all" />
      </div>
    </div>
  );
}

const ServiceCard = ({ image, title, description, link }) => {
  return (
    <div className="service-card bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 w-full sm:w-80 md:w-96 mb-8 sm:mb-0">
      <img src={image} alt={title} className="service-image w-full h-48 sm:h-56 object-cover rounded-t-lg" />
      <div className="service-text p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl font-bold mb-2 text-indigo-800">{title}</h2>
        <p className="text-sm sm:text-base text-gray-700">{description}</p>
        <Link to={link}>
          <button className="service-button mt-2 sm:mt-3 bg-indigo-800 hover:bg-indigo-900 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300 border border-indigo-800">
            Learn More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Mart;
