import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";

function Footer() {
    return (
        <footer className="footer">
            <style>{`
                .footer {
                    display: grid;
                    grid-template-columns: 1.6fr 1fr 1fr;
                    gap: 40px;
                    padding: 56px 8% 48px;
                    color: #111;
                    font-family: "Inter", "Segoe UI", Arial, sans-serif;
                    background-color: #f5efdc;
                    background-image: radial-gradient(#d2cbb2 1.2px, transparent 1.2px);
                    background-size: 22px 22px;
                    border-top: 2px solid #111;
                }

                .footer-logo img {
                    width: 120px;
                    height: auto;
                    object-fit: contain;
                    padding: 8px;
                    background: #fff;
                    border: 2px solid #111;
                    border-radius: 8px;
                    box-shadow: 3px 3px 0 #111;
                }

                .footer-logo p {
                    margin: 20px 0 0;
                    max-width: 280px;
                    font-size: 14px;
                    font-weight: 500;
                    line-height: 1.7;
                    color: #444;
                }

                .sec1, .sec2 {
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                }

                .footer h5 {
                    margin: 0 0 8px;
                    padding-bottom: 10px;
                    font-size: 13px;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 2px;
                    color: #111;
                    border-bottom: 2px dashed #bbb;
                }

                .footer a {
                    width: fit-content;
                    padding: 2px 6px;
                    margin-left: -6px;
                    font-size: 14px;
                    font-weight: 600;
                    color: #111;
                    text-decoration: none;
                    border-radius: 6px;
                    transition: background 0.2s ease;
                }

                .footer a:hover {
                    background: #ffd84d;
                    text-decoration: none;
                }

                @media (max-width: 900px) {
                    .footer {
                        grid-template-columns: 1fr 1fr;
                    }
                }

                @media (max-width: 560px) {
                    .footer {
                        grid-template-columns: 1fr;
                        padding: 48px 6%;
                    }
                }
            `}</style>

            <div className="footer-logo">
                <img src={logo} alt="Logo" />
                <p>Make a plan. Make it happen. Make a difference.</p>
            </div>

            <div className="sec1">
                <h5>Information</h5>
                <Link to="/about">About Us</Link>
                <Link to="/story">Our Story</Link>
            </div>

            <div className="sec2">
                <h5>Contact Us</h5>
                <a href="mailto:contact@example.com">Email</a>
                <a href="tel:+212600000000">Phone</a>
                <Link to="/contact">Contact</Link>
            </div>
        </footer>
    );
}

export default Footer;