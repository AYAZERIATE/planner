import { Link } from "react-router-dom";

function StartUp() {
  return (
    <div className="startup-page">
      <style>{`
        .startup-page {
          min-height: 70vh;
          padding: 100px 8%;
          color: #111;
          font-family: "Inter", "Segoe UI", Arial, sans-serif;
          background: linear-gradient(145deg, #fff 0%, #ededed 100%);
        }

        .startup-content { max-width: 900px; }
        .startup-eyebrow {
          display: inline-block;
          margin-bottom: 26px;
          padding: 8px 14px;
          border: 1px solid #111;
          border-radius: 999px;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
        }
        .startup-page h1 {
          max-width: 820px;
          margin: 0 0 24px;
          font-size: clamp(42px, 8vw, 88px);
          line-height: 1.05;
          letter-spacing: -3px;
        }
        .startup-page h1 span { text-decoration: underline; text-decoration-thickness: 5px; }
        .startup-intro {
          max-width: 650px;
          margin-bottom: 40px;
          color: #555;
          font-size: 18px;
          line-height: 1.8;
        }
        .startup-actions { display: flex; flex-wrap: wrap; gap: 14px; }
        .startup-actions a {
          display: inline-block;
          padding: 14px 22px;
          border: 1px solid #111;
          border-radius: 8px;
          color: #111;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 1px;
          text-decoration: none;
          text-transform: uppercase;
          transition: background .2s ease, color .2s ease;
        }
        .startup-actions a:first-child { color: #fff; background: #111; }
        .startup-actions a:hover { color: #fff; background: #333; }
        .startup-actions a:first-child:hover { background: #333; }
        .startup-points {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
          margin-top: 76px;
        }
        .startup-point {
          min-height: 160px;
          padding: 24px;
          border: 1px solid #d5d5d5;
          border-radius: 12px;
          background: rgba(255,255,255,.75);
        }
        .startup-point small { color: #666; font-weight: 700; letter-spacing: 2px; }
        .startup-point h2 { margin: 16px 0 8px; font-size: 21px; }
        .startup-point p { color: #555; line-height: 1.6; }
        @media (max-width: 700px) {
          .startup-page { padding: 64px 6%; }
          .startup-page h1 { letter-spacing: -1px; }
          .startup-points { grid-template-columns: 1fr; margin-top: 52px; }
        }
      `}</style>

      <div className="startup-content">
        <span className="startup-eyebrow">For startups</span>
        <h1>Build your next big thing with <span>clarity.</span></h1>
        <p className="startup-intro">
          Growing a startup means turning ambitious ideas into focused work.
          Bring your team, priorities, and plans together so everyone can move
          forward with confidence.
        </p>
        <div className="startup-actions">
          <Link to="/dashboard">Open your planner</Link>
          <Link to="/contact">Talk to our team</Link>
        </div>

        <div className="startup-points">
          <article className="startup-point">
            <small>01</small>
            <h2>Set shared priorities</h2>
            <p>Keep the most important goals visible to everyone.</p>
          </article>
          <article className="startup-point">
            <small>02</small>
            <h2>Turn plans into action</h2>
            <p>Break big ideas into clear tasks and next steps.</p>
          </article>
          <article className="startup-point">
            <small>03</small>
            <h2>Grow together</h2>
            <p>Build a planning rhythm that can grow with your team.</p>
          </article>
        </div>
      </div>
    </div>
  );
}

export default StartUp;
