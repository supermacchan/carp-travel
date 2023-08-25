import Image from "next/image"

export const CareerForm = () => {
    return (
        <>
            <p className="ml-auto mb-9 w-[179px] text-sm font-extralight leading-5
                tab:ml-0 tab:mb-[28px] tab:w-[221px] tab:text-[13px] tab:leading-[20px]
                desk:mb-[14px] desk:w-[234px] desk:text-lg desk:leading-6">
                Don&apos;t miss your opportunity! 
                Fill out the form right now and join our team!
            </p>
        
            <form className="flex flex-col tab:w-[464px] tab:grid tab:grid-cols-2 tab:gap-x-5
                desk:w-[606px]">
                <div className="flex flex-col">
                    <label htmlFor="career-name" className="label">
                        Full name
                    </label>
                    <input 
                        id="career-name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        placeholder="John Smith"
                        className="input mb-4 desk:mb-[26px]"
                    />

                    <label htmlFor="career-mail" className="label">
                        E-mail
                    </label>
                    <input 
                        id="career-mail"
                        name="email"
                        type="email" 
                        autoComplete="email"
                        placeholder="johnsmith@email.com"
                        className="input mb-4 desk:mb-[26px]"
                    />

                    <label htmlFor="career-position" className="label">
                        Position
                    </label>
                    <input 
                        id="career-position"
                        name="position"
                        type="text" 
                        autoComplete="on"
                        placeholder="Movie maker"
                        className="input mb-4 desk:mb-[26px]"
                    />

                    <label htmlFor="career-phone" className="label">
                        Phone
                    </label>
                    {/* +38 - non-changeable */}
                    <input 
                        id="career-phone"
                        name="phone"
                        type="text" 
                        autoComplete="tel"
                        placeholder="+38 (097) 12 34 567"
                        className="input mb-4 desk:mb-[26px]"
                    />
                </div>
                
                <div className="flex flex-col">
                    <label htmlFor="career-message" className="label">
                        Message
                    </label>
                    <textarea
                        id="career-message"
                        name="message"
                        autoComplete="off"
                        className="input resize-none mb-4 min-h-[196px] tab:mb-0 tab:min-h-[244px] desk:w-[292px] desk:min-h-[274px]"
                    ></textarea>
                </div>

                <div className="desk:pt-[10px]">
                    <input type="checkbox" name="policy" id="career-policy" className="policy-check" required />
                    <label 
                        htmlFor="career-policy"
                        className="policy-agreement pl-8 relative flex text-xs font-extralight leading-[22px] desk:leading-6"
                    >
                        <Image src="/icons/unchecked.svg" alt="checkbox" width={24} height={24} className="policy-checkbox policy-checkbox-empty"/>
                        <Image src="/icons/checked.svg" alt="checkbox" width={24} height={24} className="policy-checkbox policy-checkbox-filled"/>
                        I confirm my consent to the processing of personal data.
                    </label>
                </div>

                <button 
                    type="submit" 
                    className="ml-auto mt-4 uppercase text-3xl font-medium leading-8 tab:m-0 tab:absolute tab:bottom-[15px] tab:right-[3px] desk:bottom-[21px] desk:right-0 desk:text-[32px]">
                    Send
                </button>
        
            </form>
        </>
    )
}