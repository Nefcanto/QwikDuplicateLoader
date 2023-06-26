import { Image } from 'Base'
import { useCourses } from 'Courses'
import {
    Duration,
    Price,
} from 'Svg'

const CourseCard = ({ courses }) => {

    const { getCourseUrl } = useCourses()

    const randerFirstHierarchy = (item) => {
        if (item?.relatedItems?.categories && item?.relatedItems?.categories.length > 0) {
            return <>
                <a
                    href={`/courses/category/${item?.relatedItems?.categories[0]?.slug}`}
                    target="_blank"
                    class="bg-white opacity-70 rounded-md text-sm px-2 py-1"
                >
                    {item?.relatedItems?.categories[0]?.title}
                </a>

            </>
        }

    }

    return <>
        {
            courses?.map(course => <>

                <div key={course?.id} class='swiper-slide shadow-md rounded-2xl group self-stretch overflow-hidden'>

                    <div class="relative">

                        <Image
                            containerClass="max-w-[330px] w-full aspect-[1/.7] object-cover"
                            imageClass=""
                            src={course?.relatedItems?.imageUrl}
                            alt={course?.title}
                        />

                        <div class="absolute bottom-0 z-10 w-full flex justify-between items-center p-2">

                            <a
                                href={course?.categoryLink}
                                target="_blank"
                                class="bg-white rounded-full"
                            >
                                <Image
                                    containerClass="w-8 aspect-square rounded-full overflow-hidden object-cover"
                                    imageClass=""
                                    src={course?.logo}
                                    alt={course?.logoTitle}
                                />
                            </a>
                            {randerFirstHierarchy(course)}                        

                        </div>

                    </div>

                    <div class="p-4">

                        <a
                            href={getCourseUrl(course)}
                            class="block h-14 overflow-hidden mb-4 text-xl font-bold text-paydar-color3 group-hover:text-paydar-color1 transition-all"
                            title={course?.title}
                        >
                            {course?.title}
                        </a>

                        <div class="h-12 overflow-hidden line-clamp-2 text-paydar-color22">
                            {course?.summary}
                        </div>

                        <div class="flex items-center gap-3 text-sm mt-6 text-paydar-color31">

                            <Duration />

                            <span>
                                24-36 months
                            </span>

                        </div>

                        <div class="flex items-center gap-3 text-sm">

                            <Price />

                            <span>
                                INR 4,150,000 total cost
                            </span>

                        </div>

                    </div>

                </div>

            </>
            )
        }
    </>
}

export default CourseCard
