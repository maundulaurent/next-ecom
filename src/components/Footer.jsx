import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaTiktok, FaPinterest, FaYoutube } from "react-icons/fa";
import { BsApple, BsGoogle } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="pt-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* eStore Section (Larger Column) */}
          <div className="md:col-span-3">
            <h2 className="text-lg font-semibold mb-4">eStore</h2>
            <p className="text-sm text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in nibh vehicula, facilisis magna ut, consectetur lorem.
            </p>
            <div className="text-sm text-gray-600 space-y-2">
              <p className="flex items-center">
                <span className="material-icons-outlined mr-2">location_on</span>
                123 Fashion Street, New York, NY 10001
              </p>
              <p className="flex items-center">
                <span className="material-icons-outlined mr-2">phone</span>
                +1 (555) 123-4567
              </p>
              <p className="flex items-center">
                <span className="material-icons-outlined mr-2">email</span>
                hello@example.com
              </p>
            </div>
          </div>

          {/* Shop Section */}
          <div className="md:col-span-2">
            <h2 className="text-lg font-semibold mb-4">Shop</h2>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>New Arrivals</li>
              <li>Bestsellers</li>
              <li>Women&#39;s Clothing</li>
              <li>Men&#39;s Clothing</li>
              <li>Accessories</li>
              <li>Sale</li>
            </ul>
          </div>

          {/* Support Section */}
          <div className="md:col-span-2">
            <h2 className="text-lg font-semibold mb-4">Support</h2>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>Help Center</li>
              <li>Order Status</li>
              <li>Shipping Info</li>
              <li>Returns &amp; Exchanges</li>
              <li>Size Guide</li>
              <li>Contact Us</li>
            </ul>
          </div>

          {/* Company Section */}
          <div className="md:col-span-2">
            <h2 className="text-lg font-semibold mb-4">Company</h2>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>About Us</li>
              <li>Careers</li>
              <li>Press</li>
              <li>Affiliates</li>
              <li>Responsibility</li>
              <li>Investors</li>
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
          <p>We Accept:</p>
          <div className="flex justify-center space-x-4 mt-2">
            <img src="/icons/paypal.svg" alt="PayPal" className="h-6" />
            <img src="/icons/visa.svg" alt="Visa" className="h-6" />
            <img src="/icons/mastercard.svg" alt="MasterCard" className="h-6" />
            <img src="/icons/google-pay.svg" alt="Google Pay" className="h-6" />
            <img src="/icons/shopify.svg" alt="Shopify" className="h-6" />
            <img src="/icons/cash.svg" alt="Cash" className="h-6" />
          </div>
          <div className="mt-6 space-x-4">
            <a href="#">Terms of Service</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Cookies Settings</a>
          </div>
          <p className="mt-4">© Copyright machcom. All Rights Reserved.</p>
          <p>Designed by <a href="/" className="text-blue-500">machcom</a></p>
        </div>
      
    </footer>
  );
};

export default Footer;
