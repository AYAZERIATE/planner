import { useState, useEffect } from "react";

const STORAGE_KEY = "courses-data";

const DEFAULT_TYPES = [
    "Mathematics",
    "Sciences",
    "Languages",
    "History & Geography",
    "Computer Skills",
    "Personal Development",
    "Economics",
    "Exam Preparation",
];

const defaultFolders = () =>
    DEFAULT_TYPES.map((name, i) => ({ id: `default-${i}`, name, lessons: [] }));

const loadFolders = () => {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        return saved ? JSON.parse(saved) : defaultFolders();
    } catch {
        return defaultFolders();
    }
};

function Courses() {
    const [courseTypes, setCourseTypes] = useState(loadFolders);
    const [showTypeInput, setShowTypeInput] = useState(false);
    const [text, setText] = useState("");
    const [selectedId, setSelectedId] = useState(null);
    const [lessonTitle, setLessonTitle] = useState("");
    const [lessonText, setLessonText] = useState("");

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(courseTypes));
    }, [courseTypes]);

    const selected = courseTypes.find((t) => t.id === selectedId);

    const addType = () => {
        const value = text.trim();
        if (value === "") return;
        if (courseTypes.some((t) => t.name.toLowerCase() === value.toLowerCase())) return;
        setCourseTypes([...courseTypes, { id: Date.now(), name: value, lessons: [] }]);
        setText("");
        setShowTypeInput(false);
    };

    const deleteType = (e, id, name) => {
        e.stopPropagation();
        if (!window.confirm(`Delete "${name}" and all its lessons?`)) return;
        setCourseTypes(courseTypes.filter((t) => t.id !== id));
    };

    const addLesson = () => {
        if (lessonTitle.trim() === "" && lessonText.trim() === "") return;
        const lesson = {
            id: Date.now(),
            title: lessonTitle.trim() || "Untitled",
            content: lessonText,
            date: new Date().toLocaleDateString(),
        };
        setCourseTypes(
            courseTypes.map((t) =>
                t.id === selectedId ? { ...t, lessons: [lesson, ...t.lessons] } : t
            )
        );
        setLessonTitle("");
        setLessonText("");
    };

    const deleteLesson = (lessonId) => {
        setCourseTypes(
            courseTypes.map((t) =>
                t.id === selectedId
                    ? { ...t, lessons: t.lessons.filter((l) => l.id !== lessonId) }
                    : t
            )
        );
    };

    const closeFolder = () => {
        setSelectedId(null);
        setLessonTitle("");
        setLessonText("");
    };

    return (
        <div className="courses-page">
            <style>{`
                .courses-page {
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
                    /* papier a points (dot grid) */
                    background-color: #fffdf7;
                    background-image: radial-gradient(#d9d4c3 1.2px, transparent 1.2px);
                    background-size: 22px 22px;
                }

                /* ===== titre b highlighter + sticker ===== */
                .courses-page h1 {
                    position: relative;
                    z-index: 0;
                    display: inline-block;
                    margin: 0 0 36px;
                    font-size: 46px;
                    font-weight: 800;
                    letter-spacing: -1.5px;
                }

                .courses-page h1::after {
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

                .courses-page h1::before {
                    content: "✏️";
                    position: absolute;
                    top: -18px;
                    right: -38px;
                    font-size: 28px;
                    transform: rotate(18deg);
                    animation: wiggle 2.4s ease-in-out infinite;
                }

                .courses-content {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 32px;
                    width: 100%;
                }

                /* ===== input dyal type jdid ===== */
                .text {
                    display: flex;
                    gap: 10px;
                    width: 100%;
                    max-width: 420px;
                    animation: slideIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
                }

                .text input {
                    flex: 1;
                    padding: 12px 18px;
                    font-family: inherit;
                    font-size: 14px;
                    color: #111;
                    background: #fff;
                    border: 2px solid #111;
                    border-radius: 999px;
                    box-sizing: border-box;
                    transition: box-shadow 0.2s ease, transform 0.2s ease;
                }

                .text input:focus {
                    outline: none;
                    transform: translate(-2px, -2px);
                    box-shadow: 4px 4px 0 #ff9f9f;
                }

                .type-confirm {
                    width: 46px;
                    font-size: 18px;
                    color: #111;
                    background: #b8f0b0;
                    border: 2px solid #111;
                    border-radius: 50%;
                    box-shadow: 2px 2px 0 #111;
                    cursor: pointer;
                    transition: transform 0.2s ease, box-shadow 0.2s ease;
                }

                .type-confirm:hover {
                    transform: translate(-2px, -2px) rotate(-8deg);
                    box-shadow: 4px 4px 0 #111;
                }

                .add_type {
                    padding: 13px 32px;
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

                .add_type:hover {
                    transform: translate(-3px, -3px) rotate(-2deg);
                    box-shadow: 7px 7px 0 #111;
                }

                .add_type:active {
                    transform: translate(2px, 2px);
                    box-shadow: 1px 1px 0 #111;
                }

                .types-container {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    gap: 34px 26px;
                    width: 100%;
                    max-width: 980px;
                }

                /* ===== dossiers colores ===== */
                .type-card {
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    gap: 8px;
                    width: 210px;
                    min-height: 130px;
                    margin-top: 16px;
                    padding: 22px 16px;
                    background: #fff3b0;
                    border: 2px solid #111;
                    border-radius: 0 16px 16px 16px;
                    box-shadow: 5px 5px 0 #111;
                    box-sizing: border-box;
                    cursor: pointer;
                    transform: rotate(-1.5deg);
                    animation: pop 0.45s cubic-bezier(0.34, 1.56, 0.64, 1) backwards;
                    transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.25s ease;
                }

                .type-card:nth-child(even) { transform: rotate(1.3deg); }

                .type-card:nth-child(5n + 1) { background: #fff3b0; }
                .type-card:nth-child(5n + 2) { background: #ffd6d6; }
                .type-card:nth-child(5n + 3) { background: #d6e9ff; }
                .type-card:nth-child(5n + 4) { background: #d9f5d6; }
                .type-card:nth-child(5n) { background: #e9dcff; }

                .type-card:nth-child(1) { animation-delay: 0.02s; }
                .type-card:nth-child(2) { animation-delay: 0.06s; }
                .type-card:nth-child(3) { animation-delay: 0.10s; }
                .type-card:nth-child(4) { animation-delay: 0.14s; }
                .type-card:nth-child(5) { animation-delay: 0.18s; }
                .type-card:nth-child(6) { animation-delay: 0.22s; }
                .type-card:nth-child(7) { animation-delay: 0.26s; }
                .type-card:nth-child(8) { animation-delay: 0.30s; }

                /* tab dyal dossier */
                .type-card::before {
                    content: "";
                    position: absolute;
                    top: -18px;
                    left: -2px;
                    width: 76px;
                    height: 18px;
                    background: inherit;
                    border: 2px solid #111;
                    border-bottom: none;
                    border-radius: 10px 10px 0 0;
                }

                /* emoji decoratif f l coin */
                .type-card::after {
                    content: "📁";
                    position: absolute;
                    right: 12px;
                    bottom: 8px;
                    font-size: 20px;
                    opacity: 0.85;
                    transition: transform 0.3s ease;
                }

                .type-card:nth-child(5n + 1)::after { content: "⭐"; }
                .type-card:nth-child(5n + 2)::after { content: "📚"; }
                .type-card:nth-child(5n + 3)::after { content: "💡"; }
                .type-card:nth-child(5n + 4)::after { content: "🌱"; }
                .type-card:nth-child(5n)::after { content: "🚀"; }

                .type-card:hover {
                    transform: translate(-4px, -6px) rotate(0deg) scale(1.04);
                    box-shadow: 9px 10px 0 #111;
                }

                .type-card:hover::after {
                    transform: rotate(20deg) scale(1.3);
                }

                .type-card h3 {
                    margin: 0;
                    font-size: 17px;
                    font-weight: 800;
                    line-height: 1.35;
                }

                .type-count {
                    padding: 3px 12px;
                    font-size: 11px;
                    font-weight: 700;
                    letter-spacing: 0.5px;
                    color: #111;
                    background: rgba(255, 255, 255, 0.75);
                    border: 1.5px solid #111;
                    border-radius: 999px;
                }

                .type-delete,
                .lesson-delete {
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

                .type-delete:hover,
                .lesson-delete:hover {
                    color: #e03131;
                    transform: rotate(90deg) scale(1.2);
                }

                /* ===== vue dyal type mftou7 ===== */
                .back-btn {
                    padding: 9px 22px;
                    font-size: 13px;
                    font-weight: 700;
                    color: #111;
                    background: #fff;
                    border: 2px solid #111;
                    border-radius: 999px;
                    box-shadow: 3px 3px 0 #111;
                    cursor: pointer;
                    transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
                }

                .back-btn:hover {
                    background: #d6e9ff;
                    transform: translate(-2px, -2px);
                    box-shadow: 5px 5px 0 #111;
                }

                .folder-title {
                    position: relative;
                    z-index: 0;
                    margin: 0;
                    padding: 0 6px;
                    font-size: 32px;
                    font-weight: 800;
                    letter-spacing: -0.5px;
                }

                .folder-title::after {
                    content: "";
                    position: absolute;
                    left: 0;
                    right: 0;
                    bottom: 3px;
                    height: 12px;
                    background: #ffd84d;
                    border-radius: 4px;
                    transform: rotate(-1deg);
                    z-index: -1;
                }

                /* ===== formulaire = page de cahier ===== */
                .lesson-form {
                    display: flex;
                    flex-direction: column;
                    gap: 14px;
                    width: 100%;
                    max-width: 540px;
                    padding: 28px 24px 24px 44px;
                    background: #fffef9;
                    border: 2px solid #111;
                    border-radius: 12px;
                    box-shadow: 8px 8px 0 #111;
                    box-sizing: border-box;
                    position: relative;
                    transform: rotate(-0.6deg);
                }

                /* marge rouge dyal cahier */
                .lesson-form::before {
                    content: "";
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    left: 30px;
                    width: 2px;
                    background: #ff9f9f;
                }

                .lesson-form h4 {
                    margin: 0;
                    font-size: 12px;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 3px;
                    color: #888;
                }

                .lesson-form input,
                .lesson-form textarea {
                    width: 100%;
                    padding: 12px;
                    font-family: inherit;
                    font-size: 14px;
                    color: #111;
                    background: transparent;
                    border: none;
                    border-bottom: 2px dashed #bbb;
                    border-radius: 0;
                    box-sizing: border-box;
                    transition: border-color 0.2s ease, background 0.2s ease;
                }

                .lesson-form input {
                    text-align: left;
                    font-weight: 700;
                    font-size: 16px;
                }

                /* textarea b khotout dyal cahier */
                .lesson-form textarea {
                    min-height: 150px;
                    line-height: 28px;
                    text-align: left;
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

                .lesson-form input:focus,
                .lesson-form textarea:focus {
                    outline: none;
                    border-color: #111;
                }

                .lesson-form input:focus {
                    background: #fff8d6;
                }

                .lessons-grid {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    gap: 32px 26px;
                    width: 100%;
                    max-width: 980px;
                }

                /* ===== lessons = sticky notes ===== */
                .lesson-card {
                    position: relative;
                    width: 280px;
                    padding: 30px 20px 20px;
                    text-align: left;
                    background: #fff3b0;
                    border: 2px solid #111;
                    border-radius: 4px 4px 18px 4px;
                    box-shadow: 5px 5px 0 #111;
                    box-sizing: border-box;
                    transform: rotate(-1.5deg);
                    animation: pop 0.45s cubic-bezier(0.34, 1.56, 0.64, 1);
                    transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.25s ease;
                }

                .lesson-card:nth-child(4n + 1) { background: #fff3b0; }
                .lesson-card:nth-child(4n + 2) { background: #ffd6d6; transform: rotate(1.4deg); }
                .lesson-card:nth-child(4n + 3) { background: #d6e9ff; transform: rotate(-0.8deg); }
                .lesson-card:nth-child(4n) { background: #d9f5d6; transform: rotate(1.8deg); }

                .lesson-card:hover {
                    transform: translate(-3px, -6px) rotate(0deg) scale(1.03);
                    box-shadow: 9px 10px 0 #111;
                }

                /* scotch f lfo9 */
                .lesson-card::before {
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

                .lesson-card h3 {
                    margin: 0 0 4px;
                    padding-right: 20px;
                    font-size: 18px;
                    font-weight: 800;
                }

                .lesson-date {
                    display: inline-block;
                    margin-bottom: 12px;
                    padding: 2px 10px;
                    font-size: 11px;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 1.5px;
                    color: #111;
                    background: rgba(255, 255, 255, 0.7);
                    border: 1.5px solid #111;
                    border-radius: 999px;
                }

                .lesson-card p {
                    margin: 0;
                    font-size: 14px;
                    line-height: 1.7;
                    white-space: pre-wrap;
                    color: #222;
                }

                .empty {
                    margin: 0;
                    padding: 16px 28px;
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

                @keyframes slideIn {
                    from { opacity: 0; transform: translateY(-12px) scale(0.95); }
                    to { opacity: 1; transform: translateY(0) scale(1); }
                }

                @keyframes wiggle {
                    0%, 100% { transform: rotate(18deg); }
                    50% { transform: rotate(-4deg) translateY(-3px); }
                }

                @media (max-width: 560px) {
                    .courses-page h1 { font-size: 34px; }
                    .courses-page h1::before { right: -30px; font-size: 22px; }
                    .type-card, .lesson-card { width: 100%; max-width: 320px; }
                    .lesson-form { padding-left: 38px; }
                }
            `}</style>

            <h1>Courses</h1>

            {!selected ? (
                /* ===== vue 1: bouton Add type + liste dyal les types ===== */
                <div className="courses-content">
                    <div className="button-add">
                        <button
                            className="add_type"
                            onClick={() => setShowTypeInput(!showTypeInput)}
                        >
                            {showTypeInput ? "Close" : "+ Add type"}
                        </button>
                    </div>

                    {showTypeInput && (
                        <div className="text">
                            <input
                                type="text"
                                autoFocus
                                placeholder="Write your type..."
                                value={text}
                                onChange={(e) => setText(e.target.value)}
                                onKeyDown={(e) => e.key === "Enter" && addType()}
                            />
                            <button
                                className="type-confirm"
                                onClick={addType}
                                aria-label="Confirm type"
                            >
                                ✓
                            </button>
                        </div>
                    )}

                    <div className="types-container">
                        {courseTypes.map((type) => (
                            <div
                                className="type-card"
                                key={type.id}
                                onClick={() => setSelectedId(type.id)}
                            >
                                <button
                                    className="type-delete"
                                    onClick={(e) => deleteType(e, type.id, type.name)}
                                    aria-label={`Delete ${type.name}`}
                                >
                                    ×
                                </button>
                                <h3>{type.name}</h3>
                                <span className="type-count">
                                    {type.lessons.length}{" "}
                                    {type.lessons.length === 1 ? "lesson" : "lessons"}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                /* ===== vue 2: dakhl type, ktb l cours dyalo ===== */
                <div className="courses-content">
                    <button className="back-btn" onClick={closeFolder}>
                        ← All types
                    </button>
                    <h2 className="folder-title">{selected.name}</h2>

                    <div className="lesson-form">
                        <h4>write your lesson</h4>
                        <input
                            type="text"
                            placeholder="Lesson title"
                            value={lessonTitle}
                            onChange={(e) => setLessonTitle(e.target.value)}
                        />
                        <textarea
                            placeholder={`Write your ${selected.name} lesson here...`}
                            value={lessonText}
                            onChange={(e) => setLessonText(e.target.value)}
                        ></textarea>
                        <div className="button-add">
                            <button className="add_type" onClick={addLesson}>
                                Add lesson
                            </button>
                        </div>
                    </div>

                    {selected.lessons.length === 0 ? (
                        <p className="empty">No lessons yet. Write your first one ✍️</p>
                    ) : (
                        <div className="lessons-grid">
                            {selected.lessons.map((lesson) => (
                                <div className="lesson-card" key={lesson.id}>
                                    <button
                                        className="lesson-delete"
                                        onClick={() => deleteLesson(lesson.id)}
                                        aria-label="Delete lesson"
                                    >
                                        ×
                                    </button>
                                    <h3>{lesson.title}</h3>
                                    <span className="lesson-date">{lesson.date}</span>
                                    <p>{lesson.content}</p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default Courses;