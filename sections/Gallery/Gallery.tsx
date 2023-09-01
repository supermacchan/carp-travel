"use client"

import { useState, useRef, useEffect } from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation } from 'swiper/modules';

import { galleryItems, gallerySectionTitle } from "@/utils/staticData/gallery";

import { SectionTitle } from "@/components/SectionTitle/SectionTitle";
import { GalleryMobile } from "../../components/GalleryMobile/GalleryMobile";
import { GallerySwiperNav } from "../../components/GallerySwiperNav/GallerySwiperNav";
import { GallerySwiperSlide } from "../../components/GallerySwiperSlide/GallerySwiperSlide";

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/scss/navigation';
import './Gallery.scss';

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
            className="gallery relative bg-cover bg-no-repeat bg-center"
        >
            <div className="bg-overlay-75 tab:bg-overlay-85">
                {/* content */}
                <div 
                    className="section px-5 py-[56px] relative z-10
                        tab:px-8 tab:pt-16 tab:pb-[58px] desk:py-[104px] tab:h-[575px] 
                        desk:px-0 desk:h-[818px]"
                >
                    <SectionTitle 
                        title={gallerySectionTitle}
                        titleStyles="mb-6 tab:mb-16"
                    />
                    
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