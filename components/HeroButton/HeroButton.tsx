'use client';

import { scrollToSection } from '@/utils/scroll';

import "./HeroButton.scss";

export const HeroButton: React.FC = () => {
  const handleButtonClick = () => {
    scrollToSection('contacts');
  };

  return (
    <button
      type="button"
      className="hero-button mx-auto px-16 py-[18px] w-[280px] relative bg-white bg-opacity-10 
        uppercase text-center text-lg font-bold leading-[18px]
        hover:bg-opacity-20 focus:bg-opacity-20 transition-all duration-200 ease-in
        tab:w-auto tab:py-4 tab:bg-opacity-5
        desk:w-[294px] desk:text-[32px] desk:leading-[39px]"
      onClick={handleButtonClick}
    >
      Join now
    </button>
  );
};
