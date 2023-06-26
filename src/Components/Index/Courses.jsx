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
import {
    lg,
    md,
    sm,
    xs,
    zero,
} from 'Base'
import { CourseCard } from 'Shared'

const Courses = component$(({
    courses,
    description,
    title,
    which,
}) => {

    useStyles$(swiperStyles)

    useVisibleTask$(() => {
        new Swiper(".coursesSwiper", {
            loop: false,
            modules: [Navigation, Pagination],
            slidesPerView: 4,
            spaceBetween: 10,
            loop: true,
            breakpoints: {
                [zero]: {
                    spaceBetween: 10,
                    slidesPerView: 1.2,
                },
                [xs]: {
                    spaceBetween: 10,
                    slidesPerView: 1.5,
                },
                [sm]: {
                    spaceBetween: 10,
                    slidesPerView: 2.2,
                },
                [md]: {
                    spaceBetween: 15,
                    slidesPerView: 3.2,
                },
                [lg]: {
                    spaceBetween: 15,
                    slidesPerView: 4,
                }
            }
        })
    }, {
        strategy: 'document-ready'
    })

    return <>
        <section class={`courses ${which || ""}`}>
            <div class="max-w-7xl mx-auto px-3 xl:px-0 md:pt-10 md:pb-14  mb-4">
                <div class="text-2xl sm:text-3xl md:text-4xl text-paydar-color31 mb-2 md:mb-10 font-bold capitalize">
                    {title}
                </div>
                <div class="text-paydar-color22">
                    {description}
                </div>

                <div class="coursesSwiper overflow-hidden p-2">
                    <div class="swiper-wrapper my-10">
                        <CourseCard courses={courses} />
                    </div>
                    <div class="swiper-pagination"></div>

                    <div class="swiper-button-prev"></div>
                    <div class="swiper-button-next"></div>

                    <div class="swiper-scrollbar"></div>
                </div>

                {/* <div class="coursesSwiper">

                    <div class="swiper-wrapper">

                        <div class="swiper-slide">Slide 1</div>
                        <div class="swiper-slide">Slide 2</div>
                        <div class="swiper-slide">Slide 3</div>

                        <div class="swiper-slide">Slide 1</div>
                        <div class="swiper-slide">Slide 2</div>
                        <div class="swiper-slide">Slide 3</div>

                        <div class="swiper-slide">Slide 1</div>
                        <div class="swiper-slide">Slide 2</div>
                        <div class="swiper-slide">Slide 3</div>

                    </div>

                </div> */}

                <a
                    href=""
                    class="hidden md:inline-block px-6 py-2 rounded-md bg-paydar-color1 text-white hover:bg-paydar-color2 hover:shadow-md hover:text-paydar-color1 transition-all float-right"
                    title="view all courses"
                >
                    View All
                </a>

            </div>
        </section>
    </>
})

export default Courses
