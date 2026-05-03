import Sidebar from "../../components/admin/Sidebar";

const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 p-10">
        <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
        <p>Welcome to your portfolio admin panel.</p>
      </div>
    </div>
  );
};

export default Dashboard;
