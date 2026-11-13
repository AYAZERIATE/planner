import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

function Story() {
  const pageRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const items = pageRef.current.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="story-page" ref={pageRef}>
      <style>{`
        .story-page {
          color: #111;
          font-family: "Inter", "Segoe UI", Arial, sans-serif;
          background-color: #fffdf7;
          background-image: radial-gradient(#d9d4c3 1.2px, transparent 1.2px);
          background-size: 22px 22px;
        }

        /* PROGRESS */
        .story-progress {
          position: fixed;
          top: 0;
          left: 0;
          z-index: 100;
          height: 6px;
          background: #ffd84d;
          border-right: 2px solid #111;
          border-bottom: 2px solid #111;
          box-sizing: border-box;
        }

        /* REVEAL */
        .reveal {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }

        .reveal.visible {
          opacity: 1;
          transform: none;
        }

        @media (prefers-reduced-motion: reduce) {
          .reveal {
            opacity: 1;
            transform: none;
            transition: none;
          }
          .story-hero h1::before { animation: none; }
        }

        /* HERO */
        .story-hero {
          position: relative;
          overflow: hidden;
          padding: 110px 8% 100px;
          border-bottom: 2px solid #111;
        }

        .story-eyebrow {
          display: inline-block;
          margin-bottom: 32px;
          padding: 8px 16px;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 3px;
          color: #111;
          background: #d6e9ff;
          border: 2px solid #111;
          border-radius: 999px;
          box-shadow: 3px 3px 0 #111;
        }

        .story-hero h1 {
          position: relative;
          z-index: 1;
          margin: 0 0 28px;
          font-size: clamp(38px, 7vw, 80px);
          font-weight: 800;
          letter-spacing: -1.5px;
          line-height: 1.15;
        }

        .story-hero h1::before {
          content: "✏️";
          position: absolute;
          top: -34px;
          left: 52%;
          font-size: 34px;
          transform: rotate(18deg);
          animation: wiggle 2.4s ease-in-out infinite;
        }

        /* highlighter jaune bdal l-khat */
        .story-hero h1 span,
        .story-section h2 span,
        .story-quote-section h2 span {
          padding: 0 8px;
          background: linear-gradient(transparent 55%, #ffd84d 55%);
          border-bottom: none;
        }

        .story-hero p {
          position: relative;
          z-index: 1;
          max-width: 560px;
          margin: 0 0 40px;
          font-size: 18px;
          font-weight: 500;
          line-height: 1.8;
          color: #555;
        }

        .story-scroll {
          position: relative;
          z-index: 1;
          display: inline-block;
          padding: 14px 28px;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 2px;
          color: #111;
          text-decoration: none;
          background: #ffd84d;
          border: 2px solid #111;
          border-radius: 999px;
          box-shadow: 4px 4px 0 #111;
          transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.2s ease;
        }

        .story-scroll:hover {
          transform: translate(-3px, -3px) rotate(-2deg);
          box-shadow: 7px 7px 0 #111;
        }

        .story-scroll:active {
          transform: translate(2px, 2px);
          box-shadow: 1px 1px 0 #111;
        }

        .hero-number {
          position: absolute;
          right: 6%;
          bottom: 10px;
          font-size: clamp(120px, 22vw, 300px);
          font-weight: 800;
          line-height: 1;
          color: transparent;
          -webkit-text-stroke: 2px #111;
          opacity: 0.1;
          pointer-events: none;
          user-select: none;
        }

        /* SECTIONS */
        .story-section {
          display: grid;
          grid-template-columns: 220px 1fr;
          gap: 48px;
          padding: 90px 8%;
          border-bottom: 2px solid #111;
        }

        .story-label {
          align-self: start;
          position: sticky;
          top: 32px;
          padding-bottom: 10px;
          font-size: 12px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 3px;
          color: #111;
          border-bottom: 2px dashed #bbb;
        }

        .story-content,
        .future-content {
          max-width: 760px;
        }

        .story-section h2 {
          margin: 0 0 28px;
          font-size: clamp(30px, 5vw, 52px);
          font-weight: 800;
          letter-spacing: -1px;
          line-height: 1.2;
        }

        .story-section p {
          margin: 0 0 20px;
          font-size: 16px;
          font-weight: 500;
          line-height: 1.9;
          color: #444;
        }

        .story-section p.story-highlight {
          padding: 12px 20px;
          font-size: 20px;
          font-weight: 700;
          line-height: 1.6;
          color: #111;
          background: #fff3b0;
          border: 2px solid #111;
          border-radius: 4px 4px 18px 4px;
          box-shadow: 5px 5px 0 #111;
          transform: rotate(-0.8deg);
        }

        /* QUOTE / WHY */
        .story-quote-section {
          padding: 100px 8%;
          text-align: center;
          color: #111;
          background-color: #f5efdc;
          background-image: radial-gradient(#d2cbb2 1.2px, transparent 1.2px);
          background-size: 22px 22px;
          border-bottom: 2px solid #111;
        }

        .story-quote-section .story-label {
          position: static;
          display: inline-block;
          margin-bottom: 36px;
          border-bottom: 2px dashed #bbb;
        }

        .story-quote-section h2 {
          margin: 0 0 32px;
          font-size: clamp(30px, 5vw, 52px);
          font-weight: 800;
          letter-spacing: -1px;
          line-height: 1.25;
        }

        .story-quote-section p {
          max-width: 720px;
          margin: 0 auto 20px;
          font-size: 17px;
          font-weight: 500;
          line-height: 1.9;
          color: #444;
        }

        .story-values {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px 20px;
          max-width: 900px;
          margin: 48px auto 0;
        }

        .value-card {
          display: flex;
          flex-direction: column;
          gap: 8px;
          padding: 24px 20px;
          text-align: left;
          background: #fff3b0;
          border: 2px solid #111;
          border-radius: 4px 4px 18px 4px;
          box-shadow: 5px 5px 0 #111;
          transform: rotate(-1.2deg);
          transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.25s ease;
        }

        .value-card:nth-child(2) { background: #ffd6d6; transform: rotate(1deg); }
        .value-card:nth-child(3) { background: #d6e9ff; transform: rotate(-0.6deg); }

        .value-card:hover {
          transform: translate(-3px, -6px) rotate(0deg) scale(1.03);
          box-shadow: 9px 10px 0 #111;
        }

        .value-card small {
          font-size: 11px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: #555;
        }

        .value-card span {
          font-size: 20px;
          font-weight: 800;
          color: #111;
        }

        /* FUTURE */
        .future-statement {
          grid-column: 1 / -1;
          margin-top: 20px;
          padding: 48px 32px;
          text-align: center;
          background: #d9f5d6;
          border: 2px solid #111;
          border-radius: 14px;
          box-shadow: 8px 8px 0 #111;
          transform: rotate(-0.6deg);
        }

        .future-statement span {
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 3px;
          color: #333;
        }

        .future-statement h3 {
          margin: 14px 0 0;
          font-size: clamp(28px, 5vw, 48px);
          font-weight: 800;
          letter-spacing: -1px;
        }

        /* ENDING */
        .story-ending {
          padding: 110px 8%;
          text-align: center;
        }

        .story-ending p {
          margin: 0 0 24px;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 3px;
          color: #555;
        }

        .story-ending h2 {
          margin: 0 0 40px;
          font-size: clamp(32px, 6vw, 64px);
          font-weight: 800;
          letter-spacing: -1.5px;
          line-height: 1.2;
        }

        .story-ending > span {
          display: inline-block;
          padding: 14px 24px;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 2px;
          color: #111;
          background: #ffd6d6;
          border: 2px solid #111;
          border-radius: 999px;
          box-shadow: 4px 4px 0 #111;
        }

        .story-cta {
          display: block;
          width: fit-content;
          margin: 28px auto 0;
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

        .story-cta:hover {
          transform: translate(-3px, -3px) rotate(-2deg);
          box-shadow: 7px 7px 0 #111;
        }

        .story-cta:active {
          transform: translate(2px, 2px);
          box-shadow: 1px 1px 0 #111;
        }

        @keyframes wiggle {
          0%, 100% { transform: rotate(18deg); }
          50% { transform: rotate(-4deg) translateY(-3px); }
        }

        /* RESPONSIVE */
        @media (max-width: 900px) {
          .story-section {
            grid-template-columns: 1fr;
            gap: 28px;
            padding: 64px 8%;
          }
          .story-label {
            position: static;
            justify-self: start;
          }
          .story-values {
            grid-template-columns: 1fr;
            max-width: 480px;
          }
        }

        @media (max-width: 560px) {
          .story-hero { padding: 72px 6% 64px; }
          .story-hero h1::before { display: none; }
          .story-quote-section,
          .story-ending { padding: 72px 6%; }
          .future-statement { padding: 36px 20px; }
        }
      `}</style>

      <div className="story-progress" style={{ width: `${progress}%` }} />

      <section className="story-hero">
        <span className="story-eyebrow">THE STORY BEHIND US — 2026</span>

        <h1>
          Every great future
          <br />
          begins with a <span>decision.</span>
        </h1>

        <p>
          We didn't start with a perfect plan.
          We started with a belief that things could be better.
        </p>

        <a href="#our-beginning" className="story-scroll">
          DISCOVER OUR STORY ↓
        </a>

        <div className="hero-number">01</div>
      </section>

      {/* WHO WE ARE */}
      <section className="story-section who-section" id="our-beginning">
        <div className="story-label">01 — THE BEGINNING</div>

        <div className="story-content reveal">
          <h2>Who <span>we are.</span></h2>

          <p className="story-highlight">
            We are students with a vision bigger than ourselves.
          </p>

          <p>
            We know what it feels like to have ambitions, ideas, and dreams,
            but not always know where to begin. We believe that every student
            deserves the opportunity to build a better future, discover their
            potential, and make a difference.
          </p>

          <p>
            That's why we decided to create something that goes beyond us —
            a space that helps students, young talents, and professionals
            move forward together.
          </p>
        </div>
      </section>

      {/* WHY */}
      <section className="story-quote-section">
        <span className="story-label">02 — THE REASON</span>

        <h2>
          Not another planner.
          <br />
          <span>A different way to think.</span>
        </h2>

        <p>
          We believe planning is not just about writing tasks or filling
          calendars. It is a skill. A way of thinking. A way of turning
          confusion into clarity and ambition into action.
        </p>

        <p>
          Our purpose is simple: help make planning an essential skill,
          accessible to everyone, and part of the way we learn, work, and grow.
        </p>

        <div className="story-values reveal">
          <div className="value-card">
            <small>From</small>
            <span>Confusion → Clarity</span>
          </div>
          <div className="value-card">
            <small>From</small>
            <span>Ambition → Action</span>
          </div>
          <div className="value-card">
            <small>From</small>
            <span>Planning → Skill</span>
          </div>
        </div>
      </section>

      <section className="story-section future-section">
        <div className="story-label">03 — THE VISION</div>

        <div className="future-content reveal">
          <h2>
            We are not here
            <br />
            to stay <span>the same.</span>
          </h2>

          <p>
            Our goal is to reach more people, inspire new ways of thinking,
            and continuously improve how people plan their lives and work.
            We want to evolve our platform, explore better methods, and create
            an experience that grows with its community.
          </p>

          <p>
            Every improvement is a new possibility. Every person we help is
            another step toward a future where people don't just dream about
            what they want to achieve — they know how to work for it.
          </p>
        </div>

        <div className="future-statement reveal">
          <span>THE FUTURE ISN'T WAITING.</span>
          <h3>Let's build it.</h3>
        </div>
      </section>

      <section className="story-ending reveal">
        <p>OUR STORY IS STILL BEING WRITTEN.</p>
        <h2>
          And you can be
          <br />
          part of it.
        </h2>
        <span>MAKE A PLAN. MAKE IT HAPPEN. MAKE A DIFFERENCE.</span>
        <Link to="/dashboard" className="story-cta">Open planner</Link>
      </section>

    </main>
  );
}

export default Story;