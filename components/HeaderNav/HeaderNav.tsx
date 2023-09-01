'use client';

import { animated, useTransition } from '@react-spring/web';

import { HeaderNavProps } from '@/utils/types';
import { navigationOptions } from '@/utils/staticData/navigation';

export const HeaderNav: React.FC<HeaderNavProps> = ({
  menuOpen,
  handleNavLinkClick,
  toggleMobileMenu,
}) => {
  const transition = useTransition(menuOpen, {
    from: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
    },
    leave: {
      opacity: 0,
    },
  });

  return (
    <>
      {transition((style, menuOpen) => (
        <>
          {menuOpen && (
            <animated.nav
              className="w-screen h-screen absolute top-0 left-0 grid place-content-center 
                bg-[rgb(1,10,5)] bg-opacity-[0.75] backdrop-blur-[25px]
                tab:static tab:w-auto tab:h-auto tab:bg-transparent tab:backdrop-blur-none"
              style={style}
            >
              <ul
                className="flex flex-col items-center gap-12 text-lg font-normal tracking-[1.8px] text-white
                    tab:flex-row tab:gap-6 tab:text-sm tab:tracking-[1.4px]
                    desk:gap-14"
              >
                {navigationOptions.map(option => 
                  <li key={option}>
                  <button
                    onClick={e => handleNavLinkClick(e)}
                    className="nav-link"
                  >
                    {option}
                  </button>
                </li>
                )}
                {/* <li>
                  <button
                    onClick={e => handleNavLinkClick(e)}
                    className="nav-link"
                  >
                    About
                  </button>
                </li>
                <li>
                  <button
                    onClick={e => handleNavLinkClick(e)}
                    className="nav-link"
                  >
                    Services
                  </button>
                </li>
                <li>
                  <button
                    onClick={e => handleNavLinkClick(e)}
                    className="nav-link"
                  >
                    Career
                  </button>
                </li>
                <li>
                  <button
                    onClick={e => handleNavLinkClick(e)}
                    className="nav-link"
                  >
                    Gallery
                  </button>
                </li>
                <li>
                  <button
                    onClick={e => handleNavLinkClick(e)}
                    className="nav-link"
                  >
                    Contacts
                  </button>
                </li> */}
              </ul>
              <button
                type="button"
                onClick={toggleMobileMenu}
                className="absolute top-[43px] right-5 text-sm font-normal tracking-[1.4px] uppercase text-white tab:hidden"
              >
                Close
              </button>
            </animated.nav>
          )}
        </>
      ))}
    </>
  );
};
