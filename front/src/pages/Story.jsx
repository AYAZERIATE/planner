function Story() {
  return (
    <main className="story-page">
      <style>{`
        .story-page {
          background: #fff;
          color: #111;
          font-family: "Inter", "Segoe UI", Arial, sans-serif;
          overflow: hidden;
        }

        /* HERO */
        .story-hero {
          position: relative;
          padding: 110px 8% 100px;
          border-bottom: 1px solid #e5e5e5;
        }

        .story-eyebrow {
          display: inline-block;
          margin-bottom: 32px;
          padding: 8px 16px;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 3px;
          color: #111;
          background: #f5f5f5;
          border-radius: 6px;
        }

        .story-hero h1 {
          position: relative;
          z-index: 1;
          margin: 0 0 28px;
          font-size: clamp(38px, 7vw, 80px);
          font-weight: 800;
          line-height: 1.15;
        }

        .story-hero h1 span,
        .story-section h2 span {
          border-bottom: 5px solid #111;
        }

        .story-hero p {
          position: relative;
          z-index: 1;
          max-width: 560px;
          margin: 0 0 40px;
          font-size: 18px;
          line-height: 1.8;
          color: #555;
        }

        .story-scroll {
          position: relative;
          z-index: 1;
          display: inline-block;
          padding: 14px 26px;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 2px;
          color: #fff;
          text-decoration: none;
          background: #111;
          border: 1px solid #111;
          border-radius: 8px;
          transition: background 0.2s ease, color 0.2s ease;
        }

        .story-scroll:hover {
          background: #fff;
          color: #111;
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
          opacity: 0.08;
          pointer-events: none;
          user-select: none;
        }

        /* SECTIONS */
        .story-section {
          display: grid;
          grid-template-columns: 220px 1fr;
          gap: 48px;
          padding: 90px 8%;
          border-bottom: 1px solid #e5e5e5;
        }

        .story-label {
          align-self: start;
          padding-bottom: 10px;
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 3px;
          border-bottom: 1px solid #111;
        }

        .story-content,
        .future-content {
          max-width: 760px;
        }

        .story-section h2 {
          margin: 0 0 28px;
          font-size: clamp(30px, 5vw, 52px);
          font-weight: 800;
          line-height: 1.2;
        }

        .story-section p {
          margin: 0 0 20px;
          font-size: 16px;
          line-height: 1.9;
          color: #555;
        }

        .story-section p.story-highlight {
          padding: 6px 0 6px 20px;
          font-size: 20px;
          font-weight: 600;
          line-height: 1.6;
          color: #111;
          border-left: 4px solid #111;
        }

        /* QUOTE / WHY */
        .story-quote-section {
          padding: 100px 8%;
          text-align: center;
          background: #111;
          color: #fff;
        }

        .story-quote-section .story-label {
          display: inline-block;
          margin-bottom: 36px;
          border-bottom: 1px solid #fff;
        }

        .story-quote-section h2 {
          margin: 0 0 32px;
          font-size: clamp(30px, 5vw, 52px);
          font-weight: 800;
          line-height: 1.25;
        }

        .story-quote-section h2 span {
          border-bottom: 5px solid #fff;
        }

        .story-quote-section p {
          max-width: 720px;
          margin: 0 auto 20px;
          font-size: 17px;
          line-height: 1.9;
          color: #bdbdbd;
        }

        /* FUTURE */
        .future-statement {
          grid-column: 1 / -1;
          margin-top: 20px;
          padding: 48px 32px;
          text-align: center;
          background: #f5f5f5;
          border-radius: 10px;
        }

        .future-statement span {
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 3px;
          color: #555;
        }

        .future-statement h3 {
          margin: 14px 0 0;
          font-size: clamp(28px, 5vw, 48px);
          font-weight: 800;
        }

        /* ENDING */
        .story-ending {
          padding: 110px 8%;
          text-align: center;
          border-top: 1px solid #e5e5e5;
        }

        .story-ending p {
          margin: 0 0 24px;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 3px;
          color: #555;
        }

        .story-ending h2 {
          margin: 0 0 40px;
          font-size: clamp(32px, 6vw, 64px);
          font-weight: 800;
          line-height: 1.2;
        }

        .story-ending span {
          display: inline-block;
          padding: 14px 24px;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 2px;
          color: #fff;
          background: #111;
          border-radius: 8px;
        }

        /* RESPONSIVE */
        @media (max-width: 900px) {
          .story-section {
            grid-template-columns: 1fr;
            gap: 28px;
            padding: 64px 8%;
          }
          .story-label {
            justify-self: start;
          }
        }

        @media (max-width: 560px) {
          .story-hero { padding: 72px 6% 64px; }
          .story-quote-section,
          .story-ending { padding: 72px 6%; }
          .future-statement { padding: 36px 20px; }
        }
      `}</style>

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

        <div className="story-content">
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
      </section>

      <section className="story-section future-section">
        <div className="story-label">03 — THE VISION</div>

        <div className="future-content">
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

        <div className="future-statement">
          <span>THE FUTURE ISN'T WAITING.</span>
          <h3>Let's build it.</h3>
        </div>
      </section>

      <section className="story-ending">
        <p>OUR STORY IS STILL BEING WRITTEN.</p>
        <h2>
          And you can be
          <br />
          part of it.
        </h2>
        <span>MAKE A PLAN. MAKE IT HAPPEN. MAKE A DIFFERENCE.</span>
      </section>

    </main>
  );
}

export default Story;