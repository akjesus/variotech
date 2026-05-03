import { LayoutDashboard, ImagePlus, Folder } from "lucide-react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-black text-white p-6">
      <h2 className="text-xl font-bold mb-8">Admin Panel</h2>

      <nav className="flex flex-col gap-4">
        <Link to="/admin" className="flex gap-2 items-center">
          <LayoutDashboard size={18} /> Dashboard
        </Link>

        <Link to="/admin/add" className="flex gap-2 items-center">
          <ImagePlus size={18} /> Add Project
        </Link>

        <Link to="/admin/projects" className="flex gap-2 items-center">
          <Folder size={18} /> Manage Projects
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
