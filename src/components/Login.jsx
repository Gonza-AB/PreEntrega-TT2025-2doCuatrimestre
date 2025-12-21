import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "./AuthContext";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const { login } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");

        const ok = login(username, password);
        if (ok) {
            navigate(from, { replace: true });
            } else {
                setError("Usuario o contraseña incorrectos");
            }
        };

    return (
        <div className="container mt-4" style={{ maxWidth: 420 }}>
        <h2>Login</h2>

        {error && <div className="alert alert-danger">{error}</div>}

        <form onSubmit={handleSubmit}>
        <div className="mb-2">
            <label className="form-label">Usuario</label>
            <input
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            aria-label="Usuario"
            />
        </div>

        <div className="mb-2">
            <label className="form-label">Contraseña</label>
            <input
            className="form-control"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            aria-label="Contraseña"
            />
        </div>

        <button className="btn btn-primary w-100" type="submit">
            Ingresar
        </button>
        </form>
        </div>
    );
};

export default Login;
