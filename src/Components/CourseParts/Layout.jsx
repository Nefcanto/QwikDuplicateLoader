import { Image } from 'Base'
import { Includes } from 'CourseList'
import { List } from 'CourseParts'
import { Star } from 'Svg'
import {
    component$,
    useSignal,
} from '@builder.io/qwik'
import {
    RichText,
} from 'Shared'

export default component$((
    {
        content,
        course,
        relatedCourses,
    }
) => {

    const isShow = useSignal(false)

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

            <div class="max-w-7xl mx-auto px-3 xl:px-0 py-10 md:py-20 mb-7 md:mb-12">

                <div className="text-3xl mb-4">
                    {course?.title}
                </div>
                <div className={` text-paydar-color22 relative after:absolute after:content-[''] after:w-full after:h-14 after:bottom-0 after:left-0 after:bg-gradient-to-t from-paydar-color2 ${isShow.value ? ' after:hidden mb-4' : 'h-14 overflow-hidden'}`}>
                    {course?.summary}
                </div>
                <div className="text-paydar-color1 cursor-pointer" onClick$={() => isShow.value = !isShow.value}>
                    {
                        isShow.value ? "less" : "more"
                    }
                </div>

            </div >

        </section >

        <section>

            <div class="max-w-7xl mx-auto px-3 xl:px-0 flex flex-col md:flex-row gap-8 lg:gap-14">

                <div className="relative z-20 w-full md:w-[calc(100%_-_320px)] lg:w-[calc(100%_-_446px)]">

                    <div className="grid grid-cols-5 gap-4 items-center">

                        <div className="col-span-2 md:col-span-1">

                            <Image
                                src={course?.relatedItems?.instructors[0]?.relatedItems?.imageUrl}
                                alt={course?.relatedItems?.instructors[0]?.naturalPersonName}
                                containerClass="w-full max-w-[200px] sm:max-w-full aspect-square rounded-lg mx-auto"
                                imageClass=""
                            />

                        </div>

                        <div className="col-span-3 md:col-span-4 mt-2 sm:mt-0">

                            <div class="flex gap-1 mb-1">
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

                            <h1 class="text-2xl sm:text-lg md:text-2xl text-paydar-color31">
                                {course?.relatedItems?.instructors[0]?.naturalPersonName}
                            </h1>

                            <h2 class="text-paydar-color22 text-md mt-1 mb-3">
                                um dolor sit amet, consecte
                            </h2>

                            <a href=""
                                className="float-left bg-paydar-color21 rounded-md px-6 py-2 text-white hover:bg-paydar-color1 hover:text-paydar-color2 transition-all"
                            >
                                view Profile
                            </a>

                        </div>

                    </div>

                    <div className="md:hidden mt-5">
                        <Includes />
                    </div>

                    <Image
                        containerClass="w-full aspect-[1.6/1] rounded-lg my-5"
                        imageClass=""
                        src={course?.relatedItems?.imageUrl}
                        alt={course?.title}
                    />

                    <div className="leading-8">
                        <RichText content={content} />
                    </div>

                    <div class="flex flex-wrap gap-3 mt-10 md:my-14">
                        {
                            course?.relatedItems?.tags.map(item => <>
                                <a
                                    href={`/courses/tag/${item?.slug}`}
                                    className="border border-paydar-color23 px-3 py-2 rounded-md text-paydar-color-31 hover:bg-paydar-color1 hover:text-paydar-color2 transition-all">
                                    {item?.title}
                                </a>
                            </>)
                        }
                    </div>

                </div>

                <div className="relative z-20  w-full md:w-[320px] lg:w-[390px]">

                    <div className="sticky top-8 hidden md:block">

                        <Includes />

                    </div>

                </div>

            </div>

        </section>

        <section class="mt-10 mb-20">

            <List courses={course?.relatedItems?.instructors[0]?.relatedItems?.courses} />

            <div className="relative max-w-7xl mx-auto px-3 xl:px-0 mt-24 mb-12 bg-paydar-color21 h-[2px]"></div>

            <List courses={relatedCourses} />

        </section>

    </>
})
