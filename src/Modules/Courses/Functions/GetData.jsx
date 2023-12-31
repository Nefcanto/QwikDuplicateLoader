import { routeLoader$ } from '@builder.io/qwik-city'
import { getFromCacheOrApi } from 'Base'

const validPaths = [
    '/courses',
    '/courses/',
    '/courses/2',
    '/courses/2/',
    '/courses/tag|category|instructor|search/slug',
    '/courses/tag|category|instructor|search/slug/',
    '/courses/tag|category|instructor|search/slug/2',
    '/courses/tag|category|instructor|search/slug/2/',
]

const getData = routeLoader$(async ({
    abort,
    cookie,
    next,
    params,
    platform,
    request,
    response,
    url,
}) => {

    const { slug, pageNumber } = params || {}

    const { pathname } = url

    var url = '/courses/data?'

    let matches = /\/courses(\/\d+)?\/?$/.exec(pathname)

    if (matches != null) {
        const pageNumber = matches[1]
        if (pageNumber !== undefined) {
            url += `&pageNumber=${pageNumber.replace('/', '')}`
        }
    }
    else {

        const secondSegments = ['category', 'tag', 'instructor', 'search']

        if (pathname.split('/').length >= 2 && !secondSegments.includes(pathname.split('/')[2])) {
            response.status = 404
            return
        }

        for (let i = 0; i < secondSegments.length; i++) {
            const segment = secondSegments[i]

            if (pathname.startsWith(`/courses/${segment}`)) {
                matches = new RegExp(`(?<=\\/courses\\/${segment}\\/)[^/]+\\/?(\\d+)?\\/?$`).exec(pathname)
                if (matches == null) {
                    response.status = 404
                    return
                }
                else {
                    url += `&${segment}=${encodeURI(matches[0].split('/')[0])}`
                    const pageNumber = matches[1]
                    if (pageNumber !== undefined) {
                        url += `&pageNumber=${pageNumber}`
                    }
                    break
                }
            }
        }
    }

    url = url.replace('?&', '?')

    const data = await getFromCacheOrApi(url)

    // console.log(params, response.status)
    // if (pageNumber && isNaN(pageNumber)) {
    //     console.log(pageNumber, isNaN(pageNumber))
    //     response.status = 400
    //     return
    // }

    const { seoParameters } = data

    return data
})

export default getData
