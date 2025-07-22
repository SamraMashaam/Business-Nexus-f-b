// pages/DashboardEntrepreneur.jsx
import SidebarEntrepreneur from "../components/SidebarEntrepreneur";

const DashboardEntrepreneur = () => {
  return (
    <div className="flex min-h-screen">
      <SidebarEntrepreneur />

      <div className="flex-grow p-8 bg-gray-800">
        <h1 className="text-3xl font-bold mb-6 text-emerald-200">Welcome</h1>

        {/* Section 1: Startup Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-emerald-300 shadow-md rounded-2xl p-6">
            <h2 className="text-xl font-semibold mb-2">Startup Name</h2>
            <p className="text-gray-600">EcoTrack — Smart Waste Management</p>
          </div>

          <div className="bg-emerald-300 shadow-md rounded-2xl p-6">
            <h2 className="text-xl font-semibold mb-2">Funding Goal</h2>
            <p className="text-gray-600">$100,000</p>
          </div>

          <div className="bg-emerald-300 shadow-md rounded-2xl p-6">
            <h2 className="text-xl font-semibold mb-2">Current Raised</h2>
            <p className="text-emerald-800 font-medium">$42,500</p>
          </div>
        </div>

        {/* Section 2: Upcoming Meetings or Investor Interest */}
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
