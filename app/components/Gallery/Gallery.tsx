import Image from "next/image"

export const Gallery = () => {
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
                <div className="section px-5 py-[56px] relative z-10
                    tab:px-8 tab:pt-16 tab:pb-[58px] desk:py-[104px] desk:px-6 desk:h-[818px]">
                    <h2 className="title mb-6 tab:mb-16">
                        Our <span className="font-medium">Gallery</span>
                    </h2>

                    <ul className="flex flex-col gap-6 items-center
                        tab:flex-row">
                        <li className="w-[280px] h-[187px] tab:w-[415px] tab:h-[294px] desk:w-[606px] desk:h-[429px]">
                            <Image 
                                width={606}
                                height={429}
                                src="/images/gallery-1@2x.jpg"
                                alt="mountains"
                                loading="lazy"
                                sizes="(max-width: 767px) 280px, (max-width: 1279px) 415px, 606px"
                                className="w-[280px] h-[187px] tab:w-[415px] tab:h-[294px] desk:w-[606px] desk:h-[429px] object-cover"
                            />
                        </li>
                        <li className="w-[280px] h-[187px] tab:w-[415px] tab:h-[294px] desk:w-[606px] desk:h-[429px]">
                            <Image 
                                width={280}
                                height={187}
                                src="/images/gallery-2@2x.jpg"
                                alt="a lake, a forest and a mountain"
                                loading="lazy"
                                sizes="(max-width: 767px) 280px, (max-width: 1279px) 415px, 606px"
                                className="w-[280px] h-[187px] tab:w-[415px] tab:h-[294px] desk:w-[606px] desk:h-[429px] object-cover"
                            />
                        </li>
                        <li className="w-[280px] h-[187px] tab:w-[415px] tab:h-[294px] desk:w-[606px] desk:h-[429px]">
                            <Image 
                                width={280}
                                height={187}
                                src="/images/gallery-3@2x.jpg"
                                alt="mountain road"
                                loading="lazy"
                                sizes="(max-width: 767px) 280px, (max-width: 1279px) 415px, 606px"
                                className="w-[280px] h-[187px] tab:w-[415px] tab:h-[294px] desk:w-[606px] desk:h-[429px] object-cover"
                            />
                        </li>
                    </ul>

                    <button 
                        type="button"
                        className="hidden tab:block tab:text-[33px] tab:font-thin tab:leading-[33px] tab:uppercase"
                    >
                        Back
                    </button>
                    <button 
                        type="button"
                        className="hidden tab:block tab:text-[33px] tab:font-thin tab:leading-[33px] tab:uppercase"
                    >
                        Next
                    </button>
                    
                </div>
            </div>
        </section>
    )
}