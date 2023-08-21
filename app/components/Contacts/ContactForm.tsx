export const ContactForm = () => {
    return (
        <form className="flex flex-col">
            <label htmlFor="contact-name">
                Full name
            </label>
            <input 
                id="contact-name"
                name="name"
                type="text"
                placeholder="John Smith"
            />

            <label htmlFor="contact-mail">
                E-mail
            </label>
            <input 
                id="contact-mail"
                name="email"
                type="email" 
                placeholder="johnsmith@email.com"
            />

            <label htmlFor="contact-message">
                Message
            </label>
            <textarea
                id="contact-message"
                name="message"
            ></textarea>

            <button type="submit" className="uppercase text-4xl">
                Send
            </button>
        </form>
    )
}