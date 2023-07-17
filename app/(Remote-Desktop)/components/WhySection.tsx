
import { AiOutlineEye } from 'react-icons/ai';

const WhySection = () => {
    return (
        <section className="bg-slate-50 py-36">
            <div className="container mx-auto text-center md:text-left space-y-4">
                <h6 className="text-green-500">Remote Desktop Software</h6>
                <h1 className="text-3xl md:text-8xl">Overcoming <br /> distance</h1>
                <p className="max-w-lg mx-auto md:mx-0 text-slate-500">
                    We believe in software that enhances
                    the productivity and creativity of its users.
                    That is why it is our mission to build a product that enables
                    you to accomplish great things - from wherever in the world you are.
                </p>
                <div className='flex justify-center md:justify-start'>
                    <button className="flex items-center space-x-3 bg-green-500 hover:bg-green-600 transition duration-150  px-10 py-3 text-white 
                    rounded-full outline outline-2 outline-green-300">
                        <AiOutlineEye />
                        <span>Learn more</span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default WhySection;
