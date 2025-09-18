import React, { useState } from "react";

const SecuritySettings = () => {
  // fake form state for demo
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSave = (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      alert("New passwords do not match");
      return;
    }

    alert("Password changed successfully!");
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Change Password</h2>

      <form
        onSubmit={handleSave}
        className="bg-white p-6 rounded-lg shadow space-y-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Current Password
            </label>
            <input
              type="password"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:ring focus:ring-blue-200"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              New Password
            </label>
            <input
              type="password"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:ring focus:ring-blue-200"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Confirm New Password
          </label>
          <input
            type="password"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:ring focus:ring-blue-200"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <div className="pt-4">
          <button
            type="submit"
            className="px-4 py-2 bg-zinc-800 text-white rounded hover:bg-zinc-950 transition-colors"
          >
            Update Password
          </button>
        </div>
      </form>
    </div>
  );
};

export default SecuritySettings;
