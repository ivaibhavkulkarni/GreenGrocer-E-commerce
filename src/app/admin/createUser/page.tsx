"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";


const CreateUser = () => {

  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [successMessage, setSuccessMessage] = useState<string>("");
  const router = useRouter();

  const handleCreateUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Create user Clicked")
  }

  const handleLoginRedirect = () => {
    router.push("/admin");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <title>GreenGrocer Admin</title>
      <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md">
        <h2 className="mb-6 text-2xl font-bold text-center text-gray-800">Create a New User</h2>
        <form onSubmit={handleCreateUser}>
          <div className="mb-4">
            <label htmlFor="fullName" className="block mb-2 text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full px-3 py-2 border rounded-md shadow-sm focus:ring-[#8BC34A] focus:border-[#8BC34A]"
              placeholder="Enter full name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded-md shadow-sm focus:ring-[#8BC34A] focus:border-[#8BC34A]"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded-md shadow-sm focus:ring-[#8BC34A] focus:border-[#8BC34A]"
              placeholder="Enter your password"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded-md shadow-sm focus:ring-[#8BC34A] focus:border-[#8BC34A]"
              placeholder="Re-enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 mb-4 text-white bg-[#8BC34A] rounded-md hover:bg-[#7CB342]"
          >
            Create User
          </button>
        </form>
        <div className="text-center">
          <button
            onClick={handleLoginRedirect}
            className="w-full px-4 py-2 mt-2 text-[#8BC34A] border border-[#8BC34A] rounded-md hover:bg-[#8BC34A] hover:text-white"
          >
            Back to Login
          </button>
        </div>
      </div>
    </div>
  )
}

export default CreateUser
