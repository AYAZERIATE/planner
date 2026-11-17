import { Link } from "react-router-dom";
import Aboutus1 from "../assets/Aboutus1.jpg";
import Aboutus2 from "../assets/Aboutus2.jpg";

const pillars = [
    {
        title: "01. Organize Your Time",
        text: "Take control of your study schedule by organizing classes, assignments and revision sessions. Build better habits, avoid last-minute stress, and create a balanced routine that keeps you productive without feeling overwhelmed.",
    },
    {
        title: "02. Define Your Goals",
        text: "Turn your academic ambitions into clear and achievable goals. Break big objectives like passing your exams or landing an internship into smaller milestones, track your progress, and stay motivated.",
    },
    {
        title: "03. Turn Ideas Into Action",
        text: "Every achievement starts with an idea, but real progress comes from action. Transform your thoughts into structured plans, set deadlines, and take consistent small steps that bring your ideas to life.",
    },
];

const features = [
    { title: "Courses", text: "Keep every subject, syllabus and resource in one place." },
    { title: "Notes", text: "Capture lectures and ideas, and find them again in seconds." },
    { title: "Schedules", text: "Plan your week around classes, exams and study time." },
    { title: "Goals", text: "Set targets for each semester and follow your progress." },
    { title: "Tasks", text: "Track assignments and deadlines so nothing slips through." },
    { title: "AI Assistant", text: "Get help summarizing notes, planning revisions and staying on track." },
];

const steps = [
    { title: "Create your space", text: "Sign up and add your courses for the semester." },
    { title: "Plan your week", text: "Fill your schedule, set tasks and define your goals." },
    { title: "Track your progress", text: "Check what you completed and adjust your plan every week." },
];

const stats = [
    { number: "2,500+", label: "Students registered", desc: "Organize courses, notes and goals in one place." },
    { number: "10,000+", label: "Tasks completed", desc: "Turn your to-do list into real progress." },
    { number: "1,800+", label: "Goals achieved", desc: "Break big ambitions into small, trackable steps." },
];

function About() {
    return (
        <div className="about-page">
            <style>{`
                .about-page {
                    padding: 72px 8% 80px;
                    color: #111;
                    font-family: "Inter", "Segoe UI", Arial, sans-serif;
                    box-sizing: border-box;
                    background-color: #fffdf7;
                    background-image: radial-gradient(#d9d4c3 1.2px, transparent 1.2px);
                    background-size: 22px 22px;
                }

                .about-page h1 {
                    position: relative;
                    z-index: 0;
                    display: table;
                    margin: 0 auto 48px;
                    font-size: 46px;
                    font-weight: 800;
                    letter-spacing: -1.5px;
                    text-transform: none;
                    border-bottom: none;
                }

                .about-page h1::after {
                    content: "";
                    position: absolute;
                    left: -10px;
                    right: -10px;
                    bottom: 4px;
                    height: 18px;
                    background: linear-gradient(90deg, #ffd6d6, #fff3b0, #d6e9ff);
                    border-radius: 6px;
                    transform: rotate(-1.5deg);
                    z-index: -1;
                }

                .about-page h1::before {
                    content: "✏️";
                    position: absolute;
                    top: -18px;
                    right: -38px;
                    font-size: 28px;
                    transform: rotate(18deg);
                    animation: wiggle 2.4s ease-in-out infinite;
                }

                .section-title {
                    position: relative;
                    z-index: 0;
                    display: table;
                    margin: 0 auto 14px;
                    font-size: 28px;
                    font-weight: 800;
                    letter-spacing: -0.5px;
                    text-align: center;
                }

                .section-title::after {
                    content: "";
                    position: absolute;
                    left: -6px;
                    right: -6px;
                    bottom: 2px;
                    height: 12px;
                    background: #ffd84d;
                    border-radius: 4px;
                    transform: rotate(-1deg);
                    z-index: -1;
                }

                .section-subtitle {
                    max-width: 560px;
                    margin: 0 auto 40px;
                    font-size: 16px;
                    font-weight: 500;
                    line-height: 1.8;
                    text-align: center;
                    color: #555;
                }

                .Our-mission {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 32px 28px;
                }

                .Our-mission img {
                    grid-column: 1 / -1;
                    width: 100%;
                    max-height: 400px;
                    object-fit: cover;
                    border: 2px solid #111;
                    border-radius: 14px;
                    box-shadow: 8px 8px 0 #111;
                    box-sizing: border-box;
                }

                .Our-mission h4 {
                    grid-column: 1 / -1;
                    margin: 16px 0 8px;
                    max-width: 760px;
                    font-size: 30px;
                    font-weight: 800;
                    line-height: 1.4;
                }

                .info-card {
                    position: relative;
                    padding: 28px 24px;
                    background: #fff3b0;
                    border: 2px solid #111;
                    border-radius: 4px 4px 18px 4px;
                    box-shadow: 5px 5px 0 #111;
                    transform: rotate(-1deg);
                    transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.25s ease;
                }

                .info-card:nth-child(4n + 1) { background: #fff3b0; }
                .info-card:nth-child(4n + 2) { background: #ffd6d6; transform: rotate(1deg); }
                .info-card:nth-child(4n + 3) { background: #d6e9ff; transform: rotate(-0.6deg); }
                .info-card:nth-child(4n) { background: #d9f5d6; transform: rotate(1.3deg); }

                .info-card:hover {
                    transform: translate(-3px, -6px) rotate(0deg) scale(1.03);
                    box-shadow: 9px 10px 0 #111;
                }

                .info-card h5 {
                    margin: 0 0 14px;
                    padding-bottom: 10px;
                    font-size: 13px;
                    font-weight: 800;
                    text-transform: uppercase;
                    letter-spacing: 2px;
                    border-bottom: 2px dashed rgba(0, 0, 0, 0.35);
                }

                .info-card p {
                    margin: 0;
                    font-size: 14px;
                    line-height: 1.8;
                    color: #222;
                }

                .features {
                    margin-top: 88px;
                }

                .features-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 32px 28px;
                }

                .how-it-works {
                    margin-top: 88px;
                }

                .steps {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 28px;
                }

                .step {
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                    padding: 20px 20px 24px;
                    background: #fffef9;
                    border: 2px solid #111;
                    border-radius: 12px;
                    box-shadow: 5px 5px 0 #111;
                }

                .step-number {
                    align-self: flex-start;
                    padding: 3px 12px;
                    font-size: 11px;
                    font-weight: 800;
                    letter-spacing: 2px;
                    color: #111;
                    background: #ffd84d;
                    border: 2px solid #111;
                    border-radius: 999px;
                }

                .step:nth-child(2) .step-number { background: #ffd6d6; }
                .step:nth-child(3) .step-number { background: #d9f5d6; }

                .step h5 {
                    margin: 0;
                    font-size: 18px;
                    font-weight: 800;
                }

                .step p {
                    margin: 0;
                    font-size: 14px;
                    line-height: 1.8;
                    color: #444;
                }

                .who-we-help {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    margin-top: 88px;
                    text-align: center;
                }

                .who-we-help img {
                    display: block;
                    width: 100%;
                    max-width: 560px;
                    max-height: 360px;
                    object-fit: cover;
                    border: 2px solid #111;
                    border-radius: 14px;
                    box-shadow: 8px 8px 0 #111;
                    box-sizing: border-box;
                }

                .who-we-help h2 {
                    position: relative;
                    z-index: 0;
                    margin: 36px 0 0;
                    font-size: 28px;
                    font-weight: 800;
                    letter-spacing: -0.5px;
                }

                .who-we-help h2::after {
                    content: "";
                    position: absolute;
                    left: -6px;
                    right: -6px;
                    bottom: 2px;
                    height: 12px;
                    background: #ffd84d;
                    border-radius: 4px;
                    transform: rotate(-1deg);
                    z-index: -1;
                }

                .who-intro {
                    max-width: 560px;
                    margin: 16px 0 0;
                    font-size: 16px;
                    font-weight: 500;
                    line-height: 1.8;
                    color: #555;
                }

                .stats {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 28px 24px;
                    width: 100%;
                    max-width: 900px;
                    margin-top: 40px;
                }

                .stat-card {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 8px;
                    padding: 32px 24px;
                    color: #111;
                    background: #fff3b0;
                    border: 2px solid #111;
                    border-radius: 14px;
                    box-shadow: 5px 5px 0 #111;
                    transform: rotate(-1.2deg);
                    transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.25s ease;
                }

                .stat-card:nth-child(2) { background: #ffd6d6; transform: rotate(1deg); }
                .stat-card:nth-child(3) { background: #d6e9ff; transform: rotate(-0.6deg); }

                .stat-card:hover {
                    transform: translate(-3px, -6px) rotate(0deg) scale(1.03);
                    box-shadow: 9px 10px 0 #111;
                }

                .stat-number {
                    font-size: 44px;
                    font-weight: 800;
                    line-height: 1;
                }

                .stat-label {
                    font-size: 12px;
                    font-weight: 800;
                    text-transform: uppercase;
                    letter-spacing: 2px;
                }

                .stat-desc {
                    margin-top: 6px;
                    padding-top: 12px;
                    font-size: 13px;
                    line-height: 1.6;
                    color: #333;
                    border-top: 2px dashed rgba(0, 0, 0, 0.35);
                }

                .about-cta {
                    margin-top: 88px;
                    padding: 56px 32px;
                    text-align: center;
                    background-color: #f5efdc;
                    background-image: radial-gradient(#d2cbb2 1.2px, transparent 1.2px);
                    background-size: 22px 22px;
                    border: 2px solid #111;
                    border-radius: 14px;
                    box-shadow: 8px 8px 0 #111;
                }

                .about-cta h3 {
                    margin: 0 0 12px;
                    font-size: 32px;
                    font-weight: 800;
                    line-height: 1.3;
                }

                .about-cta p {
                    margin: 0 0 28px;
                    font-size: 16px;
                    font-weight: 500;
                    color: #444;
                }

                .about-cta a {
                    display: inline-block;
                    padding: 14px 32px;
                    font-size: 14px;
                    font-weight: 800;
                    text-transform: uppercase;
                    letter-spacing: 1.5px;
                    color: #111;
                    text-decoration: none;
                    background: #ffd84d;
                    border: 2px solid #111;
                    border-radius: 999px;
                    box-shadow: 4px 4px 0 #111;
                    transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.2s ease;
                }

                .about-cta a:hover {
                    transform: translate(-3px, -3px) rotate(-2deg);
                    box-shadow: 7px 7px 0 #111;
                }

                .about-cta a:active {
                    transform: translate(2px, 2px);
                    box-shadow: 1px 1px 0 #111;
                }

                @keyframes wiggle {
                    0%, 100% { transform: rotate(18deg); }
                    50% { transform: rotate(-4deg) translateY(-3px); }
                }

                @media (max-width: 900px) {
                    .Our-mission,
                    .features-grid,
                    .steps { grid-template-columns: 1fr; }
                    .Our-mission h4 { font-size: 24px; }
                    .stats { grid-template-columns: 1fr; max-width: 560px; }
                }

                @media (max-width: 560px) {
                    .about-page { padding: 48px 6% 56px; }
                    .about-page h1 { font-size: 34px; }
                    .about-page h1::before { right: -30px; font-size: 22px; }
                    .about-cta { padding: 40px 20px; }
                    .about-cta h3 { font-size: 24px; }
                }
            `}</style>

            <h1>About Us</h1>

            <div className="Our-mission">
                <img src={Aboutus1} alt="Students planning their studies" />
                <h4>Helping students turn everyday plans into meaningful achievements.</h4>
                {pillars.map((item) => (
                    <div className="info-card" key={item.title}>
                        <h5>{item.title}</h5>
                        <p>{item.text}</p>
                    </div>
                ))}
            </div>

            <section className="features">
                <h2 className="section-title">Everything You Need</h2>
                <p className="section-subtitle">
                    One workspace for your whole student life, from your first lecture to your final exam.
                </p>
                <div className="features-grid">
                    {features.map((item) => (
                        <div className="info-card" key={item.title}>
                            <h5>{item.title}</h5>
                            <p>{item.text}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="how-it-works">
                <h2 className="section-title">How It Works</h2>
                <p className="section-subtitle">Get started in three simple steps.</p>
                <div className="steps">
                    {steps.map((item, index) => (
                        <div className="step" key={item.title}>
                            <span className="step-number">STEP 0{index + 1}</span>
                            <h5>{item.title}</h5>
                            <p>{item.text}</p>
                        </div>
                    ))}
                </div>
            </section>

            <div className="who-we-help">
                <img src={Aboutus2} alt="Who we help" />
                <h2>Who We Help</h2>
                <p className="who-intro">
                    From the first lecture to the final exam, we help students plan with purpose.
                </p>

                <div className="stats">
                    {stats.map((item) => (
                        <div className="stat-card" key={item.label}>
                            <span className="stat-number">{item.number}</span>
                            <span className="stat-label">{item.label}</span>
                            <span className="stat-desc">{item.desc}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="about-cta">
                <h3>Ready to take control of your studies?</h3>
                <p>Join the students who turn plans into results.</p>
                <Link to="/signin">Open planner</Link>
            </div>
        </div>
    );
}

export default About;
