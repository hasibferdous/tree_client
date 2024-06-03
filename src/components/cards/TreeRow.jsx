import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
/* eslint-disable react/prop-types */

export default function TreeRow({ tree }) {
  const { id } = useParams();
  const [treeDetails, setTreeDetails] = useState();
  const [categories, setCategories] = useState();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  useEffect(() => {
    async function load(id) {
      const categoriesData = await axios.get(
        "http://localhost:3000/categories"
      );
      if (categoriesData?.status === 200) {
        setCategories(categoriesData?.data);
      }

      const treeData = await axios.get(`http://localhost:3000/trees/${id}`);
      if (treeData?.status === 200) {
        setTreeDetails(treeData?.data);
      }
    }

    if (id) {
      load(id);
    }
  }, [id]);

  const openDialog = (id) => {
    setDeleteId(id);
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
    setDeleteId(null);
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this tree?"
    );
    if (confirmDelete) {
      try {
        const response = await axios.delete(
          `http://localhost:3000/trees/${id}`
        );
        if (response.status === 200) {
          toast.success("Tree Deleted Successfully!");
        } else {
          toast.error("Failed to Delete tree!");
        }
      } catch (error) {
        toast.error("An error occurred while deleting the tree!");
      }
      closeDialog();
    } else {
      closeDialog();
    }
  };

  return (
    <>
      <tr>
        <th>{tree?.id}</th>
        <td>{tree?.title}</td>
        <td>{tree?.price}</td>
        <td>{tree?.category}</td>
        <td className="flex gap-4">
          <Link
            to={`/dashboard/edit-tree/${tree?.id}`}
            className="btn btn-xs btn-neutral"
          >
            Edit
          </Link>
          <button
            onClick={() => handleDelete(tree?.id)}
            className="btn btn-xs btn-error"
          >
            Delete
          </button>
        </td>
      </tr>

      <ToastContainer />
    </>
  );
}
