import { RichText as RichTextBase } from 'Base'

const RichText = ({ content }) => {
    return <>
        <RichTextBase
            content={content}
            class="[&>h1]:font-bold [&>h1]:mt-[20px] [&>h1]:text-[1.75rem] [&>h1]:mt-[30px] [&>h2]:font-bold [&>h2]:mt-[20px] [&>h2]:text-[1.5rem] [&>h3]:font-bold [&>h3]:mt-[20px] [&>h2]:text-[1.25rem] [&>h4]:font-bold [&>h4]:mt-[15px]  [&>h4]:mb-[10px] [&>h4]:text-[1.15rem] [&>h5]:mt-[3px] [&>h5]:mb-[10px] [&>h5]:font-600 [&>h5]:text-[1.08rem] [&>h6]:mt-[3px] [&>h6]:mb-[10px] [&>h5]:font-600 [&>h6]:text-[1.08rem] [&>p]:mt-[3px] [&>p]:mb-[10px] [&>a]:text-paydar-color1 hover:[&>a]:text-paydar-color3 [&>a]:transition-all [&>ul]:my-[7rem] [&>ul]:mx-[2rem] [&>ul]:list-disc [&>ol]:my-[7rem] [&>ol]:mx-[2rem] [&>ol]:list-disc [&>ul>li]:my-[3px] [&>ol>li]:my-[3px] [&>img]:my-[25px] [&>img]:mx-auto [&>table]:overflow-x-scroll [&>table]:border [&>table]:border-slate-950 [&>table]:border-collapse [&>td]:py-[10px] [&>td]:px-[5px] [&>td]:border [&>td]:border-slate-950 [&>td]:border-collapse [&>th]:border [&>th]:border-slate-950 [&>th]:border-collapse"
        />
    </>
}

export default RichText
