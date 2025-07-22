import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("investor");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    const newUser = { name, email, password };

    try {
      const endpoint =
        role === "investor"
          ? "http://localhost:5000/api/investor/register"
          : "http://localhost:5000/api/entrepreneur/register";

      const res = await axios.post(endpoint, newUser);
      alert("Registration successful!");
      console.log(res.data);
      navigate('/');
    } catch (err) {
      console.error(err);
      alert("Registration failed.");
    }
  };

  return (
     <div className="flex min-h-screen">
        {/* Left Section - Image */}
        <div
          className="w-1/2 relative bg-cover bg-center"
          style={{ backgroundImage: "url('/register.jpeg')" }}
        >
          {/* Optional overlay */}
          <div className="absolute inset-0 bg-gray-800 opacity-40"></div>
        </div>

        {/* Right Section - Register Form */}
        <div className="w-1/2 flex items-center justify-center bg-gradient-to-b from-gray-800 via-slate-600 to-emerald-500 px-8">
          <div className="w-full max-w-md">
            <h2 className="text-3xl font-bold mb-6 text-white">Create an Account</h2>
            <form
              className="bg-emerald-400 p-8 rounded-lg shadow-md w-full max-w-md"
              onSubmit={handleRegister}
            >
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 border bg-emerald-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 border bg-emerald-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 border bg-emerald-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full px-4 py-2 bg-emerald-300 border rounded mb-6"
              >
                <option value="investor">Investor</option>
                <option value="entrepreneur">Entrepreneur</option>
              </select>

              <button
                type="submit"
                className="w-full bg-gray-800 text-white font-semibold py-2 rounded-md hover:bg-gray-900 transition"
              >
                Register
              </button>
            </form>

          </div>
        </div>
      </div>

  );
};

export default Register;
