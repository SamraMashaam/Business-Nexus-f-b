import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "investor"
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || 'Login failed');
        return;
      }

      // Save token and redirect
      localStorage.setItem('token', data.token);
      alert("Login successful!");

      if (formData.role === 'investor') {
        navigate('/dashboard/investor');
      } else {
        navigate('/dashboard/entrepreneur');
      }

    } catch (err) {
      console.error(err);
      alert("An error occurred during login");
    }
  };

  return (
    <div className="flex min-h-screen">
      <div className="w-1/2 bg-gradient-to-b from-emerald-500 via-slate-600 to-gray-800 flex flex-col justify-center items-center px-8">
        <h2 className="text-4xl font-bold text-white mb-6">Welcome Back</h2>
        <form onSubmit={handleSubmit} className="bg-emerald-400 p-8 rounded-lg shadow-md w-full max-w-md">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              Email
            </label>
            <input
              name="email"
              type="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border bg-emerald-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              Password
            </label>
            <input
              name="password"
              type="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border bg-emerald-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              Role
            </label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-emerald-300 border rounded"
            >
              <option value="investor">Investor</option>
              <option value="entrepreneur">Entrepreneur</option>
            </select>
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
        <div className="absolute inset-0 bg-gray-800 opacity-25"></div>
      </div>
    </div>
  );
}

export default Login;
