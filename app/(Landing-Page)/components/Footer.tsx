import { AiOutlineLogin } from 'react-icons/ai';

const Footer = () => {
    return (
        <footer className='bg-slate-900 pt-10 md:pt-20 pb-5 md:pb-10'>
            <div className="container mx-auto px-5">
                <div className='grid grid-cols-2 md:grid-cols-5 gap-10'>
                    <div className="text-2xl md:text-3xl font-bold col-span-2 md:col-span-1 text-slate-200">
                        IMAGINE A PLACE
                    </div>
                    <div>
                        <h4 className='font-bold mb-1 text-slate-300'>Product</h4>
                        <ul className='space-y-1 text-slate-400'>
                            <li>Download</li>
                            <li>Status</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className='font-bold mb-1 text-slate-300'>Company</h4>
                        <ul className='space-y-1 text-slate-400'>
                            <li>About</li>
                            <li>Jobs</li>
                            <li>Branding</li>
                            <li>Newsroom</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className='font-bold mb-1 text-slate-300'>Resources</h4>
                        <ul className='space-y-1 text-slate-400'>
                            <li>College</li>
                            <li>Support</li>
                            <li>Safety</li>
                            <li>Blog</li>
                            <li>Feedback</li>
                            <li>Developers</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className='font-bold mb-1 text-slate-300'>Policies</h4>
                        <ul className='space-y-1 text-slate-400'>
                            <li>Terms</li>
                            <li>Privacy</li>
                            <li>Guidelines</li>
                        </ul>
                    </div>
                </div>
                <hr className='my-5 md:my-10' />
                <div className="flex items-center justify-between">
                    <h1 className='text-2xl md:text-4xl font-bold text-slate-200'>
                        Vanilla
                    </h1>
                    <div>
                        <button className='flex items-center space-x-2
                        bg-green-500 hover:bg-green-600 px-8 py-3 rounded-full text-white mx-auto'>
                            <AiOutlineLogin />
                            <span>Sign up</span>
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer