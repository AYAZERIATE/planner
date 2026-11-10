import person1 from "../assets/person1.jpg";
import person2 from "../assets/person2.jpg";
import person3 from "../assets/person3.jpg";


function Home() {
    return (
        <div className="home-page">
            <style>{`
                .home-page {
                    padding: 90px 8% 100px;
                    background: linear-gradient(145deg, #ffffff 0%, #ececec 100%);
                    color: #000;
                    font-family: "Inter", "Segoe UI", Arial, sans-serif;
                }

                .home-page .title h1 {
                    margin: 0 0 24px;
                    font-size: clamp(38px, 7vw, 80px);
                    font-weight: 800;
                    line-height: 1.15;
                    text-shadow: 3px 3px 0 #ccc;
                }

                .home-page .title h4 {
                    margin: 0 0 64px;
                    font-size: 14px;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 4px;
                    color: #444;
                }

                .home-page .app-plan {
                    margin-bottom: 64px;
                    padding: 32px 28px;
                    background: #fff;
                    border: 2px solid #000;
                    border-radius: 10px;
                    box-shadow: 6px 6px 0 #000;
                    transition: transform 0.2s ease, box-shadow 0.2s ease,
                                background 0.2s ease, color 0.2s ease;
                }

                .home-page .app-plan:hover {
                    background: #000;
                    color: #fff;
                    transform: translate(-3px, -3px);
                    box-shadow: 10px 10px 0 #777;
                }

                .home-page .app-plan h4 {
                    margin: 0;
                    font-size: 22px;
                    font-weight: 700;
                    line-height: 1.5;
                }

                .home-page .start-up > div {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 32px;
                }

                .home-page .start-up img {
                    width: 100%;
                    max-height: 360px;
                    object-fit: cover;
                    padding: 8px;
                    background: #fff;
                    border: 2px solid #000;
                    border-radius: 14px;
                    box-shadow: 8px 8px 0 #000, 14px 14px 28px rgba(0, 0, 0, 0.25);
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }

                .home-page .start-up img:hover {
                    transform: translate(-3px, -3px);
                    box-shadow: 11px 11px 0 #000, 18px 18px 32px rgba(0, 0, 0, 0.25);
                }

                @media (max-width: 700px) {
                    .home-page { padding: 56px 6% 64px; }
                    .home-page .start-up > div { grid-template-columns: 1fr; }
                }
            `}</style>

            <div className="title">
                <h1>
                    Where teams think
                    <br />
                    together.
                </h1>
                <h4>Make a plan. Make it happen. Make a difference.</h4>
            </div>

            <div className="app-plan">
                <h4>An AI integrated directly into your workspace.</h4>
            </div>

            <div className="start-up">
                <div>
                    <img src={person1} alt="Person 1" />
                    <img src={person2} alt="Person 2" />
                    <img src={person3} alt="Person 3" />

                </div>
            </div>
        </div>
    );
}

export default Home;