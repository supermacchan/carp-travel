"use client"

import Image from "next/image"
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation } from 'swiper/modules';
import { useState, useRef, useEffect } from "react";
import { galleryItems } from "@/app/utils/staticData/gallery";

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/scss/navigation';
import './Swiper.scss';

export const Gallery: React.FC = () => {
    const [swiperReady, setSwiperReady] = useState(false);
    const prevBtnRef = useRef<HTMLButtonElement | null>(null);
    const nextBtnRef = useRef<HTMLButtonElement | null>(null);

    useEffect(() => {
        if (prevBtnRef && nextBtnRef) {
            setSwiperReady(true)
        }
    }, [prevBtnRef, nextBtnRef])
    
    return (
        <section 
            id="gallery"
            className="relative bg-bg-gallery-mob bg-cover bg-no-repeat bg-center
                tab:bg-bg-gallery-tab desk:bg-bg-gallery-desk
                before:w-full before:h-[247px] before:absolute before:top-0 before:left-0 before:right-0 before:bg-section-top-gradient before:opacity-75 
                desk:before:h-[302px] 
                after:w-full after:h-[247px] after:absolute after:bottom-0 after:left-0 after:right-0 after:bg-section-bottom-gradient after:opacity-75
                desk:after:h-[302px]"
        >
            <div className="bg-overlay-75 tab:bg-overlay-85">
                {/* content */}
                <div className="section px-5 py-[56px] relative z-10
                    tab:px-8 tab:pt-16 tab:pb-[58px] desk:py-[104px] tab:h-[575px] desk:px-0 desk:h-[818px]">
                    <h2 className="title mb-6 tab:mb-16">
                        Our <span className="font-medium">Gallery</span>
                    </h2>
                    
                    {/* mobile gallery */}
                    <ul className="flex flex-col gap-6 items-center tab:hidden">
                        {galleryItems.map(img => 
                            <li key={img} className="w-[280px] h-[187px]">
                                <Image 
                                    width={280}
                                    height={187}
                                    src={img}
                                    alt="mountains gallery slide"
                                    loading="lazy"
                                    className="w-[280px] h-[187px] object-cover"
                                />
                            </li>
                        )}
                    </ul>

                    {/* swiper for tablets and desktops */}
                    <div className="hidden tab:block">
                        <div className={`hidden tab:px-[38px] tab:w-[704px] tab:absolute tab:z-20 
                                tab:flex tab:justify-between tab:bottom-[81px]  
                                tab:text-[33px] tab:font-thin tab:leading-[33px]
                                ${swiperReady ? 'opacity-100' : 'opacity-0'}
                                desk:px-[225px] desk:w-[1280px] desk:bottom-[104px]
                                transition-opacity ease-in duration-300`}>
                            <button 
                                type="button"
                                className="uppercase desk:opacity-80 hover:opacity-100 focus:opacity-100 transition-opacity ease-in duration-300"
                                aria-label="Previous Slide"
                                ref={prevBtnRef}
                            >
                                Back
                            </button>
                            <button 
                                type="button"
                                className="uppercase desk:opacity-80 hover:opacity-100 focus:opacity-100 transition-opacity ease-in duration-300"
                                aria-label="Next Slide"
                                ref={nextBtnRef}
                            >
                                Next
                            </button>
                        </div>

                        {swiperReady && 
                            <Swiper
                                effect={'coverflow'}
                                className="h-[294px] desk:h-[429px] flex justify-center gap-6 relative"
                                loop
                                loopPreventsSliding={false}
                                loopedSlides={1}
                                grabCursor={true}
                                centeredSlides={true}
                                slidesPerView={2}
                                speed={1500}
                                coverflowEffect={{
                                    rotate: 0,
                                    stretch: 0,
                                    depth: 200,
                                    modifier: 1.32,
                                    slideShadows: false,
                                }}
                                breakpoints={{
                                    768: {
                                        coverflowEffect: {
                                            rotate: 0,
                                            stretch: 50,
                                            depth: 0,
                                            modifier: 1.32,
                                            scale: 0.45,
                                        },
                                    },
                                    1280: {
                                        coverflowEffect: {
                                            rotate: 0,
                                            stretch: 120,
                                            depth: 0,
                                            modifier: 1.32,
                                            scale: 0.65,
                                        },
                                    }
                                }}
                                navigation={{
                                    prevEl: prevBtnRef?.current,
                                    nextEl: nextBtnRef?.current,
                                }}
                                modules={[EffectCoverflow, Navigation]}
                            >
                                {galleryItems.map(img => 
                                    <SwiperSlide key={img}>
                                        {({ isActive }: {isActive: boolean}) => (
                                            <li
                                                className={`relative right-8 desk:right-[-13px] w-[415px] desk:w-[606px] h-[294px] desk:h-[429px] ${
                                                    isActive
                                                    ? 'desk:right-[-20px]'
                                                    : 'opacity-75'
                                                }`}
                                            >
                                                <Image 
                                                    width={606}
                                                    height={429}
                                                    src={img}
                                                    alt="mountains gallery slide"
                                                    loading="lazy"
                                                    sizes="(max-width: 767px) 280px, (max-width: 1279px) 415px, 606px"
                                                    className="w-[280px] h-[187px] tab:w-[415px] tab:h-[294px] desk:w-[606px] desk:h-[429px] object-cover"
                                                />
                                                <div className={`absolute top-0 bottom-0 left-0 right-0 bg-overlay-75 
                                                transition-opacity ease-in duration-300 ${isActive ? 'opacity-0' : 'opacity-100'}`}></div>
                                            </li>
                                        )}
                                    </SwiperSlide>
                                )}
                            </Swiper> 
                        }
                        
                    </div>

                </div>
            </div>
        </section>
    )
}