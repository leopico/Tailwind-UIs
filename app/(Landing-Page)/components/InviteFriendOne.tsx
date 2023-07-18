import { AiOutlinePoweroff } from 'react-icons/ai'

const InviteFriendOne = () => {
    return (
        <section className='my-20 md:my-40'>
            <div className='container mx-auto'>
                <div className='space-y-10 px-2 sm:px-5 grid md:grid-cols-2 items-center md:space-x-10'>
                    {/* Card Chat */}
                    <div className="shadow-lg rounded-3xl p-3 md:p-5">
                        <h1 className='text-3xl font-bold mb-3'>Chats</h1>
                        <div className='space-y-3'>
                            <div className='flex items-center space-x-3 border rounded-2xl p-2'>
                                <div className="bg-green-500 w-10 h-10
                         flex justify-center items-center rounded-full text-white">
                                    <AiOutlinePoweroff size={25} />
                                </div>
                                <div>
                                    <h3 className='font-bold'>#tailwindcss</h3>
                                    <h6 className='text-green-500 text-sm sm:text-base'>Nway Oo: Thanks for everything</h6>
                                </div>
                            </div>
                            <div className='flex items-center space-x-3 border rounded-2xl p-2'>
                                <div className="bg-green-500 w-10 h-10
                         flex justify-center items-center rounded-full text-white">
                                    <AiOutlinePoweroff size={25} />
                                </div>
                                <div>
                                    <h3 className='font-bold'>React</h3>
                                    <h6 className='text-green-500 text-sm sm:text-base'>Nway Oo: Thanks.</h6>
                                </div>
                            </div>
                            <div className='flex items-center space-x-3 border bg-slate-300 rounded-2xl p-2'>
                                <div className="bg-green-500 w-10 h-10
                         flex justify-center items-center rounded-full text-white">
                                    <AiOutlinePoweroff size={25} />
                                </div>
                                <div className=''>
                                    <h3 className='font-bold'>Bootstrap</h3>
                                    <h6 className='text-green-500 text-sm sm:text-base'>Nway Oo: Responsive First</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Card Content */}
                    <div className='text-center md:text-left'>
                        <h1 className='text-md md:text-3xl'>Create an invite-only place where you belong</h1>
                        <p className='text-slate-500 text-sm md:text-base'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil quod accusantium hic culpa!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default InviteFriendOne