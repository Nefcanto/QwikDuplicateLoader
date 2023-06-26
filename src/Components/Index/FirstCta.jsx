import { Image } from 'Base'
const FirstCta = ({
    backgroundImage,
    ctaLink,
    ctaText,
    description,
    firstBubble,
    image,
    secondBubble,
    title,
}) => {
    return <>
        <section class="relative bg-paydar-color2 bg-cover firstCta">

            <Image
                containerClass="absolute contain bottom-0 mx-auto"
                imageClass=""
                src={backgroundImage}
                alt="background image"
            />
            <div class="max-w-7xl mx-auto px-3 xl:px-0 py-7 sm:py-20 flex flex-col-reverse md:grid md:grid-cols-2 gap-5 md:gap-10 lg:gap-20 items-center justify-center relative z-10 mb-6 md:mb-0">

                <div class="flex flex-col gap-5 md:gap-5">
                    <h3 class="text-paydar-color3 text-[1.2rem] leading-[1.5rem] sm:text-[1.5rem] sm:leading-[1.75rem] md:text-[2rem] md:leading-[2.5rem] font-bold capitalize">
                        {title}
                    </h3>
                    <h4 class="text-paydar-color22">
                        {description}
                    </h4>

                    <a
                        href={ctaLink}
                        class="text-paydar-color1 hover:text-paydar-color3 transition-all"
                        title={ctaText}
                    >
                        {ctaText}
                    </a>

                </div>

                <div class="relative flex items-center justify-center">

                    <Image
                        containerClass="w-full aspect-[3/2]"
                        imageClass=""
                        src={image}
                        alt={title}
                    />

                    <div class="hidden xs:block absolute w-1/2 top-[15%] left-0 text-paydar-color22">
                        <span class="text-xs sm:text-base w-auto bg-white rounded-md sm:rounded-full float-right shadow-xl px-3 md:px-5 lg:px-10 py-2 mb-4">
                            {firstBubble}
                        </span>

                        <span class="text-xs sm:text-base bg-white rounded-md sm:rounded-3xl lg:rounded-full float-left shadow-xl px-3 md:px-5 lg:px-10 py-2">
                            {secondBubble}
                        </span>
                    </div>

                </div>

            </div>

        </section>
    </>
}

export default FirstCta

