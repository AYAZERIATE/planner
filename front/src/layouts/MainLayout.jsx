import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import Navbar from "../compenent/Navbar";
function MainLayout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default MainLayout;