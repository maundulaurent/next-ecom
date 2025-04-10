import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaTiktok, FaPinterest, FaYoutube } from "react-icons/fa";
import { BsApple, BsGoogle } from "react-icons/bs";
import { MdLocationOn, MdPhone, MdEmail } from "react-icons/md";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="pt-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* eCom Section (Larger Column) */}
          <div className="md:col-span-3">
            <h2 className="text-lg font-semibold mb-4">eCom</h2>
            <p className="text-sm text-gray-600 mb-4">
              eCom is your one-stop online store for quality fashion, home essentials, and accessories. Based in Nairobi, we deliver style and convenience across Kenya and beyond.
            </p>
            <div className="text-sm text-gray-600 space-y-2">
              <p className="flex items-center">
                <MdLocationOn className="mr-2" /> Nairobi, Kenya
              </p>
              <p className="flex items-center">
                <MdPhone className="mr-2" /> +254 758 144 225
              </p>
              <p className="flex items-center">
                <MdEmail className="mr-2" /> hello@machcom.com
              </p>
            </div>
          </div>

          {/* Shop Section */}
          <div className="md:col-span-2">
            <h2 className="text-lg font-semibold mb-4">Shop</h2>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>
                <Link href="/">New Arrivals</Link>
              </li>
              <li>
                <Link href="/">Bestsellers</Link>
              </li>
              <li>
                <Link href="/">Women's Clothing</Link>
              </li>
              <li>
                <Link href="/">Men's Clothing</Link>
              </li>
              <li>
                <Link href="/">Accessories</Link>
              </li>
              <li>
                <Link href="/">Sale</Link>
              </li>
            </ul>
          </div>

          {/* Support Section */}
          <div className="md:col-span-2">
            <h2 className="text-lg font-semibold mb-4">Support</h2>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>
                <Link href="/">Help Center</Link>
              </li>
              <li>
                <Link href="/">Order Status</Link>
              </li>
              <li>
                <Link href="/">Shipping Info</Link>
              </li>
              <li>
                <Link href="/">Returns & Exchanges</Link>
              </li>
              <li>
                <Link href="/">Size Guide</Link>
              </li>
              <li>
                <Link href="/">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Company Section */}
          <div className="md:col-span-2">
            <h2 className="text-lg font-semibold mb-4">Company</h2>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>
                <Link href="/">About Us</Link>
              </li>
              <li>
                <Link href="/">Careers</Link>
              </li>
              <li>
                <Link href="/">Press</Link>
              </li>
              <li>
                <Link href="/">Affiliates</Link>
              </li>
              <li>
                <Link href="/">Responsibility</Link>
              </li>
              <li>
                <Link href="/">Investors</Link>
              </li>
            </ul>
          </div>

          {/* Download and Follow Section (Larger Column) */}
          <div className="md:col-span-3">
            <h2 className="text-lg font-semibold mb-4">Download Our App</h2>
            <p className="text-sm text-gray-600 mb-4">Shop on the go with our mobile app</p>
            <div className="flex space-x-2 mb-4">
              <button className="bg-gray-200 px-4 py-2 rounded flex items-center space-x-2">
                <BsApple /> <span>App Store</span>
              </button>
              <button className="bg-gray-200 px-4 py-2 rounded flex items-center space-x-2">
                <BsGoogle /> <span>Google Play</span>
              </button>
            </div>
            <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
            <div className="flex space-x-4 text-gray-600 text-xl">
              <FaFacebookF />
              <FaInstagram />
              <FaTwitter />
              <FaTiktok />
              <FaPinterest />
              <FaYoutube />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 py-6 text-sm bg-blue-50 text-gray-600 text-center">
        <div className="mt-6 space-x-4">
          <Link href="/" className="hover:underline">Terms of Service</Link>
          <Link href="/" className="hover:underline">Privacy Policy</Link>
          <Link href="/" className="hover:underline">Cookies Settings</Link>
        </div>
        <p className="mt-4">© Copyright eCom. All Rights Reserved.</p>
        <p>
          Designed by <Link href="/" className="text-blue-500 hover:underline">Machcom</Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;