import React from 'react'
import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"

const DashboardLayout = ({children}) => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col bg-gray-50">
        <Navbar />
        <main className="p-6 flex-1 overflow-auto">{children}</main>
      </div>
    </div>
  )
}

export default DashboardLayout