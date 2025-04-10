'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FaCartPlus } from 'react-icons/fa6';
import { CiHeart, CiUser, CiSearch } from 'react-icons/ci';
import { FaPhone, FaBars, FaTimes } from 'react-icons/fa';
import { MdKeyboardArrowDown } from 'react-icons/md';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center py-2 space-y-2 sm:space-y-0">
          {/* Left section - Contact info */}
          <div className="flex items-center space-x-2">
            <FaPhone className="w-3 h-3" />
            <h4 className="text-black text-xs">Need Help? Call Us +254 758 144 225</h4>
          </div>

          {/* Center section - Shipping info */}
          <h4 className="text-black text-xs hidden sm:block">
            We offer free shipping on orders above Ksh 500
          </h4>

          {/* Right section - Language and Currency */}
          <div className="flex items-center gap-4 sm:gap-8">
            <h4 className="text-xs">ENG</h4>
            <h4 className="text-black text-xs">$ Ksh</h4>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4 border-b border-gray-200">
        {/* Logo */}
        <h2 className="text-gray-800 text-xl font-semibold">machcom</h2>

        {/* Search Bar - Hidden on mobile */}
        <div className="hidden sm:flex w-1/3 max-w-xs px-2 py-1 border border-blue-500 rounded-xl justify-between bg-white shadow-md hover:shadow-lg transition-shadow duration-200">
          <input
            type="search"
            name="navsearch"
            id="navsearch"
            placeholder="Search for products"
            className="px-2 w-full outline-none text-gray-700 text-xs placeholder-gray-400"
          />
          <CiSearch className="w-6 h-6 text-white bg-blue-800 rounded-md" />
        </div>

        {/* Icons and Hamburger */}
        <div className="flex items-center space-x-4">
          <div className="flex space-x-4">
            <CiUser className="w-6 h-6" />
            <div className="relative">
              <CiHeart className="w-6 h-6" />
              <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                2
              </span>
            </div>
            <div className="relative">
              <FaCartPlus className="w-6 h-6" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                4
              </span>
            </div>
          </div>
          {/* Hamburger Menu Button */}
          <button className="sm:hidden" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? (
              <FaTimes className="w-6 h-6" />
            ) : (
              <FaBars className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`sm:hidden bg-white border-b border-gray-200 transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-screen' : 'max-h-0'
        } overflow-hidden`}
      >
        <div className="px-4 py-5 flex flex-col space-y-4">
          <Link
            href="/"
            className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
            onClick={toggleMobileMenu}
          >
            Home
          </Link>
          <Link
            href="/shop"
            className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
            onClick={toggleMobileMenu}
          >
            Shop
          </Link>
          <Link
            href="/cart"
            className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
            onClick={toggleMobileMenu}
          >
            Cart
          </Link>
          <Link
            href="/checkout"
            className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
            onClick={toggleMobileMenu}
          >
            Checkout
          </Link>
          <div className="relative">
            <div className="text-gray-600 hover:text-gray-900 transition-colors duration-200 flex items-center">
              Categories
              <MdKeyboardArrowDown className="ml-1" />
            </div>
            <div className="mt-2 pl-4 flex flex-col space-y-2">
              <Link
                href="/"
                className="text-gray-600 hover:text-gray-900"
                onClick={toggleMobileMenu}
              >
                Category 1
              </Link>
              <Link
                href="/"
                className="text-gray-600 hover:text-gray-900"
                onClick={toggleMobileMenu}
              >
                Category 2
              </Link>
              <Link
                href="/"
                className="text-gray-600 hover:text-gray-900"
                onClick={toggleMobileMenu}
              >
                Category 3
              </Link>
            </div>
          </div>
          <Link
            href="/contact"
            className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
            onClick={toggleMobileMenu}
          >
            Contact
          </Link>
          {/* Mobile Search Bar */}
          <div className="flex px-2 py-1 border border-blue-500 rounded-xl justify-between bg-white shadow-md">
            <input
              type="search"
              name="mobilesearch"
              id="mobilesearch"
              placeholder="Search for products"
              className="px-2 w-full outline-none text-gray-700 text-xs placeholder-gray-400"
            />
            <CiSearch className="w-6 h-6 text-white bg-blue-800 rounded-md" />
          </div>
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="hidden sm:flex max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-x-6 py-5">
        <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
          Home
        </Link>
        <Link
          href="/shop"
          className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
        >
          Shop
        </Link>
        <Link
          href="/cart"
          className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
        >
          Cart
        </Link>
        <Link
          href="/checkout"
          className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
        >
          Checkout
        </Link>
        <div className="relative group">
          <Link
            href="/"
            className="text-gray-600 hover:text-gray-900 transition-colors duration-200 flex items-center"
          >
            Categories
            <MdKeyboardArrowDown className="ml-1" />
          </Link>
          <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-all duration-200 ease-in-out">
            <Link
              href="/"
              className="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900"
            >
              Category 1
            </Link>
            <Link
              href="/"
              className="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900"
            >
              Category 2
            </Link>
            <Link
              href="/"
              className="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900"
            >
              Category 3
            </Link>
          </div>
        </div>
        <Link
          href="/contact"
          className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}