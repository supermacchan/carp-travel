import { ContactForm } from "./ContactForm"

export const Contacts = () => {
    return (
        <section id="contacts">
            {/* temp styles for visual readability */}
            <h2 className="uppercase text-4xl">
                Contact us
            </h2>

            <ul>
                <li>
                    Phone number
                    <span>
                        +38 (098) 12 34 567
                    </span>
                    <span>
                        +38 (073) 12 34 567
                    </span>
                </li>
                <li>
                    E-mail
                    <span>
                        support@carptravel.com
                    </span>
                </li>
                <li>
                    Follow us
                    <ul>
                        <li>
                            <a 
                                href="https://www.facebook.com/" 
                                rel="noopener noreferrer" 
                                target="_blank"
                            >facebook</a>
                        </li>
                        <li>
                            <a
                                href="https://www.instagram.com/" 
                                rel="noopener noreferrer" 
                                target="_blank"
                            >instagram</a>
                        </li>
                        <li>
                            <a
                                href="https://www.youtube.com/" 
                                rel="noopener noreferrer" 
                                target="_blank"
                            >youtube</a>
                        </li>
                        <li>
                            <a
                                href="https://tiktok.com/" 
                                rel="noopener noreferrer" 
                                target="_blank"
                            >tiktok</a>
                        </li>
                    </ul>
                </li>
            </ul>

            <ContactForm />
        </section>
    )
}