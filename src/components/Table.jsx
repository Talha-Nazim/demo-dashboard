import React from 'react'

const Table = () => {
  return (
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
  )
}

export default Table