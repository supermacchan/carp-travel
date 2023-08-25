import Image from "next/image"
import { ServiceProps } from "@/app/utils/types"

import { animated, useTransition } from '@react-spring/web'

export const SingleService: React.FC<ServiceProps> = ({image, promo, title, text}) => {

    const transition = useTransition(image, {
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

    return (
        // temp
        <li className="list-none">
            {transition((style, image) => (
                <animated.div className="mb-3 w-[280px] h-[213px] 
                    tab:mb-0 tab:w-[463px] tab:h-[370px] tab:absolute tab:left-8 tab:top-[182px]
                    desk:w-[607px] desk:h-[429px] desk:left-6 desk:top-[244px]"
                    style={style}>
                    <Image 
                        width={607}
                        height={429}
                        src={image}
                        alt={title}
                        loading="lazy"
                        sizes="(max-width: 767px) 280px, (max-width: 1279px) 463px, 607px"
                        className="object-cover w-[280px] h-[213px] tab:w-[463px] tab:h-[370px] desk:w-[607px] desk:h-[429px]"
                    />
            </animated.div>         
            ))}
            
            <p className="text-right text-xs font-extralight leading-6 tracking-[2.4px]
                tab:text-left tab:absolute tab:left-[515px] tab:top-[379px]
                desk:w-[200px] desk:top-[239px] desk:right-[129px] desk:left-auto">
                {promo}
            </p>
            <p className="px-5 max-w-screen-lg-mob absolute z-10 bottom-[56px] left-0 text-sm font-extralight leading-5
                tab:pl-0 tab:pr-8 tab:left-[515px] tab:bottom-16 tab:text-justify tab:text-[13px] tab:leading-[20px]
                desk:p-0 desk:w-[293px] desk:bottom-[104px] desk:right-6 desk:left-auto desk:text-lg desk:leading-6"
            >
                {text}
            </p>
        </li>
    )
}