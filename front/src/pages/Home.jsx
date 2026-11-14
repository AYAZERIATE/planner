function Home() {
    return (
        <div className="home-page">
            <style>{`
                .home-page {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    width: 100%;
                    min-height: 100vh;
                    padding: 90px 16px 100px;
                    text-align: center;
                    color: #111;
                    font-family: "Inter", "Segoe UI", Arial, sans-serif;
                    box-sizing: border-box;
                    background-color: #fffdf7;
                    background-image: radial-gradient(#d9d4c3 1.2px, transparent 1.2px);
                    background-size: 22px 22px;
                }

                .home-page .title h1 {
                    position: relative;
                    z-index: 0;
                    display: inline-block;
                    margin: 0 0 24px;
                    font-size: clamp(38px, 7vw, 80px);
                    font-weight: 800;
                    letter-spacing: -1.5px;
                    line-height: 1.15;
                }

                .home-page .title h1::after {
                    content: "";
                    position: absolute;
                    left: -10px;
                    right: -10px;
                    bottom: 6px;
                    height: 22px;
                    background: linear-gradient(90deg, #ffd6d6, #fff3b0, #d6e9ff);
                    border-radius: 6px;
                    transform: rotate(-1.5deg);
                    z-index: -1;
                }

                .home-page .title h1::before {
                    content: "✏️";
                    position: absolute;
                    top: -22px;
                    right: -38px;
                    font-size: 32px;
                    transform: rotate(18deg);
                    animation: wiggle 2.4s ease-in-out infinite;
                }

                .home-page .title h4 {
                    margin: 0 0 64px;
                    font-size: 14px;
                    font-weight: 800;
                    text-transform: uppercase;
                    letter-spacing: 4px;
                    color: #777;
                }

                .home-page .app-plan {
                    position: relative;
                    width: 100%;
                    max-width: 560px;
                    padding: 32px 28px;
                    background: #fff3b0;
                    border: 2px solid #111;
                    border-radius: 4px 4px 18px 4px;
                    box-shadow: 6px 6px 0 #111;
                    box-sizing: border-box;
                    transform: rotate(-1.5deg);
                    transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.25s ease;
                }

                /* scotch f lfo9 */
                .home-page .app-plan::before {
                    content: "";
                    position: absolute;
                    top: -13px;
                    left: 50%;
                    width: 78px;
                    height: 24px;
                    background: rgba(255, 255, 255, 0.7);
                    border: 1.5px dashed rgba(0, 0, 0, 0.3);
                    transform: translateX(-50%) rotate(-3deg);
                }

                .home-page .app-plan:hover {
                    transform: translate(-3px, -6px) rotate(0deg) scale(1.03);
                    box-shadow: 10px 11px 0 #111;
                }

                .home-page .app-plan h4 {
                    margin: 0;
                    font-size: 22px;
                    font-weight: 800;
                    line-height: 1.5;
                }

                @keyframes wiggle {
                    0%, 100% { transform: rotate(18deg); }
                    50% { transform: rotate(-4deg) translateY(-3px); }
                }

                @media (max-width: 700px) {
                    .home-page { padding: 56px 6% 64px; }
                    .home-page .title h1::before { right: -30px; font-size: 24px; }
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
        </div>
    );
}

export default Home;