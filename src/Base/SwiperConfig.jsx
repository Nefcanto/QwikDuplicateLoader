import {
    lg,
    md,
    sm,
    xs,
    zero,
} from 'Base'

const SwiperConfig = {
    loop: false,
    hashNavigation: {
        watchState: true,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },
    // navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    // },

    slidesPerView: 4,
    spaceBetween: 10,
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

}

export default SwiperConfig
