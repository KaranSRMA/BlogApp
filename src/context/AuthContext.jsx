import React, { createContext, useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

// Create the AuthContext
const AuthContext = createContext();

// AuthProvider component to wrap around the application
export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // Function to verify JWT token on app load
    useEffect(() => {
        async function verifyJWT() {
            const token = localStorage.getItem("jwt");
            if (token) {
                try {
                    await axios.get(`${import.meta.env.VITE_API_URL}/users/me`, {
                        headers: { Authorization: `Bearer ${token}` }
                    });
                    setIsAuthenticated(true);
                } catch (error) {
                    console.error("Invalid JWT token", error);
                    localStorage.removeItem("jwt");
                    setIsAuthenticated(false);
                    navigate("/login");
                }
            }
        }
        verifyJWT();
    }, [navigate]);

    // ✅ Fixed login function
    const login = (token) => {
        if (token) {
            localStorage.setItem('jwt', token); // ✅ Store correct token
            setIsAuthenticated(true);
            navigate("/");
        }
    };

    // Logout function
    const logout = () => {
        localStorage.removeItem('jwt');
        setIsAuthenticated(false);
        navigate("/login");
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// Custom hook to use the AuthContext
export const useAuth = () => useContext(AuthContext);
