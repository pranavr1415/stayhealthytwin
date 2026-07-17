"use client";
import Link from "next/link";
import Image from "next/image";
import { useAuth } from "@/context/AuthContext";

const Navbar = () => {

    const { user } = useAuth();

    return (
        <header>
            <nav>
                <Link href='/' className="logo">
                    <Image src="/icons/logo.png" alt="logo" width={24} height={24} />
                    <p>GymTwins</p>
                </Link>

                <ul>
                    <Link href='/' >Home</Link>
                    <Link href='/' >Plans</Link>
                    <Link href='/bmi/calculator' >Calculator</Link>
                    {user ? <>
                        <div>
                            <Link href={"/user/profile"}>Profile</Link>
                        </div>
                    </> :
                        <div>
                            <Link href='/' >Create Plan</Link>
                        </div>
                    }
                </ul>

                {
                    user ? <>
                        <ul>
                            <Link href={'/logout'}>Logout</Link>
                        </ul>
                    </>
                        :

                        <ul>
                            <Link href={'/auth'}>Login</Link>
                        </ul>
                }

            </nav>
        </header>
    )
}

export default Navbar