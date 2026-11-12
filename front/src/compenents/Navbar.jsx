import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.jpg";

function Navbar() {
    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    return (
        <div>
            <style>{`
                .navbar {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 24px;
                    padding: 14px 8%;
                    background: #111;
                    color: #fff;
                    font-family: "Inter", "Segoe UI", Arial, sans-serif;
                }

                .navbar-logo img {
                    display: block;
                    width: 48px;
                    height: 48px;
                    object-fit: contain;
                    padding: 4px;
                    background: #fff;
                    border-radius: 8px;
                }

                .search-bar {
                    flex: 1;
                    max-width: 420px;
                }

                .search-bar input {
                    width: 100%;
                    box-sizing: border-box;
                    padding: 11px 16px;
                    font-size: 14px;
                    font-family: inherit;
                    color: #fff;
                    background: #1c1c1c;
                    border: 1px solid #333;
                    border-radius: 8px;
                    outline: none;
                    transition: border-color 0.2s ease, background 0.2s ease;
                }

                .search-bar input::placeholder {
                    color: #a3a3a3;
                    text-transform: capitalize;
                }

                .search-bar input:focus {
                    background: #222;
                    border-color: #fff;
                }

                .button-dashboard button {
                    padding: 11px 22px;
                    font-size: 13px;
                    font-weight: 600;
                    font-family: inherit;
                    text-transform: uppercase;
                    letter-spacing: 1.5px;
                    color: #111;
                    background: #fff;
                    border: 1px solid #fff;
                    border-radius: 8px;
                    cursor: pointer;
                    transition: background 0.2s ease, color 0.2s ease;
                }

                .button-dashboard button:hover {
                    background: transparent;
                    color: #fff;
                }

                @media (max-width: 700px) {
                    .navbar {
                        flex-wrap: wrap;
                        padding: 14px 6%;
                    }
                    .search-bar {
                        order: 3;
                        flex-basis: 100%;
                        max-width: none;
                    }
                }
            `}</style>

            <div className="navbar">
                <div className="navbar-logo">
                    <img src={logo} alt="Logo" />
                </div>
                <div className="search-bar">
                    <input
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search"
                    />
                </div>
                <div className="button-dashboard">
                    <button onClick={() => navigate("/dashboard")}>open planner</button>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
