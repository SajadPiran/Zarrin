import {Link} from "react-router-dom";

function Footer(){

    const links : Array< { title : string , href : string } > = [
        { title : 'Home' , href : 'home' },
        { title : 'Blog' , href : 'blogs' },
        { title : 'About' , href : 'about-us' },
        { title : 'Contact Us' , href : 'contact-us' },
    ];
    const socialLinks : Array< { title : string , href : string } > = [
        { title : 'FB' , href : '#'},
        { title : 'IG' , href : '#'},
        { title : 'LN' , href : '#'},
    ]

    return(
        <>
            <section className="w-full flex justify-center py-34 bg-primary mt-40 relative" id="subscribe">
                <div className="max-w-[825px] flex flex-col items-center padding-x min-[825px]:px-0">
                    <h2 className="font-bold text-center text-4xl sm:text-5xl md:text-6xl text-white tracking-tight">Get our stories delivered From us to your inbox weekly.</h2>
                    <form action="" className="w-full flex justify-center gap-3 mt-12">
                        <input type="text" className="w-full max-w-[320px] py-5 px-6 bg-white rounded-lg" placeholder="Your Email"/>
                        <input type="submit" className="w-full max-w-[160px] py-5 px-6 border border-white text-white rounded-lg" value="Get started"/>
                    </form>
                    <p className="max-w-[555px] text-[#bbbbbb] text-center mt-6">Get a response tomorrow if you submit by 9pm today. If we received after 9pm will get a reponse the following day.</p>
                </div>
            </section>

            <footer className="w-full flex flex-col items-center justify-center py-14 padding-x">

                <div className="container flex flex-col items-center gap-10 pb-10 border-b border-b-primary">

                    {/* Logo */}
                    <div className="flex items-center gap-2.5 select-none">
                        <img className="w-12 h-12" src="/assets/icons/logo.svg" alt="" loading="lazy"/>
                        <span className="font-extrabold text-3xl">Zarrin</span>
                    </div>

                    {/* Navigation Links */}
                    <nav>
                        <ul className="flex flex-wrap gap-10">
                            {links.map( (link , index) => (
                                <li key={`footer-link-${index}`}>
                                    <Link to={link.href} className="font-medium text-sm md:text-base hover:text-primary transition-colors duration-200">
                                        {link.title}
                                    </Link>
                                </li>
                            ) )}

                        </ul>
                    </nav>

                    {/* Social Links */}
                    <div className="w-full flex justify-center gap-4">
                        {socialLinks.map( (link , index) => (
                            <a key={`footer-social-link-${index}`} href={link.href} className="w-10 h-10 flex items-center justify-center text-white font-bold bg-primary rounded-full">
                                {link.title}
                            </a>
                        ))}
                    </div>

                </div>

                <p className="w-full mt-10 text-xs md:text-sm lg:text-base text-center">Copyright Ideapeel Inc © 2023. All Right Reserved</p>

            </footer>
        </>

    )
}
export default Footer;