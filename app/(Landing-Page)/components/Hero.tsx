import { AiOutlineDownload, AiOutlineShoppingCart } from 'react-icons/ai'

const Hero = () => {
    return (
        <section className='bg-green-400 py-20 md:py-40'>
            <div className="p-5 md:p-0">
                <h1 className='text-xl sm:text-4xl font-bold md:text-center mb-5 text-slate-100'>IMAGINE A PLACE</h1>
                <p className='text-slate-100 mb-10 max-w-xl text-justify md:mx-auto'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Et impedit obcaecati sapiente maiores alias sint nam cupiditate repellat eligendi. Aperiam,
                    unde. Porro dicta a fugit consectetur iusto harum odio numquam!
                </p>
                <div className="md:flex md:justify-center md:items-center space-x-3">
                    <button className='flex items-center space-x-2
                     bg-slate-100 hover:bg-slate-200 px-8 py-3 rounded-full text-green-500'>
                        <AiOutlineDownload />
                        <span>Download now</span>
                    </button>
                    <button className='hidden md:flex items-center space-x-2
                     bg-slate-900 hover:bg-slate-800 px-8 py-3 rounded-full text-white'>
                        <AiOutlineShoppingCart />
                        <span>Order now</span>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Hero