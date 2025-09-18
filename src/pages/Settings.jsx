import React from 'react'
import GeneralSettings from './settings/GeneralSettings'
import SecuritySettings from './settings/SecuritySettings'
import NotificationSettings from './settings/NotificationSettings'
import { NavLink, Route, Routes } from 'react-router-dom'

const Settings = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Settings</h1>

      {/* Sub-menu tabs */}
      <div className="flex gap-4 mb-6">
        <NavLink
          to="/settings/general"
          className={({ isActive }) =>
            isActive ? "font-semibold text-zinc-900" : "text-gray-600"
          }
        >
          General
        </NavLink>
        <NavLink
          to="/settings/security"
          className={({ isActive }) =>
            isActive ? "font-semibold text-zinc-900" : "text-gray-600"
          }
        >
          Security
        </NavLink>
        <NavLink
          to="/settings/notifications"
          className={({ isActive }) =>
            isActive ? "font-semibold text-zinc-900" : "text-gray-600"
          }
        >
          Notifications
        </NavLink>
      </div>

      {/* Nested Routes */}
      <Routes>
        <Route path="/general" element={<GeneralSettings />} />
        <Route path="/security" element={<SecuritySettings />} />
        <Route path="/notifications" element={<NotificationSettings />} />
      </Routes>
    </div>
  );
};

export default Settings