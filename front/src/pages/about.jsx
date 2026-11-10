import Aboutus1 from "../assets/Aboutus1.jpg";
import Aboutus2 from "../assets/Aboutus2.jpg";

function About(){

    return(
        <div className="about-page">
            <style>{`
                .about-page {
                    padding: 72px 8% 80px;
                    background: linear-gradient(145deg, #ffffff 0%, #ececec 100%);
                    color: #000;
                    font-family: "Inter", "Segoe UI", Arial, sans-serif;
                }

                .about-page h1 {
                    margin: 0 0 40px;
                    padding-bottom: 14px;
                    font-size: 14px;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 5px;
                    border-bottom: 2px solid #000;
                    text-shadow: 2px 2px 0 #ccc;
                }

                .Our-mission {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 32px;
                }

                .Our-mission img {
                    grid-column: 1 / -1;
                    width: 100%;
                    max-height: 400px;
                    object-fit: cover;
                    padding: 8px;
                    background: #fff;
                    border: 2px solid #000;
                    border-radius: 14px;
                    box-shadow: 8px 8px 0 #000, 14px 14px 28px rgba(0, 0, 0, 0.25);
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }

                .Our-mission img:hover {
                    transform: translate(-3px, -3px);
                    box-shadow: 11px 11px 0 #000, 18px 18px 32px rgba(0, 0, 0, 0.25);
                }

                .Our-mission h4 {
                    grid-column: 1 / -1;
                    margin: 16px 0 8px;
                    max-width: 760px;
                    font-size: 30px;
                    font-weight: 700;
                    line-height: 1.4;
                    letter-spacing: 0.5px;
                    text-shadow: 3px 3px 0 #ccc;
                }

                .section1, .section2, .section3 {
                    padding: 28px 24px;
                    background: #fff;
                    color: #000;
                    border: 2px solid #000;
                    border-radius: 10px;
                    box-shadow: 6px 6px 0 #000;
                    transition: transform 0.2s ease, box-shadow 0.2s ease,
                                background 0.2s ease, color 0.2s ease;
                }

                .section1:hover, .section2:hover, .section3:hover {
                    background: #000;
                    color: #fff;
                    transform: translate(-3px, -3px);
                    box-shadow: 10px 10px 0 #777;
                }

                .section1 h5, .section2 h5, .section3 h5 {
                    margin: 0 0 14px;
                    padding-bottom: 10px;
                    font-size: 13px;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 3px;
                    border-bottom: 2px solid currentColor;
                }

                .section1 p, .section2 p, .section3 p {
                    margin: 0;
                    font-size: 14px;
                    line-height: 1.8;
                    letter-spacing: 0.3px;
                    color: #444;
                    transition: color 0.2s ease;
                }

                .section1:hover p, .section2:hover p, .section3:hover p {
                    color: #ddd;
                }

                @media (max-width: 900px) {
                    .Our-mission { grid-template-columns: 1fr; }
                    .Our-mission h4 { font-size: 24px; }
                }

                @media (max-width: 560px) {
                    .about-page { padding: 48px 6% 56px; }
                }
                    .who-we-help {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 64px;
    text-align: center;
}

.who-we-help img {
    display: block;
    width: 100%;
    max-width: 560px;
    max-height: 360px;
    object-fit: cover;
    padding: 8px;
    background: #fff;
    border: 2px solid #000;
    border-radius: 14px;
    box-shadow: 8px 8px 0 #000, 14px 14px 28px rgba(0, 0, 0, 0.25);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.who-we-help img:hover {
    transform: translate(-3px, -3px);
    box-shadow: 11px 11px 0 #000, 18px 18px 32px rgba(0, 0, 0, 0.25);
}

.who-we-help h2 {
    margin: 28px 0 0;
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 5px;
    text-shadow: 2px 2px 0 #ccc;
}
    .stats {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
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
    background: #fff;
    color: #000;
    border: 2px solid #000;
    border-radius: 10px;
    box-shadow: 6px 6px 0 #000;
    transition: transform 0.2s ease, box-shadow 0.2s ease,
                background 0.2s ease, color 0.2s ease;
}

.stat-card:hover {
    background: #000;
    color: #fff;
    transform: translate(-3px, -3px);
    box-shadow: 10px 10px 0 #777;
}

.stat-number {
    font-size: 44px;
    font-weight: 700;
    line-height: 1;
    text-shadow: 3px 3px 0 #ccc;
}

.stat-card:hover .stat-number {
    text-shadow: 3px 3px 0 #555;
}

.stat-label {
    font-size: 13px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 3px;
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