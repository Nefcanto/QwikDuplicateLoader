import {
    About,
    Copyright,
    FooterLinks,
    Newsletter,
} from 'Shared'

const Footer = ({
    footerAbout,
    footerLinks,
}) => {
    return <>
        <footer class="bg-paydar-color3">
            <div class="max-w-7xl mx-auto px-3 xl:px-0 py-6 md:py-10 lg:py-20 grid md:grid-cols-7 gap-10 text-white">
                <About {...footerAbout} />
                <FooterLinks {...footerLinks} />
                <Newsletter />
            </div>
        </footer>
        <Copyright />
    </>
}

export default Footer
