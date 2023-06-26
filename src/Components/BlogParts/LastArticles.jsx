import { Image } from 'Base'
import { usePostUrl } from 'Blog'
const LastArticles = ({ latest }) => {
    return <>
        <div className="bg-white border border-paydar-color1 px-8 pt-8 pb-10 rounded-lg capitalize mb-8">

            <strong class="block uppercase text-lg text-paydar-color3 mb-3">
                latest articles
            </strong>
            <div className="flex flex-col gap-5">
                {
                    latest?.map(item => <>
                        <div className="flex flex-col xs:flex-row items-center gap-3 text-paydar-color22 group">

                            <Image
                                src={item?.relatedItems?.imageUrl}
                                containerClass="h-[90px] aspect-[1.6/1] rounded-md overflow-hidden"
                                imageClass=""
                                alt={item?.title}
                            />
                            <div className="text-xs">
                                <h4>
                                    <a
                                        href={usePostUrl?.(item?.slug)}
                                        class="line-clamp-[4] leading-5 group-hover:text-paydar-color1 transition-all"
                                    >
                                        {item?.title}
                                    </a>
                                </h4>
                            </div>
                        </div>
                    </>
                    )
                }
            </div>
        </div>
    </>
}

export default LastArticles
