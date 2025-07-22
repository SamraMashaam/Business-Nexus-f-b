import SidebarEntrepreneur from "../components/SidebarEntrepreneur";

const ProfileEntrepreneur = () => {
  return (
    <div className="flex min-h-screen">
      <SidebarEntrepreneur />

      <div className="flex-grow p-8 bg-gray-800">
        <h1 className="text-3xl font-bold mb-6 text-emerald-200">Entrepreneur Profile</h1>

        <div className="bg-emerald-300 p-6 rounded-2xl shadow-md grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-xl font-semibold mb-2 text-gray-800">Name</h2>
            <p className="text-gray-700">Ali Raza</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2 text-gray-800">Email</h2>
            <p className="text-gray-700">ali.raza@startupmail.com</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2 text-gray-800">Startup Name</h2>
            <p className="text-gray-700">EcoTrack</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2 text-gray-800">Industry</h2>
            <p className="text-gray-700">Sustainable Tech</p>
          </div>
          <div className="md:col-span-2">
            <h2 className="text-xl font-semibold mb-2 text-gray-800">Pitch Summary</h2>
            <p className="text-gray-700">
              EcoTrack helps urban areas monitor and optimize waste collection routes using IoT and data analytics — making cities cleaner and more efficient.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileEntrepreneur;
