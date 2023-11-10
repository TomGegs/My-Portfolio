import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import NavBgOnScroll from '../../hooks/NavOnScroll';

import images from '../../data/images';

import NavBarMobileMenuItems from './NavBarMobileMenuItems';
import ButtonDownloadHandler from '../buttons/ButtonDownloadHandler';
import SocialButtons from '../buttons/SocialLinks';

function NavBar() {
    // Mobile menu toggle & state
    const [mobileMenu, setMobileMenu] = useState(false);
    const toggleMenu = () => setMobileMenu(!mobileMenu);

    // Change Navbar background on scroll
    const [navBarBackground] = NavBgOnScroll();

    const navLinks = [
        {
            label: 'Home',
            link: '/',
        },
        {
            label: 'Projects',
            link: '/projects',
        },
        {
            label: 'About',
            link: '/about',
        },
        {
            label: 'Contact',
            link: '/contact',
        },
    ];

    // Hide open mobile menu when window is resized to desktop
    useEffect(() => {
        window.addEventListener(
            'resize',
            () => window.innerWidth >= 960 && setMobileMenu(false)
        );
    }, []);

    return (
        <nav
            className={`absolute left-0 top-0 z-40 mx-auto h-20 w-full max-w-[100dvw] justify-end px-4 py-4 font-encode font-medium text-[#FFFDFA] transition-all duration-200 ease-in lg:fixed lg:flex lg:justify-center lg:px-24 ${
                // Navbar hook
                navBarBackground
                    ? // on scroll changes to:
                      'rounded-b-xl border-none bg-gradient-to-b from-bgPrimary to-[#d7e4e0]/10 shadow-md backdrop-blur transition-all duration-200 ease-in'
                    : // at top of page uses default class
                      ''
            } `}
        >
            {/* Container */}
            <div className="hidden h-full w-full max-w-[1920px] flex-row items-center justify-between lg:flex ">
                {/* Left side: website logo */}
                <Link to="/">
                    <img
                        src={images.bannerLogo}
                        alt="bannerLogo"
                        className="hidden cursor-pointer lg:block "
                    />
                </Link>

                {/* Right side:  navigation items */}
                <ul className="hidden space-x-4 text-center lg:flex">
                    {navLinks.map((item) => (
                        <Link key={item.label} to={item.link}>
                            <li className="cursor-pointer rounded-lg px-3 py-2 font-medium text-[#FFFDFA] hover:bg-slate-700 hover:text-altSecond">
                                {item.label}
                            </li>
                        </Link>
                    ))}

                    <ButtonDownloadHandler
                        label="Resumé"
                        fileName="Tom_Geoghegan_Resume_Front_End_Developer.pdf"
                        filePath="./files/Tom_Geoghegan_Resume_Front_End_Developer.pdf"
                        styling="flex items-center rounded-lg bg-primary px-3 py-2  font-medium  text-[#FFFDFA] hover:bg-altSecond"
                    />
                </ul>
            </div>

            {/* Show burgerMenu icon on mobile screens */}
            <div className="relative z-50 flex w-full items-center justify-between overflow-hidden px-2  lg:hidden">
                <Link to="/">
                    <img
                        src={images.bannerLogo}
                        alt="bannerLogo"
                        className="flex w-32 lg:hidden"
                    />
                </Link>
                <div className="fixed right-0 mr-8 flex">
                    {mobileMenu ? (
                        <images.closeMenu
                            size={25}
                            className="z-50"
                            onClick={toggleMenu}
                        />
                    ) : (
                        <images.burgerMenu size={25} onClick={toggleMenu} />
                    )}
                </div>
            </div>

            {/* Mobile links */}
            <div
                className={
                    mobileMenu
                        ? 'fixed left-0 top-0 h-full w-full transition-all duration-500 ease-in-out'
                        : 'ease-out-in fixed left-[-600%] top-0 h-full w-full transition-all duration-500'
                }
            >
                {/* Mobile Menu Wrapper */}
                <div className="flex min-h-[100vh] w-[100%] flex-1 flex-col overflow-hidden bg-opacity-50 bg-gradient-to-r from-bgPrimary to-[#d7e4e0]/10 shadow-md backdrop-blur">
                    {/* Top - Profile Wrapper */}
                    <div className="mx-8 mt-12 flex w-[80%] flex-1 flex-row items-center justify-center rounded-[1rem] md:w-[fit] ">
                        {/* Profile image */}
                        <img
                            src={images.myHeadshot2}
                            alt="headshot"
                            className="h-20 rounded-l-[1rem] object-cover"
                        />
                        {/* Profile text */}
                        <div className="flex h-20 flex-1 flex-col justify-center rounded-r-[1rem] bg-bgSecondary pl-4 pr-12">
                            <p className="font-encode font-medium text-[#FFFDFA]">
                                Tom Geoghegan
                            </p>
                            <p className="font-encode text-sm font-thin text-[#FFFDFA]">
                                Front-end developer
                            </p>
                            <p className="font-encode text-sm font-thin text-[#FFFDFA]">
                                tomgegs@outlook.com
                            </p>
                        </div>
                    </div>
                    {/* Middle Wrapper - Menu links */}
                    <div className="mt-4 flex h-full w-[95%] flex-1 flex-col justify-between rounded-r-[2rem] bg-bgSecondary py-12">
                        <ul className="justify-left mb-6 flex w-full  flex-col space-y-8  px-8 font-encode font-semibold text-[#FFFDFA]">
                            <Link to="/" onClick={toggleMenu}>
                                <NavBarMobileMenuItems
                                    menuItem="Home"
                                    onClick={toggleMenu}
                                />
                            </Link>
                            <Link to="projects" onClick={toggleMenu}>
                                <NavBarMobileMenuItems menuItem="Projects" />
                            </Link>
                            <Link to="about" onClick={toggleMenu}>
                                <NavBarMobileMenuItems
                                    menuItem="About"
                                    onClick={toggleMenu}
                                />
                            </Link>

                            <ButtonDownloadHandler
                                label="Resumé"
                                fileName="Tom_Geoghegan_Resume_Front_End_Developer.pdf"
                                filePath="./files/Tom_Geoghegan_Resume_Front_End_Developer.pdf"
                                styling="cursor-pointer rounded-xl border border-bgPrimary text-left from-altSecond to-primary p-4 hover:border-primary hover:text-primary active:border-bgPrimary active:bg-gradient-to-r active:text-[#FFFDFA]"
                            />
                        </ul>
                        {/* Bottom - Contact button */}
                        <div className="relative flex w-full place-content-center ">
                            <div className="left-4.5 animate-gradientFast absolute -top-1 h-16 w-[90%] bg-gradient-to-r from-primary via-altSecond to-secondary blur-md" />
                            <Link
                                to="contact"
                                onClick={toggleMenu}
                                className="flex w-full justify-center "
                            >
                                <button
                                    type="button"
                                    className=" relative flex w-[90%] justify-center rounded-xl  bg-bgPrimary py-4 hover:text-primary active:translate-y-0.5 active:scale-95"
                                >
                                    Let&apos;s work together
                                </button>
                            </Link>
                        </div>
                        <div className="-mb-8 mt-4 flex overflow-hidden align-bottom">
                            <SocialButtons size="30" pulse="hidden" />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
