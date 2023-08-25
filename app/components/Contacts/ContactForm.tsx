export const ContactForm = () => {
    return (
        <form className="flex flex-col tab:flex-row tab:gap-5 desk:w-1/2 desk:flex-col desk:gap-10">
            <div className="flex flex-col desk:flex-row desk:gap-5">
                <div className="flex flex-col">
                    <label htmlFor="contact-name" className="label">
                        Full name
                    </label>
                    <input 
                        id="contact-name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        placeholder="John Smith"
                        className="input mb-6 desk:mb-0"
                    />
                </div>
                
                <div className="flex flex-col">   
                    <label htmlFor="contact-mail" className="label">
                        E-mail
                    </label>
                    <input 
                        id="contact-mail"
                        name="email"
                        type="email" 
                        autoComplete="email"
                        placeholder="johnsmith@email.com"
                        className="input mb-6 tab:mb-0"
                    />
                </div>
            </div>
            
            <div className="flex flex-col">
                <label htmlFor="contact-message" className="label">
                    Message
                </label>
                <textarea
                    id="contact-message"
                    name="message"
                    autoComplete="off"
                    className="input resize-none mb-4 min-h-[193px] 
                    tab:w-[463px] tab:min-h-[221px]
                    desk:w-[607px] desk:min-h-[174px] desk:mb-6"
                ></textarea>

                <button 
                    type="submit" 
                    className="ml-auto uppercase text-3xl font-medium leading-8">
                    Send
                </button>
            </div>
        </form>
    )
}