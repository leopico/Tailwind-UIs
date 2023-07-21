'use client'

import { useEffect, useState } from 'react';
import { AiOutlineArrowRight, AiOutlineMenu } from 'react-icons/ai';

const NavbarIonicPage = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        }
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    })

    return (
        <>
            <section className="relative hidden w-full lg:flex bg-[#03060b]">
                <div className="">
                    <svg height='70' width='1000' className="community_announcementBarBg__7wK8p" xmlns="http://www.w3.org/2000/svg" fill="none" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1800 72" >
                        <g clip-path="url(#bg-banner_svg__a)"><path fill="#03060B" d="M0 0h1800v72H0z"></path>
                            <g stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="0.9" opacity="0.2">
                                <path stroke="url(#bg-banner_svg__b)" d="M251.9-89.6v351"></path>
                                <path stroke="url(#bg-banner_svg__c)" d="M200.2-89.6v351"></path>
                                <path stroke="url(#bg-banner_svg__d)" d="M293.7-123.2V295"></path>
                                <path stroke="url(#bg-banner_svg__e)" d="M334.8-89.6v351"></path>
                                <path stroke="url(#bg-banner_svg__f)" d="M386.5-89.6v351"></path>
                                <path stroke="url(#bg-banner_svg__g)" d="M145.2-89.6v351" opacity="0.6">
                                </path><path stroke="url(#bg-banner_svg__h)" d="M440.1-89.6v351" opacity="0.6"></path>
                                <path stroke="url(#bg-banner_svg__i)" d="M85-89.6v351" opacity="0.3"></path>
                                <path stroke="url(#bg-banner_svg__j)" d="M500.2-89.6v351" opacity="0.3"></path>
                                <path stroke="url(#bg-banner_svg__k)" d="M609.9 44.2H-47.3"></path>
                                <path stroke="url(#bg-banner_svg__l)" d="M459.7-80.5 125.6 253.7"></path>
                                <path stroke="url(#bg-banner_svg__m)" d="m125.6-81.2 334.1 333.5"></path></g>
                            <path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="0.9" d="M292.6 352.7a266.8 266.8 0 1 0 0-533.6 266.8 266.8 0 0 0 0 533.6Z" opacity="0.1"></path>
                            <path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="0.9" d="M292.7 293a207 207 0 1 0 0-414.1 207 207 0 0 0 0 414.1Z" opacity="0.1"></path>
                            <path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="0.9" d="M292.7 232.5a146.6 146.6 0 1 0 0-293.2 146.6 146.6 0 0 0 0 293.2Z" opacity="0.1"></path>
                            <path stroke="url(#bg-banner_svg__n)" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="0.9" d="M294 125.7c22.3 0 40.4-18 40.4-40.1s-18.1-40-40.4-40c-22.4 0-40.5 17.9-40.5 40s18.1 40 40.5 40Z"></path>
                            <path stroke="url(#bg-banner_svg__o)" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="0.9" d="M294 177.8A91.9 91.9 0 1 0 294-6a91.9 91.9 0 0 0 0 183.8Z"></path>
                            <path stroke="url(#bg-banner_svg__p)" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="0.9" d="M294 155.4a69.5 69.5 0 1 0 0-139 69.5 69.5 0 0 0 0 139Z"></path>
                            <circle cx="351.5" cy="28.7" r="20.2" stroke="url(#bg-banner_svg__q)" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="0.9"></circle><g stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="0.9" opacity="0.2">
                                <path stroke="url(#bg-banner_svg__r)" d="M1502.1-96.6v351"></path><path stroke="url(#bg-banner_svg__s)" d="M1450.5-96.6v351"></path><path stroke="url(#bg-banner_svg__t)" d="M1544-130.2V288"></path><path stroke="url(#bg-banner_svg__u)" d="M1585.1-96.6v351"></path><path stroke="url(#bg-banner_svg__v)" d="M1636.8-96.6v351"></path><path stroke="url(#bg-banner_svg__w)" d="M1395.5-96.6v351" opacity="0.6"></path><path stroke="url(#bg-banner_svg__x)" d="M1690.4-96.6v351" opacity="0.6"></path><path stroke="url(#bg-banner_svg__y)" d="M1335.4-96.6v351" opacity="0.3"></path><path stroke="url(#bg-banner_svg__z)" d="M1750.5-96.6v351" opacity="0.3"></path><path stroke="url(#bg-banner_svg__A)" d="M1860.2 37.2H1203"></path><path stroke="url(#bg-banner_svg__B)" d="m1710-87.5-334.2 334.2"></path><path stroke="url(#bg-banner_svg__C)" d="M1375.8-88.2 1710 245.3"></path></g><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="0.9" d="M1542.9 345.7a266.8 266.8 0 1 0 0-533.6 266.8 266.8 0 0 0 0 533.6Z" opacity="0.1"></path><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="0.9" d="M1543 286a207 207 0 1 0 0-414.1 207 207 0 0 0 0 414.1Z" opacity="0.1"></path><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="0.9" d="M1543 225.5a146.6 146.6 0 1 0 0-293.2 146.6 146.6 0 0 0 0 293.2Z" opacity="0.1"></path></g><defs><linearGradient id="bg-banner_svg__b" x1="252.4" x2="252.4" y1="-64.2" y2="234" gradientUnits="userSpaceOnUse"><stop stop-color="#fff" stop-opacity="0"></stop><stop offset="0.3" stop-color="#fff"></stop><stop offset="0.7" stop-color="#fff"></stop><stop offset="1" stop-color="#fff" stop-opacity="0"></stop></linearGradient><linearGradient id="bg-banner_svg__c" x1="200.7" x2="200.7" y1="-64.2" y2="234" gradientUnits="userSpaceOnUse"><stop stop-color="#fff" stop-opacity="0"></stop><stop offset="0.3" stop-color="#fff"></stop><stop offset="0.7" stop-color="#fff"></stop><stop offset="1" stop-color="#fff" stop-opacity="0"></stop></linearGradient><linearGradient id="bg-banner_svg__d" x1="293.7" x2="293.7" y1="-136.1" y2="312.6" gradientUnits="userSpaceOnUse"><stop offset="0.1" stop-color="#fff" stop-opacity="0"></stop><stop offset="0.3" stop-color="#fff"></stop><stop offset="0.6" stop-color="#fff"></stop><stop offset="1" stop-color="#fff" stop-opacity="0"></stop></linearGradient><linearGradient id="bg-banner_svg__e" x1="334.8" x2="334.8" y1="-100.4" y2="276.2" gradientUnits="userSpaceOnUse"><stop offset="0.1" stop-color="#fff" stop-opacity="0"></stop><stop offset="0.3" stop-color="#fff"></stop><stop offset="0.6" stop-color="#fff"></stop><stop offset="1" stop-color="#fff" stop-opacity="0"></stop></linearGradient><linearGradient id="bg-banner_svg__f" x1="386.5" x2="386.5" y1="-100.4" y2="276.2" gradientUnits="userSpaceOnUse"><stop offset="0.1" stop-color="#fff" stop-opacity="0"></stop><stop offset="0.3" stop-color="#fff"></stop><stop offset="0.6" stop-color="#fff"></stop><stop offset="1" stop-color="#fff" stop-opacity="0"></stop></linearGradient><linearGradient id="bg-banner_svg__g" x1="145.7" x2="145.7" y1="-64.2" y2="234" gradientUnits="userSpaceOnUse"><stop stop-color="#fff" stop-opacity="0"></stop><stop offset="0.3" stop-color="#fff"></stop><stop offset="0.7" stop-color="#fff"></stop><stop offset="1" stop-color="#fff" stop-opacity="0"></stop></linearGradient><linearGradient id="bg-banner_svg__h" x1="440.6" x2="440.6" y1="-64.2" y2="234" gradientUnits="userSpaceOnUse"><stop stop-color="#fff" stop-opacity="0"></stop><stop offset="0.3" stop-color="#fff"></stop><stop offset="0.7" stop-color="#fff"></stop><stop offset="1" stop-color="#fff" stop-opacity="0"></stop></linearGradient><linearGradient id="bg-banner_svg__i" x1="85.6" x2="85.6" y1="-89.6" y2="261.4" gradientUnits="userSpaceOnUse"><stop stop-color="#fff" stop-opacity="0"></stop><stop offset="0.3" stop-color="#fff"></stop><stop offset="0.7" stop-color="#fff"></stop><stop offset="1" stop-color="#fff" stop-opacity="0"></stop></linearGradient><linearGradient id="bg-banner_svg__j" x1="500.7" x2="500.7" y1="-89.6" y2="261.4" gradientUnits="userSpaceOnUse"><stop stop-color="#fff" stop-opacity="0"></stop><stop offset="0.3" stop-color="#fff"></stop><stop offset="0.7" stop-color="#fff"></stop><stop offset="1" stop-color="#fff" stop-opacity="0"></stop></linearGradient><linearGradient id="bg-banner_svg__k" x1="-26.4" x2="615.2" y1="44.2" y2="44.2" gradientUnits="userSpaceOnUse"><stop stop-color="#fff" stop-opacity="0"></stop><stop offset="0.4" stop-color="#fff"></stop><stop offset="0.7" stop-color="#fff"></stop><stop offset="1" stop-color="#fff" stop-opacity="0"></stop></linearGradient><linearGradient id="bg-banner_svg__l" x1="125" x2="125" y1="-90.8" y2="267.8" gradientUnits="userSpaceOnUse"><stop stop-color="#fff" stop-opacity="0"></stop><stop offset="0.2" stop-color="#fff"></stop><stop offset="0.8" stop-color="#fff"></stop><stop offset="1" stop-color="#fff" stop-opacity="0"></stop></linearGradient><linearGradient id="bg-banner_svg__m" x1="151" x2="429.4" y1="-54.3" y2="222.7" gradientUnits="userSpaceOnUse"><stop stop-color="#fff" stop-opacity="0"></stop><stop offset="0.1" stop-color="#fff"></stop><stop offset="0.9" stop-color="#fff"></stop><stop offset="1" stop-color="#fff" stop-opacity="0"></stop></linearGradient><linearGradient id="bg-banner_svg__n" x1="267.8" x2="333.8" y1="49.6" y2="132.6" gradientUnits="userSpaceOnUse"><stop stop-color="#176BFF"></stop><stop offset="1" stop-color="#17F1FF"></stop></linearGradient><linearGradient id="bg-banner_svg__o" x1="234.4" x2="386" y1="3.4" y2="192.4" gradientUnits="userSpaceOnUse"><stop stop-color="#176BFF"></stop><stop offset="1" stop-color="#17F1FF"></stop></linearGradient><linearGradient id="bg-banner_svg__p" x1="248.9" x2="363.6" y1="23.5" y2="166.5" gradientUnits="userSpaceOnUse"><stop stop-color="#176BFF"></stop><stop offset="1" stop-color="#17F1FF"></stop></linearGradient><linearGradient id="bg-banner_svg__q" x1="338.4" x2="371.7" y1="10.6" y2="52.1" gradientUnits="userSpaceOnUse"><stop stop-color="#176BFF"></stop><stop offset="1" stop-color="#17F1FF"></stop></linearGradient><linearGradient id="bg-banner_svg__r" x1="1502.6" x2="1502.6" y1="-71.2" y2="227" gradientUnits="userSpaceOnUse"><stop stop-color="#fff" stop-opacity="0"></stop><stop offset="0.3" stop-color="#fff"></stop><stop offset="0.7" stop-color="#fff"></stop><stop offset="1" stop-color="#fff" stop-opacity="0"></stop></linearGradient><linearGradient id="bg-banner_svg__s" x1="1451" x2="1451" y1="-71.2" y2="227" gradientUnits="userSpaceOnUse"><stop stop-color="#fff" stop-opacity="0"></stop><stop offset="0.3" stop-color="#fff"></stop><stop offset="0.7" stop-color="#fff"></stop><stop offset="1" stop-color="#fff" stop-opacity="0"></stop></linearGradient><linearGradient id="bg-banner_svg__t" x1="1544" x2="1544" y1="-143.1" y2="305.6" gradientUnits="userSpaceOnUse"><stop offset="0.1" stop-color="#fff" stop-opacity="0"></stop><stop offset="0.3" stop-color="#fff"></stop><stop offset="0.6" stop-color="#fff"></stop><stop offset="1" stop-color="#fff" stop-opacity="0"></stop></linearGradient><linearGradient id="bg-banner_svg__u" x1="1585.1" x2="1585.1" y1="-107.4" y2="269.2" gradientUnits="userSpaceOnUse"><stop offset="0.1" stop-color="#fff" stop-opacity="0"></stop><stop offset="0.3" stop-color="#fff"></stop><stop offset="0.6" stop-color="#fff"></stop><stop offset="1" stop-color="#fff" stop-opacity="0"></stop></linearGradient><linearGradient id="bg-banner_svg__v" x1="1636.8" x2="1636.8" y1="-107.4" y2="269.2" gradientUnits="userSpaceOnUse"><stop offset="0.1" stop-color="#fff" stop-opacity="0"></stop><stop offset="0.3" stop-color="#fff"></stop><stop offset="0.6" stop-color="#fff"></stop><stop offset="1" stop-color="#fff" stop-opacity="0"></stop></linearGradient><linearGradient id="bg-banner_svg__w" x1="1396" x2="1396" y1="-71.2" y2="227" gradientUnits="userSpaceOnUse"><stop stop-color="#fff" stop-opacity="0"></stop><stop offset="0.3" stop-color="#fff"></stop><stop offset="0.7" stop-color="#fff"></stop><stop offset="1" stop-color="#fff" stop-opacity="0"></stop></linearGradient><linearGradient id="bg-banner_svg__x" x1="1690.9" x2="1690.9" y1="-71.2" y2="227" gradientUnits="userSpaceOnUse"><stop stop-color="#fff" stop-opacity="0"></stop><stop offset="0.3" stop-color="#fff"></stop><stop offset="0.7" stop-color="#fff"></stop><stop offset="1" stop-color="#fff" stop-opacity="0"></stop></linearGradient><linearGradient id="bg-banner_svg__y" x1="1335.9" x2="1335.9" y1="-96.6" y2="254.4" gradientUnits="userSpaceOnUse"><stop stop-color="#fff" stop-opacity="0"></stop><stop offset="0.3" stop-color="#fff"></stop><stop offset="0.7" stop-color="#fff"></stop><stop offset="1" stop-color="#fff" stop-opacity="0"></stop></linearGradient><linearGradient id="bg-banner_svg__z" x1="1751" x2="1751" y1="-96.6" y2="254.4" gradientUnits="userSpaceOnUse"><stop stop-color="#fff" stop-opacity="0"></stop><stop offset="0.3" stop-color="#fff"></stop><stop offset="0.7" stop-color="#fff"></stop><stop offset="1" stop-color="#fff" stop-opacity="0"></stop></linearGradient><linearGradient id="bg-banner_svg__A" x1="1223.8" x2="1865.5" y1="37.2" y2="37.2" gradientUnits="userSpaceOnUse"><stop stop-color="#fff" stop-opacity="0"></stop><stop offset="0.4" stop-color="#fff"></stop><stop offset="0.7" stop-color="#fff"></stop><stop offset="1" stop-color="#fff" stop-opacity="0"></stop></linearGradient><linearGradient id="bg-banner_svg__B" x1="1375.2" x2="1375.2" y1="-97.8" y2="260.8" gradientUnits="userSpaceOnUse"><stop stop-color="#fff" stop-opacity="0"></stop><stop offset="0.2" stop-color="#fff"></stop><stop offset="0.8" stop-color="#fff"></stop><stop offset="1" stop-color="#fff" stop-opacity="0"></stop></linearGradient><linearGradient id="bg-banner_svg__C" x1="1401.3" x2="1679.7" y1="-61.3" y2="215.7" gradientUnits="userSpaceOnUse"><stop stop-color="#fff" stop-opacity="0"></stop><stop offset="0.1" stop-color="#fff"></stop><stop offset="0.9" stop-color="#fff"></stop><stop offset="1" stop-color="#fff" stop-opacity="0"></stop></linearGradient><clipPath id="bg-banner_svg__a"><path fill="#fff" d="M0 0h1800v72H0z"></path></clipPath></defs>
                    </svg>
                </div>
                <div className="absolute top-2 left-40 ">
                    <div className="flex justify-center items-center space-x-4">
                        <div className="flex items-center">
                            <h1 className="text-5xl mr-2 text-slate-300 font-light">ioni<span className="font-bold text-white">conf</span></h1>
                            <div className="flex flex-col text-md font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
                                <span>20</span>
                                <span>23</span>
                            </div>
                        </div>
                        <div className="text-white flex items-center">
                            <span className="text-4xl font-thin mr-10 text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500"> |  </span>
                            <span className="text-sm font-bold">Join the community in Austin, TX, October10-11, 2023</span>
                        </div>
                    </div>
                </div>
            </section>
            <section className={`bg-white sticky top-16 z-10 ${isScrolled && 'shadow-xl'}`}>
                <div className="lg:container mx-auto px-6 py-5 lg:px-0">
                    <div className='flex justify-between items-center'>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="82" height="28" fill="none">
                                <path fill="#001A3A" d="M78.1 16.555c-.383 1.03-1.34 1.602-2.52 1.602a3.174 3.174 0 1 1 0-6.347c1.18 0 2.107.504 2.52 1.603h3.237c-.536-2.816-2.878-4.624-5.758-4.624a6.196 6.196 0 1 0 0 12.39c2.88 0 5.369-2.023 5.758-4.624H78.1ZM64.767 9.1h3.371v11.86h-3.37V9.1ZM68.477 6.234a2.035 2.035 0 1 1-4.069 0 2.035 2.035 0 0 1 4.07 0ZM55.112 10.552c.566-1.02 1.85-1.717 3.7-1.717 2.99 0 4.573 1.903 4.573 4.728v7.396h-3.37v-7.043c0-1.383-.617-2.335-2.107-2.335-1.634 0-2.539 1.001-2.539 2.58v6.788H52V9.099h3.113v1.453Z"></path>
                                <path fill="#001A3A" fill-rule="evenodd" d="M44.711 18.157a3.174 3.174 0 1 0 .001-6.347 3.174 3.174 0 0 0 0 6.347Zm0 3.021a6.195 6.195 0 1 0 0-12.388 6.196 6.196 0 1 0 0 12.388Z" clip-rule="evenodd"></path>
                                <path fill="#001A3A" d="M33.96 9.1h3.37v11.86h-3.37V9.1ZM37.67 6.234a2.035 2.035 0 1 1-4.07 0 2.035 2.035 0 0 1 4.07 0ZM3.36 14C3.36 8.124 8.124 3.36 14 3.36c2.366 0 4.55.77 6.317 2.077a4.01 4.01 0 0 1 2.547-2.274A13.948 13.948 0 0 0 14 0C6.268 0 0 6.268 0 14s6.268 14 14 14 14-6.268 14-14c0-1.618-.275-3.175-.782-4.624a3.995 3.995 0 0 1-3.008 1.618c.28.952.43 1.96.43 3.006 0 5.876-4.764 10.64-10.64 10.64S3.36 19.876 3.36 14Z"></path>
                                <path fill="#001A3A" d="M27.712 11.164a13.894 13.894 0 0 0-.494-1.788 3.995 3.995 0 0 1-3.008 1.618c.198.674.331 1.375.392 2.098a4.374 4.374 0 0 0 3.11-1.928ZM14 20.125A6.132 6.132 0 0 0 20.125 14 6.132 6.132 0 0 0 14 7.875 6.132 6.132 0 0 0 7.875 14 6.135 6.135 0 0 0 14 20.125ZM23.188 8.75a3.062 3.062 0 1 0 0-6.125 3.062 3.062 0 0 0 0 6.125Z"></path>
                            </svg>
                        </div>
                        <div>
                            <ul className='hidden md:flex items-center space-x-3'>
                                <li>Platform</li>
                                <li>Solutions</li>
                                <li>Resources</li>
                                <li>Developers</li>
                                <li>Blog</li>
                                <li>Pricing</li>
                            </ul>
                        </div>
                        <div className='hidden md:flex items-center'>
                            <button className='mr-2'>Sign in</button>
                            <button className='flex justify-center items-center
                             px-2 py-1 rounded-full bg-slate-900 text-sm text-white font-bold'
                            >
                                <span className='mr-2'>Get Started</span>
                                <AiOutlineArrowRight />
                            </button>
                        </div>
                        <div
                            className='md:hidden cursor-pointer border border-slate-600
                             text-slate-900 hover:bg-slate-400 rounded-full p-1' >
                            <AiOutlineMenu size={25} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default NavbarIonicPage