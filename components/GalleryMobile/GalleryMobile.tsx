import Image from "next/image"

import { galleryItems } from "@/utils/staticData/gallery";

export const GalleryMobile: React.FC = () => {
    return (
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
    )
}