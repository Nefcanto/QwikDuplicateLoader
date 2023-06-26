import {
    component$,
    Slot,
} from '@builder.io/qwik'

const SwiperSlide = component$(({ key }) => {

    return <div
        key={key}
        data-hash={key}
        class="swiper-slide "
    >
        <Slot />
    </div>
})

export default SwiperSlide
