'use client'

import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const Hero = () => {
    return (
        <section className="px-3 lg:px-32 mb-14 lg:mb-24">
            <div className="container mx-auto">
                <Swiper
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    slidesPerView={1}
                    modules={[Autoplay]}
                >
                    <SwiperSlide>
                        <div className="mt-20 relative">
                            <div className="relative w-full h-56 sm:h-72 rounded-2xl overflow-hidden">
                                <Image
                                    alt="slide-img"
                                    src='https://images.unsplash.com/photo-1661961111184-11317b40adb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80'
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="absolute bottom-10 left-10">
                                <h1 className="text-sm md:text-2xl text-white mb-3">
                                    How CPTS empowers job-ready penetration testing skills in cybersecurity teams
                                </h1>
                                <div>
                                    <button className="bg-slate-700 px-2 py-1 rounded-lg text-white mr-2">
                                        10 min read
                                    </button>
                                    <span className="text-white text-sm">Oct 4, 2022</span>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="mt-20 relative">
                            <div className="relative w-full h-56 sm:h-72 rounded-2xl overflow-hidden">
                                <Image
                                    alt="slide-img"
                                    src='https://th.bing.com/th/id/R.d5cb804fbc6b95fcfc20afef02bb58e1?rik=CBF8FN08YqAcLA&pid=ImgRaw&r=0'
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="absolute bottom-10 left-10">
                                <h1 className="text-sm md:text-2xl text-white mb-3">
                                    How CPTS empowers job-ready penetration testing skills in cybersecurity teams
                                </h1>
                                <div>
                                    <button className="bg-slate-700 px-2 py-1 rounded-lg text-white mr-2">
                                        10 min read
                                    </button>
                                    <span className="text-white text-sm">Oct 4, 2022</span>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="mt-20 relative">
                            <div className="relative w-full h-56 sm:h-72 rounded-2xl overflow-hidden">
                                <Image
                                    alt="slide-img"
                                    src='https://www.bettertechtips.com/wp-content/uploads/2018/05/sites-like-unsplash-768x512.jpg'
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="absolute bottom-10 left-10">
                                <h1 className="text-sm md:text-2xl text-white mb-3">
                                    How CPTS empowers job-ready penetration testing skills in cybersecurity teams
                                </h1>
                                <div>
                                    <button className="bg-slate-700 px-2 py-1 rounded-lg text-white mr-2">
                                        10 min read
                                    </button>
                                    <span className="text-white text-sm">Oct 4, 2022</span>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    )
}

export default Hero