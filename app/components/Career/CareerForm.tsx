export const CareerForm = () => {
    return (
        <form className="flex flex-col">
        {/* temp styles for visual readability */}
            <label htmlFor="career-name">
                Full name
            </label>
            <input 
                id="career-name"
                name="name"
                type="text"
                placeholder="John Smith"
            />

            <label htmlFor="career-mail">
                E-mail
            </label>
            <input 
                id="career-mail"
                name="email"
                type="email" 
                placeholder="johnsmith@email.com"
            />

            <label htmlFor="career-position">
                Position
            </label>
            <input 
                id="career-position"
                name="position"
                type="text" 
                placeholder="Movie maker"
            />

            <label>
                Phone
            </label>
            {/* +38 - non-changeable */}
            <input 
                id="career-phone"
                name="phone"
                type="text" 
                placeholder="+38 (097) 12 34 567"
            />

            <label htmlFor="career-message">
                Message
            </label>
            <textarea
                id="career-message"
                name="message"
            ></textarea>

            <div>
                <input type="checkbox" name="policy" id="career-policy" required />
                <label htmlFor="career-policy">
                    I confirm my consent to the processing of personal data.
                </label>
            </div>

            <button type="submit" className="uppercase text-4xl">
                Send
            </button>
        </form>
    )
}