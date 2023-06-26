import { Image } from 'Base'
import {
    AddCircle,
    ChevronRight,
} from 'Svg'

const Hero = ({
    description,
    desktopBackgroundImage,
    desktopImage,
    firstBubble,
    firstCtaLink,
    firstCtaText,
    firstFloatingImage,
    mobileBackgroundImage,
    mobileImage,
    secondBubble,
    secondCtaLink,
    secondCtaText,
    secondFloatingImage,
    thirdFloatingImage,
    title,
}) => {
    return <>
        <section class="relative bg-paydar-color2 bg-cover hero">

            <Image
                containerClass="sm:hidden absolute contain bottom-0 mx-auto"
                imageClass=""
                src={mobileBackgroundImage}
                alt="background image"
                priority
            />

            <Image
                containerClass="hidden sm:block absolute contain bottom-0 mx-auto"
                imageClass=""
                src={desktopBackgroundImage}
                alt="background image"
                priority
            />

            <div class="max-w-7xl mx-auto px-3 xl:px-0 grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 md:gap-10 lg:gap-20 items-center justify-center relative z-10">

                <div class="flex flex-col gap-5 mb-10 md:mb-0 row-start-2 md:row-start-1 md:col-start-1">
                    <h1 class="text-paydar-color1 text-[2rem] leading-[2.5rem] md:text-[2.7rem] md:leading-[3.2rem] lg:text-[4rem] lg:leading-[4.5rem] font-bold capitalize">
                        {title}
                    </h1>
                    <h2>
                        {description}
                    </h2>
                    <div class="flex gap-3 sm:gap-5 mt-3 justify-center md:justify-start text-xs xs:text-base">
                        <a
                            href={firstCtaLink}
                            class="flex gap-3 items-center justify-centter bg-paydar-color1 hover:bg-paydar-color23 text-white hover:text-paydar-color31 rounded-lg p-2 md:px-2 lg:px-2 md:py-3 lg:px-8 group transition-all shadow-md"
                            title={firstCtaText}
                        >
                            {firstCtaText}
                            <AddCircle
                                class='w-6 h-6 fill-white group-hover:fill-paydar-color31'
                            />
                        </a>
                        <a
                            href={secondCtaLink}
                            title={secondCtaLink}
                            class="flex gap-3 items-center justify-centter bg-white hover:bg-paydar-color2 hover:text-paydar-color1 rounded-lg p-2 md:px-2 lg:px-2 md:py-3 lg:px-8 group transition-all shadow-md"
                        >
                            {secondCtaText}
                            <ChevronRight
                                class='w-6 h-6 rounded-full bg-paydar-color1 fill-white'
                            />
                        </a>
                    </div>
                </div>

                <div class="max-w-full w-[300px] md:w-full mx-auto relative flex items-center justify-center pt-10 pb-0 md:pt-20 md:pb-14 row-start-1 md:col-start-2">

                    <Image
                        containerClass="md:hidden w-[95%] aspect-[285/262]"
                        imageClass=""
                        src={mobileImage}
                        alt={title}
                        priority
                    />

                    <Image
                        containerClass="hidden md:block w-[76%] aspect-[458/559]"
                        imageClass=""
                        src={desktopImage}
                        alt={title}
                        priority
                    />

                    <div class="absolute  w-1/2 top-1/2 right-2 xs:right-0 text-paydar-color22">
                        <span class="text-xs sm:text-base w-auto bg-white float-right rounded-md lg:rounded-full shadow-xl px-3 lg:px-10 py-2 mb-4">
                            {firstBubble}
                        </span>

                        <span class="text-xs sm:text-base bg-white float-left rounded-md lg:rounded-full shadow-xl px-3 lg:px-10 py-2">
                            {secondBubble}
                        </span>
                    </div>

                    <Image
                        containerClass="hidden md:block absolute top-[6vh] right-[6vh]"
                        imageClass=""
                        src={firstFloatingImage}
                        alt={title}
                        priority
                    />
                    <Image
                        containerClass="hidden md:block absolute top-[6vh] left-[4vw]"
                        imageClass=""
                        src={secondFloatingImage}
                        alt={title}
                        priority
                    />
                    <Image
                        containerClass="hidden md:block absolute left-0 top-1/2"
                        imageClass=""
                        src={thirdFloatingImage}
                        alt={title}
                        priority
                    />

                </div>

            </div>

        </section>
    </>
}

export default Hero
