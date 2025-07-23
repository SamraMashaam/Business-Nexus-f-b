import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import DashboardInvestor from "../pages/DashboardInvestor";
import DashboardEntrepreneur from "../pages/DashboardEntrepreneur";
import ProfileInvestor from "../pages/ProfileInvestor";
import ProfileEntrepreneur from "../pages/ProfileEntrepreneur";
import Messages from "../pages/Messages";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard/investor" element={<DashboardInvestor />} />
        <Route path="/dashboard/entrepreneur" element={<DashboardEntrepreneur />} />
        <Route path="/profile/investor" element={<ProfileInvestor />} />
        <Route path="/profile/entrepreneur" element={<ProfileEntrepreneur />} />
        <Route path="/investor/messages" element={<Messages />} />
        <Route path="/entrepreneur/messages" element={<Messages />} />
        
        {/* Fallback route for unknown paths */}
        <Route path="*" element={<div className="text-red-500 text-center text-3xl mt-20">404 - Page Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
