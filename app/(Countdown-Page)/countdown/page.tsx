
const page = () => {
    return (
        <div className="antialiased">
            <div className="bg-home w-full min-h-screen py-12 px-8">
                <div className="md:max-w-2xl lg:max-w-3xl mx-auto">
                    <div className="flex flex-wrap justify-center gap-4">
                        <div className="bg-white bg-opacity-20 w-[6.5rem] md:w-[7.5rem] h-[6.5rem] md:h-[7.5rem] lg:w-[8.5rem] lg:h-[8.5rem] rounded-full">
                            <div className="text-white flex flex-col justify-center items-center h-full">
                                <span className="font-bold text-4xl md:text-5xl lg:text-6xl">00</span>
                                <span className="text-sm">Days</span>
                            </div>
                        </div>
                        <div className="bg-white bg-opacity-20 w-[6.5rem] md:w-[7.5rem] h-[6.5rem] md:h-[7.5rem] lg:w-[8.5rem] lg:h-[8.5rem] rounded-full">
                            <div className="text-white flex flex-col justify-center items-center h-full">
                                <span className="font-bold text-4xl md:text-5xl lg:text-6xl">00</span>
                                <span className="text-sm">Hours</span>
                            </div>
                        </div>
                        <div className="bg-white bg-opacity-20 w-[6.5rem] md:w-[7.5rem] h-[6.5rem] md:h-[7.5rem] lg:w-[8.5rem] lg:h-[8.5rem] rounded-full">
                            <div className="text-white flex flex-col justify-center items-center h-full">
                                <span className="font-bold text-4xl md:text-5xl lg:text-6xl">00</span>
                                <span className="text-sm">Minutes</span>
                            </div>
                        </div>
                        <div className="bg-white bg-opacity-20 w-[6.5rem] md:w-[7.5rem] h-[6.5rem] md:h-[7.5rem] lg:w-[8.5rem] lg:h-[8.5rem] rounded-full">
                            <div className="text-white flex flex-col justify-center items-center h-full">
                                <span className="font-bold text-4xl md:text-5xl lg:text-6xl">00</span>
                                <span className="text-sm">Seconds</span>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 text-white text-center">
                        <h1 className="font-bold text-4xl md:text-5xl">Project coming soon!</h1>
                        <p className="pt-4 text-lg md:text-xl">
                            We love to create dependable business solutions
                            for companies of all sixes and any industry.
                            Our goal is to improve accuracy and efficiency
                            to reduce operational costs.
                        </p>
                    </div>
                    <form className="mt-8 md:flex md:max-w-xl m-auto">
                        <input type="email" name="" id="email" placeholder="Email address"
                            className="px-8 h-14 rounded-full w-full
                         placeholder-gray-700 md:rounded-r-none flex-grow"
                        />
                        <button
                            type="submit"
                            className="bg-pink-800 text-white uppercase font-bold 
                        text-sm text-center w-full px-8 h-14 mt-4 md:mt-0 md:w-48 rounded-full md:rounded-l-none"
                        >
                            Sign up
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default page