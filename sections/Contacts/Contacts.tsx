import { ContactsInfo } from '@/utils/staticData/contacts';

import { SectionTitle } from '@/components/SectionTitle/SectionTitle';
import { ContactForm } from '@/components/ContactForm/ContactForm';
import { ContactInfo } from '@/components/ContactInfo/ContactInfo';

import './Contacts.scss';

const Contacts: React.FC = () => {
  const { sectionTitle } = ContactsInfo;
  return (
    <section
      id="contacts"
      className="contacts relative bg-cover bg-no-repeat bg-center"
    >
      {/* content */}
      <div
        className="section px-5 pt-[56px] pb-[54px] relative z-10
            tab:px-8 tab:py-16 
            desk:py-[104px] desk:px-6"
      >
        <SectionTitle
          title={sectionTitle}
          titleStyles="mb-9 tab:mb-10 desk:mb-[74px]"
        />

        <div className="desk:flex">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contacts;
