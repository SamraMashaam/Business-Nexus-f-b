// components/SidebarEntrepreneur.jsx
import { Link } from "react-router-dom";
import { User, MessageSquare, LogOut } from "lucide-react";

const SidebarEntrepreneur = () => {
  return (
    <div className="w-64 min-h-screen bg-slate-900 text-white flex flex-col p-6">
      <h1 className="text-2xl font-bold mb-10">Entrepreneur Panel</h1>

      <nav className="space-y-6">
        <Link
          to="/profile/entrepreneur/32"
          className="flex items-center gap-3 hover:text-emerald-400"
        >
          <User size={20} /> Profile
        </Link>

        <Link
          to="/entrepreneur/messages"
          className="flex items-center gap-3 hover:text-blue-400"
        >
          <MessageSquare size={20} /> Messages
        </Link>

        <Link
          to="/"
          className="flex items-center gap-3 hover:text-red-400 mt-auto"
        >
          <LogOut size={20} /> Sign Out
        </Link>
      </nav>
    </div>
  );
};

export default SidebarEntrepreneur;
