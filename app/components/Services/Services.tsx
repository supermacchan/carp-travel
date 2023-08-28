"use client"

import { useState, useRef } from "react"
import { Overlay } from "../Overlay/Overlay"
import { SingleService } from "./SingleService"
import { options, services } from "@/app/utils/staticData/services"
import { animated, useTransition } from '@react-spring/web'

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-fade';
import './Swiper.scss'

import { EffectFade } from 'swiper/modules';

export const Services: React.FC = () => {
    const [slideNum, setSlideNum] = useState<number>(1);
    const [background, setBackground] = useState<string>(services[0].bg);
    const [promo, setPromo] = useState<string>(services[0].promo);

    const swiperRef: any = useRef<typeof Swiper | null>(null);

    const slideNumTransition = useTransition(slideNum, {
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
        config: (item, index, phase) => ({
            duration: phase === 'enter' ? 700 : 500, 
        }),
    })

    const promoTransition = useTransition(promo, {
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
        config: (item, index, phase) => ({
            duration: phase === 'enter' ? 1000 : 0, 
        }),
    })

    const handleMenuOptionSelect = (e: React.MouseEvent<HTMLLIElement>) => {
        const currentOptionIndex = options.indexOf(e.currentTarget.innerHTML);

        // double-click on the selected option
        if (currentOptionIndex === -1) {
            return;
        }

        const currentOptionId = currentOptionIndex + 1;
        const currentSlide = services.find(s => s.id === currentOptionId);

        setSlideNum(currentOptionId);

        slideTo(currentOptionIndex);

        if(currentSlide) {
            setBackground(currentSlide.bg);
            setPromo(currentSlide.promo);
        }
    }

    const slideTo = (index: number) => {
        if (swiperRef) {
            const swiperInstance = swiperRef.current.swiper;
            swiperInstance.slideTo(index, 1500);
        }
    };


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
                        0
                        {slideNumTransition((style, slideNum) => (
                            <animated.span style={style}>{slideNum}</animated.span>
                        ))}
                        /
                        <span className="opacity-20">0{services.length}</span>
                    </div>
                    
                    <Swiper
                        ref={swiperRef}
                        effect={'fade'}
                        slidesPerView={1}
                        fadeEffect={{
                            crossFade: true,
                          }}
                        speed={1500}
                        allowTouchMove={false}
                        modules={[EffectFade]}
                        grabCursor={false}
                        className="tab:w-full tab:h-full"
                    >
                        {services.map(s => 
                            <SwiperSlide key={s.id}>
                                <SingleService
                                    image={s.image}
                                    promo={s.promo}
                                    title={s.title}
                                    text={s.text}
                                />
                            </SwiperSlide>
                        )}
                    </Swiper>

                    {/* menu */}
                    <ul 
                        className="w-[187px] absolute bottom-[210px] left-5 z-10 flex flex-col gap-4 text-xl font-extralight leading-[17px] uppercase
                        tab:w-[204px] tab:absolute tab:bottom-auto tab:top-[182px] tab:left-[515px] tab:text-[22px] tab:leading-[18px]
                        desk:w-[255px] desk:left-[644px] desk:gap-6 desk:top-[244px] desk:text-[28px] desk:leading-[24px]"
                    >
                        {options.map(o => 
                            <li 
                                key={o} 
                                onClick={e => handleMenuOptionSelect(e)}
                                className={options.indexOf(o) + 1 === slideNum 
                                    ? 'active-service opacity-100'
                                    : 'opacity-50 cursor-pointer hover:opacity-100 hover:ml-2 focus:opacity-100 focus:ml-2 transition-all ease-in duration-200'
                                }
                            >
                                {o}

                                {options.indexOf(o) + 1 === slideNum && 
                                    promoTransition((style, promo) => (
                                        <animated.span 
                                            style={style}
                                            className="hidden desk:block desk:w-[293px] desk:absolute desk:top-0 desk:right-[-335px] desk:text-xs desk:font-extralight desk:leading-6 desk:tracking-[2.4px] desk:capitalize"
                                        >
                                            {promo}
                                        </animated.span>
                                    ))
                                }
                            </li>
                        )}
                    </ul>
                </div>
            </Overlay>
        </section>
    )
}