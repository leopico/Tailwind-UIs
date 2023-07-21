import Image from 'next/image'
import { BsArrowRightShort } from 'react-icons/bs'

const MeetupSection = () => {
    return (
        <section className="py-20 md:py-40 px-8 lg:px-0">
            <div className="lg:container mx-auto lg:px-32 space-y-10 md:space-y-16">
                <div className="grid md:grid-cols-2 gap-5 lg:gap-0">
                    <div className="flex flex-col items-start justify-center space-y-6 w-full">
                        <h1 className="text-3xl md:text-5xl font-bold text-slate-900 max-w-sm">Join or start an Ionic Meetup</h1>
                        <p className="text-lg text-slate-600">
                            Ionic meetups are all around the world. They’re a great way to meet
                            other Ionic developers and share ideas.Find one near you, or start
                            your own and we’ll send our starter kit and help you promote it.
                        </p>
                        <div className='flex space-x-4'>
                            <button className="flex items-center bg-slate-900 p-2 rounded-full">
                                <span className="font-semibold sm:font-bold text-xs sm:text-sm text-white">Join a meetup</span>
                                <BsArrowRightShort color="white" size={20} />
                            </button>
                            <button className="flex items-center">
                                <span className="font-semibold sm:font-bold text-xs sm:text-sm text-slate-900">Start your own</span>
                                <BsArrowRightShort color="black" size={20} />
                            </button>
                        </div>
                    </div>
                    <div className='flex justify-center items-start'>
                        <div className='relative w-52 sm:w-96 h-40 sm:h-56 rounded-xl overflow-hidden'>
                            <Image
                                alt='meet-img'
                                fill
                                src='https://ionic.io/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Fionicframeworkcom%2Fe9e4836d-a98c-4b53-97bf-774c459f07f4_ionic-io-community-meetup-0.png&w=640&q=75'
                                className='object-cover'
                            />
                        </div>
                    </div>
                </div>
                <div className='bg-gradient-to-r from-blue-200 to-cyan-200 rounded-2xl py-8 md:py-12'>
                    <div className='flex flex-col items-center justify-center space-y-10'>
                        <h1 className='text-lg md:text-4xl text-cyan-500 font-bold text-center'>Community Education</h1>
                        <p className='text-slate-600 text-sm md:text-base max-w-xl text-center px-2 md:px-0'>
                            Extend your knowledge of Ionic from
                            premium educational materials made by community members.
                        </p>
                        <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5 md:gap-7 lg:gap-10'>
                            <button className="flex items-center cursor-pointer">
                                <span className="font-bold text-slate-600 hover:text-slate-500">Ionic Academy</span>
                                <BsArrowRightShort color="black" size={20} />
                            </button>
                            <button className="flex items-center cursor-pointer">
                                <span className="font-bold text-slate-600 hover:text-slate-500">Ionic Start</span>
                                <BsArrowRightShort color="black" size={20} />
                            </button>
                            <button className="flex items-center cursor-pointer">
                                <span className="font-bold text-slate-600 hover:text-slate-500">Ionic Theme</span>
                                <BsArrowRightShort color="black" size={20} />
                            </button>
                            <button className="flex items-center cursor-pointer">
                                <span className="font-bold text-slate-600 hover:text-slate-500">Ionic React Hub</span>
                                <BsArrowRightShort color="black" size={20} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MeetupSection