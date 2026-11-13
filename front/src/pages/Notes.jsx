import { useState } from "react";

const COLORS = ["#ffffff", "#fff3b0", "#ffd6d6", "#d6e9ff", "#d9f5d6"];

function Notes() {
    const [notes, setNotes] = useState([]);
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const [color, setColor] = useState(COLORS[1]);

    const addNote = () => {
        if (text.trim() === "" && title.trim() === "") return;
        setNotes([{ id: Date.now(), title, content: text, color }, ...notes]);
        setTitle("");
        setText("");
    };

    const deleteNote = (id) => setNotes(notes.filter((n) => n.id !== id));

    return (
        <div className="notes-page">
            <style>{`
                .notes-page {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    width: 100%;
                    min-height: 100vh;
                    padding: 40px 16px 72px;
                    text-align: center;
                    font-family: "Inter", "Segoe UI", Arial, sans-serif;
                    color: #111;
                    box-sizing: border-box;
                    background-color: #fffdf7;
                    background-image: radial-gradient(#d9d4c3 1.2px, transparent 1.2px);
                    background-size: 22px 22px;
                }

                .notes-page h1 {
                    position: relative;
                    z-index: 0;
                    display: inline-block;
                    margin: 0 0 12px;
                    font-size: 46px;
                    font-weight: 800;
                    letter-spacing: -1.5px;
                }

                .notes-page h1::after {
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

                .notes-page h1::before {
                    content: "✏️";
                    position: absolute;
                    top: -18px;
                    right: -38px;
                    font-size: 28px;
                    transform: rotate(18deg);
                    animation: wiggle 2.4s ease-in-out infinite;
                }

                .notes-page .subtitle {
                    margin: 0 0 32px;
                    font-size: 15px;
                    font-weight: 600;
                    color: #777;
                }

                .notes {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 28px;
                    width: 100%;
                }

                /* formulaire = page de cahier */
                .text {
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 14px;
                    width: 100%;
                    max-width: 540px;
                    padding: 28px 24px 24px 44px;
                    background: #fffef9;
                    border: 2px solid #111;
                    border-radius: 12px;
                    box-shadow: 8px 8px 0 #111;
                    box-sizing: border-box;
                    transform: rotate(-0.6deg);
                }

                /* marge rouge dyal cahier */
                .text::before {
                    content: "";
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    left: 30px;
                    width: 2px;
                    background: #ff9f9f;
                }

                .text input,
                .text textarea {
                    width: 100%;
                    padding: 12px;
                    font-family: inherit;
                    font-size: 14px;
                    text-align: left;
                    color: #111;
                    background: transparent;
                    border: none;
                    border-bottom: 2px dashed #bbb;
                    border-radius: 0;
                    box-sizing: border-box;
                    transition: border-color 0.2s ease, background 0.2s ease;
                }

                .text input {
                    font-weight: 700;
                    font-size: 16px;
                }

                /* textarea b khotout dyal cahier */
                .text textarea {
                    min-height: 130px;
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

                .text input:focus,
                .text textarea:focus {
                    outline: none;
                    border-color: #111;
                }

                .text input:focus { background: #fff8d6; }

                .color-picker {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 10px;
                }

                .color-picker span {
                    font-size: 12px;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 2px;
                    color: #888;
                }

                .color-dot {
                    width: 26px;
                    height: 26px;
                    padding: 0;
                    border: 2px solid #111;
                    border-radius: 50%;
                    cursor: pointer;
                    transition: transform 0.2s ease, box-shadow 0.2s ease;
                }

                .color-dot:hover { transform: scale(1.2); }

                .color-dot.selected {
                    transform: scale(1.2);
                    box-shadow: 2px 2px 0 #111;
                }

                .button-add button {
                    padding: 13px 36px;
                    font-size: 14px;
                    font-weight: 800;
                    letter-spacing: 1px;
                    color: #111;
                    background: #ffd84d;
                    border: 2px solid #111;
                    border-radius: 999px;
                    box-shadow: 4px 4px 0 #111;
                    cursor: pointer;
                    transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.2s ease;
                }

                .button-add button:hover {
                    transform: translate(-3px, -3px) rotate(-2deg);
                    box-shadow: 7px 7px 0 #111;
                }

                .button-add button:active {
                    transform: translate(2px, 2px);
                    box-shadow: 1px 1px 0 #111;
                }

                .counter {
                    margin: 8px 0 0;
                    padding: 4px 16px;
                    font-size: 12px;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 2px;
                    color: #111;
                    background: #fff;
                    border: 2px solid #111;
                    border-radius: 999px;
                    box-shadow: 2px 2px 0 #111;
                }

                .notes-grid {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    gap: 32px 26px;
                    width: 100%;
                    max-width: 980px;
                    margin-top: 8px;
                }

                .note-card {
                    position: relative;
                    width: 220px;
                    min-height: 170px;
                    padding: 30px 18px 20px;
                    text-align: left;
                    border: 2px solid #111;
                    border-radius: 4px 4px 18px 4px;
                    box-shadow: 5px 5px 0 #111;
                    box-sizing: border-box;
                    animation: pop 0.45s cubic-bezier(0.34, 1.56, 0.64, 1);
                    transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.25s ease;
                }

                /* scotch f lfo9 */
                .note-card::before {
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

                .note-card:nth-child(3n + 1) { transform: rotate(-1.5deg); }
                .note-card:nth-child(3n + 2) { transform: rotate(1.4deg); }
                .note-card:nth-child(3n) { transform: rotate(-0.6deg); }

                .note-card:hover {
                    transform: translate(-3px, -6px) rotate(0deg) scale(1.04);
                    box-shadow: 9px 10px 0 #111;
                }

                .note-card h3 {
                    margin: 0 0 8px;
                    padding-right: 20px;
                    font-size: 18px;
                    font-weight: 800;
                }

                .note-card p {
                    margin: 0;
                    font-size: 14px;
                    line-height: 1.7;
                    white-space: pre-wrap;
                    color: #222;
                }

                .note-delete {
                    position: absolute;
                    top: 6px;
                    right: 10px;
                    z-index: 2;
                    padding: 0;
                    font-size: 20px;
                    line-height: 1;
                    color: #666;
                    background: none;
                    border: none;
                    cursor: pointer;
                    transition: color 0.2s ease, transform 0.2s ease;
                }

                .note-delete:hover {
                    color: #e03131;
                    transform: rotate(90deg) scale(1.2);
                }

                .empty {
                    margin: 8px 0 0;
                    padding: 14px 24px;
                    font-size: 14px;
                    font-weight: 600;
                    color: #777;
                    background: #fff;
                    border: 2px dashed #bbb;
                    border-radius: 14px;
                }

                @keyframes pop {
                    0% { opacity: 0; transform: scale(0.6) rotate(-6deg); }
                    100% { opacity: 1; }
                }

                @keyframes wiggle {
                    0%, 100% { transform: rotate(18deg); }
                    50% { transform: rotate(-4deg) translateY(-3px); }
                }

                @media (max-width: 560px) {
                    .notes-page h1 { font-size: 34px; }
                    .notes-page h1::before { right: -30px; font-size: 22px; }
                    .text { padding-left: 38px; }
                }
            `}</style>

            <div>
                <h1>Create Your Notes</h1>
                <p className="subtitle">Write it down. Color it. Make it yours.</p>
            </div>

            <div className="notes">
                <div className="text">
                    <input
                        type="text"
                        placeholder="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <textarea
                        placeholder="Write your note here..."
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    ></textarea>

                    <div className="color-picker">
                        <span>Color</span>
                        {COLORS.map((c) => (
                            <button
                                key={c}
                                type="button"
                                className={`color-dot ${color === c ? "selected" : ""}`}
                                style={{ background: c }}
                                onClick={() => setColor(c)}
                                aria-label={`Color ${c}`}
                            />
                        ))}
                    </div>

                    <div className="button-add">
                        <button onClick={addNote}>Add</button>
                    </div>
                </div>

                {notes.length === 0 ? (
                    <p className="empty">No notes yet. Your first idea goes here ✍️</p>
                ) : (
                    <>
                        <p className="counter">
                            {notes.length} {notes.length === 1 ? "note" : "notes"}
                        </p>
                        <div className="notes-grid">
                            {notes.map((note) => (
                                <div
                                    key={note.id}
                                    className="note-card"
                                    style={{ background: note.color }}
                                >
                                    <button
                                        className="note-delete"
                                        onClick={() => deleteNote(note.id)}
                                        aria-label="Delete note"
                                    >
                                        ×
                                    </button>
                                    {note.title && <h3>{note.title}</h3>}
                                    <p>{note.content}</p>
                                </div>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default Notes;