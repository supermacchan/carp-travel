import { Overlay } from "../Overlay/Overlay"

export const About: React.FC = () => {
    return (
        <section 
            id="about" 
            className="relative bg-bg-about-mob bg-cover bg-no-repeat bg-center 
                tab:bg-bg-about-tab desk:bg-bg-about-desk
                before:w-full before:h-[247px] 
                before:absolute before:top-0 before:left-0 before:right-0 
                before:bg-section-top-gradient before:opacity-75 
                desk:before:h-[257px]
                desk:after:w-full desk:after:h-[257px] 
                desk:after:absolute desk:after:bottom-0 desk:after:left-0 desk:after:right-0 
                desk:after:bg-section-bottom-gradient desk:after:opacity-50"
        >
            <Overlay overlay="overlay">
                {/* content */}
                <div 
                    className="section px-5 py-[55px] relative
                        tab:px-8 tab:py-16 tab:h-[697px]
                        desk:px-6 desk:py-[104px] desk:h-[824px]"
                >

                    <h2 className="title mb-2">
                        Who <span className="font-medium">we are</span>
                    </h2>
                    
                    <div 
                        className="w-[180px] text-sm font-extralight leading-5
                            tab:w-[221px] tab:absolute tab:top-16 tab:right-8 tab:text-base tab:leading-[20px]
                            desk:w-[292px] desk:left-[654px] desk:top-[104px] desk:text-lg desk:leading-6"
                    >
                        <p className="mb-5 tab:mb-4 desk:mb-6"> 
                            <span className="font-normal">a team of enthusiasts </span>who are fully committed 
                            to the mission of creating unforgettable and extraordinary trips to the most 
                            beautiful parts of the Carpathians. Our goal is not just to show you the natural 
                            wonders of the mountains, but to provide you with a deep immersion in their magical 
                            atmosphere.
                        </p>
                        <p className="mb-10 tab:mb-0">
                            <span className="font-normal">We believe </span>that nature has the power to inspire, 
                            strengthen character and provide new perspectives. Therefore, each of our tours is 
                            aimed at unlocking your potential, enriching your spiritual world and creating 
                            unforgettable memories.
                        </p>
                    </div>
                    
                    <div 
                        className="ml-auto mb-10 w-[180px] text-sm font-normal leading-5
                            tab:mb-0 tab:w-[221px] tab:absolute tab:bottom-[188px] tab:left-8 tab:text-base tab:leading-[20px]
                            desk:w-[296px] desk:bottom-[104px] desk:right-6 desk:text-lg desk:leading-6"
                    >
                        <span className="block uppercase">From vacationers</span>
                        <span className="block uppercase text-right">to active travelers</span>
                        <span 
                            className="mr-[-15px] block font-extralight tracking-[-0.14px] 
                                tab:tracking-[0.32px] desk:mr-[-20px] desk:tracking-[2.16px]"
                        >
                            we have a tour for everyone.
                        </span>
                    </div>
                    
                    <p 
                        className="text-sm font-extralight leading-5
                            tab:w-[463px] tab:absolute tab:bottom-16 tab:right-8 tab:text-base tab:leading-[20px]
                            desk:w-[605px] desk:bottom-[104px] desk:left-6 desk:text-lg desk:leading-6"
                    >
                        <span className="font-medium">We use methods </span>that are time-tested and proven. 
                        Our expert guides with in-depth knowledge of the Carpathian landscapes lead you safely 
                        through the mysteries of these mountains. 
                    </p>
                </div>
            </Overlay>
        </section>
    )
}