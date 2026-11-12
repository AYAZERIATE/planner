import { Outlet } from "react-router-dom";
import Sidebar from "../compenents/Sidebar";

function DashboardLayout() {
    return (
        <div className="dashboard-layout">
            <Sidebar />
            <main className="dashboard-content">
                <Outlet />
            </main>
            <style>{`
                .dashboard-layout {
                    display: flex;
                    min-height: 100vh;
                }
                .dashboard-content {
                    flex: 1;
                    min-width: 0;
                    padding: 24px;
                }
                @media (max-width: 800px) {
                    .dashboard-layout {
                        flex-direction: column;
                    }
                }
            `}</style>
        </div>
    );
}

export default DashboardLayout;
