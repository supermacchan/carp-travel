export const CareerDescription: React.FC = () => {
    return (
        <>
            <h2 className="title mb-6 tab:mb-0">
                Choose <span className="font-medium">us</span>
            </h2>

            <p 
                className="ml-auto mb-9 w-[179px] text-sm font-extralight leading-5
                    tab:m-0 tab:w-[221px] tab:absolute tab:top-16 tab:right-8 
                    tab:text-justify tab:text-[13px] tab:leading-[20px]
                    desk:w-[293px] desk:top-[120px] desk:right-6 desk:text-lg desk:leading-6"
            >
                Your chance to join our passionate team in Carpathian tourism. 
                Seeking talented professionals to share our common mission. 
            </p>

            <h3 
                className="ml-auto mb-9 w-[179px] uppercase text-[30px] font-extralight leading-[30px]
                    tab:ml-[80px] tab:mt-[12px] 
                    desk:ml-[146px] desk:my-[45px] desk:text-4xl desk:leading-[39px]"
            >
                Why us ?
            </h3>
                    
            <ul 
                className="mr-auto w-[181px] flex flex-col gap-4 text-right text-xs font-extralight leading-5
                    tab:w-[225px] tab:gap-6 
                    desk:w-[600px] desk:leading-6"
            >
                <li className="desk:grid desk:tab:grid-cols-2 desk:gap-x-6">
                    <h4 className="mb-2 text-sm font-normal tab:text-base desk:mb-0 desk:text-lg">
                        Professional development
                    </h4>
                    <p className="desk:text-left">
                        We offer growth opportunities and a creative environment to nurture your talents.
                    </p>
                </li>
                <li className="desk:grid desk:tab:grid-cols-2 desk:gap-6">
                    <h4 className="mb-2 text-sm font-normal tab:text-base desk:mb-0 desk:text-lg">
                        Teamwork
                    </h4>
                    <p className="desk:text-left">
                        Join our close-knit family, where support and inspiration abound.
                    </p>
                </li>
                <li className="desk:grid desk:tab:grid-cols-2 desk:gap-x-6">
                    <h4 className="mb-2 text-sm font-normal tab:text-base tab:mb-[28px] desk:mb-0 desk:text-lg">
                        Stimulating work environment
                    </h4>
                    <p className="desk:text-left">
                        Flexibility and remote options for a comfortable experience.
                    </p>
                </li>
                <li className="desk:grid desk:tab:grid-cols-2 desk:gap-x-6">
                    <h4 className="mb-2 text-sm font-normal tab:text-base desk:mb-0 desk:text-lg">
                        Exciting challenges
                    </h4>
                    <p className="desk:text-left">
                        Unleash your potential through unforgettable projects showcasing Carpathian beauty.
                    </p>
                </li>
            </ul>
        </>
    )
}