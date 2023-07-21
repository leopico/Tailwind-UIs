import { AiFillTwitterCircle, AiOutlineGithub, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';
import { BiLogoFacebookCircle } from 'react-icons/bi';


const Footer = () => {
    return (
        <footer className="pt-20 md:pt-40 pb-5 md:pb-10 px-8 lg:px-32 ">
            <div className="lg:container mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-7 lg:gap-10">
                    <div className="">
                        <svg xmlns="http://www.w3.org/2000/svg" width="82" height="28" fill="none">
                            <path fill="#001A3A" d="M78.1 16.555c-.383 1.03-1.34 1.602-2.52 1.602a3.174 3.174 0 1 1 0-6.347c1.18 0 2.107.504 2.52 1.603h3.237c-.536-2.816-2.878-4.624-5.758-4.624a6.196 6.196 0 1 0 0 12.39c2.88 0 5.369-2.023 5.758-4.624H78.1ZM64.767 9.1h3.371v11.86h-3.37V9.1ZM68.477 6.234a2.035 2.035 0 1 1-4.069 0 2.035 2.035 0 0 1 4.07 0ZM55.112 10.552c.566-1.02 1.85-1.717 3.7-1.717 2.99 0 4.573 1.903 4.573 4.728v7.396h-3.37v-7.043c0-1.383-.617-2.335-2.107-2.335-1.634 0-2.539 1.001-2.539 2.58v6.788H52V9.099h3.113v1.453Z"></path>
                            <path fill="#001A3A" fill-rule="evenodd" d="M44.711 18.157a3.174 3.174 0 1 0 .001-6.347 3.174 3.174 0 0 0 0 6.347Zm0 3.021a6.195 6.195 0 1 0 0-12.388 6.196 6.196 0 1 0 0 12.388Z" clip-rule="evenodd"></path>
                            <path fill="#001A3A" d="M33.96 9.1h3.37v11.86h-3.37V9.1ZM37.67 6.234a2.035 2.035 0 1 1-4.07 0 2.035 2.035 0 0 1 4.07 0ZM3.36 14C3.36 8.124 8.124 3.36 14 3.36c2.366 0 4.55.77 6.317 2.077a4.01 4.01 0 0 1 2.547-2.274A13.948 13.948 0 0 0 14 0C6.268 0 0 6.268 0 14s6.268 14 14 14 14-6.268 14-14c0-1.618-.275-3.175-.782-4.624a3.995 3.995 0 0 1-3.008 1.618c.28.952.43 1.96.43 3.006 0 5.876-4.764 10.64-10.64 10.64S3.36 19.876 3.36 14Z"></path>
                            <path fill="#001A3A" d="M27.712 11.164a13.894 13.894 0 0 0-.494-1.788 3.995 3.995 0 0 1-3.008 1.618c.198.674.331 1.375.392 2.098a4.374 4.374 0 0 0 3.11-1.928ZM14 20.125A6.132 6.132 0 0 0 20.125 14 6.132 6.132 0 0 0 14 7.875 6.132 6.132 0 0 0 7.875 14 6.135 6.135 0 0 0 14 20.125ZM23.188 8.75a3.062 3.062 0 1 0 0-6.125 3.062 3.062 0 0 0 0 6.125Z"></path>
                        </svg>
                    </div>
                    <div className="w-full space-y-2 md:space-y-3">
                        <h1 className="text-md text-slate-900 font-semibold">
                            The Platform
                        </h1>
                        <ul className="text-slate-500 text-sm cursor-pointer space-y-2 md:space-y-3">
                            <li>Overview</li>
                            <li>Build</li>
                            <li>Secure</li>
                            <li>Deliver</li>
                            <li>Why Ionic?</li>
                        </ul>
                    </div>
                    <div className="w-full space-y-2 md:space-y-3">
                        <h1 className="text-md text-slate-900 font-semibold">
                            Products
                        </h1>
                        <ul className="text-slate-500 text-sm cursor-pointer space-y-2 md:space-y-3">
                            <li>Framework</li>
                            <li>Capacitor</li>
                            <li>Appflow</li>
                            <li>Identity Vault</li>
                            <li>Secure Storage</li>
                            <li>Auth Connect</li>
                        </ul>
                    </div>
                    <div className="w-full space-y-2 md:space-y-3">
                        <h1 className="text-md text-slate-900 font-semibold">
                            Resources
                        </h1>
                        <ul className="text-slate-500 text-sm cursor-pointer space-y-2 md:space-y-3">
                            <li>Resource Center</li>
                            <li>Blog</li>
                            <li>Articles</li>
                            <li>Webinars</li>
                            <li>Case Studies</li>
                            <li>Videos</li>
                        </ul>
                    </div>
                    <div className="w-full space-y-2 md:space-y-3">
                        <h1 className="text-md text-slate-900 font-semibold">
                            Company
                        </h1>
                        <ul className="text-slate-500 text-sm cursor-pointer space-y-2 md:space-y-3">
                            <li>About us</li>
                            <li>Customers</li>
                            <li>Brand</li>
                            <li>Contact</li>
                            <li>Careers</li>
                            <li>Privacy</li>
                        </ul>
                    </div>
                    <div className="w-full space-y-2 md:space-y-3">
                        <h1 className="text-md text-slate-900 font-semibold">
                            Support
                        </h1>
                        <ul className="text-slate-500 text-sm cursor-pointer space-y-2 md:space-y-3">
                            <li>Help Center</li>
                            <li>Partners</li>
                            <li>Advisory</li>
                            <li>Enterprise Guide</li>
                        </ul>
                    </div>
                </div>
                <hr className="mt-10 md:mt-20 mb-5 md:mb-10" />
                <div className="flex flex-col sm:flex-row justify-between items-center">
                    <div className="flex justify-start items-center space-x-2 pb-2 sm:pb-0">
                        <h6 className="text-slate-400 text-xs">© 2023 Ionic</h6>
                        <span className="text-slate-400 hover:text-slate-600 text-xs cursor-pointer font-semibold">Terms</span>
                        <span className="text-slate-400 hover:text-slate-600 text-xs cursor-pointer font-semibold">Privacy</span>
                    </div>
                    <div className="flex justify-center items-center space-x-3">
                        <div>
                            <AiFillTwitterCircle color='gray' size={20} />
                        </div>
                        <div>
                            <AiOutlineGithub color='gray' size={20} />
                        </div>
                        <div>
                            <BiLogoFacebookCircle color='gray' size={20} />
                        </div>
                        <div>
                            <AiFillLinkedin color='gray' size={20} />
                        </div>
                        <div>
                            <AiFillYoutube color='gray' size={20} />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer