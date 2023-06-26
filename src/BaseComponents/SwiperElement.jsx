import {
    component$,
    Slot,
    useStore,
    useStyles$,
    useVisibleTask$,
} from '@builder.io/qwik'
import Swiper, {
    Autoplay,
    HashNavigation,
    Navigation,
    Pagination,
    Thumbs,
} from 'swiper'
import swiperStyles from 'swiper/css'
import paginationStyle from 'swiper/css/pagination'

const SwiperElement = component$(({
    config,
    navigation: NavigationElements,
    paginationClass,
    name,
    class: className,
    thumbsSwiper
}) => {

    const {
        modules,
        navigation,
        onSwiper: OnSwiper,
        pagination,
        thumbs,
        ...rest
    } = config
    // const swiper = useStore({ inctance: null })

    useStyles$(paginationStyle)
    useStyles$(swiperStyles)
    useVisibleTask$(() => {
        new Swiper(`.${name}`, {
            // ...(thumbs && Object.keys(thumbs)?.length > 0 && { thumbs: thumbs }),
            modules: [
                Autoplay,
                HashNavigation,
                Navigation,
                Pagination,
                Thumbs,
            ],
            hashNavigation: {
                watchState: true,
            },
            // ...(OnSwiper && {
            //     on: {
            //         init: () => console.log("$$$$$$$$$$$$$$$$$$$$$$")
            //     }
            // }),

            ...(pagination && Object.keys(pagination)?.length > 0 && {
                pagination: {
                    ...pagination,
                }
            }),
            ...(navigation && Object.keys(navigation)?.length > 0 && {
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    ...navigation,
                }
            }),
            ...rest
        })
    }, {
        strategy: 'document-ready'
    })

    // swiper.value?.on('init', function () {
    //     console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!###################$$$$$$$$$$$$$")
    // })
    // // init Swiper
    // swiper.value.init()

    return <div class={`swiper relative z-10 ${name}`}>
        <div class={`swiper-wrapper ${className}`} >
            <Slot />
        </div>
        {NavigationElements && <NavigationElements />}
        <div class={`swiper-pagination ${paginationClass}`}></div>
    </div >

})

export default SwiperElement
