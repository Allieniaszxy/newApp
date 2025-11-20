import React from "react";

import { motion as Motion } from "framer-motion";

import { UserData } from "../../context/UserContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Account = ({ user }) => {
  const { setIsAuthenticated, setUser } = UserData();

  const navigate = useNavigate();

  const logoutHandle = () => {
    localStorage.clear();
    setUser();
    setIsAuthenticated(false);
    toast.success("Logged out");
    navigate("/login");
  };
  return (
    <Motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="min-h-screen bg-gray-50 py-16 px-6 flex justify-center"
    >
      <Motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-3xl"
      >
        <Motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex flex-col items-center mb-8"
        >
          <div className="w-32 h-32 rounded-full overflow-hidden shadow-md">
            <img
              src={user.image}
              alt="Profile"
              className="w-full h-full object-cover object-center"
            />
          </div>

          <h2 className="text-2xl font-bold mt-4">{user.name}</h2>
          <p className="text-gray-500 text-sm">{user.email}</p>
          <p className="text-blue-500 text-sm font-semibold mt-1">
            {user.role}
          </p>
        </Motion.div>

        <Motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="space-y-6"
        >
          <div>
            <h3 className="text-lg font-semibold mb-2">Account Information</h3>

            <div className="bg-gray-100 p-4 rounded-lg">
              <p className="mb-1">
                <span className="font-medium">Full Name:</span> {user.name}
              </p>
              <p className="mb-1">
                <span className="font-medium">Email:</span> {user.email}
              </p>
              <p className="mb-1">
                <span className="font-medium">Role:</span> {user.role}
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Settings</h3>
            <div className="bg-gray-100 p-4 rounded-lg space-y-3">
              <button className="w-full bg-yellow-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
                Edit Profile
              </button>
              <button className="w-full bg-gray-700 text-white py-2 rounded-lg hover:bg-gray-800 transition">
                Change Password
              </button>
              <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-red-600 transition">
                Go to Dashboard
              </button>
              <button
                className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
                onClick={logoutHandle}
              >
                Logout
              </button>
            </div>
          </div>
        </Motion.div>
      </Motion.div>
    </Motion.div>
  );
};

export default Account;
