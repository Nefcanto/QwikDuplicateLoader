import { useCategoryUrl } from 'Blog'

const Categories = ({ categories }) => {
    return <>
        <div className="bg-white border border-paydar-color1 px-8 py-10 rounded-lg capitalize mb-8">
            <strong class="block uppercase text-lg text-paydar-color3 mb-3">
                Categories
            </strong>
            <ul class="flex flex-col gap-2 text-sm">
                {
                    categories?.map(category => <>
                        <li>
                            <a
                                href={useCategoryUrl(category?.slug)}
                                class="text-paydar-color31 hover:text-paydar-color1 transition-all"
                            >
                                {category?.title}
                            </a>
                        </li>
                    </>
                    )
                }
            </ul>
        </div>
    </>
}

export default Categories
