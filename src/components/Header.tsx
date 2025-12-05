import {Link} from "react-router-dom";

function Header(){
    return(
        <header className="w-full flex justify-center bg-white py-6 relative z-50 padding-x">
            <div className="container flex items-center justify-between">

                {/* Logo */}
                <Link to='/' className="flex gap-2.5">
                    <img className="w-8 h-8" src="/assets/icons/logo.svg" alt="" loading="lazy"/>
                    <span className="font-extrabold text-2xl">Zarrin</span>
                </Link>

                {/* Menu Button */}
                <button type="button" className="xl:hidden w-9 h-9 bg-transparent border-none outline-none">
                    <img className="w-full h-full" src="/assets/icons/menu.svg" alt=""/>
                </button>

                {/* Links & CTA */}
                <div className="hidden xl:flex items-center gap-8">

                    {/* Navigation Links */}
                    <nav>
                        <ul className="flex gap-10">
                            <li>
                                <Link to='/blogs' className="font-medium text-xs hover:text-primary transition-colors duration-200">
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link to='/about-us' className="font-medium text-xs hover:text-primary transition-colors duration-200">
                                    About
                                </Link>
                            </li>
                        </ul>
                    </nav>

                    {/* Search & Contact Us */}
                    <div className="flex items-center gap-6">

                        <button type="button" className="w-4 h-4 cursor-pointer">
                            <svg className="w-full h-full"> <use href="#search"></use> </svg>
                        </button>

                        <Link to='contact-us' className="font-semibold text-xs text-white bg-primary px-8 py-3 rounded-md">
                            Contact Us
                        </Link>

                    </div>

                </div>

            </div>
        </header>
    )
}

export default Header;