import { useEffect, useState } from "react";
import axios from "axios";
import SidebarInvestor from "../components/SidebarInvestor";

const ProfileInvestor = () => {
  const [investor, setInvestor] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organizations: "",
    investmentRange: "",
    investmentInterests: "",
  });

  const token = localStorage.getItem("token");

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/investor/profile", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        const data = res.data;
        setInvestor(data);
        setFormData({
          name: data.name || "",
          email: data.email || "",
          organizations: data.organizations || "",
          investmentRange: data.investmentRange || "",
          investmentInterests: data.investmentInterests || "",
        });
      })
      .catch((err) => console.error(err));
  }, []);


  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSave = async () => {
    try {
      console.log("Form data: ", formData);
      const res = await axios.put("http://localhost:5000/api/investor/profile/update", formData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      
      setInvestor(res.data);
      setEditMode(false);
    } catch (err) {
      console.error(err);
      alert("Update failed.");
    }
  };

  if (!investor) return <div className="text-white p-8">Loading...</div>;
  return (
    <div className="flex min-h-screen">
      <SidebarInvestor />

      <div className="flex-grow p-8 bg-gray-800 text-gray-100">
        <h1 className="text-3xl font-bold mb-6 text-emerald-300">
          Investor Profile
        </h1>

        <div className="bg-emerald-200 p-6 rounded-2xl shadow-md grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-800">
          {["name", "email", "organizations", "investmentRange"].map((field) => (
            <div key={field}>
              <h2 className="text-xl font-semibold mb-2 capitalize">
                {field.replace(/([A-Z])/g, " $1")}
              </h2>
              {editMode ? (
                <input
                  type="text"
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  className="w-full p-2 rounded-lg border border-gray-400"
                />
              ) : (
                <p className="text-gray-700">{investor[field]}</p>
              )}
            </div>
          ))}

          <div className="md:col-span-2">
            <h2 className="text-xl font-semibold mb-2">Investment Interests</h2>
            {editMode ? (
              <textarea
                name="investmentInterests"
                value={formData.investmentInterests}
                onChange={handleChange}
                className="w-full p-2 rounded-lg border border-gray-400"
              />
            ) : (
              <p className="text-gray-700">{investor.investmentInterests}</p>
            )}
          </div>
        </div>

        <div className="mt-6">
          {editMode ? (
            <button
              onClick={handleSave}
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-xl mr-4"
            >
              Save Changes
            </button>
          ) : (
            <button
              onClick={() => setEditMode(true)}
              className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded-xl"
            >
              Edit Profile
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileInvestor;
