import Image from "next/image"

import { GallerySlideProps } from "@/app/utils/types";

export const GallerySwiperSlide: React.FC<GallerySlideProps> = ({
  isActive, img
}) => {
  return (
    <div
      className={`relative right-8 desk:right-[-13px] w-[415px] desk:w-[606px] h-[294px] desk:h-[429px] 
      ${isActive ? 'desk:right-[-20px]' : 'opacity-75'}`}
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
      <div
        className={`absolute top-0 bottom-0 left-0 right-0 bg-overlay-75 
            transition-opacity ease-in duration-300 
            ${isActive ? 'opacity-0' : 'opacity-100'}`}
      ></div>
    </div>
  );
};
