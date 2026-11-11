import { NavLink } from "react-router-dom";
import logo from "../assets/logo.jpg";

function Sidebar() {
    return (
        <aside className="sidebar">
            <style>{`
                .sidebar {
                    display: flex;
                    flex-direction: column;
                    gap: 28px;
                    width: 240px;
                    min-height: 100vh;
                    padding: 24px 16px;
                    background: #111;
                    color: #fff;
                    font-family: "Inter", "Segoe UI", Arial, sans-serif;
                    box-sizing: border-box;
                }

                .sidebar-logo img {
                    display: block;
                    width: 48px;
                    height: 48px;
                    object-fit: contain;
                    padding: 4px;
                    background: #fff;
                    border-radius: 8px;
                }

                .sidebar-section {
                    display: flex;
                    flex-direction: column;
                    gap: 4px;
                }

                .sidebar-section h4 {
                    margin: 0 0 8px;
                    padding: 0 12px;
                    font-size: 11px;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 2px;
                    color: #777;
                }

                .sidebar a {
                    padding: 10px 12px;
                    font-size: 14px;
                    color: #a3a3a3;
                    text-decoration: none;
                    border-radius: 8px;
                    transition: background 0.2s ease, color 0.2s ease;
                }

                .sidebar a:hover {
                    color: #fff;
                    background: #1c1c1c;
                }

                .sidebar a.active {
                    color: #111;
                    font-weight: 600;
                    background: #fff;
                }

                .sidebar-bottom {
                    margin-top: auto;
                    padding-top: 16px;
                    border-top: 1px solid #333;
                }

                @media (max-width: 800px) {
                    .sidebar {
                        width: 100%;
                        min-height: auto;
                    }
                    .sidebar-bottom { margin-top: 0; }
                }
            `}</style>

            <div className="sidebar-logo">
                <img src={logo} alt="Logo" />
            </div>

            <div className="sidebar-section">
                <NavLink to="/dashboard/assistant">AI Assistant</NavLink>
            </div>

            <div className="sidebar-section section-student">
                <h4>Student</h4>
                <NavLink to="/dashboard/courses">Courses</NavLink>
                <NavLink to="/dashboard/notes">Notes</NavLink>
                <NavLink to="/dashboard/schedules">Schedules</NavLink>
                <NavLink to="/dashboard/goals">Goals</NavLink>
                <NavLink to="/dashboard/tasks">Tasks</NavLink>
            </div>

            <div className="sidebar-section section-entreprise">
                <h4>Entreprise</h4>
                <NavLink to="/dashboard/projects">Projects</NavLink>
                <NavLink to="/dashboard/team">Team</NavLink>
                <NavLink to="/dashboard/meetings">Meetings</NavLink>
            </div>

            <div className="sidebar-section sidebar-bottom">
                <NavLink to="/dashboard/settings">Settings</NavLink>
            </div>
        </aside>
    );
}

export default Sidebar;