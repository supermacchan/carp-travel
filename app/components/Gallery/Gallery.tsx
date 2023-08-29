"use client"

import { useState, useRef, useEffect } from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation } from 'swiper/modules';

import { galleryItems } from "@/app/utils/staticData/gallery";

import { GalleryMobile } from "./GalleryMobile";
import { GallerySwiperNav } from "./GallerySwiperNav";
import { GallerySwiperSlide } from "./GallerySwiperSlide";

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/scss/navigation';
import './GallerySwiper.scss';

const Gallery: React.FC = () => {
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
                before:w-full before:h-[247px] before:absolute before:top-0 before:left-0 before:right-0 
                before:bg-section-top-gradient before:opacity-75 
                desk:before:h-[302px] 
                after:w-full after:h-[247px] after:absolute after:bottom-0 after:left-0 after:right-0 
                after:bg-section-bottom-gradient after:opacity-75
                desk:after:h-[302px]"
        >
            <div className="bg-overlay-75 tab:bg-overlay-85">
                {/* content */}
                <div 
                    className="section px-5 py-[56px] relative z-10
                        tab:px-8 tab:pt-16 tab:pb-[58px] desk:py-[104px] tab:h-[575px] 
                        desk:px-0 desk:h-[818px]"
                >
                    <h2 className="title mb-6 tab:mb-16">
                        Our <span className="font-medium">Gallery</span>
                    </h2>
                    
                    {/* mobile gallery */}
                    <GalleryMobile />

                    {/* swiper for tablets and desktops */}
                    <div className="hidden tab:block">

                        <GallerySwiperNav 
                            swiperReady={swiperReady}
                            prevBtnRef={prevBtnRef}
                            nextBtnRef={nextBtnRef}
                        />

                        {swiperReady && 
                            <Swiper
                                effect={'coverflow'}
                                className="h-[294px] desk:h-[429px] flex justify-center gap-6 relative"
                                loop
                                loopPreventsSliding={false}
                                loopedSlides={1}
                                grabCursor={true}
                                wrapperTag="ul"
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
                                    <SwiperSlide key={img} tag="li">
                                        {({ isActive }: {isActive: boolean}) => (
                                            <GallerySwiperSlide 
                                                isActive={isActive}
                                                img={img}
                                            />
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

export default Gallery;