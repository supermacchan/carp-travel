import Image from "next/image"

export const Services = () => {
    return (
        <section id="services">
            {/* temp styles for visual readability */}
            <h2 className="uppercase text-4xl">
                We offer
            </h2>

            <ul>
                <li>
                    <span>01/</span><span>05</span>
                    <Image 
                        width={280}
                        height={213}
                        src="/images/services-1@2x.jpg"
                        alt="ATVs Traveling"
                        loading="lazy"
                    />
                    <p>
                        Feel the adrenaline rush
                    </p>
                    <p>
                        Join exciting rafting expeditions on the waterways of the Carpathians. Go through challenging waterways and overcome gusty waves, feel the adrenaline, and enjoy the incredible views of the surrounding mountains.
                    </p>
                </li>
                <li>
                    <span>02/</span><span>05</span>
                    <Image 
                        width={280}
                        height={213}
                        src="/images/services-2@2x.jpg"
                        alt="Rock climbing"
                        loading="lazy"
                    />
                    <p>
                        Destroy your limitations
                    </p>
                    <p>
                        Overcome the peaks of the Carpathians in a unique way - climbing. Make your own way to the heights and find inner peace in the embrace of the mighty rocks.
                    </p>
                </li>
                <li>
                    <span>03/</span><span>05</span>
                    <Image 
                        width={280}
                        height={213}
                        src="/images/services-3@2x.jpg"
                        alt="Hot air ballooning"
                        loading="lazy"
                    />
                    <p>
                        Get Inspired
                    </p>
                    <p>
                        Feel Zen over the mountain peaks! Hot air ballooning gives you incredible impressions and panoramas of the Carpathians that seem endless.
                    </p>
                </li>
                <li>
                    <span>04/</span><span>05</span>
                    <Image 
                        width={280}
                        height={213}
                        src="/images/services-4@2x.jpg"
                        alt="Skydiving"
                        loading="lazy"
                    />
                    <p>
                        Overcome your fears
                    </p>
                    <p>
                        Fly in the sky over the Carpathians! Experienced instructors will help you realize your dream of free flight. Remember the incredible emotions and panoramas from a bird&apos;s eye view forever.
                    </p>
                </li>
                <li>
                    <span>05/</span><span>05</span>
                    <Image 
                        width={280}
                        height={213}
                        src="/images/services-5@2x.jpg"
                        alt="Rafting"
                        loading="lazy"
                    />
                    <p>
                        Trust the flow
                    </p>
                    <p>
                        Join exciting rafting expeditions on the waterways of the Carpathians. Go through challenging waterways and overcome gusty waves, feel the adrenaline, and enjoy the incredible views of the surrounding mountains.
                    </p>
                </li>
            </ul>

            {/* menu */}
            <ul>
                <li>ATVs Traveling</li>
                <li>Rock climbing</li>
                <li>Hot air ballooning</li>
                <li>Skydiving</li>
                <li>Rafting</li>
            </ul>
        </section>
    )
}