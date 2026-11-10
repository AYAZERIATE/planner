import { useState } from "react";
import logo from "../assets/logo.jpg";
import { useNavigate } from "react-router-dom";
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
                    padding: 16px 8%;
                    background: linear-gradient(145deg, #ffffff 0%, #ececec 100%);
                    color: #000;
                    font-family: "Inter", "Segoe UI", Arial, sans-serif;
                    border-bottom: 2px solid #000;
                    box-shadow: 0 6px 0 #000;
                }

                .navbar-logo img {
                    display: block;
                    width: 56px;
                    height: 56px;
                    object-fit: contain;
                    padding: 4px;
                    background: #fff;
                    border: 2px solid #000;
                    border-radius: 10px;
                    box-shadow: 4px 4px 0 #000;
                    transition: transform 0.2s ease, box-shadow 0.2s ease;
                }

                .navbar-logo img:hover {
                    transform: translate(-2px, -2px);
                    box-shadow: 6px 6px 0 #000;
                }

                .search-bar {
                    flex: 1;
                    max-width: 420px;
                }

                .search-bar input {
                    width: 100%;
                    padding: 12px 18px;
                    font-size: 14px;
                    font-family: inherit;
                    letter-spacing: 1px;
                    color: #000;
                    background: #fff;
                    border: 2px solid #000;
                    border-radius: 8px;
                    box-shadow: 4px 4px 0 #000;
                    outline: none;
                    transition: transform 0.2s ease, box-shadow 0.2s ease;
                    box-sizing: border-box;
                }

                .search-bar input::placeholder {
                    color: #777;
                    text-transform: uppercase;
                    letter-spacing: 3px;
                    font-size: 12px;
                }

                .search-bar input:focus {
                    transform: translate(-2px, -2px);
                    box-shadow: 6px 6px 0 #000;
                }

                .button-dashboard button {
                    padding: 12px 24px;
                    font-size: 13px;
                    font-weight: 700;
                    font-family: inherit;
                    text-transform: uppercase;
                    letter-spacing: 3px;
                    color: #fff;
                    background: #000;
                    border: 2px solid #000;
                    border-radius: 8px;
                    box-shadow: 4px 4px 0 #777;
                    cursor: pointer;
                    transition: transform 0.2s ease, box-shadow 0.2s ease,
                                background 0.2s ease, color 0.2s ease;
                }

                .button-dashboard button:hover {
                    background: #fff;
                    color: #000;
                    transform: translate(-2px, -2px);
                    box-shadow: 6px 6px 0 #000;
                }

                .button-dashboard button:active {
                    transform: translate(2px, 2px);
                    box-shadow: 1px 1px 0 #000;
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
                        placeholder="search"
                    />
                </div>
                <button onClick={() => navigate("/dashboard")}>open planner</button>
            </div>
        </div>
    );
}

export default Navbar;