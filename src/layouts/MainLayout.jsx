import { Outlet } from "react-router-dom";
import Navbar from "../components/Shared/Navbar";
import Footer from "../components/Shared/Footer";

const MainLayout = () => {
  return (
    <div className="bg-gradient-to-r from-green-300 via-emerald-300 to-lime-300bg-gradient-to-r from-lime-100 via-emerald-200 to-emerald-300bg-gradient-to-r from-lime-100 via-green-300 to-lime-100">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};
export default MainLayout;
