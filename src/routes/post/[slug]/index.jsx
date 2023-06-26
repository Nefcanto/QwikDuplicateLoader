import { component$ } from '@builder.io/qwik'
import { GetSeo } from 'Seo'
import {
    getPost,
    PostLayout,
} from 'Blog'
import { Layout as RunnableLayout } from 'PostParts'

const Post = component$(() => {

    const data = getPost().value

    return RunnableLayout
        ?
        <RunnableLayout {...data} />
        :
        <PostLayout {...data} />
})

export default Post

export { getPost }

const head = ({ resolveValue }) => {
    return GetSeo(getPost, resolveValue)
}

export { head }
