
const ClientSection = () => {
    return (
        <section>
            <div className="container mx-auto my-36">
                <div className="flex flex-col items-center text-center space-y-10 md:space-y-0
                                md:text-left md:flex-row md:justify-between ">
                    <div className="">
                        <h1 className="text-green-500 text-4xl font-bold">500+ million</h1>
                        <h6 className="text-slate-500 text-xl">Downloads</h6>
                    </div>
                    <div className="">
                        <h1 className="text-green-500 text-4xl font-bold">400+ million</h1>
                        <h6 className="text-slate-500 text-xl">Sessions per month</h6>
                    </div>
                    <div className="">
                        <h1 className="text-green-500 text-4xl font-bold">300+ million</h1>
                        <h6 className="text-slate-500 text-xl">Bridged miles per month</h6>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ClientSection