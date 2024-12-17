"use client"

import React from "react";

const Navbar: React.FC = () => {
  const handleLogout = () => {
    // Logic for logout can go here
    console.log("Logged out");
  };

  return (
    <nav className="bg-black text-white p-4 flex justify-between items-center">
      <h1 className="text-xl">Admin Dashboard</h1>
      <button
        onClick={handleLogout}
        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
      >
        Logout
      </button>
    </nav>
  );
};

export default Navbar;
