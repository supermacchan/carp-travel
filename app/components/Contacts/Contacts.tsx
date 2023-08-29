import { Overlay } from "../Overlay/Overlay"
import { ContactForm } from "./ContactForm"
import { ContactInfo } from "./ContactInfo"

const Contacts: React.FC = () => {
    return (
        <section 
            id="contacts" 
            className="relative bg-bg-contacts-mob bg-cover bg-no-repeat bg-center 
                tab:bg-bg-contacts-tab desk:bg-bg-contacts-desk
                before:w-full before:h-[247px] before:absolute before:top-0 before:left-0 before:right-0 
                before:bg-section-top-gradient before:opacity-75 
                desk:before:h-[293px] 
                after:w-full after:h-[247px] after:absolute after:bottom-0 after:left-0 after:right-0 
                after:bg-section-bottom-gradient after:opacity-75
                desk:after:h-[293px]"
        >
            <Overlay overlay="overlay-75">
                {/* content */}
                <div 
                    className="section px-5 pt-[56px] pb-[54px] relative z-10
                    tab:px-8 tab:py-16 
                    desk:py-[104px] desk:px-6"
                >
                    <h2 className="title mb-9 tab:mb-10 desk:mb-[74px]">
                        Contact <span className="font-medium">us</span>
                    </h2>

                    <div className="desk:flex">
                        <ContactInfo />
                        <ContactForm />
                    </div>
                </div>
            </Overlay>
        </section>
    )
}

export default Contacts;