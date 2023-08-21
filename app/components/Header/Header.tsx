import Image from "next/image"
import Link from "next/link"

export const Header = () => {
    return (
        <header>
            {/* logo */}
            <Image
                width={61}
                height={22}
                src="/icons/logo.svg"
                alt="logo"
            />

            {/* mob menu button */}
            <button type="button">Menu</button>

            {/* navigation */}
            <nav>
                <ul>
                    <li>
                        <Link href={"#about"}>About</Link>
                    </li>
                    <li>
                        <Link href={"#services"}>Services</Link>
                    </li>
                    <li>
                        <Link href={"#career"}>Career</Link>
                    </li>
                    <li>
                        <Link href={"#gallery"}>Gallery</Link>
                    </li>
                    <li>
                        <Link href={"#contacts"}>Contacts</Link>
                    </li>
                </ul>
                <button type="button">Close</button>
            </nav>
        </header>
    )
}