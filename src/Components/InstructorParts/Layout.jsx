import { Image } from 'Base'
import { Star } from 'Svg'

const Layout = ({
    instructor,
    courses,
}) => {

    const { data, metadata } = courses || {}

    return <>

        <section class="">
            <div class="max-w-7xl mx-auto px-3 xl:px-0 py-2">

                <ul class="text-sm flex gap-1">
                    <li>
                        <a
                            href=""
                            class="text-paydar-color31 hover:text-paydar-color1 transition-all"
                        >
                            Home
                        </a>
                    </li>
                    <span class="text-paydar-color31">/</span>
                    <li>
                        <a
                            href=""
                            class="text-paydar-color31 hover:text-paydar-color1 transition-all"
                        >
                            About
                        </a>
                    </li>
                </ul>
            </div>

        </section>

        <section class="bg-paydar-color2">
            <div class="max-w-7xl mx-auto px-3 xl:px-0 py-10 md:py-20 mb-20 sm:grid grid-cols-5 gap-8 items-center">

                <div className="sm:col-span-2 md:col-span-1">
                    <Image
                        containerClass="w-full max-w-[200px] sm:max-w-full aspect-square rounded-lg mx-auto"
                        imageClass=""
                        alt="Image"
                        src={instructor?.relatedItems?.imageUrl}
                    />
                </div>

                <div className="sm:col-span-3 md:col-span-4 mt-2 sm:mt-0">
                    <h1 class="text-2xl sm:text-3xl md:text-4xl text-paydar-color31">
                        {instructor?.naturalPersonName}
                    </h1>

                    <h2 class="text-paydar-color22 text-lg mt-2 md:mt-3 mb-3 md:mb-5">
                        {instructor?.contactsPersonSlug}
                    </h2>

                    <h2 class="text-paydar-color22 text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm
                    </h2>
                    <div class="flex gap-1 mt-6">
                        <Star
                            class="w-6 h-6 fill-paydar-color1"
                        />
                        <Star
                            class="w-6 h-6 fill-paydar-color1"
                        />
                        <Star
                            class="w-6 h-6 fill-paydar-color1"
                        />
                        <Star
                            class="w-6 h-6 fill-paydar-color1"
                        />
                        <Star
                            class="w-6 h-6 fill-paydar-color1"
                        />
                    </div>
                </div>

            </div>
        </section>

        <section class="mb-20">
            <div className="relative max-w-7xl mx-auto px-3 xl:px-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-14">
                {
                    data?.map(item => <>
                        <div key={item?.id} class='max-w-full w-[330px] sm:w-full shadow-md rounded-2xl group self-stretch overflow-hidden mx-auto'>

                            <div class="relative">
                                <Image
                                    containerClass="max-w-[330px] w-full aspect-[1/.7] object-cover"
                                    imageClass=""
                                    src={item.relatedItems.imageUrl}
                                    alt="item?.title"
                                />
                                <div class="absolute bottom-0 z-10 w-full flex justify-between items-center p-2">

                                    <a
                                        href="item?.categoryLink"
                                        target="_blank"
                                        class="bg-white rounded-full"
                                    >
                                        <Image
                                            containerClass="rounded-full w-8 aspect-square object-cover"
                                            imageClass=""
                                            src="https://picsum.photos/seed/picsum/200/300"
                                            alt="item?.logoTitle"
                                        />
                                    </a>

                                    {/* <a
                                        href=""
                                        target="_blank"
                                        class="bg-white opacity-70 rounded-md text-sm px-2 py-1"
                                    >
                                        item?.category
                                    </a> */}

                                </div>
                            </div>
                            <div class="p-4">
                                <div class="h-14 mb-4 text-xl font-bold text-paydar-color3 group-hover:text-paydar-color1 transition-all">
                                    {item.title}
                                </div>
                                <div class="line-clamp-2 text-paydar-color22">
                                    {item.summary}
                                </div>
                                <div class="flex items-center gap-3 text-sm mt-6 text-paydar-color31">

                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" class="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>

                                    <span>
                                        24-36 months
                                    </span>
                                </div>
                                <div class="flex items-center gap-3 text-sm">

                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path d="M21.5 6c.276 0 .5.224.5.5v11c0 .276-.224.5-.5.5h-19c-.276 0-.5-.224-.5-.5v-11c0-.276.224-.5.5-.5h19zm2.5 0c0-1.104-.896-2-2-2h-20c-1.105 0-2 .896-2 2v12c0 1.104.895 2 2 2h20c1.104 0 2-.896 2-2v-12zm-14.11 5c.098 0 .174.04.232.116.79 1.085 1.33 2.237 1.616 3.455h-1.991c-.38-1.313-.924-2.429-1.638-3.344l-.029-.085c-.001-.073.058-.142.145-.142h1.665zm2.495 1.594c-.147.594-.33 1.179-.558 1.754-.237-.924-.616-1.808-1.143-2.652.121-.656.183-1.326.196-2.004.63 1.013 1.13 1.978 1.505 2.902zm.442-3.165c1.364 1.877 2.334 4.187 2.54 6.571h-2.013c-.121-1.978-.946-4.17-2.469-6.571h1.942zm3.094 2.571c0 1.263-.152 2.469-.451 3.625-.201-1.665-.732-3.277-1.603-4.835-.076-.897-.232-1.763-.473-2.607-.022-.094.045-.183.139-.183h1.603c.125 0 .241.085.272.205.343 1.219.513 2.482.513 3.795z" /></svg>

                                    <span>
                                        INR 4,150,000 total cost
                                    </span>
                                </div>

                            </div>
                        </div>
                    </>)
                }
            </div>
        </section>

        <section class="mb-20">
            <div className="relative max-w-7xl mx-auto px-3 xl:px-0 flex flex-wrap justify-center gap-2">
                <div className="flex items-center justify-center text-white bg-paydar-color3 hover:bg-paydar-color1 w-10 aspect-square rounded-md transition-all">
                    <a
                        href=""
                    >1
                    </a>
                </div>
                <div className="flex items-center justify-center text-white bg-paydar-color3 hover:bg-paydar-color1 w-10 aspect-square rounded-md transition-all">
                    <a
                        href=""
                    >2
                    </a>
                </div>
                <div className="flex items-center justify-center text-white bg-paydar-color1 w-10 aspect-square rounded-md transition-all">
                    <a
                        href=""
                    >3
                    </a>
                </div>
                <div className="flex items-center justify-center text-white bg-paydar-color3 hover:bg-paydar-color1 w-10 aspect-square rounded-md transition-all">
                    <a
                        href=""
                    >4
                    </a>
                </div>
            </div>
        </section>
    </>
}

export default Layout
