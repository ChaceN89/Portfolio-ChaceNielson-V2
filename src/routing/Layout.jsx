import { Outlet } from "react-router-dom";
import NavBar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

const Layout = () => {
  return (
    <div className="layout z-0">
      <NavBar/>
      <main className="pt-14">
        <Outlet />
      </main>
      <Footer/>
    </div>
  );
};

export default Layout;