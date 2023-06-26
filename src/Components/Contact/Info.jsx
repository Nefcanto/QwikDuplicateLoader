const Info = ({
    description,
    items,
    title,
}) => {
    return <>
        <section class="bg-paydar-color2 contactInfo">
            <div class="max-w-7xl mx-auto px-3 xl:px-0 py-8">
                <h2 class='text-center font-bold text-3xl text-paydar-color3 mb-3'>
                    {title}
                </h2>
                <h1 class="max-w-full lg:w-[40vw] mx-auto text-paydar-color22">
                    {description}
                </h1>
                <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-rows-1 gap-6 md:gap-10 mt-10 [&:nth-child(2)]:bg-red-300  ">

                    {
                        items?.map((item, index) => <div class={`flex flex-col justify-center items-center text-center gap-5 py-32md:py-6` + (index === 1 ? " relative md:after:absolute md:after:content-[''] md:after:right-0 md:after:top-[20%] md:after:w-[1px] md:after:h-[60%] md:after:bg-paydar-color22 md:before:absolute md:before:content-[''] md:before:left-0 md:before:top-[20%] md:before:w-[1px] md:before:h-[60%] md:before:bg-paydar-color22" : '')}>
                            <div
                                dangerouslySetInnerHTML={item.svg}
                                class="w-10 h-10"
                            />
                            <span>{item.text}</span>
                        </div>)
                    }

                </div>

            </div>
        </section>
    </>
}

export default Info

