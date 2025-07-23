import { useEffect, useState } from "react";
import SidebarEntrepreneur from "../components/SidebarEntrepreneur";
import axios from "axios";

const DashboardEntrepreneur = () => {
  const [entrepreneur, setEntrepreneur] = useState(null);

  useEffect(() => {
    const fetchEntrepreneur = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get("http://localhost:5000/api/entrepreneur/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setEntrepreneur(res.data);
      } catch (error) {
        console.error("Failed to fetch entrepreneur data", error);
      }
    };

    fetchEntrepreneur();
  }, []);

      if (!entrepreneur) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
        Loading Dashboard...
      </div>
    );
  }

  return (
    <div className="flex min-h-screen">
      <SidebarEntrepreneur />

      <div className="flex-grow p-8 bg-gray-800">
        <h1 className="text-3xl font-bold mb-6 text-emerald-200">
          Welcome, {entrepreneur.name.split(" ")[0]}
        </h1>

        {/* Section 1: Startup Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-emerald-300 shadow-md rounded-2xl p-6">
            <h2 className="text-xl font-semibold mb-2">Startup Name</h2>
            <p className="text-gray-600">{entrepreneur.startupName}</p>
          </div>

          <div className="bg-emerald-300 shadow-md rounded-2xl p-6">
            <h2 className="text-xl font-semibold mb-2">Industry</h2>
            <p className="text-gray-600">{entrepreneur.industry}</p>
          </div>

          <div className="bg-emerald-300 shadow-md rounded-2xl p-6">
            <h2 className="text-xl font-semibold mb-2">Pitch Summary</h2>
            <p className="text-emerald-800 font-medium">{entrepreneur.pitch}</p>
          </div>
        </div>

        {/* Section 2: Upcoming Meetings (Static or dynamic if available) */}
        <div className="bg-emerald-300 shadow-md rounded-2xl p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Upcoming Meetings</h2>
          <ul className="space-y-3 text-gray-700">
            <li>📅 July 18 - Call with GreenEdge Ventures</li>
            <li>📅 July 21 - Demo Day at Tech Launchpad</li>
          </ul>
        </div>

        {/* Section 3: Application Stats */}
        <div className="bg-emerald-300 shadow-md rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-4">Application Progress</h2>
          <div className="w-full bg-gray-200 rounded-full h-4 mb-3">
            <div className="bg-blue-500 h-4 rounded-full w-[70%]"></div>
          </div>
          <p className="text-sm text-gray-600">70% Complete — Keep going!</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardEntrepreneur;
