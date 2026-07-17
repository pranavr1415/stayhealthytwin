import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
        <header>
            <nav>
                <Link href='/' className="logo">
                    <Image src="/icons/logo.png" alt="logo" width={24} height={24} />

                    <p>GymTwins</p>
                </Link>

                <ul>
                    <Link href ='/' >Home</Link>
                    <Link href ='/' >Plans</Link>
                    <Link href ='/' >CreatePlan</Link>
                </ul>


            </nav>
        </header>
  )
}

export default Navbar