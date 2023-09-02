import { AboutInfo } from '@/utils/staticData/about';

import { SectionTitle } from '@/components/SectionTitle/SectionTitle';

import './About.scss';

const About: React.FC = () => {
  const { sectionTitle, description, slogan } = AboutInfo;
  return (
    <section
      id="about"
      className="about relative bg-cover bg-no-repeat bg-center"
    >
      {/* content */}
      <div
        className="section px-5 py-[55px] relative
            tab:px-8 tab:py-16 tab:h-[697px]
            desk:px-6 desk:py-[104px] desk:h-[824px]"
      >
        <SectionTitle title={sectionTitle} titleStyles="mb-2" />

        <div
          className="w-[180px] text-sm font-extralight leading-5
            tab:w-[221px] tab:absolute tab:top-16 tab:right-8 tab:text-base tab:leading-[20px]
            desk:w-[292px] desk:left-[654px] desk:top-[104px] desk:text-lg desk:leading-6"
        >
          <p className="mb-5 tab:mb-4 desk:mb-6">
            <span className="font-normal">{description[0].accent}</span>
            {description[0].main}
          </p>
          <p className="mb-10 tab:mb-0">
            <span className="font-normal">{description[1].accent}</span>
            {description[1].main}
          </p>
        </div>

        <div
          className="ml-auto mb-10 w-[180px] text-sm font-normal leading-5
            tab:mb-0 tab:w-[221px] tab:absolute tab:bottom-[188px] tab:left-8 tab:text-base tab:leading-[20px]
            desk:w-[296px] desk:bottom-[104px] desk:right-6 desk:text-lg desk:leading-6"
        >
          <span className="block uppercase">{slogan.from}</span>
          <span className="block uppercase text-right">{slogan.to}</span>
          <span
            className="mr-[-15px] block font-extralight tracking-[-0.14px] 
                tab:tracking-[0.32px] desk:mr-[-20px] desk:tracking-[2.16px]"
          >
            {slogan.offer}
          </span>
        </div>

        <p
          className="text-sm font-extralight leading-5
                tab:w-[463px] tab:absolute tab:bottom-16 tab:right-8 tab:text-base tab:leading-[20px]
                desk:w-[605px] desk:bottom-[104px] desk:left-6 desk:text-lg desk:leading-6"
        >
          <span className="font-medium">{description[2].accent}</span>
          {description[2].main}
        </p>
      </div>
    </section>
  );
};

export default About;
