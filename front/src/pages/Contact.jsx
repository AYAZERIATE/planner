import { useState } from "react";

function Contact() {
    const [FullName, setFullName] = useState("");
    const [Email, setEmail] = useState("");
    const [Message, setMessage] = useState("");

    return (
        <div className="contact-page">
            <style>{`
                .contact-page {
                    min-height: 70vh;
                    padding: 72px 8% 80px;
                    background: linear-gradient(145deg, #ffffff 0%, #ececec 100%);
                    color: #000;
                    font-family: "Inter", "Segoe UI", Arial, sans-serif;
                }

                .contact-page h1 {
                    margin: 0 0 40px;
                    padding-bottom: 14px;
                    font-size: 14px;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 5px;
                    border-bottom: 2px solid #000;
                    text-shadow: 2px 2px 0 #ccc;
                }

                .contact-page .form {
                    max-width: 560px;
                    margin: 0 auto;
                    padding: 36px 32px;
                    background: #fff;
                    border: 2px solid #000;
                    border-radius: 12px;
                    box-shadow: 8px 8px 0 #000, 14px 14px 28px rgba(0, 0, 0, 0.25);
                }

                .contact-page .form > div {
                    display: flex;
                    flex-direction: column;
                    gap: 24px;
                }

                .contact-page .form input {
                    width: 100%;
                    box-sizing: border-box;
                    padding: 14px 18px;
                    font-size: 14px;
                    font-family: inherit;
                    letter-spacing: 1px;
                    color: #000;
                    background: #fff;
                    border: 2px solid #000;
                    border-radius: 8px;
                    box-shadow: 4px 4px 0 #000;
                    outline: none;
                    transition: transform 0.2s ease, box-shadow 0.2s ease,
                                background 0.2s ease;
                }

                .contact-page .form input::placeholder {
                    color: #777;
                    text-transform: uppercase;
                    letter-spacing: 3px;
                    font-size: 12px;
                }

                .contact-page .form input:focus {
                    background: #f5f5f5;
                    transform: translate(-2px, -2px);
                    box-shadow: 6px 6px 0 #000;
                }

                .contact-page .form textarea {
                    width: 100%;
                    box-sizing: border-box;
                    padding: 14px 18px;
                    font-size: 14px;
                    font-family: inherit;
                    letter-spacing: 1px;
                    line-height: 1.6;
                    color: #000;
                    background: #fff;
                    border: 2px solid #000;
                    border-radius: 8px;
                    box-shadow: 4px 4px 0 #000;
                    outline: none;
                    resize: vertical;
                    transition: transform 0.2s ease, box-shadow 0.2s ease,
                                background 0.2s ease;
                }

                .contact-page .form textarea::placeholder {
                    color: #777;
                    text-transform: uppercase;
                    letter-spacing: 3px;
                    font-size: 12px;
                }

                .contact-page .form textarea:focus {
                    background: #f5f5f5;
                    transform: translate(-2px, -2px);
                    box-shadow: 6px 6px 0 #000;
                }

                .contact-page .send_button {
                    margin-top: 28px;
                }

                .contact-page .send {
                    width: 100%;
                    padding: 14px 24px;
                    font-size: 13px;
                    font-weight: 700;
                    font-family: inherit;
                    text-transform: uppercase;
                    letter-spacing: 4px;
                    color: #fff;
                    background: #000;
                    border: 2px solid #000;
                    border-radius: 8px;
                    box-shadow: 4px 4px 0 #777;
                    cursor: pointer;
                    transition: transform 0.2s ease, box-shadow 0.2s ease,
                                background 0.2s ease, color 0.2s ease;
                }

                .contact-page .send:hover {
                    background: #fff;
                    color: #000;
                    transform: translate(-2px, -2px);
                    box-shadow: 6px 6px 0 #000;
                }

                .contact-page .send:active {
                    transform: translate(2px, 2px);
                    box-shadow: 1px 1px 0 #000;
                }

                @media (max-width: 560px) {
                    .contact-page { padding: 48px 6% 56px; }
                    .contact-page .form { padding: 28px 20px; }
                }
            `}</style>

            <h1>Contact Us</h1>
            <div className="form">
                <div>
                    <input
                        type="text"
                        placeholder="Enter your Full Name"
                        value={FullName}
                        onChange={(e) => setFullName(e.target.value)}
                    />
                    <input
                        type="email"
                        placeholder="Enter your Email"
                        value={Email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <textarea
                        placeholder="Write your message..."
                        value={Message}
                        onChange={(e) => setMessage(e.target.value)}
                        rows="6"
                    />
                </div>
                <div className="send_button">
                    <button className="send">
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Contact;