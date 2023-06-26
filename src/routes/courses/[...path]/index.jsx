import { component$ } from '@builder.io/qwik'
import {
    getData,
    Layout,
} from 'Courses'
import { Layout as RunnableLayout } from 'CoursesParts'

const Courses = component$(() => {

    const data = getData().value

    const {
        categories,
        latest,
        mostViewed,
        popular,
        courses,
        seo,
        tags,
    } = data || {}

    return RunnableLayout
        ?
        <RunnableLayout {...data} />
        :
        <Layout {...data} />

    // return <Layout {...data} />
})

export default Courses

export { getData }

const head = ({
    params,
    resolveValue,
}) => {

    const data = resolveValue(getData)

    return {
        title: data?.title || 'Courses'
    }
}

export { head }
