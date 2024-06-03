import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import About from "../pages/About";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";
import DashboardLayout from "../layouts/DashboardLayout";
import PrivateRoutes from "./PrivateRoutes";
import DashboardHome from "../pages/dashboard/DashboardHome";
import ManageAllTree from "../pages/dashboard/ManageAllTree";
import Categories from "../pages/Categories";
import Blogs from "../pages/Blogs";
import FAQ from "../pages/FAQ";
import AddTree from "../pages/dashboard/AddTree";
import EditTree from "../pages/dashboard/EditTree";
import AllTree from "../pages/AllTree";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "alltree",
        element: <AllTree />,
      },
      {
        path: "categories",
        element: <Categories />,
      },
      {
        path: "blogs",
        element: <Blogs />,
      },
      {
        path: "faq",
        element: <FAQ />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoutes>
        <DashboardLayout />
      </PrivateRoutes>
    ),
    children: [
      {
        index: true,
        element: <DashboardHome />,
      },
      {
        path: "manage-tree",
        element: <ManageAllTree />,
      },
      {
        path: "add-tree",
        element: <AddTree />,
      },
      {
        path: "edit-tree/:id",
        element: <EditTree />,
      },
    ],
  },
]);

export default router;
