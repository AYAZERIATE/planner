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
                    color: #111;
                    font-family: "Inter", "Segoe UI", Arial, sans-serif;
                    background-color: #f5efdc;
                    background-image: radial-gradient(#d2cbb2 1.2px, transparent 1.2px);
                    background-size: 22px 22px;
                    border-bottom: 2px solid #111;
                }

                .navbar-logo img {
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

                .search-bar {
                    flex: 1;
                    max-width: 420px;
                }

                .search-bar input {
                    width: 100%;
                    box-sizing: border-box;
                    padding: 11px 18px;
                    font-size: 14px;
                    font-family: inherit;
                    color: #111;
                    background: #fff;
                    border: 2px solid #111;
                    border-radius: 999px;
                    outline: none;
                    transition: box-shadow 0.2s ease, transform 0.2s ease;
                }

                .search-bar input::placeholder {
                    color: #888;
                    text-transform: capitalize;
                }

                .search-bar input:focus {
                    transform: translate(-2px, -2px);
                    box-shadow: 4px 4px 0 #ff9f9f;
                }

                .button-dashboard button {
                    padding: 11px 24px;
                    font-size: 13px;
                    font-weight: 800;
                    font-family: inherit;
                    text-transform: uppercase;
                    letter-spacing: 1.5px;
                    color: #111;
                    background: #ffd84d;
                    border: 2px solid #111;
                    border-radius: 999px;
                    box-shadow: 3px 3px 0 #111;
                    cursor: pointer;
                    transition: transform 0.2s ease, box-shadow 0.2s ease;
                }

                .button-dashboard button:hover {
                    transform: translate(-2px, -2px);
                    box-shadow: 5px 5px 0 #111;
                }

                .button-dashboard button:active {
                    transform: translate(2px, 2px);
                    box-shadow: 1px 1px 0 #111;
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