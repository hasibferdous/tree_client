import { useSignOut } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase.config";
import { Link, Outlet } from "react-router-dom";

export default function DashbaordLayout() {
  const [signOut] = useSignOut(auth);

  const handleLogout = async () => {
    await signOut();
  };
  return (
    <div className="drawer lg:drawer-open bg-gradient-to-r from-green-300 via-emerald-300 to-lime-300bg-gradient-to-r from-lime-100 via-emerald-200 to-emerald-300bg-gradient-to-r from-lime-100 via-green-300 to-lime-100">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <Outlet />
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-60 min-h-screen bg-slate-500 text-base-content flex flex-col justify-between gap-4">
          {/* Sidebar content here */}
          <div className="font-bold">
            <li className=" bg-slate-300 hover:bg-amber-300 rounded-xl shadow-md mt-7 mb-5">
              <Link to={"/dashboard/manage-tree"}>Mangae All Trees</Link>
            </li>
            <li className=" bg-slate-300 hover:bg-amber-300 rounded-xl shadow-md">
              <Link to={"/dashboard/add-tree"}>Add Tree</Link>
            </li>
          </div>
          <div className="flex gap-4">
            <Link to={"/"} className="btn btn-neutral">
              Home
            </Link>
            <button className="btn btn-error" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
}
