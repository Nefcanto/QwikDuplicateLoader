const Stats = ({ items }) => {
    return <>
        <section class="bg-paydar-color2 stats">
            <div class="max-w-7xl mx-auto px-3 xl:px-0 py-14 grid grid-cols-2 sm:flex gap-4 items-center justify-between">
                {
                    items?.map(item => <>
                        <div class="grid gap-4 text-center" key={item?.id}>
                            <div class="text-paydar-color1 font-bold text-4xl">
                                {item?.number}
                            </div>
                            <div class="text-paydar-color31">{item?.title}</div>
                        </div>
                    </>)
                }
            </div>
        </section>
    </>
}

export default Stats
