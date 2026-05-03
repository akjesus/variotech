import { useEffect, useState } from "react";
import Sidebar from "../../components/admin/Sidebar";
import API from "../../services/api";
import { Trash2 } from "lucide-react";

const ManageProjects = () => {
  const [projects, setProjects] = useState([]);

  const fetchProjects = async () => {
    const res = await API.get("/projects");
    setProjects(res.data);
  };

  const deleteProject = async (id) => {
    await API.delete(`/projects/${id}`);
    fetchProjects();
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 p-10">
        <h1 className="text-2xl font-bold mb-6">Manage Projects</h1>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div
              key={p._id}
              className="bg-white rounded shadow overflow-hidden"
            >
              <img src={p.image} alt="" className="h-48 w-full object-cover" />

              <div className="p-4 flex justify-between items-center">
                <div>
                  <h3 className="font-semibold">{p.title}</h3>
                  <p className="text-sm text-gray-500">{p.category}</p>
                </div>

                <button
                  onClick={() => deleteProject(p._id)}
                  className="text-red-500"
                >
                  <Trash2 />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManageProjects;
