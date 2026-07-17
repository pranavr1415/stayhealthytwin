"use client";

import { createContext, useContext, useState, useEffect } from "react";

// Create Context
const AuthContext = createContext(null);

// Provider Component
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // Optional: Load user from localStorage when app starts
  useEffect(() => {
    const savedUser = localStorage.getItem("user");

    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  // Function to login user
  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  // Function to logout user
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  
  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// Custom Hook to use Auth Context
export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }

  return context;
}