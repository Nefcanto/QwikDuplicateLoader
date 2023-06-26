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
    Image,
    lg,
    md,
    sm,
    xs,
    zero,
} from 'Base'
import { Star } from 'Svg'
import { CourseCard } from 'Shared'

const CourseSlider = component$(({ courses }) => {
    useStyles$(swiperStyles)
    var classNameSwiper = 'coursesSwiper' + Math.floor(Math.random() * 10)
    useVisibleTask$(() => {
        new Swiper(`.${classNameSwiper}`, {
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
        <div class={`${classNameSwiper} overflow-hidden p-2`}>
            <div class="swiper-wrapper my-10">
                <CourseCard courses={courses} />
            </div>
            <div class="swiper-pagination"></div>

            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>

            <div class="swiper-scrollbar"></div>
        </div>
        <a
            href="/courses"
            class="hidden md:inline-block px-6 py-2 rounded-md bg-paydar-color1 text-white hover:bg-paydar-color2 hover:shadow-md hover:text-paydar-color1 transition-all float-right"
        >
            View All
        </a>
    </>
})

export default CourseSlider
