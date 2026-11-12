import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <main className="login-page">
            <style>{`
                .login-page {
                    display: grid;
                    min-height: 100vh;
                    place-items: center;
                    padding: 24px;
                    background: #f5f5f5;
                    color: #171717;
                    font-family: "Inter", "Segoe UI", Arial, sans-serif;
                }
                .login-card {
                    width: min(100%, 420px);
                    padding: 40px;
                    background: #fff;
                    border: 1px solid #e5e5e5;
                    border-radius: 16px;
                    box-shadow: 0 16px 48px rgb(0 0 0 / 8%);
                }
                .login-card h1 {
                    margin: 0 0 8px;
                    font-size: 30px;
                }
                .login-description {
                    margin: 0 0 28px;
                    color: #737373;
                    line-height: 1.5;
                }
                .login-form {
                    display: grid;
                    gap: 18px;
                }
                .login-field {
                    display: grid;
                    gap: 8px;
                    font-size: 14px;
                    font-weight: 600;
                }
                .login-field input {
                    width: 100%;
                    padding: 12px 14px;
                    border: 1px solid #d4d4d4;
                    border-radius: 8px;
                    font: inherit;
                }
                .login-field input:focus {
                    border-color: #171717;
                    outline: 2px solid rgb(23 23 23 / 12%);
                }
                .login-submit {
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
                .login-submit:hover {
                    background: #333;
                }
                .login-signup {
                    margin: 24px 0 0;
                    color: #737373;
                    text-align: center;
                    font-size: 14px;
                }
                .login-signup a {
                    color: #171717;
                    font-weight: 600;
                }
                @media (max-width: 480px) {
                    .login-card {
                        padding: 28px 22px;
                    }
                }
            `}</style>

            <section className="login-card" aria-labelledby="login-title">
                <h1 id="login-title">Welcome back</h1>
                <p className="login-description">Log in to continue to your planner.</p>

                <form className="login-form" onSubmit={handleSubmit}>
                    <label className="login-field">
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

                    <label className="login-field">
                        Password
                        <input
                            type="password"
                            name="password"
                            autoComplete="current-password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                            required
                        />
                    </label>

                    <button className="login-submit" type="submit">Log in</button>
                </form>

                <p className="login-signup">
                    Don&apos;t have an account? <Link to="/signin">Sign up</Link>
                </p>
            </section>
        </main>
    );
}

export default Login;
