import { routeLoader$ } from '@builder.io/qwik-city'
import { getFromCacheOrApi } from 'Base'
import { usePage } from 'Contents'

const validPaths = [
    '/instructor/slug',
    '/instructor/slug/',
]

const getCourse = routeLoader$(async ({
    params,
    query,
    url,
}) => {

    const { slug } = params || {}

    var url = `/course/get?slug=${slug}`

    const course = await getFromCacheOrApi(url)
    const page = await usePage('course', query)

    return {
        ...course,
        ...page,
    }
})

export default getCourse
