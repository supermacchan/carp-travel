import { CareerForm } from "./CareerForm"

export const Career = () => {
    return (
        <section id="career">
            {/* temp styles for visual readability */}
            <h2 className="uppercase text-4xl">
                Choose us
            </h2>

            <p>
                Your chance to join our passionate team in Carpathian tourism. Seeking talented professionals to share our common mission. 
            </p>

            <h3 className="uppercase text-2xl">
                Why us ?
            </h3>

            <ul>
                <li>
                    <h4>
                        Professional development
                    </h4>
                    <p>
                        We offer growth opportunities and a creative environment to nurture your talents.
                    </p>
                </li>
                <li>
                    <h4>
                        Teamwork
                    </h4>
                    <p>
                        Join our close-knit family, where support and inspiration abound.
                    </p>
                </li>
                <li>
                    <h4>
                        Stimulating work environment
                    </h4>
                    <p>
                        Flexibility and remote options for a comfortable experience.
                    </p>
                </li>
                <li>
                    <h4>
                        Exciting challenges
                    </h4>
                    <p>
                        Unleash your potential through unforgettable projects showcasing Carpathian beauty.
                    </p>
                </li>
            </ul>

            <p>
                Don&apos;t miss your opportunity! Fill out the form right now and join our team!
            </p>

            <CareerForm />
        </section>
    )
}