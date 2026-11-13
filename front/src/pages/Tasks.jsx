import { useState } from "react";

function Tasks() {
    const [tasks, setTasks] = useState([]);
    const [text, setText] = useState("");

    const addTask = () => {
        if (text.trim() === "") return;
        setTasks([...tasks, { id: Date.now(), content: text, done: false }]);
        setText("");
    };

    const completeTask = (id) => {
        setTasks((prev) =>
            prev.map((t) => (t.id === id ? { ...t, done: true } : t))
        );
        setTimeout(() => {
            setTasks((prev) => prev.filter((t) => t.id !== id));
        }, 450);
    };

    return (
        <div className="tasks-page">
            <style>{`
                .tasks-page {
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

                .tasks-page h1 {
                    position: relative;
                    z-index: 0;
                    display: inline-block;
                    margin: 0 0 16px;
                    font-size: 46px;
                    font-weight: 800;
                    letter-spacing: -1.5px;
                }

                .tasks-page h1::after {
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

                .tasks-page h1::before {
                    content: "✏️";
                    position: absolute;
                    top: -18px;
                    right: -38px;
                    font-size: 28px;
                    transform: rotate(18deg);
                    animation: wiggle 2.4s ease-in-out infinite;
                }

                .tasks {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 28px;
                    width: 100%;
                }

                .tasks h3 {
                    margin: 0;
                    font-size: 15px;
                    font-weight: 600;
                    color: #777;
                }

                .tasks-sections {
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
                .tasks-sections::before {
                    content: "";
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    left: 30px;
                    width: 2px;
                    background: #ff9f9f;
                }

                .add-row {
                    display: flex;
                    gap: 10px;
                }

                .add-row input {
                    flex: 1;
                    padding: 12px 18px;
                    font-family: inherit;
                    font-size: 14px;
                    color: #111;
                    background: #fff;
                    border: 2px solid #111;
                    border-radius: 999px;
                    transition: box-shadow 0.2s ease, transform 0.2s ease;
                }

                .add-row input:focus {
                    outline: none;
                    transform: translate(-2px, -2px);
                    box-shadow: 4px 4px 0 #ff9f9f;
                }

                .add-row button {
                    padding: 0 26px;
                    font-size: 14px;
                    font-weight: 800;
                    letter-spacing: 1px;
                    color: #111;
                    background: #ffd84d;
                    border: 2px solid #111;
                    border-radius: 999px;
                    box-shadow: 3px 3px 0 #111;
                    cursor: pointer;
                    transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.2s ease;
                }

                .add-row button:hover {
                    transform: translate(-2px, -2px) rotate(-2deg);
                    box-shadow: 5px 5px 0 #111;
                }

                .add-row button:active {
                    transform: translate(2px, 2px);
                    box-shadow: 1px 1px 0 #111;
                }

                .task-list {
                    display: flex;
                    flex-direction: column;
                    gap: 14px;
                    margin-top: 8px;
                }

                /* tasks = sticky notes */
                .task-item {
                    display: flex;
                    align-items: center;
                    gap: 14px;
                    padding: 14px 16px;
                    text-align: left;
                    font-size: 14px;
                    font-weight: 600;
                    background: #fff3b0;
                    border: 2px solid #111;
                    border-radius: 4px 4px 14px 4px;
                    box-shadow: 4px 4px 0 #111;
                    cursor: pointer;
                    transform: rotate(-0.8deg);
                    animation: slideIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
                    transition: opacity 0.4s ease, transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.25s ease;
                }

                .task-item:nth-child(4n + 1) { background: #fff3b0; }
                .task-item:nth-child(4n + 2) { background: #ffd6d6; transform: rotate(0.9deg); }
                .task-item:nth-child(4n + 3) { background: #d6e9ff; transform: rotate(-0.5deg); }
                .task-item:nth-child(4n) { background: #d9f5d6; transform: rotate(1.1deg); }

                .task-item:hover {
                    transform: translate(-2px, -3px) rotate(0deg) scale(1.02);
                    box-shadow: 6px 7px 0 #111;
                }

                .task-item.done {
                    opacity: 0;
                    transform: translateX(40px) rotate(4deg);
                }

                .task-item.done span {
                    text-decoration: line-through;
                    color: #777;
                }

                .task-item input[type="radio"] {
                    width: 20px;
                    height: 20px;
                    margin: 0;
                    accent-color: #111;
                    cursor: pointer;
                }

                .task-item span {
                    flex: 1;
                    line-height: 1.5;
                    word-break: break-word;
                }

                .empty {
                    margin: 8px 0 0;
                    padding: 14px 20px;
                    font-size: 14px;
                    font-weight: 600;
                    color: #777;
                    background: #fff;
                    border: 2px dashed #bbb;
                    border-radius: 14px;
                }

                @keyframes slideIn {
                    from { opacity: 0; transform: translateY(-10px) scale(0.95); }
                    to { opacity: 1; transform: translateY(0) scale(1); }
                }

                @keyframes wiggle {
                    0%, 100% { transform: rotate(18deg); }
                    50% { transform: rotate(-4deg) translateY(-3px); }
                }

                @media (max-width: 560px) {
                    .tasks-page h1 { font-size: 34px; }
                    .tasks-page h1::before { right: -30px; font-size: 22px; }
                    .tasks-sections { padding-left: 38px; }
                }
            `}</style>

            <div>
                <h1>Create Your Tasks</h1>
            </div>

            <div className="tasks">
                <h3>Add your tasks and keep update about developement</h3>

                <div className="tasks-sections">
                    <div className="add-row">
                        <input
                            type="text"
                            placeholder="Add your tasks"
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && addTask()}
                        />
                        <button onClick={addTask}>Add</button>
                    </div>

                    <div className="task-list">
                        {tasks.length === 0 && (
                            <p className="empty">No tasks yet. Add your first one ✍️</p>
                        )}
                        {tasks.map((task) => (
                            <label
                                key={task.id}
                                className={`task-item ${task.done ? "done" : ""}`}
                            >
                                <input
                                    type="radio"
                                    checked={task.done}
                                    onChange={() => completeTask(task.id)}
                                />
                                <span>{task.content}</span>
                            </label>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Tasks;