import {
    component$,
    useStyles$,
    useVisibleTask$,
} from '@builder.io/qwik'
import swiperStyles from 'swiper/css'
import Swiper, {
    Navigation,
    Pagination,
    Scrollbar,
    Thumbs,
} from 'swiper'
import {
    Image,
    lg,
    md,
    sm,
    xs,
    zero,
} from 'Base'

const Categories = component$(({
    categories,
    hierarchies,
}) => {
    useStyles$(swiperStyles)

    useVisibleTask$(() => {
        new Swiper(".categoriesSwiper", {
            loop: false,
            modules: [Navigation, Pagination],
            slidesPerView: 9,
            spaceBetween: 10,
            breakpoints: {
                [zero]: {
                    spaceBetween: 10,
                    slidesPerView: 1.6,
                    loop: true,
                },
                [xs]: {
                    spaceBetween: 10,
                    slidesPerView: 3.1,
                    loop: true,
                },
                [sm]: {
                    spaceBetween: 10,
                    slidesPerView: 4.5,
                    loop: true,
                },
                [md]: {
                    spaceBetween: 15,
                    slidesPerView: 5.5,
                    loop: true,
                },
                [lg]: {
                    spaceBetween: 15,
                    slidesPerView: 7,
                },
                1200: {
                    spaceBetween: 15,
                    slidesPerView: 9,
                }
            }
        })
    }, {
        strategy: 'document-ready'
    })

    return <>
        <section class="categories bg-paydar-color2">
            <div class="max-w-7xl mx-auto px-3 xl:px-0 pb-10 overflow-hidden">

                <div class="text-2xl sm:text-3xl md:text-4xl text-paydar-color31 my-6 md:my-10 text-center font-bold capitalize">
                    {categories?.title}
                </div>

                <div class="categoriesSwiper">
                    <div class="swiper-wrapper">
                        {
                            hierarchies?.map(item => <>
                                <a
                                    href={`/course/category/${item.slug}`}
                                    key={item?.id}
                                    class="swiper-slide select-none flex flex-col gap-4 items-center text-center text-paydar-color1 p-3 border border-paydar-color21 rounded-md group hover:border-transparent  transition-all duration-300"
                                    title={item?.title}
                                >
                                    <Image
                                        containerClass="w-16 aspect-square group-hover:scale-125 transition-all duration-300"
                                        imageClass=""
                                        src={item?.relatedItems?.imageUrl}
                                        alt={item?.title}
                                    />
                                    <div class="text-paydar-color31 text-xs h-[33px] overflow-hidden">
                                        {item?.title}
                                    </div>
                                </a>
                            </>)
                        }
                    </div>
                </div>
            </div>
        </section>
    </>
})

export default Categories
