const Newsletter = () => {
    return <>
        <div class="col-span-3 xs:w-[330px] xs:max-w-full sm:w-auto sm:col-span-1 md:col-span-3 lg:col-span-2">
        <strong class="block mb-4 capitalize">
                SignUp for special offers!
            </strong>
            <div className="w-full flex bg-white border border-paydar-color2 rounded-3xl overflow-hidden">
                <input
                    type="text"
                    class="w-[calc(100%_-_100px)] sm:w-[calc(100%_-_120px)] px-5 py-2 rounded-3xl outline-none text-paydar-color31 text-sm"
                    placeholder="Mail"
                />
                <div className="flex justify-center items-center w-[100px] sm:w-[120px] bg-paydar-color1 text-white text-center hover:bg-paydar-color21 hover:text-paydar-color1 rounded-3xl cursor-pointer transition-all text-sm sm:text-base">
                    Subscribe
                </div>
            </div>
        </div>
    </>
}

export default Newsletter
