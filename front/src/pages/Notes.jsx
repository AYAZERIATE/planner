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
                    padding: 24px 0 64px;
                    text-align: center;
                    font-family: "Inter", "Segoe UI", Arial, sans-serif;
                    color: #111;
                }

                .notes-page h1 {
                    position: relative;
                    z-index: 0;
                    display: inline-block;
                    margin: 0 0 12px;
                    font-size: 40px;
                    font-weight: 800;
                    letter-spacing: -1px;
                }

                .notes-page h1::after {
                    content: "";
                    position: absolute;
                    left: -6px;
                    right: -6px;
                    bottom: 4px;
                    height: 14px;
                    background: #fff3b0;
                    border-radius: 4px;
                    transform: rotate(-1deg);
                    z-index: -1;
                }

                .notes-page .subtitle {
                    margin: 0 0 32px;
                    font-size: 15px;
                    color: #777;
                }

                .notes {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 20px;
                    width: 100%;
                }

                .text {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 12px;
                    width: 100%;
                    max-width: 520px;
                    padding: 24px;
                    background: #fff;
                    border: 2px dashed #111;
                    border-radius: 16px;
                    box-shadow: 8px 8px 0 #111;
                    box-sizing: border-box;
                }

                .text input,
                .text textarea {
                    width: 100%;
                    padding: 12px;
                    font-family: inherit;
                    font-size: 14px;
                    text-align: center;
                    color: #111;
                    background: #fafafa;
                    border: 1px solid #e5e5e5;
                    border-radius: 8px;
                    box-sizing: border-box;
                    transition: border-color 0.2s ease, background 0.2s ease;
                }

                .text input { font-weight: 600; }

                .text textarea {
                    min-height: 110px;
                    line-height: 1.6;
                    resize: vertical;
                }

                .text input:focus,
                .text textarea:focus {
                    outline: none;
                    background: #fff;
                    border-color: #111;
                }

                .color-picker {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 10px;
                }

                .color-picker span {
                    font-size: 12px;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 1.5px;
                    color: #777;
                }

                .color-dot {
                    width: 26px;
                    height: 26px;
                    padding: 0;
                    border: 2px solid #d4d4d4;
                    border-radius: 50%;
                    cursor: pointer;
                    transition: transform 0.2s ease;
                }

                .color-dot:hover { transform: scale(1.2); }

                .color-dot.selected {
                    border-color: #111;
                    transform: scale(1.2);
                }

                .button-add button {
                    padding: 12px 36px;
                    font-size: 14px;
                    font-weight: 700;
                    letter-spacing: 1px;
                    color: #fff;
                    background: #111;
                    border: none;
                    border-radius: 999px;
                    cursor: pointer;
                    transition: background 0.2s ease, transform 0.2s ease;
                }

                .button-add button:hover {
                    background: #333;
                    transform: translateY(-3px) scale(1.04);
                }

                .counter {
                    margin: 8px 0 0;
                    padding: 6px 16px;
                    font-size: 12px;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 2px;
                    color: #fff;
                    background: #111;
                    border-radius: 999px;
                }

                .notes-grid {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    gap: 32px;
                    width: 100%;
                    max-width: 960px;
                    margin-top: 8px;
                }

                .note-card {
                    position: relative;
                    width: 220px;
                    min-height: 170px;
                    padding: 28px 18px 20px;
                    border-radius: 4px;
                    box-sizing: border-box;
                    box-shadow: 0 6px 14px rgba(0, 0, 0, 0.12);
                    animation: pop 0.35s ease;
                    transition: transform 0.25s ease, box-shadow 0.25s ease;
                }

                .note-card::before {
                    content: "";
                    position: absolute;
                    top: -10px;
                    left: 50%;
                    width: 70px;
                    height: 20px;
                    background: rgba(17, 17, 17, 0.15);
                    transform: translateX(-50%) rotate(-3deg);
                }

                .note-card:nth-child(3n + 1) { transform: rotate(-2deg); }
                .note-card:nth-child(3n + 2) { transform: rotate(1.5deg); }
                .note-card:nth-child(3n) { transform: rotate(-0.5deg); }

                .note-card:hover {
                    transform: rotate(0deg) translateY(-8px) scale(1.04);
                    box-shadow: 0 16px 30px rgba(0, 0, 0, 0.2);
                }

                @keyframes pop {
                    from { opacity: 0; transform: scale(0.7) rotate(-6deg); }
                    to { opacity: 1; }
                }

                .note-card h3 {
                    margin: 0 0 8px;
                    font-size: 17px;
                    font-weight: 700;
                }

                .note-card p {
                    margin: 0;
                    font-size: 14px;
                    line-height: 1.6;
                    white-space: pre-wrap;
                    color: #333;
                }

                .note-delete {
                    position: absolute;
                    top: 8px;
                    right: 10px;
                    padding: 0;
                    font-size: 18px;
                    color: #999;
                    background: none;
                    border: none;
                    cursor: pointer;
                    transition: color 0.2s ease, transform 0.2s ease;
                }

                .note-delete:hover {
                    color: #111;
                    transform: rotate(90deg);
                }

                .empty {
                    margin: 16px 0 0;
                    font-size: 14px;
                    color: #999;
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
                    <p className="empty">No notes yet. Your first idea goes here.</p>
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