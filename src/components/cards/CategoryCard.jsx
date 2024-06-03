/* eslint-disable react/prop-types */
export default function CategoryCard({ category }) {
  return (
    <div className="border px-5 py-3 bg-green-900 text-yellow-50 font-bold shadow-lg rounded-xl hover:bg-slate-700  ">
      <h1 className="text-center">{category?.title}</h1>
    </div>
  );
}
