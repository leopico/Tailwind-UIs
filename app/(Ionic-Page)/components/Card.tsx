import { AiOutlineMessage, AiOutlineArrowRight } from 'react-icons/ai';
import { GrArticle, GrPersonalComputer } from 'react-icons/gr';
import { BsArrowUpRight, BsArrowRightShort } from 'react-icons/bs'


const Card = () => {
    return (
        <section className="py-20 md:py-40 lg:container mx-auto">
            <div className="lg:px-32">
                <div className="mx-auto flex flex-col justify-center items-center space-y-10">
                    <h1 className="font-bold text-4xl text-slate-900 text-center">
                        Be in the know
                    </h1>
                    <p className="text-slate-500 text-xl max-w-lg text-center mb-5">
                        Check out these free resources to help you build, deploy, and iterate faster.
                    </p>
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7 md:gap-10 w-full px-3 lg:px-0'>
                        <div className='group p-5 cursor-pointer border-2 hover:shadow-lg rounded-3xl space-y-5'>
                            <AiOutlineMessage size={50} />
                            <h1 className='text-slate-400 text-sm pt-5 group-hover:text-cyan-500 font-semibold'>BLOG</h1>
                            <p className='font-bold text-xl text-slate-900 max-w-xs'>
                                Build your own App Router in Capacitor Apps with Vanilla Javascript
                                <AiOutlineArrowRight />
                            </p>
                        </div>
                        <div className='group p-5 cursor-pointer border-2 hover:shadow-lg rounded-3xl space-y-5'>
                            <GrPersonalComputer size={50} />
                            <h1 className='text-slate-400 text-sm pt-5 group-hover:text-cyan-500 font-semibold'>WEBINAR</h1>
                            <p className='font-bold text-xl text-slate-900 max-w-xs'>
                                Deploy mobile App to Test Devices
                                <AiOutlineArrowRight />
                            </p>
                        </div>
                        <div className='group p-5 cursor-pointer border-2 hover:shadow-lg rounded-3xl space-y-5'>
                            <GrArticle size={50} />
                            <h1 className='text-slate-400 text-sm pt-5 group-hover:text-cyan-500 font-semibold'>ARTICLE</h1>
                            <p className='font-bold text-xl text-slate-900 max-w-xs'>
                                The Benefits and Pitfalls of Continuous Delivery
                                <AiOutlineArrowRight />
                            </p>
                        </div>
                    </div>
                </div>
                <div className='pt-20 md:pt-40 px-3 lg:px-0'>
                    <div className='flex flex-col space-y-7'>
                        <div className='text-center mx-auto'>
                            <h1 className='text-4xl font-bold text-slate-900'>
                                Join the Ionic Community
                            </h1>
                            <p className='text-slate-600 leading-7 max-w-lg text-lg text-center'>
                                Connect and engage with a worldwide community of Ionic developers,
                                teachers, educators, and experts all around the world.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-5 md:gap-6 mx-auto lg:mx-0">
                            <div className='grid lg:grid-cols-2 gap-5 md:gap-6 max-w-xl'>
                                <div className='w-full border border-slate-300 rounded-3xl h-full lg:col-span-2 flex justify-center items-center'>
                                    <div className='flex flex-col w-full items-center px-5 py-10 space-y-6'>
                                        <div className='flex items-center justify-between w-full'>
                                            <h1 className='text-xl sm:text-3xl font-bold'>@ionic framework</h1>
                                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48">
                                                <path fill="#03A9F4" d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429"></path>
                                            </svg>
                                        </div>
                                        <div className='flex justify-end items-center w-full pr-3 cursor-pointer'>
                                            <span className='text-slate-700 font-semibold'>See more</span>
                                            <BsArrowUpRight size={15} />
                                        </div>
                                    </div>
                                </div>
                                <div className='cursor-pointer w-full border border-slate-300 rounded-3xl h-full flex justify-center items-center'>
                                    <div className='flex justify-center items-center space-x-1 py-6'>
                                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 48 48">
                                            <path fill="#fff" d="M41,24c0,9.4-7.6,17-17,17S7,33.4,7,24S14.6,7,24,7S41,14.6,41,24z"></path><path fill="#455a64" d="M21 41v-5.5c0-.3.2-.5.5-.5s.5.2.5.5V41h2v-6.5c0-.3.2-.5.5-.5s.5.2.5.5V41h2v-5.5c0-.3.2-.5.5-.5s.5.2.5.5V41h1.8c.2-.3.2-.6.2-1.1V36c0-2.2-1.9-5.2-4.3-5.2h-2.5c-2.3 0-4.3 3.1-4.3 5.2v3.9c0 .4.1.8.2 1.1L21 41 21 41zM40.1 26.4C40.1 26.4 40.1 26.4 40.1 26.4c0 0-1.3-.4-2.4-.4 0 0-.1 0-.1 0-1.1 0-2.9.3-2.9.3-.1 0-.1 0-.1-.1 0-.1 0-.1.1-.1.1 0 2-.3 3.1-.3 1.1 0 2.4.4 2.5.4.1 0 .1.1.1.2C40.2 26.3 40.2 26.4 40.1 26.4zM39.8 27.2C39.8 27.2 39.8 27.2 39.8 27.2c0 0-1.4-.4-2.6-.4-.9 0-3 .2-3.1.2-.1 0-.1 0-.1-.1 0-.1 0-.1.1-.1.1 0 2.2-.2 3.1-.2 1.3 0 2.6.4 2.6.4.1 0 .1.1.1.2C39.9 27.1 39.9 27.2 39.8 27.2zM7.8 26.4c-.1 0-.1 0-.1-.1 0-.1 0-.1.1-.2.8-.2 2.4-.5 3.3-.5.8 0 3.5.2 3.6.2.1 0 .1.1.1.1 0 .1-.1.1-.1.1 0 0-2.7-.2-3.5-.2C10.1 26 8.6 26.2 7.8 26.4 7.8 26.4 7.8 26.4 7.8 26.4zM8.2 27.9c0 0-.1 0-.1-.1 0-.1 0-.1 0-.2.1 0 1.4-.8 2.9-1 1.3-.2 4 .1 4.2.1.1 0 .1.1.1.1 0 .1-.1.1-.1.1 0 0 0 0 0 0 0 0-2.8-.3-4.1-.1C9.6 27.1 8.2 27.9 8.2 27.9 8.2 27.9 8.2 27.9 8.2 27.9z"></path><path fill="#455a64" d="M14.2,23.5c0-4.4,4.6-8.5,10.3-8.5c5.7,0,10.3,4,10.3,8.5S31.5,31,24.5,31S14.2,27.9,14.2,23.5z"></path><path fill="#455a64" d="M28.6 16.3c0 0 1.7-2.3 4.8-2.3 1.2 1.2.4 4.8 0 5.8L28.6 16.3zM20.4 16.3c0 0-1.7-2.3-4.8-2.3-1.2 1.2-.4 4.8 0 5.8L20.4 16.3zM20.1 35.9c0 0-2.3 0-2.8 0-1.2 0-2.3-.5-2.8-1.5-.6-1.1-1.1-2.3-2.6-3.3-.3-.2-.1-.4.4-.4.5.1 1.4.2 2.1 1.1.7.9 1.5 2 2.8 2 1.3 0 2.7 0 3.5-.9L20.1 35.9z"></path><path fill="#00bcd4" d="M24,4C13,4,4,13,4,24s9,20,20,20s20-9,20-20S35,4,24,4z M24,40c-8.8,0-16-7.2-16-16S15.2,8,24,8 s16,7.2,16,16S32.8,40,24,40z"></path>
                                        </svg>
                                        <h1 className='text-sm text-slate-500'>Start us on Github</h1>
                                    </div>
                                </div>
                                <div className='cursor-pointer w-full border border-slate-300 rounded-3xl h-full flex justify-center items-center'>
                                    <div className='flex justify-center items-center space-x-1 py-6'>
                                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 40 40">
                                            <path fill="#cfe7cb" d="M37.995,38.465c-2.113-0.165-4.481-0.831-6.779-1.917l-0.193-0.091l-0.199,0.076 c-1.694,0.645-3.485,0.972-5.324,0.972c-7.168,0-13-4.935-13-11s5.832-11,13-11s13,4.935,13,11c0,2.53-1.042,5.001-2.935,6.958 l-0.242,0.25l0.151,0.314C36.292,35.729,37.138,37.216,37.995,38.465z"></path><path fill="#5d9774" d="M25.5,16.005c6.893,0,12.5,4.71,12.5,10.5c0,2.4-0.992,4.748-2.794,6.611l-0.484,0.501 l0.302,0.628c0.641,1.333,1.3,2.537,1.968,3.602c-1.775-0.267-3.691-0.866-5.563-1.751l-0.385-0.182l-0.398,0.152 c-1.637,0.623-3.368,0.939-5.146,0.939c-6.893,0-12.5-4.71-12.5-10.5S18.607,16.005,25.5,16.005 M25.5,15.005 c-7.456,0-13.5,5.149-13.5,11.5S18.044,38,25.5,38c1.961,0,3.82-0.359,5.501-1c2.546,1.203,5.404,2.005,7.999,2.005 c-1.176-1.549-2.201-3.377-3.075-5.194C37.846,31.825,39,29.28,39,26.505C39,20.154,32.956,15.005,25.5,15.005L25.5,15.005z"></path><rect width="15" height="1" x="18" y="23" fill="#447d5a"></rect><rect width="15" height="1" x="18" y="29" fill="#447d5a"></rect><path fill="#c1e3f7" d="M2.005,24.465c0.857-1.249,1.702-2.736,2.521-4.437l0.151-0.314l-0.242-0.25 C2.542,17.506,1.5,15.035,1.5,12.505c0-6.065,5.832-11,13-11s13,4.935,13,11s-5.832,11-13,11c-1.839,0-3.63-0.327-5.323-0.972 l-0.199-0.076l-0.193,0.091C6.487,23.634,4.119,24.3,2.005,24.465z"></path><path fill="#7290bb" d="M14.5,2.005c6.893,0,12.5,4.71,12.5,10.5s-5.607,10.5-12.5,10.5c-1.778,0-3.509-0.316-5.145-0.939 l-0.398-0.152l-0.385,0.182C6.7,22.981,4.784,23.58,3.009,23.847c0.668-1.065,1.326-2.269,1.968-3.602l0.302-0.628l-0.484-0.501 C2.992,17.253,2,14.905,2,12.505C2,6.715,7.607,2.005,14.5,2.005 M14.5,1.005C7.044,1.005,1,6.154,1,12.505 c0,2.775,1.154,5.32,3.075,7.306C3.201,21.628,2.176,23.456,1,25.005c2.595,0,5.453-0.802,7.999-2.005 c1.681,0.641,3.54,1.005,5.501,1.005c7.456,0,13.5-5.149,13.5-11.5S21.956,1.005,14.5,1.005L14.5,1.005z"></path><g><rect width="15" height="1" x="7" y="9" fill="#4d76ac"></rect></g><g><rect width="15" height="1" x="7" y="15" fill="#4d76ac"></rect></g>
                                        </svg>
                                        <h1 className='text-sm text-slate-500'>Forum</h1>
                                    </div>
                                </div>
                                <div className='cursor-pointer w-full border border-slate-300 rounded-3xl h-full flex justify-center items-center'>
                                    <div className='flex justify-center items-center space-x-1 py-6'>
                                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 48 48">
                                            <path fill="#FF3D00" d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"></path><path fill="#FFF" d="M20 31L20 17 32 24z"></path>
                                        </svg>
                                        <h1 className='text-sm text-slate-500'>Watch us on Youtube</h1>
                                    </div>
                                </div>
                                <div className='cursor-pointer w-full border border-slate-300 rounded-3xl h-full flex justify-center items-center'>
                                    <div className='flex justify-center items-center space-x-1 py-6'>
                                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 48 48">
                                            <path fill="#039be5" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"></path><path fill="#fff" d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"></path>
                                        </svg>
                                        <h1 className='text-sm text-slate-500'>Like us on Facebook</h1>
                                    </div>
                                </div>
                                <div className='cursor-pointer w-full border border-slate-300 rounded-3xl h-full flex justify-center items-center'>
                                    <div className='flex justify-center items-center space-x-1 py-6'>
                                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 48 48">
                                            <path fill="#607D8B" d="M9 28H12V42H9z"></path><path fill="#607D8B" d="M9 39H35V42H9z"></path><path fill="#607D8B" d="M32 28H35V42H32zM15 34H29V37H15z"></path><path fill="#A68A6E" d="M14.88 29H28.880000000000003V32H14.88z" transform="rotate(6.142 21.88 30.5)"></path><path fill="#EF6C00" d="M29.452 11.646H43.451V14.647H29.452z" transform="rotate(81.234 36.453 13.148)"></path><path fill="#FF9800" d="M23.576 13.578H37.574V16.579H23.576z" transform="rotate(60.79 30.576 15.079)"></path><path fill="#D38B28" d="M18.395 18.275H32.393V21.276H18.395z" transform="rotate(34.765 25.396 19.777)"></path><path fill="#C09553" d="M15.977 23.499H29.976V26.5H15.977z" transform="rotate(19.785 22.978 25.003)"></path>
                                        </svg>
                                        <h1 className='text-sm text-slate-500'>Visit us on Stack Overflow</h1>
                                    </div>
                                </div>
                                <div className='cursor-pointer w-full border border-slate-300 rounded-3xl h-full flex justify-center items-center'>
                                    <div className='flex justify-center items-center space-x-1 py-6'>
                                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 64 64">
                                            <linearGradient id="ojxs_RS1~BeeBtSHUxpmva_61604_gr1" x1="39.938" x2="39.938" y1="30" y2="39" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#6dc7ff"></stop><stop offset="1" stop-color="#e6abff"></stop></linearGradient><path fill="url(#ojxs_RS1~BeeBtSHUxpmva_61604_gr1)" d="M39.938 30A3.938 4.5 0 1 0 39.938 39A3.938 4.5 0 1 0 39.938 30Z"></path><linearGradient id="ojxs_RS1~BeeBtSHUxpmvb_61604_gr2" x1="31.999" x2="31.999" y1="10.961" y2="53" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#1a6dff"></stop><stop offset="1" stop-color="#c822ff"></stop></linearGradient><path fill="url(#ojxs_RS1~BeeBtSHUxpmvb_61604_gr2)" d="M52.263,15.938c-4.816-3.871-13.024-4.925-13.372-4.968c-0.437-0.057-0.855,0.182-1.035,0.583 c-0.025,0.055-0.543,1.23-0.778,2.782C35.086,14.073,33.313,14,31.983,14c-1.373,0-3.216,0.076-5.289,0.36 c-0.233-1.564-0.757-2.753-0.782-2.808c-0.18-0.401-0.598-0.636-1.039-0.583c-0.337,0.043-8.322,1.099-13.188,5.013 C9.122,18.35,4,32.125,4,44c0,0.173,0.045,0.344,0.131,0.495c3.427,6.02,13.558,8.432,15.837,8.505c0.011,0,0.021,0,0.032,0 c0.303,0,0.591-0.138,0.781-0.375l3.495-4.368C26.519,48.703,29.098,49,32.024,49c2.911,0,5.474-0.294,7.706-0.737l3.49,4.362 C43.409,52.862,43.697,53,44,53c0.011,0,0.021,0,0.032,0c2.274-0.073,12.39-2.495,15.835-8.547c0.086-0.15,0.131-0.321,0.131-0.495 C59.999,32.105,54.877,18.349,52.263,15.938z M44.451,50.963l-2.56-3.2c5.635-1.499,8.568-3.846,8.744-3.99 c0.426-0.35,0.487-0.978,0.139-1.405c-0.349-0.426-0.978-0.49-1.406-0.143C49.309,42.273,43.365,47,32.024,47 c-11.331,0-17.322-4.719-17.394-4.776c-0.427-0.348-1.057-0.284-1.405,0.145c-0.349,0.428-0.285,1.058,0.144,1.407 c0.177,0.144,3.121,2.48,8.748,3.979l-2.567,3.209c-2.906-0.323-10.736-2.658-13.547-7.236c0.078-11.308,5.015-24.405,6.989-26.232 c3.547-2.851,9.281-4.06,11.356-4.42c0.133,0.413,0.281,0.98,0.373,1.611c-2.991,0.579-6.274,1.619-9.246,3.463 c-0.47,0.291-0.614,0.907-0.323,1.376c0.292,0.471,0.907,0.616,1.376,0.323C21.928,16.5,28.529,16,31.983,16 c3.467,0,10.089,0.5,15.49,3.85c0.164,0.102,0.346,0.15,0.526,0.15c0.334,0,0.662-0.168,0.851-0.473 c0.292-0.469,0.147-1.085-0.323-1.376c-3.043-1.888-6.417-2.931-9.473-3.502c0.093-0.618,0.239-1.171,0.369-1.576 c2.109,0.352,8.01,1.549,11.534,4.379c2.026,1.871,6.961,14.95,7.04,26.235C55.172,48.292,47.352,50.64,44.451,50.963z"></path><linearGradient id="ojxs_RS1~BeeBtSHUxpmvc_61604_gr3" x1="24" x2="24" y1="30" y2="39" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#6dc7ff"></stop><stop offset="1" stop-color="#e6abff"></stop></linearGradient><path fill="url(#ojxs_RS1~BeeBtSHUxpmvc_61604_gr3)" d="M24 30A4 4.5 0 1 0 24 39A4 4.5 0 1 0 24 30Z"></path>
                                        </svg>
                                        <h1 className='text-sm text-slate-500'>Join our Discord</h1>
                                    </div>
                                </div>
                            </div>
                            <div className='w-full border border-slate-300 rounded-3xl 
                                             max-h-60 flex justify-center items-center
                                              bg-gradient-to-r from-cyan-200 to-blue-200'
                            >
                                <div className='flex flex-col space-y-6 px-3 py-5 md:py-0'>
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 40 40">
                                        <path fill="#cfe7cb" d="M37.995,38.465c-2.113-0.165-4.481-0.831-6.779-1.917l-0.193-0.091l-0.199,0.076 c-1.694,0.645-3.485,0.972-5.324,0.972c-7.168,0-13-4.935-13-11s5.832-11,13-11s13,4.935,13,11c0,2.53-1.042,5.001-2.935,6.958 l-0.242,0.25l0.151,0.314C36.292,35.729,37.138,37.216,37.995,38.465z"></path><path fill="#5d9774" d="M25.5,16.005c6.893,0,12.5,4.71,12.5,10.5c0,2.4-0.992,4.748-2.794,6.611l-0.484,0.501 l0.302,0.628c0.641,1.333,1.3,2.537,1.968,3.602c-1.775-0.267-3.691-0.866-5.563-1.751l-0.385-0.182l-0.398,0.152 c-1.637,0.623-3.368,0.939-5.146,0.939c-6.893,0-12.5-4.71-12.5-10.5S18.607,16.005,25.5,16.005 M25.5,15.005 c-7.456,0-13.5,5.149-13.5,11.5S18.044,38,25.5,38c1.961,0,3.82-0.359,5.501-1c2.546,1.203,5.404,2.005,7.999,2.005 c-1.176-1.549-2.201-3.377-3.075-5.194C37.846,31.825,39,29.28,39,26.505C39,20.154,32.956,15.005,25.5,15.005L25.5,15.005z"></path><rect width="15" height="1" x="18" y="23" fill="#447d5a"></rect><rect width="15" height="1" x="18" y="29" fill="#447d5a"></rect><path fill="#c1e3f7" d="M2.005,24.465c0.857-1.249,1.702-2.736,2.521-4.437l0.151-0.314l-0.242-0.25 C2.542,17.506,1.5,15.035,1.5,12.505c0-6.065,5.832-11,13-11s13,4.935,13,11s-5.832,11-13,11c-1.839,0-3.63-0.327-5.323-0.972 l-0.199-0.076l-0.193,0.091C6.487,23.634,4.119,24.3,2.005,24.465z"></path><path fill="#7290bb" d="M14.5,2.005c6.893,0,12.5,4.71,12.5,10.5s-5.607,10.5-12.5,10.5c-1.778,0-3.509-0.316-5.145-0.939 l-0.398-0.152l-0.385,0.182C6.7,22.981,4.784,23.58,3.009,23.847c0.668-1.065,1.326-2.269,1.968-3.602l0.302-0.628l-0.484-0.501 C2.992,17.253,2,14.905,2,12.505C2,6.715,7.607,2.005,14.5,2.005 M14.5,1.005C7.044,1.005,1,6.154,1,12.505 c0,2.775,1.154,5.32,3.075,7.306C3.201,21.628,2.176,23.456,1,25.005c2.595,0,5.453-0.802,7.999-2.005 c1.681,0.641,3.54,1.005,5.501,1.005c7.456,0,13.5-5.149,13.5-11.5S21.956,1.005,14.5,1.005L14.5,1.005z"></path><g><rect width="15" height="1" x="7" y="9" fill="#4d76ac"></rect></g><g><rect width="15" height="1" x="7" y="15" fill="#4d76ac"></rect></g>
                                    </svg>
                                    <div className=''>
                                        <h1 className='text-slate-900 text-xl font-bold'>Ionic Blog</h1>
                                        <p className='text-slate-500'>
                                            Stay up-to-date on the latest Ionic news & announcements
                                        </p>
                                    </div>
                                    <div className='flex justify-start items-center w-full pr-3 cursor-pointer font-bold'>
                                        <span className='text-slate-700 font-semibold'>Read more</span>
                                        <BsArrowRightShort size={15} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Card