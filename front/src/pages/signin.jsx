import { useState } from "react";
import { Link } from "react-router-dom";

function Signin() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <main className="signup-page">
            <style>{`
                .signup-page {
                    display: grid;
                    min-height: 100vh;
                    place-items: center;
                    padding: 24px;
                    background: #f5f5f5;
                    color: #171717;
                    font-family: "Inter", "Segoe UI", Arial, sans-serif;
                }
                .signup-card {
                    width: min(100%, 420px);
                    padding: 40px;
                    background: #fff;
                    border: 1px solid #e5e5e5;
                    border-radius: 16px;
                    box-shadow: 0 16px 48px rgb(0 0 0 / 8%);
                }
                .signup-card h1 {
                    margin: 0 0 8px;
                    font-size: 30px;
                }
                .signup-description {
                    margin: 0 0 28px;
                    color: #737373;
                    line-height: 1.5;
                }
                .signup-form {
                    display: grid;
                    gap: 18px;
                }
                .signup-field {
                    display: grid;
                    gap: 8px;
                    font-size: 14px;
                    font-weight: 600;
                }
                .signup-field input {
                    width: 100%;
                    padding: 12px 14px;
                    border: 1px solid #d4d4d4;
                    border-radius: 8px;
                    font: inherit;
                }
                .signup-field input:focus {
                    border-color: #171717;
                    outline: 2px solid rgb(23 23 23 / 12%);
                }
                .signup-submit {
                    margin-top: 4px;
                    padding: 13px 16px;
                    border: 1px solid #111;
                    border-radius: 8px;
                    background: #111;
                    color: #fff;
                    font: inherit;
                    font-weight: 600;
                    cursor: pointer;
                }
                .signup-submit:hover {
                    background: #333;
                }
                .signup-login {
                    margin: 24px 0 0;
                    color: #737373;
                    text-align: center;
                    font-size: 14px;
                }
                .signup-login a {
                    color: #171717;
                    font-weight: 600;
                }
                @media (max-width: 480px) {
                    .signup-card {
                        padding: 28px 22px;
                    }
                }
            `}</style>

            <section className="signup-card" aria-labelledby="signup-title">
                <h1 id="signup-title">Create your account</h1>
                <p className="signup-description">Sign up to start planning your goals.</p>

                <form className="signup-form" onSubmit={handleSubmit}>
                    <label className="signup-field">
                        Name
                        <input
                            type="text"
                            name="name"
                            autoComplete="name"
                            placeholder="Your name"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                            required
                        />
                    </label>

                    <label className="signup-field">
                        Email
                        <input
                            type="email"
                            name="email"
                            autoComplete="email"
                            placeholder="you@example.com"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            required
                        />
                    </label>

                    <label className="signup-field">
                        Password
                        <input
                            type="password"
                            name="password"
                            autoComplete="new-password"
                            placeholder="Create a password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                            minLength={8}
                            required
                        />
                    </label>

                    <button className="signup-submit" type="submit">Create account</button>
                </form>

                <p className="signup-login">
                    Already have an account? <Link to="/login">Log in</Link>
                </p>
            </section>
        </main>
    );
}

export default Signin;
