"use client";

import Link from "next/link";
import Image from "next/image";

import { CustomButton } from ".";

export default function Navbar() {
    const showNotAvailable = () => {
        alert("This feature now is not available");
    };

    return (
        <header className="w-full absolute z-10">
            <nav className="max-width flex justify-between items-center lg:px-16 px-6 py-4">
                <Link href="/" className="flex justify-center items-center">
                    <Image
                        src="logo.svg"
                        alt="Car Hub Logo"
                        width={118}
                        height={18}
                        className="object-contain"
                    />
                </Link>

                <CustomButton
                    title="Sign in"
                    containerStyles="text-primary-blue rounded-full bg-white min-w-[130] border border-slate-900 shadow-inner"
                    handleClick={showNotAvailable}
                />
            </nav>
        </header>
    );
}
