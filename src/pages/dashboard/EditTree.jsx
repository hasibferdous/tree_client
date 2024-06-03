import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import confirmAction from "../../components/toast/confirmAction";

const EditTree = () => {
  const { id } = useParams();

  const [treeDetails, setTreeDetails] = useState();
  const [categories, setCategories] = useState();

  useEffect(() => {
    async function load() {
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

    load();
  }, [id]);

  const handleCreateTree = async (e) => {
    e.preventDefault();

    const form = e.target;

    const title = form.title.value;
    const price = form.price.value;
    const category = form.category.value;
    const description = form.description.value;
    const treeData = {
      id,
      title,
      price,
      category,
      description,
    };

    await axios.patch(`http://localhost:3000/trees/${id}`, treeData);
  };

  //alert-toast part starts
  const handleEdit = () => {
    confirmAction("Are you sure you want to edit this tree item?", () => {
      toast.success("Tree Item Edited Successfully");
    });
  };
  //alert-toast part ends

  return (
    <div className="w-3/4 px-16 mt-24 ml-7 mr-7 shadow-xl rounded-xl bg-amber-200 font-bold">
      <h1 className="text-4xl mb-4 mt-8">Edit Tree</h1>
      <form onSubmit={handleCreateTree} className="w-full">
        <div className="mb-4">
          <label htmlFor="">Title </label>
          <input
            defaultValue={treeDetails?.title}
            type="text"
            name="title"
            className="w-full py-3 px-5 border"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="">Price </label>
          <input
            type="number"
            name="price"
            defaultValue={treeDetails?.price}
            className="w-full py-3 px-5 border"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="">Cateogry </label>
          <select name="category" id="" className="w-full py-3 px-5 border">
            {categories?.map((category) => (
              <option
                key={category?.title}
                selected={category?.title === treeDetails?.category}
                value={category?.title}
              >
                {category?.title}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="">Description </label>
          <textarea
            defaultValue={treeDetails?.description}
            name="description"
            className="w-full py-3 px-5 border"
          />
        </div>

        <div className="mb-4">
          <input
            type="submit"
            value={"Edit tree"}
            className="w-full btn py-3 px-5 border btn-neutral"
            onClick={handleEdit}
          />
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default EditTree;
