// components/SidebarInvestor.jsx
import { Link } from "react-router-dom";
import { LogOut, MessageSquare, User } from "lucide-react";

const SidebarInvestor = () => {
  return (
    <div className="w-64 min-h-screen bg-slate-900 text-white flex flex-col p-6">
      <h1 className="text-2xl font-bold mb-10">Investor Panel</h1>

      <nav className="space-y-6">
        <Link
          to="/profile/investor/23"
          className="flex items-center gap-3 hover:text-emerald-400"
        >
          <User size={20} /> Profile
        </Link>

        <Link
          to="/investor/messages"
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

export default SidebarInvestor;
