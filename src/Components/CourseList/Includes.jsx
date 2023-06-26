import {
    ArrowRight,
    Clock,
    Wallet,
} from 'Svg'

const Includes = () => {
    return <>

        <div className="bg-white shadow-xl p-5 md:px-8 md:py-10 rounded-lg mb-8">

            <div className="text-lg capitalize">
                This curse includes:
            </div>

            <ul class="text-paydar-color22 flex flex-col gap-2 mt-5 mb-3">

                {
                    [1, 2, 3, 4]?.map((item, index) => <>
                        <li key={index} class="flex gap-2">
                            <ArrowRight />
                            <span class="w-[calc(100%_-_30px)]">
                                Lorem ipsum dolor sit
                            </span>
                        </li>
                    </>)
                }

                <div className="flex flex-wrap gap-3 mt-10 mb-2 text-paydar-color31 text-sm">
                    <Clock />
                    <span>
                        24-30 months
                    </span>
                </div>

                <div className="flex flex-wrap gap-3 mb-10 text-black text-sm">
                    <Wallet />
                    <span>
                        50230 total cost
                    </span>
                </div>

                <div className="w-full xs:w-[80%] mx-auto text-center py-4 text-xl rounded-lg bg-paydar-color4 text-paydar-color3 hover:bg-paydar-color1 hover:text-paydar-color2 transition-all">
                    Register
                </div>

            </ul>

        </div>

    </>
}

export default Includes
