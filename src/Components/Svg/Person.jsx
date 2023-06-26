const Person = ({ class: style }) => {
    return <svg
        xmlns="http://www.w3.org/2000/svg"
        height="48"
        viewBox="0 96 960 960"
        width="48"
        class={style || ""}
    >
        <path d="M378 810 154 586l43-43 181 181 384-384 43 43-427 427Z" />
    </svg>
}

export default Person