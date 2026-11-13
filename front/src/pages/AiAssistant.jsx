import { useState, useRef, useEffect } from "react";

const API_URL = "/api/assistant";

function AiAssistant() {
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const [messages, setMessages] = useState([
        { role: "assistant", content: "Hi! I can help you plan, summarize notes or organize your study. Ask me anything ✨" },
    ]);
    const endRef = useRef(null);

    useEffect(() => {
        endRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages, open]);

    const send = async () => {
        const text = input.trim();
        if (!text || loading) return;
        const next = [...messages, { role: "user", content: text }];
        setMessages(next);
        setInput("");
        setLoading(true);
        try {
            const res = await fetch(API_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ messages: next.slice(1) }),
            });
            const data = await res.json();
            setMessages([...next, { role: "assistant", content: data.reply }]);
        } catch {
            setMessages([...next, { role: "assistant", content: "Something went wrong. Try again." }]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="ai-assistant">
            <style>{`
                .ai-assistant {
                    position: fixed;
                    right: 20px;
                    bottom: 20px;
                    z-index: 200;
                    font-family: "Inter", "Segoe UI", Arial, sans-serif;
                    color: #111;
                }

                .ai-toggle {
                    padding: 13px 22px;
                    font: inherit;
                    font-size: 14px;
                    font-weight: 800;
                    color: #111;
                    background: #ffd84d;
                    border: 2px solid #111;
                    border-radius: 999px;
                    box-shadow: 4px 4px 0 #111;
                    cursor: pointer;
                    transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.2s ease;
                }

                .ai-toggle:hover {
                    transform: translate(-3px, -3px) rotate(-2deg);
                    box-shadow: 7px 7px 0 #111;
                }

                .ai-panel {
                    position: absolute;
                    right: 0;
                    bottom: 64px;
                    display: flex;
                    flex-direction: column;
                    width: 340px;
                    height: 460px;
                    max-height: 70vh;
                    background: #fffef9;
                    border: 2px solid #111;
                    border-radius: 14px;
                    box-shadow: 8px 8px 0 #111;
                    overflow: hidden;
                    animation: aiPop 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
                }

                .ai-header {
                    padding: 12px 16px;
                    font-size: 12px;
                    font-weight: 800;
                    text-transform: uppercase;
                    letter-spacing: 3px;
                    background-color: #f5efdc;
                    background-image: radial-gradient(#d2cbb2 1.2px, transparent 1.2px);
                    background-size: 22px 22px;
                    border-bottom: 2px solid #111;
                }

                .ai-messages {
                    display: flex;
                    flex: 1;
                    flex-direction: column;
                    gap: 10px;
                    padding: 14px;
                    overflow-y: auto;
                }

                .ai-msg {
                    max-width: 85%;
                    padding: 10px 14px;
                    font-size: 14px;
                    line-height: 1.6;
                    white-space: pre-wrap;
                    word-break: break-word;
                    border: 2px solid #111;
                    border-radius: 4px 14px 14px 14px;
                    background: #d6e9ff;
                }

                .ai-msg.user {
                    align-self: flex-end;
                    background: #fff3b0;
                    border-radius: 14px 4px 14px 14px;
                }

                .ai-input-row {
                    display: flex;
                    gap: 8px;
                    padding: 12px;
                    border-top: 2px dashed #bbb;
                }

                .ai-input-row input {
                    flex: 1;
                    min-width: 0;
                    padding: 10px 14px;
                    font: inherit;
                    font-size: 14px;
                    background: #fff;
                    border: 2px solid #111;
                    border-radius: 999px;
                    outline: none;
                }

                .ai-input-row input:focus {
                    box-shadow: 3px 3px 0 #ff9f9f;
                }

                .ai-input-row button {
                    padding: 0 16px;
                    font: inherit;
                    font-weight: 800;
                    background: #b8f0b0;
                    border: 2px solid #111;
                    border-radius: 999px;
                    box-shadow: 2px 2px 0 #111;
                    cursor: pointer;
                }

                .ai-input-row button:disabled { opacity: 0.5; cursor: default; }

                @keyframes aiPop {
                    from { opacity: 0; transform: scale(0.85) translateY(10px); }
                    to { opacity: 1; transform: none; }
                }

                @media (max-width: 560px) {
                    .ai-assistant { right: 12px; bottom: 12px; }
                    .ai-panel { width: calc(100vw - 24px); }
                }
            `}</style>

            {open && (
                <div className="ai-panel">
                    <div className="ai-header">AI Assistant</div>
                    <div className="ai-messages">
                        {messages.map((m, i) => (
                            <div key={i} className={`ai-msg ${m.role === "user" ? "user" : ""}`}>
                                {m.content}
                            </div>
                        ))}
                        {loading && <div className="ai-msg">Thinking...</div>}
                        <div ref={endRef} />
                    </div>
                    <div className="ai-input-row">
                        <input
                            type="text"
                            placeholder="Ask something..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && send()}
                        />
                        <button onClick={send} disabled={loading}>→</button>
                    </div>
                </div>
            )}

            <button className="ai-toggle" onClick={() => setOpen(!open)}>
                {open ? "Close" : "✨ AI Assistant"}
            </button>
        </div>
    );
}

export default AiAssistant;