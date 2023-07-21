import Image from "next/image";
import { BsArrowRightShort } from 'react-icons/bs';

const Developer = () => {
    return (
        <section className="py-20 md:py-40 bg-[#fbfbfd]">
            <div className="flex flex-col items-center justify-center space-y-4 md:space-y-8">
                <div className="relative w-24 h-24">
                    <Image
                        alt="dev-img"
                        fill
                        src='https://ionic.io/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Fionicframeworkcom%2F75997140-cbdf-4ae6-96c3-42880788dc2b_Group%2B506.png&w=96&q=75'
                        className="object-cover"
                    />
                </div>
                <h1 className="text-2xl md:text-4xl text-slate-900 font-semibold">
                    Ionic Developer Experts
                </h1>
                <p className="text-md md:text-lg text-slate-500 max-w-2xl text-center">
                    Our community of Ionic Developer Experts are at the forefront of
                    mobile app development, pushing boundaries and pioneering
                    new techniques to create innovative and cutting-edge applications.
                </p>
                <p className="text-md md:text-lg text-slate-500 max-w-2xl text-center">
                    As an IDE, gain early access to new features from Ionic,
                    help shape future products & features, receive exclusive swag, and so much more.
                </p>
                <button className="flex items-center bg-slate-900 p-2 rounded-full">
                    <span className="font-bold text-white mr-2">learn more</span>
                    <BsArrowRightShort color="white" size={20} />
                </button>
            </div>
        </section>
    )
}

export default Developer