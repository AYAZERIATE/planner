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
                    width: min(100%, 760px);
                    margin: 0 auto;
                    padding: 24px 0;
                    color: #171717;
                    font-family: "Inter", "Segoe UI", Arial, sans-serif;
                }
                .settings-page h1 {
                    margin: 0 0 8px;
                    font-size: 32px;
                }
                .settings-description {
                    margin: 0 0 28px;
                    color: #737373;
                }
                .settings-card {
                    padding: 28px;
                    border: 1px solid #e5e5e5;
                    border-radius: 12px;
                    background: #fff;
                }
                .settings-card h2 {
                    margin: 0 0 22px;
                    font-size: 19px;
                }
                .settings-form {
                    display: grid;
                    gap: 18px;
                }
                .settings-field {
                    display: grid;
                    gap: 8px;
                    font-size: 14px;
                    font-weight: 600;
                }
                .settings-field input {
                    width: 100%;
                    padding: 12px 14px;
                    border: 1px solid #d4d4d4;
                    border-radius: 8px;
                    font: inherit;
                }
                .settings-field input:focus {
                    border-color: #171717;
                    outline: 2px solid rgb(23 23 23 / 12%);
                }
                .settings-actions {
                    display: flex;
                    align-items: center;
                    gap: 16px;
                    margin-top: 4px;
                }
                .settings-save {
                    padding: 12px 18px;
                    border: 1px solid #111;
                    border-radius: 8px;
                    background: #111;
                    color: #fff;
                    font: inherit;
                    font-weight: 600;
                    cursor: pointer;
                }
                .settings-save:hover {
                    background: #333;
                }
                .settings-saved {
                    color: #26733a;
                    font-size: 14px;
                }
                @media (max-width: 560px) {
                    .settings-page {
                        padding: 8px 0;
                    }
                    .settings-card {
                        padding: 22px 18px;
                    }
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
