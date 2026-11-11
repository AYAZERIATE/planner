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
        // 1) radio kayt-check w la carte kat-bda t-fade
        setTasks((prev) =>
            prev.map((t) => (t.id === id ? { ...t, done: true } : t))
        );
        // 2) mn b3d chwiya, task katmchi
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
                    padding: 24px 0 64px;
                    text-align: center;
                    font-family: "Inter", "Segoe UI", Arial, sans-serif;
                    color: #111;
                }

                .tasks-page h1 {
                    position: relative;
                    z-index: 0;
                    display: inline-block;
                    margin: 0 0 12px;
                    font-size: 40px;
                    font-weight: 800;
                    letter-spacing: -1px;
                }

                .tasks-page h1::after {
                    content: "";
                    position: absolute;
                    left: -6px;
                    right: -6px;
                    bottom: 4px;
                    height: 14px;
                    background: #d9f5d6;
                    border-radius: 4px;
                    transform: rotate(-1deg);
                    z-index: -1;
                }

                .tasks {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 20px;
                    width: 100%;
                }

                .tasks h3 {
                    margin: 0;
                    font-size: 15px;
                    font-weight: 400;
                    color: #777;
                }

                .tasks-sections {
                    display: flex;
                    flex-direction: column;
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

                .add-row {
                    display: flex;
                    gap: 10px;
                }

                .add-row input {
                    flex: 1;
                    padding: 12px;
                    font-family: inherit;
                    font-size: 14px;
                    color: #111;
                    background: #fafafa;
                    border: 1px solid #e5e5e5;
                    border-radius: 8px;
                    transition: border-color 0.2s ease, background 0.2s ease;
                }

                .add-row input:focus {
                    outline: none;
                    background: #fff;
                    border-color: #111;
                }

                .add-row button {
                    padding: 0 24px;
                    font-size: 14px;
                    font-weight: 700;
                    color: #fff;
                    background: #111;
                    border: none;
                    border-radius: 8px;
                    cursor: pointer;
                    transition: background 0.2s ease, transform 0.2s ease;
                }

                .add-row button:hover {
                    background: #333;
                    transform: translateY(-2px);
                }

                .task-list {
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                    margin-top: 8px;
                }

                .task-item {
                    display: flex;
                    align-items: center;
                    gap: 14px;
                    padding: 14px 16px;
                    text-align: left;
                    font-size: 14px;
                    background: #fff;
                    border: 1px solid #e5e5e5;
                    border-radius: 10px;
                    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.06);
                    animation: slideIn 0.3s ease;
                    transition: opacity 0.4s ease, transform 0.4s ease, background 0.2s ease;
                }

                .task-item:hover { background: #fafafa; }

                .task-item.done {
                    opacity: 0;
                    transform: translateX(40px);
                }

                .task-item.done span {
                    text-decoration: line-through;
                    color: #999;
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
                    font-size: 14px;
                    color: #999;
                }

                @keyframes slideIn {
                    from { opacity: 0; transform: translateY(-10px); }
                    to { opacity: 1; transform: translateY(0); }
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
                            <p className="empty">No tasks yet. Add your first one.</p>
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