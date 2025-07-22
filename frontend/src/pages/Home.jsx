// pages/Home.jsx
import { use, useState } from "react";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroImage from "/home.webp"; 
import heroImage2 from "/home2.jpg"; 
import StatsSection from "../components/StatsSection";

const Home = () => {
  const [activated, setActivated] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const loginPage = () =>{ 
    let path = `/login`; 
    navigate(path);
  }

  const registerPage = () =>{ 
    let path = `/register`; 
    navigate(path);
  }

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-gray-800 to-emerald-500 text-white relative overflow-hidden"
      onClick={() => setActivated(true)}
    >
      {/* LOGIN & REGISTER */}
      {activated && (
        <div className="absolute top-4 right-4 flex gap-2 z-30 text-sm sm:text-base">
          <button onClick={loginPage} className="bg-emerald-200 text-emerald-700 px-4 py-2 rounded-lg hover:bg-emerald-800 hover:text-emerald-200">
            Login
          </button>
          <button onClick={registerPage} className="bg-emerald-200 text-emerald-700 px-4 py-2 rounded-lg hover:bg-emerald-800 hover:text-emerald-200">
            Register
          </button>
        </div>
      )}

      {/* ANIMATED HEADER */}
      <motion.div
        className="absolute z-20"
        initial={!activated ? { top: "50%", left: "50%", x: "-50%", y: "-50%" } : {}}
        animate={
          activated
            ? {
                top: "2rem",
                left: "2rem",
                x: 0,
                y: 0,
                scale: 0.9,
              }
            : {}
        }
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-emerald-300">
          Business Nexus
        </h1>
        <p className="text-emerald-200 text-sm sm:text-base">
          Connect investors with promising startups.
        </p>
      </motion.div>

      {/* NAVBAR */}
      {activated && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="absolute z-10 top-[6.5rem] left-0 w-full px-6 py-4 border-t border-emerald-200 backdrop-blur-md"
        >
          {/* Mobile Toggle */}
          <div className="flex justify-between items-center sm:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              <Menu className="text-emerald-200" />
            </button>
          </div>

          {/* Navbar Links */}
          <nav
            className={`${
              menuOpen ? "block" : "hidden"
            } sm:flex gap-4 font-medium text-emerald-300 z-10 mt-4 sm:mt-0`}
          >
            <a href="/" className="inline-block px-4 py-2 rounded hover:bg-emerald-300 hover:text-gray-900 transition duration-200">
              Home
            </a>
            <a href="/dashboard/entrepreneur" className="inline-block px-4 py-2 rounded hover:bg-emerald-300 hover:text-gray-900 transition duration-200">
              Entrepreneur
            </a>
            <a href="/" className="inline-block px-4 py-2 rounded hover:bg-emerald-300 hover:text-gray-900 transition duration-200">
              Startups
            </a>
            <a href="/dashboard/investor" className="inline-block px-4 py-2 rounded hover:bg-emerald-300 hover:text-gray-900 transition duration-200">
              Investor
            </a>
            <a href="/" className="inline-block px-4 py-2 rounded hover:bg-emerald-300 hover:text-gray-900 transition duration-200">
              Contact
            </a>
          </nav>
        </motion.div>
      )}

      {/* MAIN CONTENT */}
       {activated && (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 1 }}
    className="pt-[13rem]" // add padding to push content below nav
  >
   
    <section className="px-6 sm:px-10 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-white">Empowering Innovation</h2>
          <p className="text-emerald-100 text-sm sm:text-base">
            Whether you're a budding entrepreneur or an experienced investor, Business Nexus is where ideas meet opportunity.
          </p>
        </div>
        <div>
          <img
            src={heroImage}
            alt="Startup Illustration"
            className="rounded-xl shadow-lg w-full max-h-72 sm:max-h-96 object-cover opacity-80"
          />
        </div>
      </div>
    </section>

    
    <section className="px-6 sm:px-10 py-12 bg-emerald-600 text-gray-900 border-t-5 border-b-5 border-emerald-400">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        
        <div>
          <img
            src={heroImage2}
            alt="Vision"
            className="rounded-xl shadow-lg w-full max-h-72 sm:max-h-96 object-cover"
          />
        </div>
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">Why Choose Us?</h2>
          <p className="text-base sm:text-lg">
            We bring together curated startups and visionary investors, offering tools, insights, and secure communication channels to foster meaningful partnerships.
          </p>
        </div>
      </div>
    </section>

    <section>
      <StatsSection />
    </section>

    
    <section className="px-6 sm:px-10 py-12 bg-gray-900 text-white">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="mb-6 text-emerald-100">
          Whether you're here to fund or be funded, take the first step and join our network today.
        </p>
        <div className="flex justify-center gap-4">
          <button onClick={loginPage} className="bg-emerald-600 px-6 py-2 rounded hover:bg-emerald-700">
            Login
          </button>
          <button onClick={registerPage} className="bg-white text-emerald-700 px-6 py-2 rounded hover:bg-emerald-100">
            Register
          </button>
        </div>
      </div>
    </section>
    
  </motion.div>
)}

    </div>
  );
};

export default Home;
