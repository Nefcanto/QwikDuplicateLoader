import {
    ChevronDown,
    ChevronUp,
    Close,
} from 'Svg'

const DesktopMenu = ({ isShow }) => {
    return <>
        <div class={`w-[calc(100%_-_24px)] absolute top-12 md:top-16 z-50 grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 justify-center  shadow-lg bg-white ${isShow.value ? "" : "hidden"}`}>

            <div className="flex justify-between items-center font-bold p-5 xs:hidden">

                <b class="text-lg text-paydar-color1">
                    Menu
                </b>
                <div className=""
                    onClick$={() => isShow.value = false}>
                    <Close
                        class="w-8 h-8"
                    />
                </div>
            </div>

            {
                [1, 2, 3, 4]?.map(col => <>
                    <div className="md:p-10">
                        <a
                            href=""
                            class="flex justify-between items-center relative text-paydar-color31 font-bold xs:pb-2 hover:text-paydar-color1 xs:after:absolute xs:after:content-[''] xs:after:w-20 xs:after:h-[2px] xs:after:bg-paydar-color1 xs:after:bottom-0 xs:after:left-0 transition-all border-y border-paydar-color23 xs:border-none"
                        >
                            <span class="px-5 py-3 md:p-0">
                                Title
                            </span>
                            {/* <div className="px-3 py-3 border-l border-paydar-color23 self-stretch xs:hidden text-black focus:bg-paydar-color1 focus:text-white">
                                <ChevronDown
                                    class="w-6 h-6 font-bold"
                                />
                                <ChevronUp
                                    class="w-6 h-6 font-bold hidden"
                                />
                            </div> */}
                        </a>

                        <ul class=" xs:flex flex-col gap-1 md:mt-7 p-5 md:p-0">

                            {
                                [1, 2, 3, 4]?.map(item => <>
                                    <li>
                                        <a
                                            href=""
                                            class="text-gray-500 text-sm hover:text-paydar-color1 transition-all"
                                        >
                                            menu item
                                        </a>
                                    </li>
                                </>)
                            }

                        </ul>
                    </div>
                </>)
            }
        </div>
    </>
}

export default DesktopMenu
