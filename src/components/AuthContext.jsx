import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(() => localStorage.getItem("token"));

    const login = (username, password) => {
        if (username === "gBouchard" && password === "1234") {
            const fakeToken = "logged-in"; // string no vacía
            setToken(fakeToken);
            localStorage.setItem("token", fakeToken);
            return true;
        }
        return false;
    };

    const logout = () => {
        localStorage.removeItem("token");
        setToken(null);
    };

    const isAuthenticated = Boolean(token);

    return (
        <AuthContext.Provider value={{ token, isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
