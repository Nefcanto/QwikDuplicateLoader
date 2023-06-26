const Clock = ({ class: style }) => {
    return <>
        <svg
            class={style || ""}
            xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21">
            <g id="Iconly_Light-outline_Time_Square" data-name="Iconly/Light-outline/Time Square" transform="translate(0 0)">
                <g id="Time_Square" data-name="Time Square">
                    <path id="Time_Square-2" data-name="Time Square" d="M5.948,21a5.774,5.774,0,0,1-4.314-1.733A6.346,6.346,0,0,1,0,14.788V6.212A6.347,6.347,0,0,1,1.636,1.734,5.778,5.778,0,0,1,5.948,0h9.1a5.777,5.777,0,0,1,4.315,1.733A6.346,6.346,0,0,1,21,6.212v8.577a6.344,6.344,0,0,1-1.635,4.478A5.777,5.777,0,0,1,15.05,21ZM1.575,6.212v8.577a4.81,4.81,0,0,0,1.182,3.375,4.24,4.24,0,0,0,3.19,1.263h9.1c2.658,0,4.375-1.82,4.375-4.637V6.212a4.808,4.808,0,0,0-1.183-3.374,4.242,4.242,0,0,0-3.191-1.263h-9.1C3.291,1.575,1.575,3.4,1.575,6.212Zm12.177,7.132-.1-.049L10.1,11.171a.785.785,0,0,1-.375-.559l-.009-.117V5.915a.788.788,0,0,1,1.568-.107l.008.107v4.132l3.176,1.9a.788.788,0,0,1,.322.985l-.049.1a.787.787,0,0,1-.984.321Z" transform="translate(0 0)" fill="#de0039" />
                </g>
            </g>
        </svg>
    </>
}

export default Clock
