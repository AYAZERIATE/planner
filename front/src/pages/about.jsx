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

                .section-title {
                    margin: 0 0 12px;
                    font-size: 14px;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 4px;
                    text-align: center;
                }

                .section-subtitle {
                    max-width: 560px;
                    margin: 0 auto 40px;
                    font-size: 16px;
                    line-height: 1.8;
                    text-align: center;
                    color: #555;
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

                .info-card {
                    padding: 28px 24px;
                    background: #fafafa;
                    border: 1px solid #e5e5e5;
                    border-radius: 10px;
                    transition: border-color 0.2s ease;
                }

                .info-card:hover {
                    border-color: #111;
                }

                .info-card h5 {
                    margin: 0 0 14px;
                    padding-bottom: 10px;
                    font-size: 13px;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 2px;
                    border-bottom: 1px solid #e5e5e5;
                }

                .info-card p {
                    margin: 0;
                    font-size: 14px;
                    line-height: 1.8;
                    color: #555;
                }

                .features {
                    margin-top: 80px;
                }

                .features-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 28px;
                }

                .how-it-works {
                    margin-top: 80px;
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
                    padding-top: 20px;
                    border-top: 1px solid #111;
                }

                .step-number {
                    font-size: 12px;
                    font-weight: 600;
                    letter-spacing: 2px;
                    color: #777;
                }

                .step h5 {
                    margin: 0;
                    font-size: 18px;
                    font-weight: 700;
                }

                .step p {
                    margin: 0;
                    font-size: 14px;
                    line-height: 1.8;
                    color: #555;
                }

                .who-we-help {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    margin-top: 80px;
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

                .who-intro {
                    max-width: 560px;
                    margin: 16px 0 0;
                    font-size: 16px;
                    line-height: 1.8;
                    color: #555;
                }

                .stats {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 24px;
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
                    background: #111;
                    color: #fff;
                    border-radius: 10px;
                    transition: background 0.2s ease;
                }

                .stat-card:hover {
                    background: #222;
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
                }

                .stat-desc {
                    margin-top: 6px;
                    padding-top: 12px;
                    font-size: 13px;
                    line-height: 1.6;
                    color: #a3a3a3;
                    border-top: 1px solid #333;
                }

                .about-cta {
                    margin-top: 80px;
                    padding: 56px 32px;
                    text-align: center;
                    background: #f5f5f5;
                    border-radius: 12px;
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
                    color: #555;
                }

                .about-cta a {
                    display: inline-block;
                    padding: 14px 28px;
                    font-size: 13px;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 2px;
                    color: #fff;
                    text-decoration: none;
                    background: #111;
                    border: 1px solid #111;
                    border-radius: 8px;
                    transition: background 0.2s ease, color 0.2s ease;
                }

                .about-cta a:hover {
                    background: #fff;
                    color: #111;
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
                <Link to="/dashboard">Open planner</Link>
            </div>
        </div>
    );
}

export default About;