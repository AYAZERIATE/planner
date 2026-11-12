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
                    background: #111;
                    color: #fff;
                    font-family: "Inter", "Segoe UI", Arial, sans-serif;
                }

                .footer-logo img {
                    width: 120px;
                    height: auto;
                    object-fit: contain;
                    padding: 8px;
                    background: #fff;
                    border-radius: 8px;
                }

                .footer-logo p {
                    margin: 20px 0 0;
                    max-width: 280px;
                    font-size: 14px;
                    line-height: 1.7;
                    color: #a3a3a3;
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
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 2px;
                    color: #fff;
                    border-bottom: 1px solid #333;
                }

                .footer a {
                    width: fit-content;
                    font-size: 14px;
                    color: #a3a3a3;
                    text-decoration: none;
                    transition: color 0.2s ease;
                }

                .footer a:hover {
                    color: #fff;
                    text-decoration: underline;
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
                <Link to="/new-arrivals">New Arrivals</Link>
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
