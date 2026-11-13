import { useState } from "react";

function Contact() {
    const [FullName, setFullName] = useState("");
    const [Email, setEmail] = useState("");
    const [Message, setMessage] = useState("");
    const [sent, setSent] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSent(true);
    };

    const reset = () => {
        setFullName("");
        setEmail("");
        setMessage("");
        setSent(false);
    };

    return (
        <div className="contact-page">
            <style>{`
                .contact-page {
                    min-height: 70vh;
                    padding: 72px 8% 80px;
                    color: #111;
                    font-family: "Inter", "Segoe UI", Arial, sans-serif;
                    box-sizing: border-box;
                    background-color: #fffdf7;
                    background-image: radial-gradient(#d9d4c3 1.2px, transparent 1.2px);
                    background-size: 22px 22px;
                }

                .contact-page h1 {
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

                .contact-page h1::after {
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

                .contact-page h1::before {
                    content: "✏️";
                    position: absolute;
                    top: -18px;
                    right: -38px;
                    font-size: 28px;
                    transform: rotate(18deg);
                    animation: wiggle 2.4s ease-in-out infinite;
                }

                .contact-layout {
                    display: grid;
                    grid-template-columns: 1fr 1.2fr;
                    max-width: 960px;
                    margin: 0 auto;
                    overflow: hidden;
                    background: #fffef9;
                    border: 2px solid #111;
                    border-radius: 14px;
                    box-shadow: 8px 8px 0 #111;
                }

                /* Panneau gauche */
                .contact-info {
                    display: flex;
                    flex-direction: column;
                    gap: 28px;
                    padding: 48px 36px;
                    color: #111;
                    background-color: #f5efdc;
                    background-image: radial-gradient(#d2cbb2 1.2px, transparent 1.2px);
                    background-size: 22px 22px;
                    border-right: 2px solid #111;
                }

                .contact-info h2 {
                    margin: 0;
                    font-size: clamp(32px, 4vw, 44px);
                    font-weight: 800;
                    line-height: 1.15;
                }

                .contact-info h2 span {
                    padding: 0 6px;
                    background: #ffd84d;
                    border-radius: 4px;
                }

                .contact-info > p {
                    margin: 0;
                    font-size: 15px;
                    font-weight: 500;
                    line-height: 1.8;
                    color: #444;
                }

                .contact-items {
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                    margin-top: auto;
                }

                .contact-item {
                    padding-top: 16px;
                    border-top: 2px dashed #bbb;
                }

                .contact-item small {
                    display: block;
                    margin-bottom: 6px;
                    font-size: 11px;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 2px;
                    color: #888;
                }

                .contact-item span {
                    font-size: 15px;
                    font-weight: 600;
                    color: #111;
                }

                /* Formulaire = page de cahier */
                .contact-page .form {
                    position: relative;
                    padding: 48px 36px 48px 64px;
                    background: #fffef9;
                }

                /* marge rouge dyal cahier */
                .contact-page .form::before {
                    content: "";
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    left: 44px;
                    width: 2px;
                    background: #ff9f9f;
                }

                .contact-page .form form {
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                }

                .field {
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                }

                .field label {
                    font-size: 12px;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 3px;
                    color: #888;
                }

                .contact-page .form input,
                .contact-page .form textarea {
                    width: 100%;
                    box-sizing: border-box;
                    padding: 12px;
                    font-size: 14px;
                    font-family: inherit;
                    color: #111;
                    background: transparent;
                    border: none;
                    border-bottom: 2px dashed #bbb;
                    border-radius: 0;
                    outline: none;
                    transition: border-color 0.2s ease, background 0.2s ease;
                }

                .contact-page .form input {
                    font-weight: 700;
                    font-size: 16px;
                }

                /* textarea b khotout dyal cahier */
                .contact-page .form textarea {
                    min-height: 150px;
                    line-height: 28px;
                    resize: vertical;
                    border-bottom: none;
                    background-image: repeating-linear-gradient(
                        transparent,
                        transparent 27px,
                        #cfe0f5 27px,
                        #cfe0f5 28px
                    );
                    background-attachment: local;
                }

                .contact-page .form input::placeholder,
                .contact-page .form textarea::placeholder {
                    color: #999;
                    font-weight: 400;
                }

                .contact-page .form input:focus,
                .contact-page .form textarea:focus {
                    border-color: #111;
                }

                .contact-page .form input:focus {
                    background: #fff8d6;
                }

                .char-count {
                    align-self: flex-end;
                    font-size: 12px;
                    font-weight: 600;
                    color: #888;
                }

                .contact-page .send {
                    width: 100%;
                    padding: 14px 24px;
                    font-size: 14px;
                    font-weight: 800;
                    font-family: inherit;
                    letter-spacing: 1.5px;
                    text-transform: uppercase;
                    color: #111;
                    background: #ffd84d;
                    border: 2px solid #111;
                    border-radius: 999px;
                    box-shadow: 4px 4px 0 #111;
                    cursor: pointer;
                    transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.2s ease;
                }

                .contact-page .send:hover {
                    transform: translate(-3px, -3px) rotate(-1deg);
                    box-shadow: 7px 7px 0 #111;
                }

                .contact-page .send:active {
                    transform: translate(2px, 2px);
                    box-shadow: 1px 1px 0 #111;
                }

                /* Message envoye */
                .sent-box {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    justify-content: center;
                    gap: 16px;
                    height: 100%;
                    animation: pop 0.45s cubic-bezier(0.34, 1.56, 0.64, 1);
                }

                .sent-check {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 48px;
                    height: 48px;
                    font-size: 22px;
                    color: #111;
                    background: #b8f0b0;
                    border: 2px solid #111;
                    border-radius: 50%;
                    box-shadow: 3px 3px 0 #111;
                }

                .sent-box h3 {
                    margin: 0;
                    font-size: 28px;
                    font-weight: 800;
                }

                .sent-box p {
                    margin: 0;
                    font-size: 15px;
                    font-weight: 500;
                    line-height: 1.8;
                    color: #444;
                }

                .sent-box button {
                    margin-top: 8px;
                    padding: 12px 24px;
                    font-size: 13px;
                    font-weight: 700;
                    font-family: inherit;
                    color: #111;
                    background: #fff;
                    border: 2px solid #111;
                    border-radius: 999px;
                    box-shadow: 3px 3px 0 #111;
                    cursor: pointer;
                    transition: background 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
                }

                .sent-box button:hover {
                    background: #d6e9ff;
                    transform: translate(-2px, -2px);
                    box-shadow: 5px 5px 0 #111;
                }

                @keyframes pop {
                    0% { opacity: 0; transform: scale(0.85) rotate(-3deg); }
                    100% { opacity: 1; }
                }

                @keyframes wiggle {
                    0%, 100% { transform: rotate(18deg); }
                    50% { transform: rotate(-4deg) translateY(-3px); }
                }

                @media (max-width: 800px) {
                    .contact-layout { grid-template-columns: 1fr; }
                    .contact-info {
                        padding: 36px 24px;
                        border-right: none;
                        border-bottom: 2px solid #111;
                    }
                    .contact-items { margin-top: 8px; }
                    .contact-page .form { padding: 36px 24px 36px 52px; }
                    .contact-page .form::before { left: 32px; }
                }

                @media (max-width: 560px) {
                    .contact-page { padding: 48px 6% 56px; }
                    .contact-page h1 { font-size: 34px; }
                    .contact-page h1::before { right: -30px; font-size: 22px; }
                }
            `}</style>

            <h1>Contact Us</h1>

            <div className="contact-layout">
                <div className="contact-info">
                    <h2>Let's <span>talk.</span></h2>
                    <p>
                        A question, an idea or a suggestion? Send us a message
                        and we will get back to you as soon as possible.
                    </p>

                    <div className="contact-items">
                        <div className="contact-item">
                            <small>Email</small>
                            <span>contact@example.com</span>
                        </div>
                        <div className="contact-item">
                            <small>Phone</small>
                            <span>+212 600 000 000</span>
                        </div>
                        <div className="contact-item">
                            <small>Response time</small>
                            <span>Usually within 24 hours</span>
                        </div>
                    </div>
                </div>

                <div className="form">
                    {sent ? (
                        <div className="sent-box" role="status">
                            <div className="sent-check">✓</div>
                            <h3>Message sent</h3>
                            <p>
                                Thank you{FullName ? `, ${FullName}` : ""}. We will reply to{" "}
                                {Email} very soon.
                            </p>
                            <button type="button" onClick={reset}>
                                Send another message
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit}>
                            <div className="field">
                                <label htmlFor="fullname">Full name</label>
                                <input
                                    id="fullname"
                                    type="text"
                                    placeholder="Enter your Full Name"
                                    value={FullName}
                                    onChange={(e) => setFullName(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="field">
                                <label htmlFor="email">Email</label>
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="Enter your Email"
                                    value={Email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="field">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    placeholder="Write your message..."
                                    value={Message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    rows="6"
                                    maxLength={500}
                                    required
                                />
                                <span className="char-count">{Message.length} / 500</span>
                            </div>

                            <button type="submit" className="send">
                                Send
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Contact;