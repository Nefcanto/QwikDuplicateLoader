const FooterLinks = ({
    items,
    title,
}) => {
    return <>
        <div class="col-span-2">
            <strong class="block mb-4">
                {title}
            </strong>
            <ul>
                {
                    items?.map(item => <>
                        <li class="text-sm mb-1" key={item?.id}>
                            <a
                                href={item?.link}
                                class='hover:text-paydar-color22 transition-all'
                            >
                                {item?.text}
                            </a>
                        </li>
                    </>)
                }
            </ul>
        </div>
    </>
}

export default FooterLinks
