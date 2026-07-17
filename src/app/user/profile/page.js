"use client";

import { useAuth } from "@/context/AuthContext";
import { getUser } from "@/lib/auth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ProfilePage() {
    const { user, login } = useAuth();
    const router = useRouter();

    useEffect(() => {
        const user = getUser();
        login(user);
        console.log(user?.data);
    }, []);

    if (!user) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p className="text-lg">Please sign in to view your profile.</p>
            </div>
        );
    }


    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-6">

            {/* Profile Card */}
            <div className="w-full max-w-md rounded-2xl shadow-lg border p-8 text-center">
                <h1 className="text-3xl font-bold mb-6">
                    My Profile
                </h1>

                <div className="space-y-4 text-left">
                    <div>
                        <p className="text-sm text-gray-500">
                            Display Name
                        </p>
                        <p className="text-lg font-medium">
                            {user.display_name || user.name}
                        </p>
                    </div>

                    <div>
                        <p className="text-sm text-gray-500">
                            Email
                        </p>
                        <p className="text-lg font-medium">
                            {user.email}
                        </p>
                    </div>
                </div>
            </div>


            {/* Bottom Center Button */}
            <button
                onClick={() => router.push("/plans")}
                className="fixed bottom-8 px-8 py-3 rounded-xl bg-black text-white hover:bg-gray-800 transition"
            >
                View My Plans
            </button>

        </div>
    );
}