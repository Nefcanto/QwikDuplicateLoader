import {
    component$,
    useSignal,
} from '@builder.io/qwik'

import {
    env,
    Image,
} from 'Base'
import {
    Menu,
    Register,
    Search,
} from 'Svg'
import DesktopMenu from './DesktopMenu'

const Header = component$(({
    image,
}) => {
    const isShow = useSignal(false)

    return <>
        <header class='sticky z-50 top-0 bg-white border-b border-b-paydar-color3 py-1 sm:py-2 md:py-4'>

            <div class='relative max-w-7xl mx-auto px-3 xl:px-0 flex justify-between gap-3 md:gap-5' >

                <a
                    href="/"
                    title="Home"
                >
                    <Image
                        alt="Logo"
                        src={image}
                        containerClass="w-[120px] aspect-[2.5] justify-content focus:outline-none select-none"
                        imageClass=""
                    />
                </a>

                <div class="flex gap-2 sm:gap-6 items-center justify-center">

                    <div
                        onClick$={() => isShow.value = !isShow.value}
                        class="w-[34px] h-[34px] sm:w-[44px] sm:h-[44px] flex items-center justify-center sm:p-2 bg-paydar-color1 hover:bg-paydar-color3 cursor-pointer rounded-md transition-all">

                        <Menu
                            isShow={isShow}
                            onClick$={() => isShow.value = !isShow.value}
                            class="w-5 h-5 sm:w-6 sm:h-6 fill-white"
                        />

                    </div>

                    <div class="sm:w-[36vw] flex justify-between sm:border border-paydar-color21 rounded-md overflow-hidden">
                        <input
                            type="text"
                            class='hidden sm:flex w-[calc(100%_-_48px)] text-sm p-3 outline-none text-paydar-color31'
                            placeholder='What are you looking for?'
                        />
                        <div class="w-[34px] h-[34px] sm:w-[48px] sm:h-auto bg-paydar-color21 flex justify-center items-center rounded-md sm:rounded-r-none cursor-pointer">
                            <Search
                                class="w-5 h-5 sm:w-6 sm:h-6 fill-white hover:fill-paydar-color1 transition-all"
                            />
                        </div>
                    </div>

                </div>

                <div class="flex items-center gap-1 sm:gap-1.5 text-paydar-color3 ">

                    <a
                        class="flex gap-1 sm:gap-1.5 items-center text-paydar-color3 hover:text-paydar-color1 transition-all text-xs sm:text-sm"
                        href={env('INSTRUCTOR_URL')}
                        title="Instructor"
                    >
                        <Register
                            class="w-5 h-5 sm:w-6 sm:h-6"
                        />
                        <span class="hidden sm:block">
                            Instructor
                        </span>
                    </a>

                    <span class="hidden sm:block">
                        |
                    </span>

                    <a
                        class="text-paydar-color3 hover:text-paydar-color1 transition-all text-xs sm:text-sm"
                        href='/learner'
                        title="Learner"
                    >
                        <span class="hidden sm:block">
                            Learner
                        </span>
                    </a>

                </div>

                <DesktopMenu
                    isShow={isShow}
                />

            </div>

        </header>

        <div
            isShow={isShow}
            onClick$={() => isShow.value = !isShow.value}
            className={`fixed z-40 w-full h-full bg-slate-950 bg-opacity-30 ${isShow.value ? "block" : "hidden"}`}
        >

        </div>
    </>
})

export default Header
