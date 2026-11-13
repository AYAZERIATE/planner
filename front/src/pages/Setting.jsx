import { useState } from "react";

function Settings() {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [saved, setSaved] = useState(false);

    function handleSubmit(event) {
        event.preventDefault();
        setPassword("");
        setSaved(true);
    }

    function handleChange(setter) {
        return (event) => {
            setter(event.target.value);
            setSaved(false);
        };
    }

    return (
        <main className="settings-page">
            <style>{`
                .settings-page {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    width: 100%;
                    min-height: 100vh;
                    padding: 40px 16px 72px;
                    text-align: center;
                    color: #111;
                    font-family: "Inter", "Segoe UI", Arial, sans-serif;
                    box-sizing: border-box;
                    background-color: #fffdf7;
                    background-image: radial-gradient(#d9d4c3 1.2px, transparent 1.2px);
                    background-size: 22px 22px;
                }

                .settings-page h1 {
                    position: relative;
                    z-index: 0;
                    display: inline-block;
                    margin: 0 0 12px;
                    font-size: 46px;
                    font-weight: 800;
                    letter-spacing: -1.5px;
                }

                .settings-page h1::after {
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

                .settings-page h1::before {
                    content: "✏️";
                    position: absolute;
                    top: -18px;
                    right: -38px;
                    font-size: 28px;
                    transform: rotate(18deg);
                    animation: wiggle 2.4s ease-in-out infinite;
                }

                .settings-description {
                    margin: 0 0 32px;
                    font-size: 15px;
                    font-weight: 600;
                    color: #777;
                }

                /* card = page de cahier */
                .settings-card {
                    position: relative;
                    width: 100%;
                    max-width: 540px;
                    padding: 28px 24px 24px 44px;
                    text-align: left;
                    background: #fffef9;
                    border: 2px solid #111;
                    border-radius: 12px;
                    box-shadow: 8px 8px 0 #111;
                    box-sizing: border-box;
                    transform: rotate(-0.6deg);
                }

                /* marge rouge dyal cahier */
                .settings-card::before {
                    content: "";
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    left: 30px;
                    width: 2px;
                    background: #ff9f9f;
                }

                .settings-card h2 {
                    margin: 0 0 22px;
                    font-size: 12px;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 3px;
                    color: #888;
                }

                .settings-form {
                    display: grid;
                    gap: 18px;
                }

                .settings-field {
                    display: grid;
                    gap: 8px;
                    font-size: 12px;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 2px;
                    color: #888;
                }

                .settings-field input {
                    width: 100%;
                    padding: 12px;
                    font: inherit;
                    font-size: 16px;
                    font-weight: 700;
                    letter-spacing: normal;
                    text-transform: none;
                    color: #111;
                    background: transparent;
                    border: none;
                    border-bottom: 2px dashed #bbb;
                    border-radius: 0;
                    box-sizing: border-box;
                    outline: none;
                    transition: border-color 0.2s ease, background 0.2s ease;
                }

                .settings-field input::placeholder {
                    font-size: 14px;
                    font-weight: 400;
                    color: #999;
                }

                .settings-field input:focus {
                    border-color: #111;
                    background: #fff8d6;
                    outline: none;
                }

                .settings-actions {
                    display: flex;
                    align-items: center;
                    gap: 16px;
                    margin-top: 8px;
                }

                .settings-save {
                    padding: 13px 32px;
                    font: inherit;
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

                .settings-save:hover {
                    background: #ffd84d;
                    transform: translate(-3px, -3px) rotate(-2deg);
                    box-shadow: 7px 7px 0 #111;
                }

                .settings-save:active {
                    transform: translate(2px, 2px);
                    box-shadow: 1px 1px 0 #111;
                }

                .settings-saved {
                    padding: 4px 14px;
                    font-size: 13px;
                    font-weight: 700;
                    color: #111;
                    background: #b8f0b0;
                    border: 2px solid #111;
                    border-radius: 999px;
                    box-shadow: 2px 2px 0 #111;
                    animation: pop 0.45s cubic-bezier(0.34, 1.56, 0.64, 1);
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
                    .settings-page h1 { font-size: 34px; }
                    .settings-page h1::before { right: -30px; font-size: 22px; }
                    .settings-card { padding: 22px 18px 22px 38px; }
                    .settings-card::before { left: 24px; }
                    .settings-actions {
                        align-items: flex-start;
                        flex-direction: column;
                    }
                }
            `}</style>

            <h1>Settings</h1>
            <p className="settings-description">Manage your profile details.</p>

            <section className="settings-card" aria-labelledby="profile-heading">
                <h2 id="profile-heading">Profile</h2>
                <form className="settings-form" onSubmit={handleSubmit}>
                    <label className="settings-field">
                        Full name
                        <input
                            type="text"
                            name="fullName"
                            autoComplete="name"
                            value={fullName}
                            onChange={handleChange(setFullName)}
                            placeholder="Your full name"
                        />
                    </label>

                    <label className="settings-field">
                        Email
                        <input
                            type="email"
                            name="email"
                            autoComplete="email"
                            value={email}
                            onChange={handleChange(setEmail)}
                            placeholder="you@example.com"
                        />
                    </label>

                    <label className="settings-field">
                        New password
                        <input
                            type="password"
                            name="password"
                            autoComplete="new-password"
                            value={password}
                            onChange={handleChange(setPassword)}
                            placeholder="Leave blank to keep your current password"
                            minLength={8}
                        />
                    </label>

                    <div className="settings-actions">
                        <button className="settings-save" type="submit">Save changes</button>
                        {saved && <span className="settings-saved" role="status">Changes saved.</span>}
                    </div>
                </form>
            </section>
        </main>
    );
}

export default Settings;