import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const Login=()=>{
    const {login}= useAuth();
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

const handleSubmit = e =>{
    e.preventDefault();
    const success = login (username,password);
    if (success)
    {
        navigate('/dashboard')
    }
    else
    {
        setError('usuario incorrecto')
    }
};

return (
    <div className="container mt-5">
        <h2>Iniciar Sesion</h2>
        <form onSubmit={handleSubmit} className="mt-3">
            <div className="mb-3">
                <label className="form-label">Usuario</label>
                <input 
                type="text"
                className="form-control" 
                value={username} 
                onChange={e => setUsername(e.target.value)}
                />
                <label className="form-label">Contraseña</label>
                <input 
                type="password"
                className="form-control"
                value={password}
                onChange={e => setPassword(e.target.value)}
                />
            </div>
            <button type="submit" className="btn btn-primary">Ingresar</button>
            {error && <div className="alert alert-danger mt-3">{error}</div>}
        </form>
    </div>
);
}

export default Login;
