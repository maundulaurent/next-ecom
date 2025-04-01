import { HiOutlineBars3CenterLeft } from "react-icons/hi2";


export default function Navbar() {
    return (
      <nav className="sticky top-0 z-10 bg-white shadow-md p-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-4">
        <HiOutlineBars3CenterLeft className="h-10 w-10 text-gray-500" />
        
          <div className="relative">
            <input
              type="text"
              placeholder="Search anything here..."
              className="p-2 pl-10 h-10 border border-gray-300 focus:border-blue-100 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 w-64"
            />
            <svg
              className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
  
        {/* Right Side: Icons and Profile */}
        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-full hover:bg-gray-100">
            <svg
              className="h-6 w-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              5
            </span>
          </button>
          <button className="p-2 rounded-full hover:bg-gray-100">
            <svg
              className="h-6 w-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 4v16m8-8H4"
              />
            </svg>
          </button>
          <div className="h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center">
            <span className="text-gray-600">👤</span>
          </div>
        </div>
      </nav>
    );
  }