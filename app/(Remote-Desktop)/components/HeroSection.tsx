
import { AiOutlineDownload, AiOutlineShoppingCart } from 'react-icons/ai'

const HeroSection = () => {
    return (
        <section className="container mx-auto my-40">
            <div className="flex flex-col justify-center items-center space-y-10">
                <div>
                    <h1 className="text-2xl md:text-8xl text-center">Access. <span className="text-green-500 block md:inline-block">Now.</span></h1>
                    <p className='max-w-md md:max-w-full text-center text-slate-500'>
                        Access any divice at any time. From anywhere. Always secure and fast.
                    </p>
                </div>
                <div className='flex flex-col space-y-5 md:space-y-0 md:flex-row md:space-x-3'>
                    <button className="flex items-center space-x-3 bg-green-500 hover:bg-green-600 transition duration-150 px-10 py-3 text-white 
                    rounded-full outline outline-2 outline-green-300">
                        <AiOutlineDownload />
                        <span>Download Now</span>
                    </button>
                    <button className="flex items-center justify-center space-x-3 border-green-500 hover:bg-green-500 hover:text-white transition duration-150 px-10 py-3 text-green-500 
                    rounded-full outline outline-2 outline-green-300">
                        <AiOutlineShoppingCart />
                        <span>Order Now</span>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default HeroSection