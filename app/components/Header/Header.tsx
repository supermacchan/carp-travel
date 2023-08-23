"use client"

import Image from "next/image"
import Link from "next/link"
import { animateScroll } from "react-scroll"

import { useState, useEffect } from "react"

export const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const [windowWidth, setWindowWidth] = useState<number | null>(null);

    // tracking window size 
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

    const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (isMobile) {
            setMenuOpen(false);
        }
        
        scrollToSection(e.currentTarget.id);
    }

    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId) as HTMLDivElement;
      
        if (section) {
          const sectionTop = section.offsetTop;
          animateScroll.scrollTo(sectionTop, {
            duration: 1500,
            delay: 1000,
            smooth: 'easeOutQuint',
          })
        }
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
                {menuOpen && 
                    <nav 
                        className="w-screen h-screen absolute top-0 left-0 
                        grid place-content-center 
                        bg-[rgb(1,10,5)] bg-opacity-[0.75] backdrop-blur-[25px]
                        tab:static tab:w-auto tab:h-auto tab:bg-transparent tab:backdrop-blur-none"
                    >
                        <ul 
                            className="flex flex-col items-center gap-12 text-lg font-normal tracking-[1.8px] text-white
                            tab:flex-row tab:gap-6 tab:text-sm tab:tracking-[1.4px]
                            desk:gap-14"
                        >
                            <li>
                                <Link href={"#about"} onClick={(e) => handleNavLinkClick(e)}>About</Link>
                            </li>
                            <li>
                                <Link href={"#services"} onClick={(e) => handleNavLinkClick(e)}>Services</Link>
                            </li>
                            <li>
                                <Link href={"#career"} onClick={(e) => handleNavLinkClick(e)}>Career</Link>
                            </li>
                            <li>
                                <Link href={"#gallery"} onClick={(e) => handleNavLinkClick(e)}>Gallery</Link>
                            </li>
                            <li>
                                <Link href={"#contacts"} onClick={(e) => handleNavLinkClick(e)}>Contacts</Link>
                            </li>
                        </ul>
                        <button 
                            type="button"
                            onClick={toggleMobileMenu}
                            className="absolute top-[43px] right-5 text-sm font-normal tracking-[1.4px] uppercase text-white tab:hidden"
                        >
                            Close
                        </button>
                    </nav>
                }
            </div>
        </header>
    )
}