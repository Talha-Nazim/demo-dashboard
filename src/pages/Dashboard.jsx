import Widget from "../components/Widget";
import Chart from "../components/Chart";

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
      <Chart />

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
