import { useEffect, useState } from "react";
import CategoryCard from "../components/cards/CategoryCard";

const Categories = () => {
  const [categories, setCategories] = useState();
  useEffect(() => {
    // fetch("http://localhost:3000/trees")
    //   .then((res) => res.json())
    //   .then((data) => setRescipes(data));

    async function load() {
      //get trees
      //   const treeRes = await fetch("http://localhost:3000/trees");
      //   const treeData = await treeRes.json();
      //   setTrees(treeData);

      //get categories
      const categoryRes = await fetch("http://localhost:3000/categories");
      const categoryData = await categoryRes.json();

      setCategories(categoryData);
    }
    load();

    // fetch("http://localhost:3000/categories")
    //   .then((res) => res.json())
    //   .then((data) => setCategories(data));
  }, []);

  return (
    <div>
      <div className="mx-16">
        <h1 className="text-4xl my-20 text-center font-bold">
          Our Tree Categories{" "}
        </h1>
        <div className="grid grid-cols-4 gap-6">
          {categories?.map((category) => (
            <CategoryCard key={category?.id} category={category} />
          ))}
        </div>
      </div>
      {/* <div className="mx-16">
        <h1 className="text-4xl my-20 text-center font-bold">
          Our Popular Collections{" "}
        </h1>
        <div className="grid grid-cols-4 gap-6">
          {trees
            ?.reverse()
            ?.slice(0, 8)
            ?.map((tree) => (
              <TreeCard key={tree?.id} tree={tree} />
            ))}
        </div>
      </div> */}
    </div>
  );
};

export default Categories;
