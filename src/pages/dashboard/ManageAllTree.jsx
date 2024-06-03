import axios from "axios";
import { useEffect, useState } from "react";
import TreeRow from "../../components/cards/TreeRow";

export default function ManageAllTree() {
  const [trees, setTrees] = useState();
  useEffect(() => {
    async function load() {
      const data = await axios.get("http://localhost:3000/trees");
      if (data?.status === 200) {
        setTrees(data?.data);
      }
    }
    load();
  }, []);

  return (
    <div className="overflow-x-auto w-full px-16 mt-10">
      <h1 className="text-3xl mb-4">Manage All Tree</h1>
      <table className="table table-zebra">
        {/* head */}
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Price</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {trees?.map((tree) => (
            <TreeRow key={tree?.id} tree={tree} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
