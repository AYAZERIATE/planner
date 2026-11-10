import { Outlet } from "react-router-dom";
import Navbar from "../compenent/Navbar";
import Footer from "../compenent/footer";
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