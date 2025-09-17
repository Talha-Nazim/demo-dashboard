import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

// dummy chart data
const data = [
  { name: "Jan", users: 400, sales: 2400 },
  { name: "Feb", users: 300, sales: 2210 },
  { name: "Mar", users: 500, sales: 2290 },
  { name: "Apr", users: 700, sales: 2000 },
];

// small widget component
const Widget = ({ title, value }) => (
  <div className="bg-white rounded-xl shadow p-4">
    <p className="text-sm text-gray-500">{title}</p>
    <h3 className="text-xl font-bold">{value}</h3>
  </div>
);

const Dashboard = () => {
  return (
    <div className="p-6 space-y-6">
      {/* top widgets */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <Widget title="Users" value="1,200" />
        <Widget title="Revenue" value="$32,000" />
        <Widget title="Orders" value="500" />
        <Widget title="Active Sessions" value="89" />
      </div>

      {/* chart */}
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

      {/* table */}
      <div className="bg-white rounded-xl shadow p-4 overflow-x-auto">
        <h2 className="text-lg font-semibold mb-4">Recent Orders</h2>
        <table className="min-w-full text-left">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Order ID</th>
              <th className="py-2 px-4 border-b">Customer</th>
              <th className="py-2 px-4 border-b">Status</th>
              <th className="py-2 px-4 border-b">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-50">
              <td className="py-2 px-4 border-b">#1234</td>
              <td className="py-2 px-4 border-b">John Doe</td>
              <td className="py-2 px-4 border-b">Shipped</td>
              <td className="py-2 px-4 border-b">$250</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-2 px-4 border-b">#1235</td>
              <td className="py-2 px-4 border-b">Jane Smith</td>
              <td className="py-2 px-4 border-b">Pending</td>
              <td className="py-2 px-4 border-b">$99</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-2 px-4 border-b">#1236</td>
              <td className="py-2 px-4 border-b">Mike Johnson</td>
              <td className="py-2 px-4 border-b">Delivered</td>
              <td className="py-2 px-4 border-b">$399</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
