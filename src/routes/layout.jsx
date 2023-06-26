import {
    component$,
    Slot,
} from '@builder.io/qwik'
import { routeLoader$ } from '@builder.io/qwik-city'
import { useLayout } from 'Contents'
import {
    Footer,
    Header,
} from 'Shared'

const getData = routeLoader$(async ({ query }) => {
    const layout = await useLayout('main', query)
    const totalData = {
        ...layout,
    }
    return totalData
})

const Layout = component$(() => {

    const data = getData().value
    const { logo } = data

    return <>
        <Header {...logo} />
        <Slot />
        <Footer  {...data} />
    </>
})

export default Layout
