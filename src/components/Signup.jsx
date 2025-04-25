import React from "react";
import { FaTwitter, FaFacebookF } from "react-icons/fa";
import { MdEmail, MdLock } from "react-icons/md";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 font-sans">
      <div className="flex w-full max-w-5xl bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Left Side - Welcome */}
        <div className="w-1/2 bg-gradient-to-br from-purple-800 via-blue-700 to-pink-600 text-white p-10 flex flex-col justify-center relative">
          <div className="absolute top-6 left-6 text-3xl font-bold">◎ LOGO</div>
          <h2 className="text-4xl font-bold mb-4">Welcome Page</h2>
          <p className="text-lg">Sign in to continue access</p>
          <div className="absolute bottom-6 left-6 text-sm text-white opacity-70">www.yoursite.com</div>
        </div>

        {/* Right Side - Login Form */}
        <div className="w-1/2 p-10 flex flex-col justify-center">
          <h2 className="text-3xl font-semibold mb-6 text-gray-700">Sign In</h2>

          <form className="space-y-4">
            {/* Email Input */}
            <div className="relative">
              <MdEmail className="absolute top-1/2 left-3 transform -translate-y-1/2 text-xl text-gray-400" />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-500"
                required
              />
            </div>

            {/* Password Input */}
            <div className="relative">
              <MdLock className="absolute top-1/2 left-3 transform -translate-y-1/2 text-xl text-gray-400" />
              <input
                type="password"
                placeholder="Password"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-500"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-2 rounded-full font-semibold tracking-wider hover:opacity-90 transition"
            >
              CONTINUE →
            </button>
          </form>

          <div className="my-4 text-center text-sm text-gray-500">or connect with Social Media</div>

          <div className="space-y-3">
            <button className="w-full flex items-center justify-center gap-2 bg-blue-400 text-white py-2 rounded-full hover:bg-blue-500 transition">
              <FaTwitter /> Sign in with Twitter
            </button>
            <button className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-2 rounded-full hover:bg-blue-700 transition">
              <FaFacebookF /> Sign in with Facebook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
