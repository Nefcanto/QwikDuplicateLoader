import { component$ } from '@builder.io/qwik'
import { routeLoader$ } from '@builder.io/qwik-city'
import { usePage } from 'Contents'
import { useHierarchies } from 'Taxonomy'
import { useCoursesByConfigKeys } from 'Courses'
import {
    About,
    Categories,
    Courses,
    FirstCta,
    Hero,
    SecondCta,
    Stats,
    Testimonials,
} from 'Index'

const getData = routeLoader$(async ({ query }) => {
    const pageSections = await usePage('home', query)
    const hierarchies = await useHierarchies('course', query)
    const courses = await useCoursesByConfigKeys(['firstCourses', 'secondCourses', 'thirdCourses', 'fourthCourses'], query)
    const totalData = {
        courses,
        hierarchies,
        ...pageSections,
    }
    return totalData
})

const Index = component$(() => {

    const data = getData().value
    const {
        about,
        categories,
        courses,
        firstCourses,
        firstCta,
        fourthCourses,
        hero,
        hierarchies,
        secondCourses,
        secondCta,
        stats,
        testimonials,
        thirdCourses,
    } = data
    return <>
        <Hero {...hero} />
        <About {...about} />
        <Categories hierarchies={hierarchies} categories={categories} />
        {/* <Categories2 hierarchies={hierarchies} /> */}
        {/* <Categories3 hierarchies={hierarchies} /> */}
        <Courses {...firstCourses} courses={courses.firstCourses} which='firstCourses' />
        <Courses {...secondCourses} courses={courses.secondCourses} which='secondCourses' />
        <FirstCta {...firstCta} />
        <Courses {...thirdCourses} courses={courses.thirdCourses} which='thirdCourses' />
        <SecondCta {...secondCta} />
        <Courses {...fourthCourses} courses={courses.fourthCourses} which='fourthCourses' />
        <Stats {...stats} />
        <Testimonials {...testimonials} />
    </>
})

export default Index
