import Image from "next/image"

const page = () => {
    return (
        <div className=" antialiased bg-gray-100 min-h-screen text-gray-800 px-2 md:px-0">
            <div className="container mx-auto relative flex flex-col space-y-8">
                <div className="absolute h-full w-2 bg-white shadow-md inset-0 left-11 md:mx-auto md:right-0 md:left-0">
                </div>
                <div>
                    <div className="relative w-24 h-24 sm:absolute md:mx-auto md:left-0 md:right-0">
                        <Image
                            fill
                            alt="img-1"
                            className="object-cover rounded-full border-4 border-white"
                            src="https://images.pexels.com/photos/15724460/pexels-photo-15724460/free-photo-of-black-and-white-photo-of-a-crouching-woman.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        />
                    </div>
                    <div className="relative pt-2 sm:pt-0 sm:pl-28 md:w-1/2 md:ml-auto md:pl-16">
                        <div className="absolute inset-0 left-10 sm:top-11 sm:left-26 md:left-14 h-4 w-4
                         transform rotate-45 bg-white"
                            aria-hidden="true">
                        </div>
                        <div className="bg-white p-6 rounded-md shadow-md">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam,
                            earum?Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Dolores dicta distinctio quasi voluptas, blanditiis ex quibusdam
                            modi consequuntur in quidem?
                        </div>
                    </div>
                </div>
                <div>
                    <div className="relative w-24 h-24 sm:absolute md:mx-auto md:left-0 md:right-0">
                        <Image
                            fill
                            alt="img-1"
                            className="object-cover rounded-full border-4 border-white"
                            src="https://images.pexels.com/photos/610294/pexels-photo-610294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        />
                    </div>
                    <div className="relative pt-2 sm:pt-0 sm:pl-28 md:w-1/2 md:pl-0 md:mr-auto md:pr-16">
                        <div className="absolute inset-0 left-10 sm:top-11 sm:left-26 md:left-auto md:right-14 h-4 w-4
                         transform rotate-45 bg-white"
                            aria-hidden="true">
                        </div>
                        <div className="bg-white p-6 rounded-md shadow-md">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam,
                            earum?Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Dolores dicta distinctio quasi voluptas, blanditiis ex quibusdam
                            modi consequuntur in quidem?
                        </div>
                    </div>
                </div>
                <div>
                    <div className="relative w-24 h-24 sm:absolute md:mx-auto md:left-0 md:right-0">
                        <Image
                            fill
                            alt="img-1"
                            className="object-cover rounded-full border-4 border-white"
                            src="https://images.pexels.com/photos/2681751/pexels-photo-2681751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        />
                    </div>
                    <div className="relative pt-2 sm:pt-0 sm:pl-28 md:w-1/2 md:ml-auto md:pl-16">
                        <div className="absolute inset-0 left-10 sm:top-11 sm:left-26 md:left-14 h-4 w-4
                         transform rotate-45 bg-white"
                            aria-hidden="true">
                        </div>
                        <div className="bg-white p-6 rounded-md shadow-md">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam,
                            earum?Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Dolores dicta distinctio quasi voluptas, blanditiis ex quibusdam
                            modi consequuntur in quidem?
                        </div>
                    </div>
                </div>
                <div>
                    <div className="relative w-24 h-24 sm:absolute md:mx-auto md:left-0 md:right-0">
                        <Image
                            fill
                            alt="img-1"
                            className="object-cover rounded-full border-4 border-white"
                            src="https://images.pexels.com/photos/413885/pexels-photo-413885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        />
                    </div>
                    <div className="relative pt-2 sm:pt-0 sm:pl-28 md:w-1/2 md:pl-0 md:mr-auto md:pr-16">
                        <div className="absolute inset-0 left-10 sm:top-11 sm:left-26 md:left-auto md:right-14 h-4 w-4
                         transform rotate-45 bg-white"
                            aria-hidden="true">
                        </div>
                        <div className="bg-white p-6 rounded-md shadow-md">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam,
                            earum?Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Dolores dicta distinctio quasi voluptas, blanditiis ex quibusdam
                            modi consequuntur in quidem?
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page