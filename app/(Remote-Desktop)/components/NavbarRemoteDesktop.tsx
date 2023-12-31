'use client'

import clsx from 'clsx';
import { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const NavbarRemoteDesktop = () => {
    const [nav, setNav] = useState(false);
    return (
        <div className="bg-[#10182b] py-3 px-2 md:px-0 sticky top-16 z-10">
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    <div>
                        <svg width="162" height="47" viewBox="0 0 162 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M65.344 36L56.032 13.28H61.568L67.616 28.416L73.632 13.28H79.232L69.92 36H65.344ZM85.073 36.352C83.0037 36.352 81.2437 35.5307 79.793 33.888C78.3637 32.2453 77.649 30.2827 77.649 28C77.649 25.7173 78.3637 23.7547 79.793 22.112C81.2437 20.4693 83.0037 19.648 85.073 19.648C86.9077 19.648 88.3583 20.2987 89.425 21.6V20H94.257V36H89.425V34.4C88.3583 35.7013 86.9077 36.352 85.073 36.352ZM83.505 30.848C84.1877 31.5947 85.073 31.968 86.161 31.968C87.249 31.968 88.1237 31.5947 88.785 30.848C89.4677 30.1013 89.809 29.152 89.809 28C89.809 26.848 89.4677 25.8987 88.785 25.152C88.1237 24.4053 87.249 24.032 86.161 24.032C85.073 24.032 84.1877 24.4053 83.505 25.152C82.8437 25.8987 82.513 26.848 82.513 28C82.513 29.152 82.8437 30.1013 83.505 30.848ZM98.234 36V20H103.066V21.632C103.983 20.3093 105.466 19.648 107.514 19.648C109.455 19.648 110.97 20.2987 112.058 21.6C113.167 22.9013 113.722 24.6187 113.722 26.752V36H108.89V27.584C108.89 25.216 108.026 24.032 106.298 24.032C105.338 24.032 104.559 24.384 103.962 25.088C103.365 25.792 103.066 26.8373 103.066 28.224V36H98.234ZM119.884 17.824C119.073 17.824 118.369 17.536 117.772 16.96C117.175 16.3627 116.876 15.648 116.876 14.816C116.876 13.984 117.175 13.28 117.772 12.704C118.369 12.1067 119.073 11.808 119.884 11.808C120.737 11.808 121.452 12.1067 122.028 12.704C122.625 13.28 122.924 13.984 122.924 14.816C122.924 15.648 122.625 16.3627 122.028 16.96C121.452 17.536 120.737 17.824 119.884 17.824ZM117.484 36V20H122.316V36H117.484ZM126.297 36V12H131.129V36H126.297ZM135.109 36V12H139.941V36H135.109ZM150.385 36.352C148.316 36.352 146.556 35.5307 145.106 33.888C143.676 32.2453 142.962 30.2827 142.962 28C142.962 25.7173 143.676 23.7547 145.106 22.112C146.556 20.4693 148.316 19.648 150.385 19.648C152.22 19.648 153.671 20.2987 154.738 21.6V20H159.569V36H154.738V34.4C153.671 35.7013 152.22 36.352 150.385 36.352ZM148.818 30.848C149.5 31.5947 150.386 31.968 151.474 31.968C152.562 31.968 153.436 31.5947 154.098 30.848C154.78 30.1013 155.122 29.152 155.122 28C155.122 26.848 154.78 25.8987 154.098 25.152C153.436 24.4053 152.562 24.032 151.474 24.032C150.386 24.032 149.5 24.4053 148.818 25.152C148.156 25.8987 147.826 26.848 147.826 28C147.826 29.152 148.156 30.1013 148.818 30.848Z" fill="#61C454" />
                            <path d="M41 23.1148C41 33.1427 32.9177 41.2295 23 41.2295C13.0823 41.2295 5 33.1427 5 23.1148C5 13.0868 13.0823 5 23 5C32.9177 5 41 13.0868 41 23.1148Z" stroke="#61C454" stroke-width="10" />
                            <path d="M43.5 35.4426C43.5 40.4566 39.4588 44.5 34.5 44.5C29.5412 44.5 25.5 40.4566 25.5 35.4426C25.5 30.4286 29.5412 26.3853 34.5 26.3853C39.4588 26.3853 43.5 30.4286 43.5 35.4426Z" fill="#FEFEFE" stroke="#61C454" stroke-width="5" />
                        </svg>
                    </div>
                    <div className={clsx(`fixed md:static h-screen md:h-auto z-10 top-0
                                         md:left-auto md:right-auto duration-500
                                        bg-slate-300 md:bg-[#10182b] w-full flex justify-center items-center`,
                        nav ? 'left-0' : '-left-full'
                    )}>
                        <div onClick={() => setNav(!nav)}
                            className='absolute md:hidden top-24 right-3
                                        border border-green-500 w-10 h-10 
                                        flex justify-center items-center
                                        rounded-full cursor-pointer'
                        >
                            <AiOutlineClose size={25} color='black' />
                        </div>
                        <ul className={clsx(`flex flex-col  md:flex-row 
                                            md:space-x-3 space-y-10 md:space-y-0 text-2xl md:text-base`,
                            nav ? 'text-slate-900' : 'text-white'

                        )}>
                            <li>Home</li>
                            <li>Why?</li>
                            <li>Featurs</li>
                            <li>Clients</li>
                        </ul>
                    </div>
                    <div className='flex items-center space-x-3'>
                        <div className="relative cursor-pointer">
                            <input type="checkbox" id="toggleB" className="sr-only" />
                            <div className="block bg-gray-400 w-12 h-6 rounded-full"></div>
                            <div
                                className="absolute left-1 top-0.5 bg-white 
                                        w-5 h-5 rounded-full transition"
                            ></div>
                        </div>
                        <div onClick={() => setNav(!nav)}
                            className='md:hidden cursor-pointer border border-slate-600
                             text-white hover:bg-slate-400 rounded-full p-1' >
                            <AiOutlineMenu size={25} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavbarRemoteDesktop