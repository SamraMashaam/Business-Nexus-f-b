import React from 'react';
import SidebarInvestor from "../components/SidebarInvestor";

const DashboardInvestor = () => {
  const dummyStartups = [
    { name: "GreenTech", industry: "Sustainability", stage: "Seed" },
    { name: "MediSync", industry: "Healthcare", stage: "Series A" },
    { name: "EduNext", industry: "EdTech", stage: "Pre-Seed" },
  ];

  const messages = [
    { from: "Startup A", text: "We've updated our pitch deck." },
    { from: "Startup B", text: "Looking forward to your feedback." },
  ];

  return (
    <div className="flex min-h-screen">
      <SidebarInvestor />
      <div className="flex-grow p-8 bg-gray-800">
        {/* Header */}
        <header className="bg-emerald-300 shadow px-8 py-6">
          <h1 className="text-3xl font-bold text-gray-800">Welcome, Investor</h1>
          <p className="text-gray-500 mt-1">Here's a quick overview of your activity</p>
        </header>

        {/* Main content */}
        <main className="flex-grow p-8 space-y-10">
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
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Recommended Startups</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {dummyStartups.map((startup, index) => (
                <div key={index} className="bg-emerald-300 p-5 rounded-xl shadow hover:shadow-lg transition">
                  <h3 className="text-xl font-semibold">{startup.name}</h3>
                  <p className="text-gray-600">{startup.industry}</p>
                  <span className="inline-block mt-2 text-sm text-emerald-100 bg-slate-600 px-3 py-1 rounded-full">
                    {startup.stage}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Recent Messages */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Recent Messages</h2>
            <div className="bg-slate-500 p-6 rounded-xl shadow space-y-4">
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
