export const Hero = () => {
    return (
        <section>
            {/* width is temp - for visual readability
            will be adjusted later when setting proper styles */}
            <h1 className="flex flex-wrap w-40 text-4xl uppercase">
                <span>7</span>
                <span>days</span>
                <span>journey</span>
            </h1>

            {/* temp styles for visual readability */}
            <h2 className="flex flex-col text-4xl uppercase">
                <span>Uncover</span>
                Carpathian’s Secrets
            </h2>

            <p>
                Hoverla / Yaremche / Zakarpattia / Vorokhta / Synevyr Lake / Bukovel
            </p>

            <p>
                We offer you unforgettable trips to the most beautiful parts of the Carpathians. Enjoy stunning views, exciting expeditions, and the best service!
            </p>

            <button type="button" className="uppercase">
                Join now
            </button>
        </section>
    )
}