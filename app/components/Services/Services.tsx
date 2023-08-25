"use client"

import { useState } from "react"
import { Overlay } from "../Overlay/Overlay"
import { SingleService } from "./SingleService"
import { options, services } from "@/app/utils/staticData/data"
import { animated, useTransition } from '@react-spring/web'

export const Services = () => {
    const [slideNum, setSlideNum] = useState(1);
    const [background, setBackground] = useState('bg-services-1@2x.jpg');

    const transition = useTransition(slideNum, {
        exitBeforeEnter: true,
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

    const handleMenuOptionSelect = (e: React.MouseEvent<HTMLLIElement>) => {
        const currentOptionIndex = options.indexOf(e.currentTarget.innerHTML);
        const currentOptionId = currentOptionIndex + 1;
        const currentSlide = services.find(s => s.id === currentOptionId);

        setSlideNum(currentOptionId);

        if(currentSlide) {
            setBackground(currentSlide.bg);
        }
    }

    return (
        <section 
            id="services"
            className="relative bg-cover bg-no-repeat bg-center transition-all ease-in duration-500 delay-100
                before:w-full before:h-[291px] before:absolute before:top-0 before:left-0 before:right-0 before:bg-section-top-gradient before:opacity-75 
                tab:before:h-[247px] desk:before:h-[241px] desk:before:opacity-25 
                after:w-full after:h-[291px] after:absolute after:bottom-0 after:left-0 after:right-0 after:bg-section-bottom-gradient after:opacity-75
                tab:after:h-[247px] desk:after:h-[241px] desk:after:opacity-25"
            style={{backgroundImage: `url(/images/${background})`}}
        >
            <Overlay overlay="overlay">
                <div className="section px-5 pt-[54px] pb-[56px] h-[851px] relative
                    tab:px-8 tab:py-16 tab:h-[621px]
                    desk:px-6 desk:py-[104px] desk:h-[779px]">
                    <h2 className="title mb-6 tab:mb-0">
                        We <span className="font-medium">offer</span>
                    </h2>

                    <div className=" mb-[13px] text-right text-[43px] font-thin leading-[43px]
                        tab:mb-0 tab:absolute tab:top-16 tab:left-[515px] tab:text-[67px] tab:leading-[67px]
                        desk:top-[104px] desk:left-[644px] desk:text-[98px] desk:leading-[98px] "
                    >
                        {transition((style, slideNum) => (
                            <animated.span style={style}>0{slideNum}</animated.span>
                        ))}
                        /
                        <span className="opacity-20">0{services.length}</span>
                    </div>
                    
                    {/* temp */}
                    <SingleService 
                        image={services[slideNum - 1].image}
                        promo={services[slideNum - 1].promo}
                        title={services[slideNum - 1].title}
                        text={services[slideNum - 1].text}
                    />
                    
                    {/* <ul>
                        {services.map(s => 
                            <SingleService
                                key={s.id}
                                image={s.image}
                                promo={s.promo}
                                title={s.title}
                                text={s.text}
                            />
                        )}
                    </ul> */}

                    {/* menu */}
                    <ul className="w-[187px] relative z-10 flex flex-col gap-6 mt-6 text-xl font-extralight leading-[17px] uppercase
                        tab:mt-0 tab:w-[204px] tab:absolute tab:top-[182px] tab:left-[515px] tab:gap-4 tab:text-[22px] tab:leading-[18px]
                        desk:w-[255px] desk:left-[644px] desk:gap-6 desk:top-[244px] desk:text-[28px] desk:leading-[24px]">
                        {options.map(o => 
                            <li 
                                key={o} 
                                onClick={e => handleMenuOptionSelect(e)}
                                className={options.indexOf(o) + 1 === slideNum 
                                    ? 'ml-[18px] relative font-medium opacity-100 before:w-[9px] before:h-[9px] before:absolute before:left-[-18px] before:top-1/2 before:translate-y-[-50%] before:bg-service-select cursor-pointer transition-all ease-in duration-200' 
                                    : 'opacity-50 cursor-pointer hover:opacity-100 hover:ml-2 focus:opacity-100 focus:ml-2 transition-all ease-in duration-200'
                                }
                            >
                                {o}
                            </li>
                        )}
                    </ul>
                </div>
            </Overlay>
        </section>
    )
}