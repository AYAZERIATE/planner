import Aboutus1 from "../assets/Aboutus1.jpg";
import Aboutus2 from "../assets/Aboutus2.jpg";

function About(){

    return(
        <div className="about-page">
            <style>{`
                .about-page {
                    padding: 72px 8% 80px;
                    background: #fff;
                    color: #111;
                    font-family: "Inter", "Segoe UI", Arial, sans-serif;
                }

                .about-page h1 {
                    margin: 0 0 40px;
                    padding-bottom: 14px;
                    font-size: 14px;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 4px;
                    border-bottom: 1px solid #111;
                }

                .Our-mission {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 28px;
                }

                .Our-mission img {
                    grid-column: 1 / -1;
                    width: 100%;
                    max-height: 400px;
                    object-fit: cover;
                    border-radius: 12px;
                }

                .Our-mission h4 {
                    grid-column: 1 / -1;
                    margin: 16px 0 8px;
                    max-width: 760px;
                    font-size: 30px;
                    font-weight: 700;
                    line-height: 1.4;
                }

                .section1, .section2, .section3 {
                    padding: 28px 24px;
                    background: #fafafa;
                    border: 1px solid #e5e5e5;
                    border-radius: 10px;
                    transition: border-color 0.2s ease;
                }

                .section1:hover, .section2:hover, .section3:hover {
                    border-color: #111;
                }

                .section1 h5, .section2 h5, .section3 h5 {
                    margin: 0 0 14px;
                    padding-bottom: 10px;
                    font-size: 13px;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 2px;
                    border-bottom: 1px solid #e5e5e5;
                }

                .section1 p, .section2 p, .section3 p {
                    margin: 0;
                    font-size: 14px;
                    line-height: 1.8;
                    color: #555;
                }

                .who-we-help {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    margin-top: 72px;
                    text-align: center;
                }

                .who-we-help img {
                    display: block;
                    width: 100%;
                    max-width: 560px;
                    max-height: 360px;
                    object-fit: cover;
                    border-radius: 12px;
                }

                .who-we-help h2 {
                    margin: 28px 0 0;
                    font-size: 14px;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 4px;
                }

                .stats {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 24px;
                    width: 100%;
                    max-width: 560px;
                    margin-top: 36px;
                }

                .stat-card {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 8px;
                    padding: 28px 24px;
                    background: #111;
                    color: #fff;
                    border-radius: 10px;
                }

                .stat-number {
                    font-size: 44px;
                    font-weight: 700;
                    line-height: 1;
                }

                .stat-label {
                    font-size: 12px;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 2px;
                    color: #bdbdbd;
                }

                @media (max-width: 900px) {
                    .Our-mission { grid-template-columns: 1fr; }
                    .Our-mission h4 { font-size: 24px; }
                }

                @media (max-width: 560px) {
                    .about-page { padding: 48px 6% 56px; }
                    .stats { grid-template-columns: 1fr; }
                }
            `}</style>

            <h1>About Us</h1>
            <div className="Our-mission">
                <img src={Aboutus1} alt="Our mission" />
                <h4>Helping you turn your everyday plans into meaningful achievements.</h4>
                <div className="section1">
                    <h5>01. Organize Your Time</h5>
                    <p>Take control of your daily schedule by organizing your tasks, managing your priorities, and making the most of every moment. Build better habits, avoid unnecessary stress, and create a balanced routine that helps you stay productive without feeling overwhelmed.</p>
                </div>
                <div className="section2">
                    <h5>02. Define Your Goals</h5>
                    <p>Turn your ambitions into clear and achievable goals. Whether they are personal, academic, or professional, break your big dreams into smaller milestones, track your progress, and stay motivated as you move closer to the results you want.</p>
                </div>
                <div className="section3">
                    <h5>03. Turn Ideas Into Action</h5>
                    <p>Every great achievement starts with an idea, but real progress comes from taking action. Transform your thoughts into structured plans, create actionable steps, set deadlines, and take consistent small actions that bring your ideas to life.</p>
                </div>
            </div>

            <div className="who-we-help">
                <img src={Aboutus2} alt="Who We Help" />
                <h2>Who We Help</h2>

                <div className="stats">
                    <div className="stat-card">
                        <span className="stat-number">120+</span>
                        <span className="stat-label">Start-Ups registered</span>
                    </div>
                    <div className="stat-card">
                        <span className="stat-number">45+</span>
                        <span className="stat-label">Enterprises registered</span>
                    </div>
                </div>
            </div>
        </div>
    )
}export default About;