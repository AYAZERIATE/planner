import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";

function Footer() {
    return (
        <footer className="footer">
            <style>{`
                .footer {
                    display: grid;
                    grid-template-columns: 1.6fr 1fr 1fr 1fr;
                    gap: 40px;
                    padding: 64px 8% 56px;
                    background: linear-gradient(145deg, #0a0a0a 0%, #1c1c1c 100%);
                    color: #fff;
                    font-family: "Inter", "Segoe UI", Arial, sans-serif;
                    border-top: 1px solid #fff;
                    box-shadow: 0 -8px 0 #fff, 0 -16px 0 #333, 0 -24px 40px rgba(0, 0, 0, 0.6);
                    perspective: 1000px;
                }

                .footer-logo img {
                    width: 140px;
                    height: 140px;
                    object-fit: contain;
                    padding: 8px;
                    background: #fff;
                    border: 2px solid #fff;
                    border-radius: 14px;
                    box-shadow: 6px 6px 0 #555, 10px 10px 24px rgba(0, 0, 0, 0.7);
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }

                .footer-logo img:hover {
                    transform: translate(-3px, -3px) scale(1.05);
                    box-shadow: 9px 9px 0 #555, 14px 14px 28px rgba(0, 0, 0, 0.7);
                }

                .footer-logo p {
                    margin-top: 28px;
                    max-width: 280px;
                    font-size: 14px;
                    line-height: 1.7;
                    letter-spacing: 0.5px;
                    color: #bdbdbd;
                }

                .sec1, .sec2, .sec3 {
                    display: flex;
                    flex-direction: column;
                    gap: 14px;
                }

                .footer h5 {
                    margin: 0 0 8px;
                    padding-bottom: 10px;
                    font-size: 13px;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 3px;
                    color: #fff;
                    border-bottom: 2px solid #fff;
                    text-shadow: 2px 2px 0 #444;
                }

                .footer a {
                    width: fit-content;
                    padding: 6px 14px;
                    color: #e5e5e5;
                    font-size: 14px;
                    text-decoration: none;
                    border: 1px solid #444;
                    border-radius: 6px;
                    background: #111;
                    box-shadow: 3px 3px 0 #444;
                    transition: transform 0.2s ease, box-shadow 0.2s ease,
                                background 0.2s ease, color 0.2s ease;
                }

                .footer a:hover {
                    background: #fff;
                    color: #000;
                    border-color: #fff;
                    transform: translate(-2px, -2px);
                    box-shadow: 5px 5px 0 #777;
                }

                .footer a:active {
                    transform: translate(2px, 2px);
                    box-shadow: 1px 1px 0 #777;
                }

                @media (max-width: 900px) {
                    .footer { grid-template-columns: 1fr 1fr; }
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
                <Link to="/About">About Us</Link>
                <Link to="/story">Our Story</Link>
                <Link to="/new-arrivals">New Arrivals</Link>
            </div>

            <div className="sec2">
                <h5>Contact Us</h5>
                <a href="mailto:contact@example.com">Email</a>
                <a href="tel:+212600000000">Phone</a>
                <Link to="/contact">Contact</Link>
            </div>

            <div className="sec3">
                <h5>Planner For</h5>
                <Link to="/enterprise">Enterprise</Link>
                <Link to="/start-up">Start-Up</Link>
            </div>
        </footer>
    );
}

export default Footer;