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
                    background: #fff;
                    color: #111;
                    font-family: "Inter", "Segoe UI", Arial, sans-serif;
                }

                .contact-page h1 {
                    margin: 0 0 40px;
                    padding-bottom: 14px;
                    font-size: 14px;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 4px;
                    border-bottom: 1px solid #111;
                }

                .contact-layout {
                    display: grid;
                    grid-template-columns: 1fr 1.2fr;
                    max-width: 960px;
                    margin: 0 auto;
                    overflow: hidden;
                    border: 1px solid #e5e5e5;
                    border-radius: 14px;
                }

                /* Panneau gauche */
                .contact-info {
                    display: flex;
                    flex-direction: column;
                    gap: 28px;
                    padding: 48px 36px;
                    color: #fff;
                    background: #111;
                }

                .contact-info h2 {
                    margin: 0;
                    font-size: clamp(32px, 4vw, 44px);
                    font-weight: 800;
                    line-height: 1.15;
                }

                .contact-info h2 span {
                    border-bottom: 4px solid #fff;
                }

                .contact-info > p {
                    margin: 0;
                    font-size: 15px;
                    line-height: 1.8;
                    color: #a3a3a3;
                }

                .contact-items {
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                    margin-top: auto;
                }

                .contact-item {
                    padding-top: 16px;
                    border-top: 1px solid #333;
                }

                .contact-item small {
                    display: block;
                    margin-bottom: 6px;
                    font-size: 11px;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 2px;
                    color: #777;
                }

                .contact-item span {
                    font-size: 15px;
                    color: #fff;
                }

                /* Formulaire */
                .contact-page .form {
                    padding: 48px 36px;
                    background: #fff;
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
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 2px;
                    color: #555;
                }

                .contact-page .form input,
                .contact-page .form textarea {
                    width: 100%;
                    box-sizing: border-box;
                    padding: 13px 16px;
                    font-size: 14px;
                    font-family: inherit;
                    color: #111;
                    background: #fff;
                    border: 1px solid #ccc;
                    border-radius: 8px;
                    outline: none;
                    transition: border-color 0.2s ease;
                }

                .contact-page .form textarea {
                    line-height: 1.6;
                    resize: vertical;
                }

                .contact-page .form input::placeholder,
                .contact-page .form textarea::placeholder {
                    color: #999;
                }

                .contact-page .form input:focus,
                .contact-page .form textarea:focus {
                    border-color: #111;
                }

                .char-count {
                    align-self: flex-end;
                    font-size: 12px;
                    color: #999;
                }

                .contact-page .send {
                    width: 100%;
                    padding: 14px 24px;
                    font-size: 13px;
                    font-weight: 600;
                    font-family: inherit;
                    text-transform: uppercase;
                    letter-spacing: 2px;
                    color: #fff;
                    background: #111;
                    border: 1px solid #111;
                    border-radius: 8px;
                    cursor: pointer;
                    transition: background 0.2s ease, color 0.2s ease;
                }

                .contact-page .send:hover {
                    background: #fff;
                    color: #111;
                }

                /* Message envoye */
                .sent-box {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    justify-content: center;
                    gap: 16px;
                    height: 100%;
                }

                .sent-check {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 48px;
                    height: 48px;
                    font-size: 22px;
                    color: #fff;
                    background: #111;
                    border-radius: 50%;
                }

                .sent-box h3 {
                    margin: 0;
                    font-size: 28px;
                    font-weight: 800;
                }

                .sent-box p {
                    margin: 0;
                    font-size: 15px;
                    line-height: 1.8;
                    color: #555;
                }

                .sent-box button {
                    margin-top: 8px;
                    padding: 12px 22px;
                    font-size: 13px;
                    font-weight: 600;
                    font-family: inherit;
                    text-transform: uppercase;
                    letter-spacing: 2px;
                    color: #111;
                    background: #fff;
                    border: 1px solid #111;
                    border-radius: 8px;
                    cursor: pointer;
                    transition: background 0.2s ease, color 0.2s ease;
                }

                .sent-box button:hover {
                    color: #fff;
                    background: #111;
                }

                @media (max-width: 800px) {
                    .contact-layout { grid-template-columns: 1fr; }
                    .contact-info { padding: 36px 24px; }
                    .contact-items { margin-top: 8px; }
                    .contact-page .form { padding: 36px 24px; }
                }

                @media (max-width: 560px) {
                    .contact-page { padding: 48px 6% 56px; }
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