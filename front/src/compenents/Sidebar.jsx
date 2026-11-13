import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/logo.jpg";

function Sidebar() {
    const navigate = useNavigate();

    return (
        <aside className="sidebar">
            <style>{`
               .sidebar {
    display: flex;
    flex-direction: column;
    gap: 28px;
    width: 240px;
    flex: 0 0 240px;
    min-height: 100vh;
    padding: 24px 16px;
    color: #111;
    font-family: "Inter", "Segoe UI", Arial, sans-serif;
    box-sizing: border-box;
    background-color: #f5efdc;
    background-image: radial-gradient(#d2cbb2 1.2px, transparent 1.2px);
    background-size: 22px 22px;
    border-right: 2px solid #111;
}

                .sidebar-logo img {
                    display: block;
                    width: 48px;
                    height: 48px;
                    object-fit: contain;
                    padding: 4px;
                    background: #fff;
                    border: 2px solid #111;
                    border-radius: 8px;
                    box-shadow: 3px 3px 0 #111;
                }

                .button-home {
                    width: 100%;
                    padding: 10px 12px;
                    font-size: 14px;
                    font-weight: 700;
                    font-family: inherit;
                    color: #111;
                    background: #fff;
                    border: 2px solid #111;
                    border-radius: 999px;
                    box-shadow: 3px 3px 0 #111;
                    cursor: pointer;
                    transition: background 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
                }

                .button-home:hover {
                    background: #d6e9ff;
                    transform: translate(-2px, -2px);
                    box-shadow: 5px 5px 0 #111;
                }

                .sidebar-section {
                    display: flex;
                    flex-direction: column;
                    gap: 6px;
                }

                .sidebar-section h4 {
                    margin: 0 0 8px;
                    padding: 0 12px;
                    font-size: 11px;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 2px;
                    color: #888;
                }

                .sidebar a {
                    padding: 10px 12px;
                    font-size: 14px;
                    font-weight: 600;
                    color: #111;
                    text-decoration: none;
                    border: 2px solid transparent;
                    border-radius: 8px;
                    transition: background 0.2s ease, transform 0.2s ease;
                }

                .sidebar a:hover {
                    background: #fff3b0;
                }

                .sidebar a.active {
                    font-weight: 800;
                    background: #ffd84d;
                    border-color: #111;
                    box-shadow: 3px 3px 0 #111;
                }

                .sidebar-bottom {
                    margin-top: auto;
                    padding-top: 16px;
                    border-top: 2px dashed #bbb;
                }

                @media (max-width: 800px) {
                    .sidebar {
                        width: 100%;
                        min-height: auto;
                        border-right: none;
                        border-bottom: 2px solid #111;
                    }
                    .sidebar-bottom { margin-top: 0; }
                }
            `}</style>

            <div className="sidebar-logo">
                <img src={logo} alt="Logo" />
            </div>

            <button className="button-home" onClick={() => navigate("/home")}>
                ← Back to Home
            </button>

            <div className="sidebar-section section-student">
                <h4>Student</h4>
                <NavLink to="/dashboard/courses">Courses</NavLink>
                <NavLink to="/dashboard/notes">Notes</NavLink>
                <NavLink to="/dashboard/schedules">Schedules</NavLink>
                <NavLink to="/dashboard/goals">Goals</NavLink>
                <NavLink to="/dashboard/tasks">Tasks</NavLink>
            </div>

            <div className="sidebar-section sidebar-bottom">
                <NavLink to="/dashboard/settings">Settings</NavLink>
            </div>
        </aside>
    );
}

export default Sidebar;