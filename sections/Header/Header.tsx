"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"

import { scrollToSection } from "@/utils/scroll"

import { HeaderNav } from "../../components/HeaderNav/HeaderNav"

export const Header: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const [isMobile, setIsMobile] = useState<boolean>(false);

    const [windowWidth, setWindowWidth] = useState<number | null>(null);
    
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
                <Link href={"/"}>
                    <Image
                        width={61}
                        height={22}
                        src="/icons/logo.svg"
                        alt="CarpTravel logo"
                    />
                </Link>
                
                {/* mob menu button */}
                <button 
                    type="button"
                    className="text-sm font-normal tracking-[1.4px] uppercase text-white tab:hidden"
                    onClick={toggleMobileMenu}
                >
                    Menu
                </button>

                {/* navigation */}
                <HeaderNav 
                    menuOpen={menuOpen}
                    handleNavLinkClick={handleNavLinkClick}
                    toggleMobileMenu={toggleMobileMenu}
                />

            </div>
        </header>
    )
}