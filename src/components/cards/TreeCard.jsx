/* eslint-disable react/prop-types */
// import pizza from "../../assets/pizza.webp";

export default function TreeCard({ tree }) {
  return (
    <div className="card shadow-xl bg-yellow-50">
      <figure>
        <img
          src={tree?.image}
          alt="tree"
          className="max-w-50 max-h-96 mt-4 rounded-lg"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{tree?.species}</h2>
        <h2 className="card-title">{tree?.price}</h2>
        <p>
          {tree?.description?.length > 30
            ? tree?.description?.slice(0, 130)
            : tree?.description}
        </p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{tree?.category}</div>
        </div>
      </div>
    </div>
  );
}
