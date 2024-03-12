import React from 'react';
import pic2 from '../photo/ll.jpg';
import pic3 from '../photo/e.PNG';
import pic4 from '../photo/kk.webp';

function ServiceCard({ title, description, link, image }) {
  return (
    <div className="max-w-xs rounded-lg overflow-hidden shadow-lg bg-white mx-auto my-4 sm:ml-8 transform transition duration-300 hover:scale-105">
      <img className="w-full h-32 object-cover object-center" src={image} alt={title} />
      <div className="px-6 py-4">
        <div className="font-semibold text-xl mb-2 text-purple-700">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 py-4 flex justify-center">
        <a href={link} className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 transform hover:scale-105 shadow-md">
          Learn More
        </a>
      </div>
    </div>
  );
}

function ServiceSection() {
  const services = [
    {
      title: "Financial Solutions",
      description: "We help individuals, businesses, and organizations manage their finances effectively.",
      link: "/fin",
      image: pic2,
    },
    {
      title: "Tax Management",
      description: "To achieve specific financial objectives for individuals, businesses, or institutions.",
      link: "/tax",
      image: pic3,
    },
    {
      title: "Other Services",
      description: "Available to individuals, businesses, and institutions to address their specific financial needs and goals.",
      link: "/all",
      image: pic4,
    }
  ];

  return (
    <div className="container mx-auto">
      <h1 className="text-5xl font-bold text-center text-yellow-500 py-8">🚀 Explore Our Financial Services 🚀</h1>
      <div className="flex flex-wrap justify-center sm:justify-between p-2">
        {services.map((service, index) => (
          <ServiceCard key={index} title={service.title} description={service.description} link={service.link} image={service.image} />
        ))}
      </div>
    </div>
  );
}

export default ServiceSection;



