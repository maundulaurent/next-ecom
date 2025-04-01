import { FcGoogle } from 'react-icons/fc'; // Google icon
import { FaInstagram, FaTwitter, FaGithub } from 'react-icons/fa'; // Social media icons

export default function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div className="text-3xl font-bold text-blue-600">XINTRA</div>
        </div>

        {/* Sign In Title */}
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-2">
          Sign In
        </h2>

        {/* Welcome Message */}
        <p className="text-sm text-gray-500 text-center mb-6">
          Welcome back Henry!
        </p>

        {/* Google Sign-In Button */}
        <div className="w-full flex items-center justify-center p-3 border border-gray-300 rounded-md mb-4 hover:bg-gray-50 transition-colors cursor-pointer">
          <FcGoogle className="h-5 w-5 mr-2" />
          <span className="text-gray-700">Sign up with Google</span>
        </div>

        {/* OR Divider */}
        <div className="relative my-4">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">OR</span>
          </div>
        </div>

        {/* Form (Static) */}
        <div>
          {/* Username Input */}
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              User Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="username"
              value="spruko@admin.com"
              readOnly
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <div className="flex justify-between items-center mb-1">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password <span className="text-red-500">*</span>
              </label>
              <a
                href="#"
                className="text-sm text-blue-500 hover:underline"
              >
                Forget password?
              </a>
            </div>
            <input
              type="password"
              id="password"
              value="••••••••"
              readOnly
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Remember Me Checkbox */}
          <div className="flex items-center mb-6">
            <input
              type="checkbox"
              id="rememberMe"
              checked
              readOnly
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label
              htmlFor="rememberMe"
              className="ml-2 text-sm text-gray-700"
            >
              Remember me?
            </label>
          </div>

          {/* Sign In Button */}
          <div className="w-full p-3 bg-blue-600 text-white rounded-md text-center hover:bg-blue-700 transition-colors cursor-pointer">
            Sign in
          </div>
        </div>

        {/* Sign Up Link */}
        <p className="text-center text-sm text-gray-500 mt-4">
          Don’t have an account?{' '}
          <a href="#" className="text-blue-500 hover:underline">
            Sign Up
          </a>
        </p>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-4 mt-6">
          <a href="#" className="text-gray-500 hover:text-pink-500">
            <FaInstagram className="h-5 w-5" />
          </a>
          <a href="#" className="text-gray-500 hover:text-blue-400">
            <FaTwitter className="h-5 w-5" />
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-800">
            <FaGithub className="h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
}