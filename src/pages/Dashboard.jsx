import Widget from "../components/Widget";
import Chart from "../components/Chart";
import Table from "../components/Table";

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
      <Table />
    </div>
  );
};

export default Dashboard;
