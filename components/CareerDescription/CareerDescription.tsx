import { CareerInfo } from "@/utils/staticData/career"

export const CareerDescription: React.FC = () => {
    const { description, subtitle, benefits } = CareerInfo;

    return (
        <>
            <p 
                className="ml-auto mb-9 w-[179px] text-sm font-extralight leading-5
                    tab:m-0 tab:w-[221px] tab:absolute tab:top-16 tab:right-8 
                    tab:text-justify tab:text-[13px] tab:leading-[20px]
                    desk:w-[293px] desk:top-[120px] desk:right-6 desk:text-lg desk:leading-6"
            >
                {description}
            </p>

            <h3 
                className="ml-auto mb-9 w-[179px] uppercase text-[30px] font-extralight leading-[30px]
                    tab:ml-[80px] tab:mt-[12px] 
                    desk:ml-[146px] desk:my-[45px] desk:text-4xl desk:leading-[39px]"
            >
                {subtitle}
            </h3>
                    
            <ul 
                className="mr-auto w-[181px] flex flex-col gap-4 text-right text-xs font-extralight leading-5
                    tab:w-[225px] tab:gap-6 
                    desk:w-[600px] desk:leading-6"
            >  
                {benefits.map((benefit, index) => 
                    <li className="desk:grid desk:tab:grid-cols-2 desk:gap-x-6" key={benefit.name}>
                        <h4 className={`
                            mb-2 text-sm font-normal tab:text-base desk:mb-0 desk:text-lg
                            ${index === 2 ? "tab:mb-[28px]" : null}
                        `}>
                            {benefit.name}
                        </h4>
                        <p className="desk:text-left">
                            {benefit.description}
                        </p>
                    </li>
                )}
            </ul>
        </>
    )
}