import { CareerDescription } from "./CareerDescription"
import { CareerForm } from "./CareerForm"

import './Career.scss'

export const Career = () => {
    return (
        <>
            <section 
                id="career"
                className="relative bg-bg-career-mob bg-cover bg-no-repeat bg-center
                    tab:bg-bg-career-tab desk:bg-bg-career-desk
                    before:w-full before:h-[247px] before:absolute before:top-0 before:left-0 before:right-0 before:bg-section-top-gradient before:opacity-75 
                    desk:before:hidden 
                    after:w-full after:h-[247px] after:absolute after:bottom-0 after:left-0 after:right-0 after:bg-section-bottom-gradient after:opacity-75
                    desk:after:hidden "
            >
                <div className="bg-overlay tab:bg-overlay-75">
                    <div className="section px-5 py-[56px] relative z-10
                        tab:px-8 tab:py-16 desk:py-[104px] desk:px-6 desk:h-[818px]">
                        <CareerDescription />

                        {/* only shown on tablets and desktops  */}
                        <div className="hidden tab:block tab:absolute tab:bottom-16 tab:right-8
                            desk:bottom-[104px] desk:right-6">
                            <CareerForm />
                        </div>

                    </div>
                </div>
            </section>

            {/* only shown on mobile devices */}
            <section 
                id="career"
                className="relative bg-bg-career-mob bg-cover bg-no-repeat bg-center tab:hidden
                    before:w-full before:h-[247px] before:absolute before:top-0 before:left-0 before:right-0 before:bg-section-top-gradient before:opacity-75 
                    after:w-full after:h-[247px] after:absolute after:bottom-0 after:left-0 after:right-0 after:bg-section-bottom-gradient after:opacity-75"
            >
                <div className="bg-overlay-75">
                    <div className="section px-5 py-[56px] relative z-10">
                         <CareerForm />
                    </div>
                </div>
            </section>
        </>
    )
}