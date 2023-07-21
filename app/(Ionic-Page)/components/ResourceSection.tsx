import { GrPersonalComputer } from 'react-icons/gr';
import { BsArrowRightShort } from 'react-icons/bs';
import { RiArticleLine } from 'react-icons/ri';
import { MdVideoLibrary } from 'react-icons/md';
import { FaMicroblog } from 'react-icons/fa'

const ResourceSection = () => {
    return (
        <section className="bg-[#fbfbfd] py-20 md:py-40 px-8 lg:px-0 border-b">
            <div className="lg:conatiner mx-auto lg:px-32 space-y-8 md:space-y-16">
                <div className="mx-auto">
                    <h1 className="text-slate-900 text-2xl md:text-4xl font-bold text-center mb-4">Resources</h1>
                    <p className="text-center text-slate-500">
                        Resources to help you learn how to build, secure, and deliver amazing apps
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4
                 gap-3 sm:gap-5 md:gap-7 lg:gap-10">
                    <div className="w-full space-y-3">
                        <GrPersonalComputer />
                        <h1 className='text-sm text-slate-900 font-bold'>Webinars</h1>
                        <p className='text-sm text-slate-500'>
                            Live and recorded tech talks, product demos, and deep dives with industry experts.
                        </p>
                        <button className="flex items-center cursor-pointer">
                            <span className="font-bold text-sm text-slate-600 hover:text-slate-500">
                                View webiner
                            </span>
                            <BsArrowRightShort color="black" size={20} />
                        </button>
                    </div>
                    <div className="w-full space-y-3">
                        <RiArticleLine />
                        <h1 className='text-sm text-slate-900 font-bold'>Articles</h1>
                        <p className='text-sm text-slate-500'>
                            Timely perspectives on industry news, product updates, and competitive comparisons.
                        </p>
                        <button className="flex items-center cursor-pointer">
                            <span className="font-bold text-sm text-slate-600 hover:text-slate-500">
                                View articles
                            </span>
                            <BsArrowRightShort color="black" size={20} />
                        </button>
                    </div>
                    <div className="w-full space-y-3">
                        <MdVideoLibrary />
                        <h1 className='text-sm text-slate-900 font-bold'>Videos & Tutorials</h1>
                        <p className='text-sm text-slate-500'>
                            Watch recorded demos, conference talks, deep dive trainings and more. Lorem, ipsum dolor.
                        </p>
                        <button className="flex items-center cursor-pointer">
                            <span className="font-bold text-sm text-slate-600 hover:text-slate-500">
                                View videos & tutorials
                            </span>
                            <BsArrowRightShort color="black" size={20} />
                        </button>
                    </div>
                    <div className="w-full space-y-3">
                        <FaMicroblog />
                        <h1 className='text-sm text-slate-900 font-bold'>Blog</h1>
                        <p className='text-sm text-slate-500'>
                            Subscribe and stay up-to-date on the latest Ionic news & announcements.
                        </p>
                        <button className="flex items-center cursor-pointer">
                            <span className="font-bold text-sm text-slate-600 hover:text-slate-500">
                                View the blog
                            </span>
                            <BsArrowRightShort color="black" size={20} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ResourceSection