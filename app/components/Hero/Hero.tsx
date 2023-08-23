import { Overlay } from "../Overlay/Overlay"

export const Hero = () => {
    return (
        <div 
            className="mt-[-105px] pt-[105px]
                tab:mt-[-124px] tab:pt-[124px]
                desk:mt-[-130px] desk:pt-[130px]
                bg-bg-hero bg-cover bg-no-repeat bg-overlay"
        >
            <Overlay>
                <section className="px-5 pb-14 mx-auto max-w-screen-lg-mob text-white
                    tab:px-8 tab:pb-16 tab:h-[410px] tab:max-w-screen-tab tab:w-[768px] tab:relative
                    desk:px-6 desk:pb-20 desk:w-[1280px] desk:h-[577px] desk:max-w-screen-desk">

                    <h1 className="ml-auto mb-6 flex flex-wrap justify-end w-[123px] text-right uppercase
                        tab:w-[230px] tab:absolute tab:right-8 tab:top-0 desk:w-[305px] desk:right-6">
                        <span className="text-[37px] font-medium leading-9 tab:text-[67px] tab:leading-[67px] desk:text-[98px] desk:leading-[98px]">7</span>
                        <span className="text-[37px] font-thin tracking-[1.665px] leading-9 tab:text-[67px] tab:leading-[67px] tab:tracking-[6.7px] desk:text-[98px] desk:leading-[98px] desk:tracking-[1px]">days</span>
                        <span className="relative right-[-5px] text-xs font-light tracking-[9.48px] leading-3 tab:right-[-20px] tab:text-sm tab:leading-3 tab:tracking-[25.9px] desk:right-[-30px] desk:text-base desk:leading-4 desk:tracking-[36.48px]">journey</span>
                    </h1>

                    <h2 className="mb-6 w-[280px] flex flex-col text-4xl text-[40px] font-thin tracking-[-1.6px] leading-[56px] uppercase
                        tab:w-[426px] tab:absolute tab:left-8 tab:top-0 tab:text-[67px] tab:tracking-[-2.68px] tab:leading-[67px]
                        desk:w-[646px] desk:left-6 desk:text-[98px] desk:tracking-[-3.92px] desk:leading-[98px]">
                        <span className="font-medium">Uncover</span>
                        Carpathian’s Secrets
                    </h2>

                    <p className="mb-6 w-[165px] text-[10px] font-extralight leading-4
                        tab:mb-0 tab:w-[270px] tab:absolute tab:bottom-16 tab:left-8 tab:text-sm tab:tracking-[1.26px]
                        desk:w-auto desk:bottom-20 desk:left-6 desk:text-base desk:leading-6 desk:tracking-[1.44px]">
                        Hoverla / Yaremche / Zakarpattia / Vorokhta / Synevyr Lake / Bukovel
                    </p>

                    <div className="w-[280px] tab:w-[230px] tab:absolute tab:bottom-16 tab:right-8
                        desk:w-[294px] desk:bottom-20 desk:right-6">
                        <p className="mb-6 text-sm font-extralight leading-[20px] text-justify
                            tab:mb-7 tab:text-base desk:text-lg desk:leading-6">
                            We offer you unforgettable trips to the most beautiful parts of the Carpathians. Enjoy stunning views, exciting expeditions, and the best service!
                        </p>

                        <button 
                            type="button" 
                            className="mx-auto px-16 py-[18px] w-[280px] relative bg-white bg-opacity-10 
                                uppercase text-center text-lg font-bold leading-[18px]
                                tab:w-auto tab:py-4 desk:w-[294px] desk:text-[32px] desk:leading-[39px] tab:bg-opacity-5
                                before:w-[42px] before:h-[53px] before:absolute before:top-0 before:left-0 before:bg-mob-button-left before:bg-opacity-100
                                after:w-[42px] after:h-[53px] after:absolute after:top-0 after:right-0 after:bg-mob-button-right after:bg-opacity-100
                                tab:before:w-[35px] tab:before:h-[50px] tab:before:bg-tab-button-left 
                                tab:after:w-[35px] tab:after:h-[50px] tab:after:bg-tab-button-right
                                desk:before:w-[44px] desk:before:h-[71px] desk:before:bg-desk-button-left 
                                desk:after:w-[44px] desk:after:h-[71px] desk:after:bg-desk-button-right"
                        >
                            Join now
                        </button>
                    </div>
                </section>
            </Overlay>
        </div>
    )
}