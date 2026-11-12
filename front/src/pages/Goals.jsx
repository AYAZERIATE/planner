import { useState, useEffect } from "react";

const STORAGE_KEY = "planner-goals";

function loadGoals() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        return saved ? JSON.parse(saved) : [];
    } catch {
        return [];
    }
}

function daysLeft(deadline) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const target = new Date(deadline);
    target.setHours(0, 0, 0, 0);
    return Math.round((target - today) / 86400000);
}

function deadlineLabel(deadline) {
    const d = daysLeft(deadline);
    if (d < 0) return `${Math.abs(d)} day(s) overdue`;
    if (d === 0) return "Due today";
    if (d === 1) return "1 day left";
    return `${d} days left`;
}

function Tree({ hours }) {
    // la taille de l'arbre depend de la duree du goal
    const size = Math.min(110, 56 + hours * 3);
    return (
        <svg
            className="tree"
            width={size}
            height={size}
            viewBox="0 0 64 64"
            aria-label="Tree"
        >
            <rect x="29" y="40" width="6" height="20" rx="2" fill="#6b4f3a" stroke="#111" strokeWidth="1.5" />
            <circle cx="32" cy="28" r="18" fill="#2f6f4e" stroke="#111" strokeWidth="1.5" />
            <circle cx="20" cy="34" r="11" fill="#3c8a62" stroke="#111" strokeWidth="1.5" />
            <circle cx="44" cy="34" r="11" fill="#3c8a62" stroke="#111" strokeWidth="1.5" />
            <circle cx="32" cy="30" r="12" fill="#3c8a62" />
        </svg>
    );
}

function Goals() {
    const [goals, setGoals] = useState(loadGoals);
    const [title, setTitle] = useState("");
    const [deadline, setDeadline] = useState("");
    const [hours, setHours] = useState("");

    useEffect(() => {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(goals));
        } catch {
            /* storage indisponible */
        }
    }, [goals]);

    const activeGoals = goals.filter((g) => !g.done);
    const doneGoals = goals.filter((g) => g.done);
    const totalHours = doneGoals.reduce((sum, g) => sum + g.hours, 0);

    function addGoal(e) {
        e.preventDefault();
        if (!title.trim() || !deadline || !hours) return;
        setGoals([
            ...goals,
            {
                id: Date.now(),
                title: title.trim(),
                deadline,
                hours: Number(hours),
                done: false,
            },
        ]);
        setTitle("");
        setDeadline("");
        setHours("");
    }

    function completeGoal(id) {
        setGoals(
            goals.map((g) =>
                g.id === id
                    ? { ...g, done: true, doneAt: new Date().toISOString() }
                    : g
            )
        );
    }

    function deleteGoal(id) {
        setGoals(goals.filter((g) => g.id !== id));
    }

    return (
        <div className="goals-page">
            <style>{`
                .goals-page {
                    min-height: 100vh;
                    padding: 40px 6% 72px;
                    color: #111;
                    font-family: "Inter", "Segoe UI", Arial, sans-serif;
                    box-sizing: border-box;
                    /* papier a points (dot grid) */
                    background-color: #fffdf7;
                    background-image: radial-gradient(#d9d4c3 1.2px, transparent 1.2px);
                    background-size: 22px 22px;
                }

                /* ===== titre b highlighter ===== */
                .goals-page h1 {
                    position: relative;
                    z-index: 0;
                    display: inline-block;
                    margin: 0 0 16px;
                    font-size: 46px;
                    font-weight: 800;
                    letter-spacing: -1.5px;
                }

                .goals-page h1::after {
                    content: "";
                    position: absolute;
                    left: -10px;
                    right: -10px;
                    bottom: 4px;
                    height: 18px;
                    background: linear-gradient(90deg, #d9f5d6, #fff3b0, #d6e9ff);
                    border-radius: 6px;
                    transform: rotate(-1.5deg);
                    z-index: -1;
                }

                .goals-page h1::before {
                    content: "🎯";
                    position: absolute;
                    top: -16px;
                    right: -40px;
                    font-size: 28px;
                    transform: rotate(14deg);
                    animation: wiggle 2.4s ease-in-out infinite;
                }

                .goals-intro {
                    max-width: 620px;
                    margin: 0 0 36px;
                    font-size: 15px;
                    line-height: 1.7;
                    color: #555;
                }

                /* ===== stats = stickers colores ===== */
                .goals-stats {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 24px;
                    margin-bottom: 40px;
                }

                .goals-stat {
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                    padding: 22px 20px;
                    background: #fff3b0;
                    color: #111;
                    border: 2px solid #111;
                    border-radius: 14px;
                    box-shadow: 5px 5px 0 #111;
                    transform: rotate(-1.2deg);
                    animation: pop 0.45s cubic-bezier(0.34, 1.56, 0.64, 1) backwards;
                    transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.25s ease;
                }

                .goals-stat:nth-child(2) { background: #d9f5d6; transform: rotate(1deg); animation-delay: 0.08s; }
                .goals-stat:nth-child(3) { background: #d6e9ff; transform: rotate(-0.6deg); animation-delay: 0.16s; }

                .goals-stat:hover {
                    transform: translate(-3px, -5px) rotate(0deg);
                    box-shadow: 8px 9px 0 #111;
                }

                .goals-stat strong {
                    font-size: 38px;
                    font-weight: 800;
                    line-height: 1;
                }

                .goals-stat span {
                    font-size: 11px;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 2px;
                    color: #333;
                }

                /* ===== formulaire = page de cahier ===== */
                .goals-form {
                    position: relative;
                    display: grid;
                    grid-template-columns: 2fr 1fr 1fr auto;
                    gap: 14px;
                    align-items: center;
                    margin-bottom: 48px;
                    padding: 22px 24px 22px 46px;
                    background: #fffef9;
                    border: 2px solid #111;
                    border-radius: 12px;
                    box-shadow: 8px 8px 0 #111;
                    transform: rotate(-0.4deg);
                }

                /* marge rouge dyal cahier */
                .goals-form::before {
                    content: "";
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    left: 30px;
                    width: 2px;
                    background: #ff9f9f;
                }

                .goals-form input {
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

                .goals-form input:focus {
                    border-color: #111;
                    background: #fff8d6;
                }

                .goals-form button {
                    padding: 13px 26px;
                    font-size: 14px;
                    font-weight: 800;
                    font-family: inherit;
                    letter-spacing: 1px;
                    color: #111;
                    background: #ffd84d;
                    border: 2px solid #111;
                    border-radius: 999px;
                    box-shadow: 4px 4px 0 #111;
                    cursor: pointer;
                    transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.2s ease;
                }

                .goals-form button:hover {
                    transform: translate(-3px, -3px) rotate(-2deg);
                    box-shadow: 7px 7px 0 #111;
                }

                .goals-form button:active {
                    transform: translate(2px, 2px);
                    box-shadow: 1px 1px 0 #111;
                }

                .goals-section-title {
                    position: relative;
                    z-index: 0;
                    display: inline-block;
                    margin: 0 0 24px;
                    padding: 0 6px;
                    font-size: 26px;
                    font-weight: 800;
                    letter-spacing: -0.5px;
                }

                .goals-section-title::after {
                    content: "";
                    position: absolute;
                    left: 0;
                    right: 0;
                    bottom: 3px;
                    height: 11px;
                    background: #ffd84d;
                    border-radius: 4px;
                    transform: rotate(-1deg);
                    z-index: -1;
                }

                /* ===== goals = sticky notes ===== */
                .goals-list {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
                    gap: 32px 26px;
                    margin-bottom: 56px;
                }

                .goal-card {
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                    padding: 30px 20px 18px;
                    background: #fff3b0;
                    border: 2px solid #111;
                    border-radius: 4px 4px 18px 4px;
                    box-shadow: 5px 5px 0 #111;
                    transform: rotate(-1.4deg);
                    animation: pop 0.45s cubic-bezier(0.34, 1.56, 0.64, 1);
                    transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.25s ease;
                }

                .goal-card:nth-child(4n + 1) { background: #fff3b0; }
                .goal-card:nth-child(4n + 2) { background: #ffd6d6; transform: rotate(1.3deg); }
                .goal-card:nth-child(4n + 3) { background: #d6e9ff; transform: rotate(-0.8deg); }
                .goal-card:nth-child(4n) { background: #e9dcff; transform: rotate(1.7deg); }

                .goal-card:hover {
                    transform: translate(-3px, -6px) rotate(0deg) scale(1.02);
                    box-shadow: 9px 10px 0 #111;
                }

                /* scotch f lfo9 */
                .goal-card::before {
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

                .goal-info h5 {
                    margin: 0 0 10px;
                    font-size: 18px;
                    font-weight: 800;
                    line-height: 1.3;
                }

                .goal-meta {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 8px;
                    font-size: 11px;
                    font-weight: 700;
                    color: #111;
                }

                .goal-meta span {
                    padding: 3px 10px;
                    background: rgba(255, 255, 255, 0.75);
                    border: 1.5px solid #111;
                    border-radius: 999px;
                }

                .goal-meta .overdue {
                    color: #fff;
                    background: #e03131;
                }

                .goal-actions {
                    display: flex;
                    gap: 10px;
                }

                .goal-actions button {
                    padding: 8px 16px;
                    font-size: 12px;
                    font-weight: 800;
                    font-family: inherit;
                    color: #111;
                    border: 2px solid #111;
                    border-radius: 999px;
                    box-shadow: 3px 3px 0 #111;
                    cursor: pointer;
                    transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
                }

                .goal-actions button:hover {
                    transform: translate(-2px, -2px);
                    box-shadow: 5px 5px 0 #111;
                }

                .btn-done { background: #b8f0b0; }
                .btn-delete { background: #fff; }
                .btn-delete:hover { background: #ffd6d6; }

                .goals-empty {
                    padding: 18px 28px;
                    font-size: 14px;
                    font-weight: 600;
                    text-align: center;
                    color: #777;
                    background: #fff;
                    border: 2px dashed #bbb;
                    border-radius: 14px;
                    grid-column: 1 / -1;
                }

                /* ===== forest = jardin b ombre ===== */
                .forest {
                    position: relative;
                    min-height: 240px;
                    padding: 24px 24px 0;
                    background: linear-gradient(#e8f6ff 0%, #e8f6ff 55%, #d9f5d6 55%, #d9f5d6 100%);
                    border: 2px solid #111;
                    border-radius: 16px;
                    box-shadow: 8px 8px 0 #111;
                    overflow: hidden;
                }

                /* chems */
                .forest::before {
                    content: "☀️";
                    position: absolute;
                    top: 14px;
                    right: 22px;
                    font-size: 34px;
                    animation: wiggle 4s ease-in-out infinite;
                }

                .forest-trees {
                    display: flex;
                    flex-wrap: wrap;
                    align-items: flex-end;
                    justify-content: center;
                    gap: 4px;
                    min-height: 190px;
                }

                .forest-tree {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                .tree {
                    animation: grow 0.7s cubic-bezier(0.34, 1.56, 0.64, 1);
                    transform-origin: bottom center;
                    transition: transform 0.25s ease;
                }

                .tree:hover {
                    transform: scale(1.1) rotate(-3deg);
                }

                .forest-ground {
                    height: 22px;
                    margin: 0 -24px;
                    background: #3c8a62;
                    border-top: 2px solid #111;
                }

                .forest-empty {
                    align-self: center;
                    padding: 70px 0;
                    font-size: 14px;
                    font-weight: 600;
                    color: #5d7a6a;
                }

                @keyframes grow {
                    from { transform: scale(0); opacity: 0; }
                    to { transform: scale(1); opacity: 1; }
                }

                @keyframes pop {
                    0% { opacity: 0; transform: scale(0.6) rotate(-6deg); }
                    100% { opacity: 1; }
                }

                @keyframes wiggle {
                    0%, 100% { transform: rotate(14deg); }
                    50% { transform: rotate(-4deg) translateY(-3px); }
                }

                @media (max-width: 800px) {
                    .goals-page h1 { font-size: 34px; }
                    .goals-page h1::before { right: -30px; font-size: 22px; }
                    .goals-stats { grid-template-columns: 1fr; }
                    .goals-form { grid-template-columns: 1fr; padding-left: 40px; }
                }
            `}</style>

            <h1>Goals</h1>
            <p className="goals-intro">
                Set a goal, give it a deadline and the time it needs. Every
                goal you complete grows a tree in your forest.
            </p>

            <div className="goals-stats">
                <div className="goals-stat">
                    <strong>{activeGoals.length}</strong>
                    <span>Goals in progress</span>
                </div>
                <div className="goals-stat">
                    <strong>{doneGoals.length}</strong>
                    <span>Trees planted</span>
                </div>
                <div className="goals-stat">
                    <strong>{totalHours}h</strong>
                    <span>Time invested</span>
                </div>
            </div>

            <form className="goals-form" onSubmit={addGoal}>
                <input
                    type="text"
                    placeholder="Goal (ex: Finish React course)"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <input
                    type="date"
                    value={deadline}
                    onChange={(e) => setDeadline(e.target.value)}
                />
                <input
                    type="number"
                    min="1"
                    placeholder="Hours needed"
                    value={hours}
                    onChange={(e) => setHours(e.target.value)}
                />
                <button type="submit">+ Add goal</button>
            </form>

            <h2 className="goals-section-title">In progress</h2>
            <div className="goals-list">
                {activeGoals.length === 0 && (
                    <div className="goals-empty">
                        No active goals. Add one to plant your next tree 🌱
                    </div>
                )}
                {activeGoals.map((goal) => (
                    <div className="goal-card" key={goal.id}>
                        <div className="goal-info">
                            <h5>{goal.title}</h5>
                            <div className="goal-meta">
                                <span>Deadline: {goal.deadline}</span>
                                <span
                                    className={
                                        daysLeft(goal.deadline) < 0 ? "overdue" : ""
                                    }
                                >
                                    {deadlineLabel(goal.deadline)}
                                </span>
                                <span>{goal.hours}h needed</span>
                            </div>
                        </div>
                        <div className="goal-actions">
                            <button
                                className="btn-done"
                                onClick={() => completeGoal(goal.id)}
                            >
                                Done 🌱
                            </button>
                            <button
                                className="btn-delete"
                                onClick={() => deleteGoal(goal.id)}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <h2 className="goals-section-title">Your forest</h2>
            <div className="forest">
                <div className="forest-trees">
                    {doneGoals.length === 0 && (
                        <p className="forest-empty">
                            Your forest is empty. Complete a goal to plant a tree.
                        </p>
                    )}
                    {doneGoals.map((goal) => (
                        <div
                            className="forest-tree"
                            key={goal.id}
                            title={`${goal.title} (${goal.hours}h)`}
                        >
                            <Tree hours={goal.hours} />
                        </div>
                    ))}
                </div>
                <div className="forest-ground" />
            </div>
        </div>
    );
}

export default Goals;