import React, { useState } from 'react';
import { FiPhone, FiMapPin, FiMail } from 'react-icons/fi';

const Contact = () => {
  const [isMessageSent, setIsMessageSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior
    // Your form submission logic goes here
    
    // Assuming the form submission is successful, set isMessageSent to true
    setIsMessageSent(true);
  };

  return (
    <div className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 min-h-screen py-12 px-4 sm:px-6 lg:px-8 mt-28">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">Contact Us</h2>
          <p className="text-lg text-white">Have questions? We're here to help!</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact Information */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Contact Information</h3>
            <div className="flex items-center mb-4">
              <FiPhone className="text-xl text-blue-500 mr-2" />
              <p>0444540084</p>
            </div>
            <div className="flex items-center mb-4">
              <FiMail className="text-xl text-blue-500 mr-2" />
              <p>contact@nexus.com</p>
            </div>
            <div className="flex items-center">
              <FiMapPin className="text-xl text-blue-500 mr-2" />
              <p>8 Gamble St, Campbelltown, NSW-2560</p>
            </div>
          </div>
          {/* Google Map */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Location</h3>
            <div className="w-full h-64 bg-blue-300 rounded-lg">
              <iframe
                title="Nexus Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.284234332923!2d150.80178531555686!3d-34.06516062212666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12bdcb11fc8a8f%3A0xa2539cb7a65d682e!2s8%20Gamble%20St%2C%20Campbelltown%20NSW%202560%2C%20Australia!5e0!3m2!1sen!2s!4v1647581890042!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
        {/* Contact Form */}
        <div className="mt-12">
          {isMessageSent ? (
            <div className="bg-green-200 text-green-800 p-4 rounded-lg mb-4">
              Your message has been sent successfully!
            </div>
          ) : null}
          <form className="bg-white p-8 rounded-lg shadow-lg" onSubmit={handleSubmit}>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Send us a Message</h3>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-800 mb-1">Name</label>
              <input type="text" id="name" className="w-full bg-gray-100 rounded-lg border border-gray-300 px-4 py-2" required />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-800 mb-1">Email</label>
              <input type="email" id="email" className="w-full bg-gray-100 rounded-lg border border-gray-300 px-4 py-2" required />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-800 mb-1">Message</label>
              <textarea id="message" rows="4" className="w-full bg-gray-100 rounded-lg border border-gray-300 px-4 py-2" required></textarea>
            </div>
            <button type="submit" className="bg-blue-500 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-300">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;




