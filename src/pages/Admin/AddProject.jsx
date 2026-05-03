import { useState } from "react";
import Sidebar from "../../components/admin/Sidebar";
import API from "../../services/api";

const AddProject = () => {
  const [form, setForm] = useState({
    title: "",
    category: "",
    image: null,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("title", form.title);
    data.append("category", form.category);
    data.append("image", form.image);

    try {
      await API.post("/projects", data);
      alert("Project uploaded!");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 p-10">
        <h1 className="text-2xl font-bold mb-6">Add Project</h1>

        <form onSubmit={handleSubmit} className="max-w-md space-y-4">
          <input
            type="text"
            placeholder="Project Title"
            className="w-full p-3 border rounded"
            onChange={(e) => setForm({ ...form, title: e.target.value })}
          />

          <select
            className="w-full p-3 border rounded"
            onChange={(e) => setForm({ ...form, category: e.target.value })}
          >
            <option>Select Category</option>
            <option>Living Room</option>
            <option>Bedroom</option>
            <option>Office</option>
          </select>

          <input
            type="file"
            onChange={(e) => setForm({ ...form, image: e.target.files[0] })}
          />

          <button className="bg-yellow-600 text-white px-6 py-2 rounded">
            Upload
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProject;
