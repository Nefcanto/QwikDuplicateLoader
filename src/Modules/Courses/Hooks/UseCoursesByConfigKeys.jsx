import { getFromCacheOrApi } from 'Base'
import { useSystemConfig } from 'Configuration'

const useCoursesByConfigKeys = async (configKeys) => {
    const { configs, getKeyFromValue } = await useSystemConfig()
    let csv = ''
    configKeys.forEach(key => csv += `,${configs[key] || ""}`)
    const configKeysCsv = configKeys.join(',')
    const courses = await getFromCacheOrApi(`/courses/getCoursesByConfigKeys?configKeysCsv=${configKeysCsv}`)
    for (let course in courses) {
        if (course === 'milliseconds') {
            continue
        }
        const key = getKeyFromValue(course)
        courses[key] = courses[course]
    }
    return courses
}

export default useCoursesByConfigKeys
