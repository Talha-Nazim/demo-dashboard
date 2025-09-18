import React, { useState } from "react";

const GeneralSettings = () => {
  // fake form state for demo
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");

  const handleSave = (e) => {
    e.preventDefault();
    // here you could call an API
    alert(`Saved!\nName: ${name}\nEmail: ${email}\nCompany: ${company}`);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">General Settings</h2>

      <form
        onSubmit={handleSave}
        className="bg-white p-6 rounded-lg shadow space-y-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:ring focus:ring-blue-200"
              placeholder="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:ring focus:ring-blue-200"
              placeholder="john@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Company
          </label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:ring focus:ring-blue-200"
            placeholder="My Company Inc."
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
        </div>

        <div className="pt-4">
          <button
            type="submit"
            className="px-4 py-2 bg-zinc-800 text-white rounded hover:bg-zinc-950 transition-colors"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default GeneralSettings;
