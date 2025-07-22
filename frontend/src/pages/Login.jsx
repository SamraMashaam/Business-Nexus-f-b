import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "investor", // default
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In Step 8 we'll add API logic here
    console.log("Logging in with", formData);
  };

  return (
    <div className="flex min-h-screen">
     
      <div className="w-1/2 bg-gradient-to-b from-emerald-500 via-slate-600 to-gray-800 flex flex-col justify-center items-center px-8">
        <h2 className="text-4xl font-bold text-white mb-6">Welcome Back</h2>
        <form className="bg-emerald-400 p-8 rounded-lg shadow-md w-full max-w-md">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 border bg-emerald-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 border bg-emerald-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gray-800 text-white font-semibold py-2 rounded-md hover:bg-gray-900 transition"
          >
            Login
          </button>
        </form>
      </div>

      <div className="relative w-1/2 bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('/login.jpg')" }}>
        {/* Overlay */}
        <div className="absolute inset-0 bg-gray-800 opacity-25"></div>

      </div>

    </div>
  );
};


export default Login;
