'use client';

import { useState, useEffect } from 'react';

import { CareerInfo } from '@/utils/staticData/career';

import { SectionTitle } from '@/components/SectionTitle/SectionTitle';
import { CareerDescription } from '@/components/CareerDescription/CareerDescription';
import { CareerForm } from '@/components/CareerForm/CareerForm';

import './Career.scss';

const Career: React.FC = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [windowWidth, setWindowWidth] = useState<number | null>(null);

  const { sectionTitle } = CareerInfo;

  // tracking window size for changing orientation on mobile devices
  useEffect(() => {
    setWindowWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  //  device check
  useEffect(() => {
    if (windowWidth && windowWidth >= 768) {
      setIsMobile(false);
    }

    if (windowWidth && windowWidth < 768) {
      setIsMobile(true);
    }
  }, [windowWidth]);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  return (
    <>
      <section
        id="career"
        className="career relative bg-cover bg-no-repeat bg-center"
      >
        {/* content */}
        <div
          className="section px-5 py-[56px] relative z-10
            tab:px-8 tab:py-16 desk:py-[104px] 
            desk:px-6 desk:h-[818px]"
        >
          <SectionTitle title={sectionTitle} titleStyles="mb-6 tab:mb-0" />

          <CareerDescription />

          {!isMobile && (
            <div
              className="tab:absolute tab:bottom-16 tab:right-8
                desk:bottom-[104px] desk:right-6"
            >
              <CareerForm />
            </div>
          )}
        </div>
      </section>

      {isMobile && (
        <section
          id="career"
          className="career career-mob relative bg-cover bg-no-repeat bg-center"
        >
          <div className="section px-5 py-[56px] relative z-10">
            <CareerForm />
          </div>
        </section>
      )}
    </>
  );
};

export default Career;
