import { ContactsInfo } from "@/utils/staticData/contacts"
import { reformatPhoneNumber } from "@/utils/phoneReformat";

export const ContactInfo: React.FC = () => {
  const { phone, email, socials } = ContactsInfo;

  return (
    <ul
      className="pb-[12px] ml-auto w-[280px] 
        tab:ml-[34px] tab:mr-auto tab:mb-16 tab:pb-0 
        tab:w-[525px] tab:h-[96px] tab:flex tab:flex-col tab:flex-wrap
        desk:m-0 desk:w-1/2 desk:h-auto desk:flex-nowrap"
    >

      <li className="mb-6 flex flex-row-reverse gap-5 desk:mb-16">
        <span 
          className="w-[81px] text-xs font-extralight leading-5 
            tab:pt-1 desk:mr-[12px] desk:w-[300px]"
        >
          {phone.name}
        </span>

        <span
          className="w-[164px] flex flex-col text-right text-sm font-normal leading-6
            tab:text-base tab:leading-6" 
        >
          {phone.contacts.map(contact => 
            <a 
              href={`tel:${contact}`} 
              rel="noopener noreferrer" 
              target="_blank"
              key={contact}
            >
              {reformatPhoneNumber(contact)}
            </a>
          )}
        </span>
      </li>

      <li className="mb-[26px] flex flex-row-reverse gap-5 tab:mb-0 desk:mb-[124px]">
        <span 
          className="w-[81px] text-xs font-extralight leading-5 
            tab:pt-1 desk:mr-[12px] desk:w-[300px]"
        >
          {email.name}
        </span>

        <span
          className="text-right text-sm font-normal leading-6
            tab:text-base tab:leading-6"
        >
          {email.contacts.map(contact => 
            <a 
              href={`mailto:${contact}`} 
              rel="noopener noreferrer" 
              target="_blank"
              key={contact}
            >
              {contact}
          </a>
          )}
        </span>
      </li>

      <li className="flex gap-5 tab:ml-[90px] desk:flex-row-reverse">
        <span
          className="w-[180px] text-right text-xs font-extralight leading-5 
            tab:w-auto tab:pt-1 desk:mr-[12px] desk:w-[300px] desk:text-left"
        >
          {socials.name}
        </span>
        <ul
          className="w-[81px] text-sm font-normal leading-6
            tab:text-base tab:leading-6"
        >
          {socials.contacts.map(contact => 
            <li key={contact.title}>
              <a
                href={contact.link}
                rel="noopener noreferrer"
                target="_blank"
                aria-label={contact.title}
                className="border-b-[1px] border-transparent 
                  hover:border-white/75 focus:border-white/75 
                  transition-all duration-200 ease-in"
              >
                {contact.title}
              </a>
            </li>
          )}
        </ul>
      </li>
    </ul>
  );
};
