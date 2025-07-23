import React, { useEffect, useState } from "react";
import SidebarInvestor from "../components/SidebarInvestor";
import axios from "axios";

const DashboardInvestor = () => {
  const [investor, setInvestor] = useState(null);

  useEffect(() => {
    const fetchInvestor = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get("http://localhost:5000/api/investor/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setInvestor(res.data);
      } catch (error) {
        console.error("Failed to fetch investor data", error);
      }
    };

    fetchInvestor();
  }, []);

  if (!investor) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
        Loading Dashboard...
      </div>
    );
  }

  // Dummy data for now
  const dummyStartups = [
    { name: "TechNova", industry: "FinTech", stage: "Seed" },
    { name: "EcoGrow", industry: "AgriTech", stage: "Series A" },
    { name: "MediBridge", industry: "HealthTech", stage: "Pre-Series A" },
  ];

  const messages = [
    { from: "EcoGrow Founder", text: "Thank you for showing interest!" },
    { from: "TechNova Team", text: "We’ve updated our pitch deck." },
  ];

  return (
    <div className="flex min-h-screen">
      <SidebarInvestor />
      <div className="flex-grow p-8 bg-gray-800 text-white">
        {/* Header */}
        <header className="bg-emerald-300 shadow px-8 py-6 rounded-xl">
          <h1 className="text-3xl font-bold text-gray-800">
            Welcome, {investor.name}
          </h1>
          <p className="text-gray-600 mt-1">Your dashboard overview</p>
        </header>

        {/* Profile Info */}
        <section className="mt-8 bg-slate-700 p-6 rounded-xl shadow space-y-3">
          <h2 className="text-2xl font-semibold text-emerald-200">Profile</h2>
          <p><strong>Name:</strong> {investor.name}</p>
          <p><strong>Email:</strong> {investor.email}</p>
          <p><strong>Organizations:</strong> {investor.organizations.join(", ")}</p>
          <p><strong>Investment Interests:</strong> {investor.investmentInterests.join(", ")}</p>
          <p><strong>Investment Range:</strong> {investor.investmentRange}</p>
        </section>

        {/* Main content */}
        <main className="mt-10 space-y-10">
          {/* Stats */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-600 p-6 rounded-xl shadow-md">
              <h2 className="text-xl font-semibold text-emerald-100">Investments Made</h2>
              <p className="text-4xl mt-2 font-bold text-emerald-300">12</p>
            </div>
            <div className="bg-slate-600 p-6 rounded-xl shadow-md">
              <h2 className="text-xl font-semibold text-emerald-100">Total Invested</h2>
              <p className="text-4xl mt-2 font-bold text-emerald-300">$150K</p>
            </div>
            <div className="bg-slate-600 p-6 rounded-xl shadow-md">
              <h2 className="text-xl font-semibold text-emerald-100">New Pitches</h2>
              <p className="text-4xl mt-2 font-bold text-emerald-300">5</p>
            </div>
          </section>

          {/* Recommended Startups */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-emerald-200">Recommended Startups</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {dummyStartups.map((startup, index) => (
                <div key={index} className="bg-emerald-300 p-5 rounded-xl shadow hover:shadow-lg transition">
                  <h3 className="text-xl font-semibold text-gray-800">{startup.name}</h3>
                  <p className="text-gray-700">{startup.industry}</p>
                  <span className="inline-block mt-2 text-sm text-emerald-100 bg-slate-600 px-3 py-1 rounded-full">
                    {startup.stage}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Recent Messages */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-emerald-200">Recent Messages</h2>
            <div className="bg-slate-600 p-6 rounded-xl shadow space-y-4">
              {messages.map((msg, i) => (
                <div key={i} className="border-b pb-3">
                  <p className="font-semibold text-emerald-300">{msg.from}</p>
                  <p className="text-gray-200">{msg.text}</p>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default DashboardInvestor;
