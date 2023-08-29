"use client"

import { useState, useEffect } from "react"

import { CareerDescription } from "./CareerDescription"
import { CareerForm } from "./CareerForm"

import './Career.scss'

const Career: React.FC = () => {
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
        setIsMobile(false);
      }

      if (windowWidth && windowWidth < 768) {
        setIsMobile(true);
      }
    }, [windowWidth]);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    return (
        <>
            <section 
                id="career"
                className="relative bg-bg-career-mob bg-cover bg-no-repeat bg-center
                    tab:bg-bg-career-tab desk:bg-bg-career-desk
                    before:w-full before:h-[247px] before:absolute before:top-0 before:left-0 before:right-0 
                    before:bg-section-top-gradient before:opacity-75 
                    desk:before:hidden 
                    after:w-full after:h-[247px] after:absolute after:bottom-0 after:left-0 after:right-0 
                    after:bg-section-bottom-gradient after:opacity-75
                    desk:after:hidden"
            >
                <div className="bg-overlay tab:bg-overlay-75">
                    {/* content */}
                    <div 
                        className="section px-5 py-[56px] relative z-10
                            tab:px-8 tab:py-16 desk:py-[104px] 
                            desk:px-6 desk:h-[818px]"
                    >
                        <CareerDescription />

                        {!isMobile && 
                            <div 
                                className="tab:absolute tab:bottom-16 tab:right-8
                                desk:bottom-[104px] desk:right-6"
                            >
                                <CareerForm />
                            </div>
                        }

                    </div>
                </div>
            </section>

            {isMobile &&
                <section 
                    id="career"
                    className="relative bg-bg-career-mob bg-cover bg-no-repeat bg-center
                        before:w-full before:h-[247px] before:absolute before:top-0 before:left-0 before:right-0 
                        before:bg-section-top-gradient before:opacity-75 
                        after:w-full after:h-[247px] after:absolute after:bottom-0 after:left-0 after:right-0 
                        after:bg-section-bottom-gradient after:opacity-75"
                >
                    <div className="bg-overlay-75">
                        <div className="section px-5 py-[56px] relative z-10">
                            <CareerForm />
                        </div>
                    </div>
                </section>
            }
        </>
    )
}

export default Career;