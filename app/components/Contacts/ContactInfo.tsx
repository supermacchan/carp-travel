export const ContactInfo: React.FC = () => {
  return (
    <ul
      className="pb-[12px] ml-auto w-[280px] 
            tab:ml-[34px] tab:mr-auto tab:mb-16 tab:pb-0 
            tab:w-[525px] tab:h-[96px] tab:flex tab:flex-col tab:flex-wrap
            desk:m-0 desk:w-1/2 desk:h-auto desk:flex-nowrap"
    >
      <li className="mb-6 flex flex-row-reverse gap-5 desk:mb-16">
        <span className="w-[81px] text-xs font-extralight leading-5 tab:pt-1 desk:mr-[12px] desk:w-[300px]">
          Phone number
        </span>
        <span
          className="w-[164px] text-right text-sm font-normal leading-6
                tab:text-base tab:leading-6" 
        >
          +38 (098) 12 34 567 +38 (073) 12 34 567
        </span>
      </li>
      <li className="mb-[26px] flex flex-row-reverse gap-5 tab:mb-0 desk:mb-[124px]">
        <span className="w-[81px] text-xs font-extralight leading-5 tab:pt-1 desk:mr-[12px] desk:w-[300px]">
          E-mail
        </span>
        <span
          className="text-right text-sm font-normal leading-6
                tab:text-base tab:leading-6"
        >
          support@carptravel.com
        </span>
      </li>
      <li className="flex gap-5 tab:ml-[90px] desk:flex-row-reverse">
        <span
          className="w-[180px] text-right text-xs font-extralight leading-5 
                tab:w-auto tab:pt-1 desk:mr-[12px] desk:w-[300px] desk:text-left"
        >
          Follow us
        </span>
        <ul
          className="w-[81px] text-sm font-normal leading-6
                tab:text-base tab:leading-6"
        >
          <li>
            <a
              href="https://www.facebook.com/"
              rel="noopener noreferrer"
              target="_blank"
              className="border-b-[1px] border-transparent hover:border-white/75 focus:border-white/75 transition-all duration-200 ease-in"
            >
              facebook
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/"
              rel="noopener noreferrer"
              target="_blank"
              className="border-b-[1px] border-transparent hover:border-white/75 focus:border-white/75 transition-all duration-200 ease-in"
            >
              instagram
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/"
              rel="noopener noreferrer"
              target="_blank"
              className="border-b-[1px] border-transparent hover:border-white/75 focus:border-white/75 transition-all duration-200 ease-in"
            >
              youtube
            </a>
          </li>
          <li>
            <a
              href="https://tiktok.com/"
              rel="noopener noreferrer"
              target="_blank"
              className="border-b-[1px] border-transparent hover:border-white/75 focus:border-white/75 transition-all duration-200 ease-in"
            >
              tiktok
            </a>
          </li>
        </ul>
      </li>
    </ul>
  );
};
