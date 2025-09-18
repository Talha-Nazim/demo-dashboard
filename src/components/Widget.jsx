import React from 'react'

const Widget = ({ title, value }) => {
  return (
    <div className="bg-white rounded-xl shadow p-4">
    <p className="text-sm text-gray-500">{title}</p>
    <h3 className="text-xl font-bold">{value}</h3>
  </div>
  )
}

export default Widget