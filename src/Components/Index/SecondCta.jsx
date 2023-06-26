import { Image } from 'Base'

const SecondCta = ({
    backgroundImage,
    image,
    items,
    title,
}) => {
    return <>
        <section class="relative bg-paydar-color2 secondCta">

            <Image
                src={backgroundImage}
                alt="background image"
                containerClass="absolute contain bottom-0 mx-auto"
                imageClass=""
            />

            <div class="max-w-7xl mx-auto px-3 xl:px-0 grid md:grid-cols-2 md:gap-5 lg:gap-10 xl:gap-20 md:items-center lg:items-end justify-center relative z-10">

                <Image
                    containerClass="w-full aspect-[600/480]"
                    imageClass=""
                    src={image}
                    alt={title}
                />

                <div class="flex flex-col gap-6 pb-7 pt-7 md:pt-20 sm:pb-20 ">
                    {
                        items?.map((item, index) => <>
                            <div class="flex gap-3 lg:gap-5 lg:gap-10 relative" key={item?.id}>
                                <div class="relative z-10 w-7 md:w-12 aspect-square self-start flex justify-center items-center rounded-full bg-paydar-color1 text-white font-bold text-sm md:text-base">
                                    {index + 1}
                                </div>
                                <div class="w-[calc(100%_-_50px)] flex flex-col gap-2 md:gap-5">
                                    <div class="text-lg md:mt-2">
                                        {item?.title}
                                    </div>
                                    <div class="text-paydar-color22  after:absolute after:left-[13px] md:after:left-[22px] after:bottom-0 after:w-[2px] after:h-[calc(100%_-_38px)]  md:after:h-[calc(100%_-_60px)] after:bg-paydar-color21">
                                        {item?.description}
                                    </div>
                                </div>
                            </div>
                        </>)
                    }
                </div>

            </div>

        </section>
    </>
}

export default SecondCta
