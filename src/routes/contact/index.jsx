import { component$ } from '@builder.io/qwik'
import { routeLoader$ } from '@builder.io/qwik-city'
import { usePage } from 'Contents'
import {
    Form,
    Info,
    Map,
} from 'Contact'

const getData = routeLoader$(async () => {
    const data = await usePage('contact')
    return data
})

const Contact = component$(() => {

    const data = getData().value
    const {
        contacts,
        map,
    } = data

    return <>
        <Info {...contacts} />
        <Form />
        <Map {...map} />
    </>
})

export default Contact
