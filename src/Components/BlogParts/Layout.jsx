import { Image } from 'Base'
import { usePostUrl } from 'Blog'

import {
    Calendar,
    Category,
} from 'Svg'

import {
    Categories,
    LastArticles,
} from 'BlogParts'

const Layout = ({
    categories,
    latest,
    posts,
}) => {
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

        <section class="relative after:absolute after:content-[''] after:w-full after:h-[40vh] after:bg-paydar-color2 after:top-0 after:right-0 after:z-10 mb-14">

            <div class="max-w-7xl mx-auto px-3 xl:px-0 pt-5 md:pt-20  flex flex-col md:flex-row gap-8 lg:gap-14">

                <div className="relative z-20 w-full md:w-[calc(100%_-_320px)] lg:w-[calc(100%_-_446px)]">

                    <strong class="block text-3xl mb-6">
                        Blog
                    </strong>

                    <div className="flex flex-col gap-14">
                        {
                            posts?.data?.map(item => <>
                                <div class='group transition-all duration-1000'>
                                    <a
                                        href={usePostUrl(item?.slug)}
                                    >
                                        <Image
                                            src={item?.relatedItems?.imageUrl}
                                            alt={item?.title}
                                            containerClass="w-full aspect-[1.6/1] rounded-lg overflow-hidden"
                                            imageClass="group-hover:scale-105 transition-all duration-1000"
                                        />
                                    </a>

                                    <div className="flex gap-8 v text-paydar-color1 text-sm mt-4 mb-6 hover:text-paydar-color3 transition-all">
                                        <div className="flex gap-3 items-center">
                                            <Calendar />
                                            <span>
                                                2023/05/22
                                            </span>
                                        </div>
                                        <a
                                            href=""
                                            className="flex gap-3 items-center"
                                        >
                                            <Category />
                                            <span>
                                                design
                                            </span>
                                        </a>
                                    </div>

                                    <h3 class="text-2xl sm:text-3xl md:text-4xl text-paydar-color31 mb-5 font-bold leading-8 group-hover:text-paydar-color1 transition-all duration-1000">
                                        <a
                                            href={usePostUrl(item?.slug)}
                                        >
                                            {item?.title}
                                        </a>
                                    </h3>

                                    <h4 className="leading-8 line-clamp-[4]">
                                        {item?.summary}
                                    </h4>

                                    <div className="mt-4">
                                        <a
                                            href={usePostUrl(item?.slug)}
                                            class="capitalize bg-paydar-color1 text-white hover:bg-paydar-color31 hover:text-white transition-all px-7 py-2 rounded-md float-right">
                                            view all
                                        </a>
                                    </div>
                                </div>

                            </>)
                        }

                    </div>

                    <section class="mt-12 md:mt-20 mb-10">
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

                </div>

                <div className="relative z-20  w-full md:w-[320px] lg:w-[390px]">

                    <div className="sticky top-8">

                        <LastArticles latest={latest} />

                        <Categories categories={categories} />

                    </div>

                </div>

            </div>
        </section>

    </>
}

export default Layout
