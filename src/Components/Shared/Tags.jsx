const Tags = ({ tags }) => {
    return <>
        <div class="flex flex-wrap gap-3 mt-10 md:my-14">
            {
                tags?.map(item => <>
                    <a
                        href={item?.slug}
                        className="border border-paydar-color23 px-3 py-2 rounded-md text-paydar-color-31 hover:bg-paydar-color1 hover:text-paydar-color2 transition-all">
                        {item?.title}
                    </a>
                </>)
            }
        </div>
    </>
}

export default Tags
