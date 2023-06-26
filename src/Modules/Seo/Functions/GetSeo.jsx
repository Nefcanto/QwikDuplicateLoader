const GetSeo = (getData, resolveValue) => {
    const { seo } = resolveValue(getData)
    return {
        title: seo?.metaTitle || seo?.pageTitle,
        meta: [
            {
                name: seo?.metaDescription && 'description',
                content: seo?.metaDescription,
            },
            {
                name: seo?.keywords && 'keywords',
                content: seo?.keywords,
            },
            {
                name: seo?.metaRobots && 'robots',
                content: seo?.metaRobots,
            },
        ],
        link: [
            {
                rel: seo?.canonical && 'canonical',
                href: seo?.canonical
            },
        ]
    }
}

export default GetSeo
