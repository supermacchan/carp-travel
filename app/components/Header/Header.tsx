"use client"

import Image from "next/image"

import { useState, useEffect } from "react"
import { animated, useTransition } from '@react-spring/web'

import { scrollToSection } from "@/app/utils/scroll"

export const Header: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const [isMobile, setIsMobile] = useState<boolean>(false);

    const [windowWidth, setWindowWidth] = useState<number | null>(null);

    const transition = useTransition(menuOpen, {
        from: {
          opacity: 0,
        },
        enter: {
          opacity: 1,
        },
        leave: {
          opacity: 0,
        },
    })
    
    // tracking window size for changing orientation on mobile devices
    useEffect(() => {
        setWindowWidth(window.innerWidth);

        window.addEventListener('resize', handleResize);

        return () => {
        window.removeEventListener('resize', handleResize);
        };
    }, []);

    //  device check
    useEffect(() => {
        if (windowWidth && windowWidth >= 768) {
        setMenuOpen(true);
        setIsMobile(false);
        }

        if (windowWidth && windowWidth < 768) {
        setMenuOpen(false);
        setIsMobile(true);
        }
    }, [windowWidth]);

    // no scroll on body witn mobile menu opened
    useEffect(() => {
        if (isMobile && menuOpen) {
        document.body.style.overflow = 'hidden';
        return;
        }

        if (isMobile && !menuOpen) {
        document.body.style.overflow = 'visible';
        return;
        }
    }, [isMobile, menuOpen]);

    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };

    const toggleMobileMenu = () => {
        if (isMobile) {
            setMenuOpen(prevState => !prevState);
        }
    }

    const handleNavLinkClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (isMobile) {
            setMenuOpen(false);
        }

        scrollToSection(e.currentTarget.innerHTML.toLowerCase());
    }

    return (
        <header className="relative z-20 bg-header-gradient bg-overlay">
            <div
                className="px-5 py-9 mx-auto max-w-screen-lg-mob relative flex justify-between items-center
                tab:px-8 tab:pt-[25px] tab:pb-[66px] tab:w-[768px] tab:max-w-screen-tab
                desk:pl-6 desk:pr-[21px] desk:w-[1280px] desk:max-w-screen-desk"
            >
                {/* logo */}
                <Image
                    width={61}
                    height={22}
                    src="/icons/logo.svg"
                    alt="logo"
                />

                {/* mob menu button */}
                <button 
                    type="button"
                    className="text-sm font-normal tracking-[1.4px] uppercase text-white tab:hidden"
                    onClick={toggleMobileMenu}
                >
                    Menu
                </button>

                {/* navigation */}
                {transition((style, menuOpen) => (<>
                    {menuOpen && 
                        <animated.nav 
                            className="w-screen h-screen absolute top-0 left-0 
                            grid place-content-center 
                            bg-[rgb(1,10,5)] bg-opacity-[0.75] backdrop-blur-[25px]
                            tab:static tab:w-auto tab:h-auto tab:bg-transparent tab:backdrop-blur-none"
                            style={style}
                        >
                            <ul 
                                className="flex flex-col items-center gap-12 text-lg font-normal tracking-[1.8px] text-white
                                tab:flex-row tab:gap-6 tab:text-sm tab:tracking-[1.4px]
                                desk:gap-14"
                            >
                                <li>
                                    <button 
                                        onClick={(e) => handleNavLinkClick(e)} 
                                        className="border-b-[1px] border-transparent hover:border-white/75 focus:border-white/75 transition-all duration-200 ease-in"
                                    >
                                            About
                                    </button>
                                </li>
                                <li>
                                    <button 
                                        onClick={(e) => handleNavLinkClick(e)}
                                        className="border-b-[1px] border-transparent hover:border-white/75 focus:border-white/75 transition-all duration-200 ease-in"
                                    >
                                        Services
                                    </button>
                                </li>
                                <li>
                                    <button 
                                        onClick={(e) => handleNavLinkClick(e)}
                                        className="border-b-[1px] border-transparent hover:border-white/75 focus:border-white/75 transition-all duration-200 ease-in"
                                    >
                                        Career
                                    </button>
                                </li>
                                <li>
                                    <button 
                                        onClick={(e) => handleNavLinkClick(e)}
                                        className="border-b-[1px] border-transparent hover:border-white/75 focus:border-white/75 transition-all duration-200 ease-in"
                                    >
                                        Gallery
                                    </button>
                                </li>
                                <li>
                                    <button 
                                        onClick={(e) => handleNavLinkClick(e)}
                                        className="border-b-[1px] border-transparent hover:border-white/75 focus:border-white/75 transition-all duration-200 ease-in"
                                    >
                                        Contacts
                                    </button>
                                </li>
                            </ul>
                            <button 
                                type="button"
                                onClick={toggleMobileMenu}
                                className="absolute top-[43px] right-5 text-sm font-normal tracking-[1.4px] uppercase text-white tab:hidden"
                            >
                                Close
                            </button>
                        </animated.nav>
                    }
                </>))}
            </div>
        </header>
    )
}