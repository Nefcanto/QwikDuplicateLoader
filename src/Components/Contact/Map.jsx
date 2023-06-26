import { Image } from 'Base'

const Map = ({ map }) => {
    return <>
        <section class="contactMap">
            <div class="max-w-7xl mx-auto px-3 xl:px-0 my-5 md:my-20">
                <Image
                    containerClass="w-full aspect-[1/.3]"
                    imageClass=""
                    src={map}
                    alt="Our Location"
                />
            </div>
        </section>
    </>
}

export default Map
