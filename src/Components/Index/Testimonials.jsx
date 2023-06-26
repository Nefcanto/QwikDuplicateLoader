import { Image } from 'Base'
import { Star } from 'Svg'
import {
    component$,
    useStyles$,
    useVisibleTask$,
} from '@builder.io/qwik'

import swiperStyles from 'swiper/css'
import Swiper, {
    Navigation,
    Pagination,
} from 'swiper'

const Testimonials = component$(({
    ctaLink,
    ctaText,
    description,
    items,
    title,
}) => {
    useStyles$(swiperStyles)
    useVisibleTask$(() => {
        new Swiper(".ownersSwiper", {
            modules: [Navigation, Pagination],
            slidesPerView: 1,
            loop: false,
        })
    }, {
        strategy: 'document-ready'
    })

    return <section class="bg-paydar-color2 stats">
        <div class="max-w-7xl mx-auto px-3 xl:px-0 pb-14 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center justify-between md:pb-40">

            <div class="p-5 sm:p-10 md:p-20 bg-white shadow-lg">
                <div class="ownersSwiper overflow-hidden">
                    <div class="swiper-wrapper ">
                        {
                            items?.map(item => <>
                                <div class="swiper-slide flex flex-col md:grid md:grid-cols-3 gap-6 items-center">
                                    <div class="w-full text-center md:col-span-1">

                                        <Image
                                            containerClass="max-w-full w-[180px] sm:w-[300px] aspect-square rounded-2xl mx-auto rounded-md overflow-hidden"
                                            imageClass=""
                                            src={item?.image}
                                            alt={item?.name}
                                        />

                                    </div>
                                    <div class="md:col-span-2 text-paydar-color22 text-sm">
                                        <h3 class="mb-2 text-paydar-color3 text-xl">
                                            {item?.name}
                                        </h3>
                                        <span>
                                            {item?.job}
                                        </span>
                                        <h4 class="mt-4">
                                            {item?.quote}
                                        </h4>
                                        <div class="flex gap-1 mt-6">
                                            {
                                                Array.from({ length: item?.rating }, (v, i) => i).map((i) => <>
                                                    <Star
                                                        class="w-6 h-6 fill-paydar-color1"
                                                    />
                                                </>
                                                )
                                            }
                                        </div>
                                    </div>
                                </div>
                            </>)
                        }
                    </div>
                </div>

            </div>

            <div>
                <div class="text-4xl text-paydar-color3 mb-5 font-bold line-clamp-2 capitalize">
                    {title}
                </div>
                <div class="text-paydar-color22">
                    {description}
                </div>
                <a
                    href={ctaLink}
                    class="inline-block mt-10 px-6 py-2 rounded-md bg-paydar-color1 text-white hover:bg-paydar-color2 hover:shadow-md hover:text-paydar-color1 transition-all"
                    title={ctaText}
                >
                    {ctaText}
                </a>
            </div>

        </div>
    </section>
})

export default Testimonials
