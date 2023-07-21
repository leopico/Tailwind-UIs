import { AiOutlineArrowRight } from 'react-icons/ai'

const Hero = () => {
    return (
        <section className="py-10 md:py-20 bg-[#fbfbfd]">
            <div className="lg:container mx-auto lg:px-32">
                <div className="flex flex-col justify-center items-center space-y-6">
                    <h1 className="text-2xl sm:text-6xl text-slate-900 font-bold max-w-3xl text-center">
                        Join the global Ionic Community.
                    </h1>
                    <p className="text-slate-600 max-w-3xl text-center leading-7 text-xl">
                        Join the Ionic Community to share ideas, ask questions and build new connections.
                        Find or start a meetup, discover the latest resources from top community contributors,
                        or simply connect with other Ionic Developers.
                    </p>
                    <div>
                        <ul className="flex flex-col justify-center items-center md:flex-row space-y-7 md:space-y-0 md:space-x-7 text-xl font-bold text-blue-600 cursor-pointer">
                            <li className='flex items-center'><span>Forums</span> <AiOutlineArrowRight /></li>
                            <li className='flex items-center'><span>Meetups</span> <AiOutlineArrowRight /></li>
                            <li className='flex items-center'><span>Tutorials & Videos</span> <AiOutlineArrowRight /></li>
                            <li className='flex items-center'><span>Discord</span> <AiOutlineArrowRight /></li>
                        </ul>
                    </div>
                </div>
                <div className='md:pt-32 pt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-7 lg:gap-10'>
                    <div className='text-center'>
                        <h1 className='text-5xl font-bold text-slate-800'>5 M +</h1>
                        <p className='text-slate-500 text-2xl'>Apps created</p>
                    </div>
                    <div className='text-center'>
                        <h1 className='text-5xl font-bold text-slate-800'>30 K +</h1>
                        <p className='text-slate-500 text-2xl'>SO Questions</p>
                    </div>
                    <div className='text-center'>
                        <h1 className='text-5xl font-bold text-slate-800'>100 +</h1>
                        <p className='text-slate-500 text-2xl'>Meetups</p>
                    </div>
                    <div className='text-center'>
                        <h1 className='text-5xl font-bold text-slate-800'>5 M +</h1>
                        <p className='text-slate-500 text-2xl'>Developers</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero