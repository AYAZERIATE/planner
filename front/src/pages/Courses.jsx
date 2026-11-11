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
                    padding: 24px 0 64px;
                    text-align: center;
                    font-family: "Inter", "Segoe UI", Arial, sans-serif;
                    color: #111;
                }

                .courses-page h1 {
                    position: relative;
                    z-index: 0;
                    display: inline-block;
                    margin: 0 0 32px;
                    font-size: 40px;
                    font-weight: 800;
                    letter-spacing: -1px;
                }

                .courses-page h1::after {
                    content: "";
                    position: absolute;
                    left: -6px;
                    right: -6px;
                    bottom: 4px;
                    height: 14px;
                    background: #d6e9ff;
                    border-radius: 4px;
                    transform: rotate(-1deg);
                    z-index: -1;
                }

                .courses-content {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 28px;
                    width: 100%;
                }

                /* input dyal type jdid (kayban mnin t-clicki Add type) */
                .text {
                    display: flex;
                    gap: 10px;
                    width: 100%;
                    max-width: 420px;
                    animation: slideIn 0.25s ease;
                }

                .text input {
                    flex: 1;
                    padding: 12px 14px;
                    font-family: inherit;
                    font-size: 14px;
                    color: #111;
                    background: #fff;
                    border: 2px solid #111;
                    border-radius: 999px;
                    box-sizing: border-box;
                }

                .text input:focus {
                    outline: none;
                    box-shadow: 4px 4px 0 #111;
                }

                .type-confirm {
                    width: 44px;
                    font-size: 18px;
                    color: #fff;
                    background: #111;
                    border: none;
                    border-radius: 50%;
                    cursor: pointer;
                    transition: transform 0.2s ease;
                }

                .type-confirm:hover { transform: scale(1.1); }

                .add_type {
                    padding: 12px 32px;
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

                .add_type:hover {
                    background: #333;
                    transform: translateY(-3px) scale(1.04);
                }

                .types-container {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    gap: 28px 20px;
                    width: 100%;
                    max-width: 960px;
                }

                /* carte b chkl mojalad */
                .type-card {
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    gap: 8px;
                    width: 200px;
                    min-height: 120px;
                    margin-top: 14px;
                    padding: 20px 16px;
                    background: #fff;
                    border: 2px solid #111;
                    border-radius: 0 14px 14px 14px;
                    box-shadow: 4px 4px 0 #111;
                    box-sizing: border-box;
                    cursor: pointer;
                    animation: pop 0.35s ease;
                    transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
                }

                .type-card::before {
                    content: "";
                    position: absolute;
                    top: -16px;
                    left: -2px;
                    width: 70px;
                    height: 16px;
                    background: inherit;
                    border: 2px solid #111;
                    border-bottom: none;
                    border-radius: 8px 8px 0 0;
                }

                .type-card:nth-child(5n + 1):hover { background: #fff3b0; }
                .type-card:nth-child(5n + 2):hover { background: #ffd6d6; }
                .type-card:nth-child(5n + 3):hover { background: #d6e9ff; }
                .type-card:nth-child(5n + 4):hover { background: #d9f5d6; }
                .type-card:nth-child(5n):hover { background: #e9dcff; }

                .type-card:hover {
                    transform: translate(-3px, -3px);
                    box-shadow: 7px 7px 0 #111;
                }

                .type-card h3 {
                    margin: 0;
                    font-size: 16px;
                    font-weight: 700;
                    line-height: 1.4;
                }

                .type-count {
                    font-size: 12px;
                    font-weight: 600;
                    color: #777;
                }

                .type-delete,
                .lesson-delete {
                    position: absolute;
                    top: 6px;
                    right: 10px;
                    padding: 0;
                    font-size: 18px;
                    color: #999;
                    background: none;
                    border: none;
                    cursor: pointer;
                    transition: color 0.2s ease, transform 0.2s ease;
                }

                .type-delete:hover,
                .lesson-delete:hover {
                    color: #111;
                    transform: rotate(90deg);
                }

                /* vue dyal type mftou7: blassa dyal l cours */
                .back-btn {
                    padding: 8px 20px;
                    font-size: 13px;
                    font-weight: 600;
                    color: #111;
                    background: #fff;
                    border: 2px solid #111;
                    border-radius: 999px;
                    cursor: pointer;
                    transition: background 0.2s ease, color 0.2s ease;
                }

                .back-btn:hover {
                    color: #fff;
                    background: #111;
                }

                .folder-title {
                    margin: 0;
                    font-size: 28px;
                    font-weight: 800;
                }

                .lesson-form {
                    display: flex;
                    flex-direction: column;
                    gap: 14px;
                    width: 100%;
                    max-width: 520px;
                    padding: 24px;
                    background: #fff;
                    border: 2px dashed #111;
                    border-radius: 16px;
                    box-shadow: 8px 8px 0 #111;
                    box-sizing: border-box;
                }

                .lesson-form h4 {
                    margin: 0;
                    font-size: 12px;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 2px;
                    color: #777;
                }

                .lesson-form input,
                .lesson-form textarea {
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

                .lesson-form textarea {
                    min-height: 130px;
                    line-height: 1.6;
                    resize: vertical;
                }

                .lesson-form input:focus,
                .lesson-form textarea:focus {
                    outline: none;
                    background: #fff;
                    border-color: #111;
                }

                .lessons-grid {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    gap: 24px;
                    width: 100%;
                    max-width: 960px;
                }

                .lesson-card {
                    position: relative;
                    width: 280px;
                    padding: 24px 20px 18px;
                    text-align: left;
                    background: #fff;
                    border: 2px solid #111;
                    border-radius: 12px;
                    box-shadow: 4px 4px 0 #111;
                    box-sizing: border-box;
                    animation: pop 0.35s ease;
                }

                .lesson-card h3 {
                    margin: 0 0 4px;
                    padding-right: 20px;
                    font-size: 17px;
                    font-weight: 700;
                }

                .lesson-date {
                    display: block;
                    margin-bottom: 10px;
                    font-size: 11px;
                    text-transform: uppercase;
                    letter-spacing: 1.5px;
                    color: #999;
                }

                .lesson-card p {
                    margin: 0;
                    font-size: 14px;
                    line-height: 1.6;
                    white-space: pre-wrap;
                    color: #333;
                }

                .empty {
                    margin: 0;
                    font-size: 14px;
                    color: #999;
                }

                @keyframes pop {
                    from { opacity: 0; transform: scale(0.8); }
                    to { opacity: 1; transform: scale(1); }
                }

                @keyframes slideIn {
                    from { opacity: 0; transform: translateY(-8px); }
                    to { opacity: 1; transform: translateY(0); }
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
                        <p className="empty">No lessons yet. Write your first one.</p>
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