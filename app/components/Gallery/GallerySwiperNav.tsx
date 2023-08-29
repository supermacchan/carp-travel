import { GalleryNavProps } from "@/app/utils/types";

export const GallerySwiperNav: React.FC<GalleryNavProps> = ({swiperReady, prevBtnRef, nextBtnRef}) => {
  return (
    <div
      className={`hidden tab:px-[38px] tab:w-[704px] tab:absolute tab:bottom-[81px] tab:z-20 
        tab:flex tab:justify-between tab:text-[33px] tab:font-thin tab:leading-[33px]
        ${swiperReady ? 'opacity-100' : 'opacity-0'}
        desk:px-[225px] desk:w-[1280px] desk:bottom-[104px]
        transition-opacity ease-in duration-300`}
    >
      <button
        type="button"
        className="uppercase desk:opacity-80 hover:opacity-100 focus:opacity-100 transition-opacity ease-in duration-300"
        ref={prevBtnRef}
      >
        Back
      </button>
      <button
        type="button"
        className="uppercase desk:opacity-80 hover:opacity-100 focus:opacity-100 transition-opacity ease-in duration-300"
        ref={nextBtnRef}
      >
        Next
      </button>
    </div>
  );
};
