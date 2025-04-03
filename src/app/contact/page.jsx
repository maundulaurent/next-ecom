'use client'; // Since this component includes a form (client-side interactivity)

import React from 'react';
import Image from 'next/image';
import { MdPhone, MdEmail } from 'react-icons/md'; // Icons for contact info
import Navbar from '../../components/Header';
import Footer from '../../components/Footer';

const ContactUs = () => {
  return (
    <div>
          <Navbar />
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Section: Placeholder Image */}
        <div className="relative w-full h-[400px] lg:h-[500px]">
          <Image
            src="/images/contact.jpg"
            alt="eCom Contact Us"
            layout="fill" // Makes the image fill the parent container
            className=" object-cover"
          />
        </div>

        {/* Right Section: Contact Info and Form */}
        <div className="bg-white rounded-lg">
          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            
            <div className="flex items-center p-4 shadow-xl">
              <MdPhone className="text-blue-500 mr-3 text-2xl" />
              <div>
                <p className="font-semibold text-gray-800">Call Us</p>
                <p className="text-gray-600">+254 758 144 225</p>
              </div>
            </div>
            <div className="flex items-center p-4 shadow-xl">
              <MdEmail className="text-blue-500 mr-3 text-2xl" />
              <div>
                <p className="font-semibold text-gray-800">Email Us</p>
                <p className="text-gray-600">hello@machcom.com</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-4 shadow-xl p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <textarea
                placeholder="Message"
                rows="5"
                className="w-full p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default ContactUs;