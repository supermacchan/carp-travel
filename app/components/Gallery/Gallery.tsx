import Image from "next/image"

export const Gallery = () => {
    return (
        <section id="gallery">
            {/* temp styles for visual readability */}
            <h2 className="uppercase text-4xl">
                Our Gallery
            </h2>

            <ul>
                <li>
                    <Image 
                        width={280}
                        height={187}
                        src="/images/gallery-1@2x.jpg"
                        alt="mountains"
                        loading="lazy"
                    />
                </li>
                <li>
                    <Image 
                        width={280}
                        height={187}
                        src="/images/gallery-2@2x.jpg"
                        alt="a lake, a forest and a mountain"
                        loading="lazy"
                    />
                </li>
                <li>
                    <Image 
                        width={280}
                        height={187}
                        src="/images/gallery-3@2x.jpg"
                        alt="mountain road"
                        loading="lazy"
                    />
                </li>
            </ul>
        </section>
    )
}