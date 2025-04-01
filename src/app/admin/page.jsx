'use client';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

export default function AdminPage() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar: Fixed position, touches the top */}
      <Sidebar />

      {/* Main Content: Scrolls independently */}
      <main className="flex-1 bg-gray-100 overflow-y-auto overflow-x-hidden ml-60">
        {/* Sticky Navbar inside main content */}
        <Navbar />

        <div className="max-w-full sm:max-w-[calc(100vw-16rem-3rem)] mx-auto p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">
            Sales Dashboard
          </h1>

          {/* Smart Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
              <div className="p-3 bg-blue-100 rounded-full">
                <svg
                  className="h-6 w-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h18v18H3z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Total Products
                </h3>
                <p className="text-2xl font-bold text-gray-900">854</p>
                <p className="text-sm text-green-600">
                  Increased by 2.56% ↑
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
              <div className="p-3 bg-purple-100 rounded-full">
                <svg
                  className="h-6 w-6 text-purple-600"
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
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Total Users
                </h3>
                <p className="text-2xl font-bold text-gray-900">31,876</p>
                <p className="text-sm text-green-600">
                  Increased by 0.34% ↑
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
              <div className="p-3 bg-pink-100 rounded-full">
                <svg
                  className="h-6 w-6 text-pink-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Total Revenue
                </h3>
                <p className="text-2xl font-bold text-gray-900">$342,241</p>
                <p className="text-sm text-green-600">
                  Increased by 7.66% ↑
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
              <div className="p-3 bg-orange-100 rounded-full">
                <svg
                  className="h-6 w-6 text-orange-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Total Sales
                </h3>
                <p className="text-2xl font-bold text-gray-900">1,76,586</p>
                <p className="text-sm text-red-600">
                  Decreased by 0.74% ↓
                </p>
              </div>
            </div>
          </div>

          {/* Placeholder for other content */}
          <div className="bg-white p-6 rounded-lg shadow-md h-96">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Placeholder for Charts/Content
            </h2>
            <p className="text-gray-600">
              Add your charts or other content here.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md h-96">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Place 2 for Charts/Content
            </h2>
            <p className="text-gray-600">
              Add your charts or other content here.
            </p>
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </main>
    </div>
  );
}