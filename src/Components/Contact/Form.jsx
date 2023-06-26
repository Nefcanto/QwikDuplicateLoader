const Form = () => {
    return <>
        <section class="contactForm">
            <div class="max-w-7xl mx-auto px-3 xl:px-0 mt-8">
                <p class="mb-5 sm:mb-10 font-bold text-xl sm:text-2xl md:text-3xl text-paydar-color31">
                    How Can we help you?
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                    <div className="flex gap-3">
                        <input
                            type="text"
                            class="w-full border border-paydar-color21 rounded-lg px-5 py-3 focus:outline-none placeholder-black"
                            placeholder='Name'
                        />
                    </div>

                    <div className="flex gap-3">
                        <input
                            type="mail"
                            class="w-full border border-paydar-color21 rounded-lg px-5 py-3 focus:outline-none placeholder-black"
                            placeholder='Email'
                        />
                    </div>

                </div>

                <div>
                    <textarea
                        name=""
                        rows="6"
                        class="w-full mt-4 mb-2 border border-paydar-color21 rounded-lg px-5 py-3 focus:outline-none placeholder-black"
                        placeholder='Message'
                    >
                    </textarea>
                </div>

                <div class="">
                    <button
                        class="bg-paydar-color1 text-white rounded-lg px-14 py-3 hover:bg-paydar-color31 transition-all"
                    >
                        SUBMIT
                    </button>
                </div>

            </div>
        </section>
    </>
}

export default Form
