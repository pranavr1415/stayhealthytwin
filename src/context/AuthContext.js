"use client";

import { getUser } from "@/lib/auth";
import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";

// Create Context
const AuthContext = createContext(null);

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
const user_profile_endpoint = "/api/user/profile/"


// Provider Component
export function AuthProvider({ children }) {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);

  // Optional: Load user from localStorage when app starts
  useEffect(() => {
    const savedUser = localStorage.getItem("user");

    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);


    useEffect(() => {
      window.startLoader?.();
      const loadUser = async (authToken) => {
        try {
          const user_profile = await axios.get(
            `${BACKEND_URL}${user_profile_endpoint}`,
            {
              headers: {
                'Authorization': `Bearer ${authToken}`,
              }
            }
          );
          setUser(user_profile?.data);
        }
        catch (error) {
          console.log(error);
        }
      };
  
      getUser().then((data) => {
        console.log(`DATA: ${data}`);
        const authToken = data?.token;
        localStorage.setItem("token", authToken);
        setToken(authToken);
        
        if (authToken) {
          loadUser(authToken);
          window.stopLoader?.();
        }
      });
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
        token,
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