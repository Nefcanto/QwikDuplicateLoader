import { component$ } from '@builder.io/qwik'
import {
    CourseLayout,
    getCourse,
} from 'Courses'
import { Layout as RunnableLayout } from 'CourseParts'

const Course = component$(() => {

    const data = getCourse().value

    return RunnableLayout
        ?
        <RunnableLayout {...data} />
        :
        <CourseLayout {...data} />
})

export default Course

export { getCourse }
