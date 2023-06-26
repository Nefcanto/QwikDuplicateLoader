import {
    component$,
    useSignal,
} from '@builder.io/qwik'
import {
    getInstructor,
    InstructorLayout,
} from 'Courses'
import { Layout as RunnableLayout } from 'InstructorParts'

const Instructor = component$(() => {

    const data = getInstructor().value

    return RunnableLayout
        ?
        <RunnableLayout {...data} />
        :
        <InstructorLayout {...data} />
})

export default Instructor

export { getInstructor }
