import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSave = (e) => {
    e.preventDefault();

    // simple validation
    if (!username || !email || !password) {
      alert("Please fill in all fields");
      return;
    }

    // get existing users or empty array
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // check if user already exists
    const exists = users.find((u) => u.email === email);
    if (exists) {
      alert("User already exists. Please login.");
      navigate("/login");
      return;
    }

    // add new user
    users.push({ username, email, password });
    localStorage.setItem("users", JSON.stringify(users));

    alert("Account created successfully. Please login.");
    navigate("/login");
  };

  return (
    <div className="flex items-center justify-center  bg-gray-100 ">
      <form
        onSubmit={handleSave}
        className="bg-white p-6 rounded-2xl shadow-md w-full max-w-md space-y-4"
      >
        <h2 className="text-2xl font-bold text-center">Sign Up</h2>

        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700 mb-1">
            Username
          </label>
          <input
            type="text"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-zinc-800 text-white py-2 px-4 rounded-lg hover:bg-zinc-900 transition-colors"
        >
          Sign Up
        </button>
        <p className="text-center text-sm text-gray-600 mt-3">
          Already have an account?{" "}
          <Link to="/login" className="text-zinc-900 hover:underline">
            Login here
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
