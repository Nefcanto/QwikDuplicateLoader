const About = ({
    summary,
    title,
}) => {
    return <>
        <section>
            <div class="max-w-4xl mx-auto px-3 xl:px-0 pb-10 overflow-hidden">
                <div class="text-2xl sm:text-3xl md:text-4xl text-paydar-color31 my-6 md:my-10 text-center font-bold capitalize">
                    {title}
                </div>
                <p class="leading-7 text-paydar-color3">
                    {summary}
                </p>
            </div>
        </section>
    </>
}

export default About
