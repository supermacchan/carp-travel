"use client"

import { Overlay } from "../Overlay/Overlay"
import { scrollToSection } from "@/app/utils/scroll"

export const Hero = () => {

    const handleButtonClick = () => {
        scrollToSection('contacts');
    }

    return (
        <section 
            className="mt-[-105px] pt-[105px]
                tab:mt-[-124px] tab:pt-[124px]
                desk:mt-[-130px] desk:pt-[130px]
                bg-bg-hero-mob bg-cover bg-no-repeat bg-center 
                tab:bg-bg-hero-tab desk:bg-bg-hero-desk"
        >
            <Overlay overlay="overlay">
                <div className="section px-5 pb-14 
                    tab:px-8 tab:pb-16 tab:h-[410px] tab:relative
                    desk:px-6 desk:pb-20 desk:h-[577px]">

                    <h1 className="ml-auto mb-6 flex flex-wrap justify-end w-[123px] text-right uppercase
                        tab:w-[230px] tab:absolute tab:right-8 tab:top-0 desk:w-[305px] desk:right-6">
                        <span className="text-[37px] font-medium leading-9 tab:text-[67px] tab:leading-[67px] desk:text-[98px] desk:leading-[98px]">7</span>
                        <span className="text-[37px] font-thin tracking-[1.665px] leading-9 tab:text-[67px] tab:leading-[67px] tab:tracking-[6.7px] desk:text-[98px] desk:leading-[98px] desk:tracking-[1px]">days</span>
                        <span className="relative right-[-5px] text-xs font-light tracking-[9.48px] leading-3 tab:right-[-20px] tab:text-sm tab:leading-3 tab:tracking-[25.9px] desk:right-[-30px] desk:text-base desk:leading-4 desk:tracking-[36.48px]">journey</span>
                    </h1>

                    <h2 className="title mb-6 w-[280px] flex flex-col 
                        tab:w-[426px] tab:absolute tab:left-8 tab:top-0
                        desk:w-[646px] desk:left-6">
                        <span className="font-medium">Uncover</span>
                        Carpathian’s Secrets
                    </h2>

                    <p className="mb-6 w-[165px] text-[10px] font-extralight leading-4
                        tab:mb-0 tab:w-[270px] tab:absolute tab:bottom-16 tab:left-8 tab:text-sm tab:tracking-[1.26px] tab:leading-[16px]
                        desk:w-auto desk:bottom-20 desk:left-6 desk:text-base desk:leading-6 desk:tracking-[1.44px]">
                        Hoverla / Yaremche / Zakarpattia / Vorokhta / Synevyr Lake / Bukovel
                    </p>

                    <div className="w-[280px] tab:w-[230px] tab:absolute tab:bottom-16 tab:right-8
                        desk:w-[294px] desk:bottom-20 desk:right-6">
                        <p className="mb-6 text-sm font-extralight leading-[20px] text-justify
                            tab:mb-7 tab:text-base tab:leading-[20px] desk:text-lg desk:leading-6">
                            We offer you unforgettable trips to the most beautiful parts of the Carpathians. Enjoy stunning views, exciting expeditions, and the best service!
                        </p>

                        <button 
                            type="button" 
                            className="mx-auto px-16 py-[18px] w-[280px] relative bg-white bg-opacity-10 
                                uppercase text-center text-lg font-bold leading-[18px]
                                hover:bg-opacity-20 focus:bg-opacity-20 transition-all duration-200 ease-in
                                tab:w-auto tab:py-4 desk:w-[294px] desk:text-[32px] desk:leading-[39px] tab:bg-opacity-5
                                before:w-[42px] before:h-[53px] before:absolute before:top-0 before:left-0 before:bg-mob-button-left before:bg-opacity-100
                                after:w-[42px] after:h-[53px] after:absolute after:top-0 after:right-0 after:bg-mob-button-right after:bg-opacity-100
                                tab:before:w-[35px] tab:before:h-[50px] tab:before:bg-tab-button-left 
                                tab:after:w-[35px] tab:after:h-[50px] tab:after:bg-tab-button-right
                                desk:before:w-[44px] desk:before:h-[71px] desk:before:bg-desk-button-left 
                                desk:after:w-[44px] desk:after:h-[71px] desk:after:bg-desk-button-right"
                            onClick={handleButtonClick}
                        >
                            Join now
                        </button>
                    </div>
                </div>
            </Overlay>
        </section>
    )
}