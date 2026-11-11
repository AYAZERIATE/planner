import { Outlet } from "react-router-dom";
import Sidebar from "../compenents/sidebar";
function DashboardLayout() {
    return (
        <div style={{ display: "flex" }}>
            <Sidebar />
            <main style={{ flex: 1, padding: "24px" }}>
                <Outlet />
            </main>
        </div>
    );
}

export default DashboardLayout;