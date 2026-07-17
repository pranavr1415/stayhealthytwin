"use client";
import { useAuth } from '@/context/AuthContext'
import { getUser } from '@/lib/auth';
import React, { useEffect } from 'react'

export default function Success() {
    const { login } = useAuth();
    useEffect(() => {
        const user = getUser();
        login(user);
    },[]);
    return (
    <div>Logged in Sucessfully!</div>
  )
}
