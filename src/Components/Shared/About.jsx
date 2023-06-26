const About = ({
    text,
    title,
}) => {
    return <>
        <div class="text-white col-span-2">
            <strong class="block mb-4">{title}</strong>
            <h3 class='text-sm'>{text}</h3>
        </div>
    </>
}

export default About
