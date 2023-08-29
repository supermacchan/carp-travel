import Image from "next/image"

import { ServiceProps } from "@/app/utils/types"

export const SingleService: React.FC<ServiceProps> = ({image, promo, title, text}) => {

    return (
        <>
            <div 
                className="mb-3 w-[280px] h-[213px] 
                    tab:mb-0 tab:w-[463px] tab:h-[370px] tab:absolute tab:left-0 tab:top-[50px]
                    desk:w-[607px] desk:h-[429px] desk:top-[44px]"
            >
                    <Image 
                        width={607}
                        height={429}
                        src={image}
                        alt={title}
                        loading="lazy"
                        sizes="(max-width: 767px) 280px, (max-width: 1279px) 463px, 607px"
                        className="object-cover w-[280px] h-[213px] tab:w-[463px] tab:h-[370px] desk:w-[607px] desk:h-[429px]"
                    />
            </div> 
            
            <p 
                className="text-right text-xs font-extralight leading-6 tracking-[2.4px]
                    tab:text-left tab:absolute tab:w-[221px] tab:right-0 tab:top-[240px]
                    desk:hidden desk:w-[200px] desk:top-[239px] desk:right-[129px] desk:left-auto"
            >
                {promo}
            </p>
            <p 
                className="px-0 max-w-screen-lg-mob absolute z-10 bottom-0 left-0 text-sm font-extralight leading-5
                    tab:w-[221px] tab:left-auto tab:right-0 tab:bottom-[68px] tab:text-justify tab:text-[13px] tab:leading-[20px]
                    desk:p-0 desk:w-[293px] desk:bottom-[98px] desk:right-6 desk:left-auto desk:text-lg desk:leading-6"
            >
                {text}
            </p>
        </>
    )
}