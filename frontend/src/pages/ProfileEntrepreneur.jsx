import { useEffect, useState } from "react";
import axios from "axios";
import SidebarEntrepreneur from "../components/SidebarEntrepreneur";

const ProfileEntrepreneur = () => {
  const [entrepreneur, setEntrepreneur] = useState({
    name: "",
    email: "",
    startupName: "",
    industry: "",
    pitchSummary: "",
  });

  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/entrepreneur/profile", {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
        setEntrepreneur(res.data);
      } catch (err) {
        console.error("Failed to load profile", err);
      }
    };

    fetchProfile();
  }, []);

  const handleChange = (e) => {
    setEntrepreneur({ ...entrepreneur, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    try {
      const res = await axios.put("http://localhost:5000/api/entrepreneur/profile/update", entrepreneur, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      setEntrepreneur(res.data);
      setIsEditing(false);
      alert("Profile updated successfully!");
    } catch (err) {
      console.error("Update failed", err);
      alert("Failed to update profile.");
    }
  };

  return (
    <div className="flex min-h-screen">
      <SidebarEntrepreneur />
      <div className="flex-grow p-8 bg-gray-800">
        <h1 className="text-3xl font-bold mb-6 text-emerald-200">Entrepreneur Profile</h1>

        <div className="bg-emerald-200 p-6 rounded-2xl shadow-md grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-800">
          {["name", "email", "startupName", "industry"].map((field) => (
            <div key={field}>
              <h2 className="text-xl font-semibold mb-2 capitalize">
                {field === "startupName" ? "Startup Name" : field.charAt(0).toUpperCase() + field.slice(1)}
              </h2>
              {isEditing ? (
                <input
                  name={field}
                  value={entrepreneur[field]}
                  onChange={handleChange}
                  className="w-full p-2 rounded-lg border border-gray-400"
                />
              ) : (
                <p className="text-gray-700">{entrepreneur[field]}</p>
              )}
            </div>
          ))}

          <div className="md:col-span-2">
            <h2 className="text-xl font-semibold mb-2 text-gray-800">Pitch Summary</h2>
            {isEditing ? (
              <textarea
                name="pitchSummary"
                value={entrepreneur.pitchSummary}
                onChange={handleChange}
                className="w-full p-2 rounded-lg border border-gray-400"
                rows={4}
              />
            ) : (
              <p className="text-gray-700">{entrepreneur.pitchSummary}</p>
            )}
          </div>
        </div>

        <div className="mt-6">
          {isEditing ? (
            <button
              onClick={handleSave}
              className="px-6 py-2 bg-emerald-600 text-white rounded hover:bg-emerald-700"
            >
              Save Changes
            </button>
          ) : (
            <button
              onClick={() => setIsEditing(true)}
              className="px-6 py-2 bg-emerald-600 text-white rounded hover:bg-emerald-700"
            >
              Edit Profile
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileEntrepreneur;
