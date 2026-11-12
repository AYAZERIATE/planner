import { Outlet } from "react-router-dom";
import Navbar from "../compenents/Navbar";
import Footer from "../compenents/footer";

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
