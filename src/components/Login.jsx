import React, { useState } from "react";
import { MdEmail, MdLock } from "react-icons/md";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-tr from-blue-300 via-purple-300 to-pink-300">
      <form
        onSubmit={handleSubmit}
        className="backdrop-blur-lg bg-white/30 border border-white/50 shadow-xl p-10 rounded-3xl w-full max-w-md"
      >
        <h2 className="text-3xl font-semibold text-center text-white mb-6">Login</h2>

        <div className="mb-5">
          <label htmlFor="email" className="text-white text-sm block mb-1">
            Email Address
          </label>
          <div className="flex items-center bg-white/60 border border-white/40 rounded-xl px-3">
            <MdEmail className="text-gray-600 text-xl mr-2" />
            <input
              type="email"
              id="email"
              className="w-full px-2 py-2 bg-transparent focus:outline-none text-gray-800 placeholder-gray-500"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="text-white text-sm block mb-1">
            Password
          </label>
          <div className="flex items-center bg-white/60 border border-white/40 rounded-xl px-3">
            <MdLock className="text-gray-600 text-xl mr-2" />
            <input
              type="password"
              id="password"
              className="w-full px-2 py-2 bg-transparent focus:outline-none text-gray-800 placeholder-gray-500"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-white text-blue-600 font-semibold py-2 rounded-xl hover:bg-blue-100 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
