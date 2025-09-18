import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Jan", users: 400, sales: 2400 },
  { name: "Feb", users: 300, sales: 2210 },
  { name: "Mar", users: 500, sales: 2290 },
  { name: "Apr", users: 700, sales: 2000 },
];

const Chart = () => {
  return (
    <div className="bg-white rounded-xl shadow p-4">
        <h2 className="text-lg font-semibold mb-4">User Growth</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="users" stroke="#4F46E5" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
  )
}

export default Chart