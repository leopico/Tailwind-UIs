"use client";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const Navbar = () => {
    const router = useRouter();
    const pathname = usePathname();
    const [nav, setNav] = useState(false);

    return (
        <div className="fixed w-full z-20 shadow-sm flex justify-between
                        items-center px-5 py-3 bg-slate-200 ">
            <div
                className="relative w-20 h-10 cursor-pointer"
                onClick={() => router.push("/")}
            >
                <Image
                    className="object-cover rounded-lg cursor-pointer"
                    src="/images/logo.jpg"
                    alt="logo"
                    fill
                />
            </div>
            <div className={clsx(`fixed md:static h-screen md:h-auto bg-slate-200 z-10 top-0
                                md:left-auto md:right-auto duration-500
                                w-full flex justify-center items-center`,
                nav ? 'left-0' : '-left-full'
            )}>
                <div onClick={() => setNav(!nav)}
                    className='absolute md:hidden top-3 right-3
                                        border border-green-500 w-10 h-10 flex justify-center items-center
                                        rounded-full cursor-pointer'
                >
                    <AiOutlineClose size={25} color='black' />
                </div>
                <ul className="flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-4 text-2xl md:text-sm cursor-pointer">
                    <Link
                        onClick={() => setNav(!nav)}
                        href={"/"}
                        className={clsx(
                            "hover:text-rose-500 transition-all duration-200",
                            pathname === "/" && "text-rose-500"
                        )}
                    >
                        Home
                    </Link>
                    <Link
                        onClick={() => setNav(!nav)}
                        href={"/remote-desktop"}
                        className={clsx(
                            "hover:text-rose-500 transition-all duration-200",
                            pathname === "/remote-desktop" && "text-rose-500"
                        )}
                    >
                        Remote Desktop UI
                    </Link>
                    <Link
                        onClick={() => setNav(!nav)}
                        href={"/landing-page"}
                        className={clsx(
                            "hover:text-rose-500 transition-all duration-200",
                            pathname === "/landing-page" && "text-rose-500"
                        )}
                    >
                        Landing Page UI
                    </Link>
                    <Link
                        onClick={() => setNav(!nav)}
                        href={"/blog-page"}
                        className={clsx(
                            "hover:text-rose-500 transition-all duration-200",
                            pathname === "/blog-page" && "text-rose-500"
                        )}
                    >
                        Blog Page UI
                    </Link>
                    <Link
                        onClick={() => setNav(!nav)}
                        href={"/ionic-page"}
                        className={clsx(
                            "hover:text-rose-500 transition-all duration-200",
                            pathname === "/ionic-page" && "text-rose-500"
                        )}
                    >
                        Ionic Page UI
                    </Link>
                </ul>
            </div>
            <div onClick={() => setNav(!nav)}
                className='md:hidden cursor-pointer text-slate-900
                             hover:text-white hover:bg-slate-400 rounded-full p-1' >
                <AiOutlineMenu size={25} />
            </div>
        </div>
    );
};

export default Navbar;