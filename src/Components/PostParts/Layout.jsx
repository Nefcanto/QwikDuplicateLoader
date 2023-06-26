import {
    Image,
    RichText,
} from 'Base'
import {
    Calendar,
    Category,
} from 'Svg'
import { Tags } from 'Shared'
import {
    Categories,
    LastArticles,
} from 'BlogParts'

const Layout = ({
    categories,
    content,
    latestPosts,
    post,
    tags,
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
            <div class="max-w-7xl mx-auto px-3 xl:px-0 pt-5 md:pt-20 flex flex-col md:flex-row gap-8 lg:gap-14">

                <div className="relative z-20 w-full md:w-[calc(100%_-_320px)] lg:w-[calc(100%_-_446px)]">
                    <h1 class="text-2xl sm:text-2xl lg:text-4xl text-paydar-color31 mb-5 font-bold leading-8">
                        {post?.title}
                    </h1>

                    <Image
                        containerClass="w-full aspect-[1.6/1] rounded-lg"
                        imageClass=""
                        src={post?.relatedItems?.imageUrl}
                        alt={post?.title}
                    />

                    <div className="flex gap-8 v text-paydar-color1 text-sm mt-4 mb-6">
                        <div className="flex gap-3 items-center">
                            <Calendar />
                            <span>
                                2023/05/22
                            </span>
                        </div>
                        <a href=""
                            className="flex gap-3 items-center">
                            <Category />
                            <span>
                                design
                            </span>
                        </a>
                    </div>

                    <div className="leading-8">
                        <RichText
                            content={content}
                            class="[&>h1]:font-bold [&>h1]:mt-[20px] [&>h1]:text-[1.75rem] [&>h1]:mt-[30px] [&>h2]:font-bold [&>h2]:mt-[20px] [&>h2]:text-[1.5rem] [&>h3]:font-bold [&>h3]:mt-[20px] [&>h2]:text-[1.25rem] [&>h4]:font-bold [&>h4]:mt-[15px]  [&>h4]:mb-[10px] [&>h4]:text-[1.15rem] [&>h5]:mt-[3px] [&>h5]:mb-[10px] [&>h5]:font-600 [&>h5]:text-[1.08rem] [&>h6]:mt-[3px] [&>h6]:mb-[10px] [&>h5]:font-600 [&>h6]:text-[1.08rem] [&>p]:mt-[3px] [&>p]:mb-[10px] [&>a]:text-paydar-color1 hover:[&>a]:text-paydar-color3 [&>a]:transition-all [&>ul]:my-[7rem] [&>ul]:mx-[2rem] [&>ul]:list-disc [&>ol]:my-[7rem] [&>ol]:mx-[2rem] [&>ol]:list-disc [&>ul>li]:my-[3px] [&>ol>li]:my-[3px] [&>img]:my-[25px] [&>img]:mx-auto [&>table]:overflow-x-scroll [&>table]:border [&>table]:border-slate-950 [&>table]:border-collapse [&>td]:py-[10px] [&>td]:px-[5px] [&>td]:border [&>td]:border-slate-950 [&>td]:border-collapse [&>th]:border [&>th]:border-slate-950 [&>th]:border-collapse"
                        />

                    </div>

                    <Tags tags={tags} />

                </div>

                <div className="relative z-20  w-full md:w-[320px] lg:w-[390px]">

                    <div className="sticky top-8">

                        <LastArticles latest={latestPosts} />

                        <Categories categories={categories} />

                    </div>

                </div>

            </div>
        </section>

    </>
}

export default Layout
