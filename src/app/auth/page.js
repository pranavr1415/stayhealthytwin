"use client";
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/context/AuthContext';


function Auth() {

    const router = useRouter();
    const { user, login } = useAuth();

    const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

    useEffect(()=>{
        if (user) {
            router.push('/');
        }
    }, [user]);

    const signIn = () => {
        window.location.href = `${BACKEND_URL}/api/auth/`;
    }


  return (
    <div className="min-h-screen flex items-center justify-center">
      <button
        onClick={() => signIn("google")}
        className="px-6 py-3 rounded-lg bg-white text-black border shadow hover:bg-gray-100"
      >
        Sign in with Google
      </button>
    </div>
  )
}

export default Auth