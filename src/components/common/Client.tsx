const Client = () => {

    const clientItem = [
        { imgSrc: "/logo.svg" },
        { imgSrc: "/logo1.svg" },
        { imgSrc: "/logo2.svg" },
        { imgSrc: "/logo3.svg" },
        { imgSrc: "/logo4.svg" },
        { imgSrc: "/logo5.svg" },
        { imgSrc: "/logo6.svg" },
    ]
    return (
        <section className="md:px-[4rem] px-[4rem]">
            <div className="text-center">
                <h1 className="text-4xl text-[#18191F] font-[600] pb-2 max-w-[543px] m-auto dark:text-[#4D4D4D]">Clients</h1>
                <p className="text-base text-[#717171] font-[400] pb-2">We have been working with some Fortune 500+ clients</p>
            </div>

            <div className="grid md:grid-cols-7 grid-cols-4 gap-4 py-8 justify-items-center">
                {
                    clientItem.map((item, id) => (
                        <img className="block w-[48px] h-[48px]" key={id} src={item.imgSrc} alt="client logo" />
                    ))
                }
            </div>
        </section>
    )
}

export default Client