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
        background-color: #fffbea;
        background-image: radial-gradient(#d8d0b0 1.2px, transparent 1.2px);
        background-size: 20px 20px;
        color: #111;
        font-family: "Inter", "Segoe UI", Arial, sans-serif;
    }
    .signup-card {
        width: min(100%, 420px);
        padding: 40px;
        background: #fff;
        border: 2px solid #111;
        border-radius: 12px;
        box-shadow: 8px 8px 0 #111;
    }
    .signup-card h1 {
        display: inline-block;
        margin: 0 0 10px;
        font-size: 30px;
        font-weight: 800;
        background: linear-gradient(transparent 60%, #ffd84d 60%);
    }
    .signup-description {
        margin: 0 0 28px;
        color: #444;
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
        font-weight: 700;
    }
    .signup-field input {
        width: 100%;
        padding: 12px 14px;
        border: 2px solid #111;
        border-radius: 8px;
        background: #fff;
        font: inherit;
    }
    .signup-field input:focus {
        outline: none;
        box-shadow: 4px 4px 0 #ffd84d;
    }
    .signup-submit {
        margin-top: 4px;
        padding: 13px 16px;
        border: 2px solid #111;
        border-radius: 8px;
        background: #ffd84d;
        color: #111;
        font: inherit;
        font-weight: 700;
        cursor: pointer;
        box-shadow: 4px 4px 0 #111;
        transition: transform 0.1s, box-shadow 0.1s;
    }
    .signup-submit:hover {
        transform: translate(-2px, -2px);
        box-shadow: 6px 6px 0 #111;
    }
    .signup-submit:active {
        transform: translate(4px, 4px);
        box-shadow: 0 0 0 #111;
    }
    .signup-login {
        margin: 24px 0 0;
        color: #444;
        text-align: center;
        font-size: 14px;
    }
    .signup-login a {
        color: #111;
        font-weight: 700;
        background: linear-gradient(transparent 60%, #ffd84d 60%);
        text-decoration: none;
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
