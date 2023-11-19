// 'use client';
// import React, {useState} from 'react';
// import headerStyles from './header.module.scss';
// import Image from 'next/image';
// import logo from '@/public/images/benelli_icon.png';
// import Navigation from '../Navigation/Navigation';
// import LateralSlide from '../LateralSlide/LateralSlide';
// import burger from '@/public/images/burger.png';

// const Header = () => {
//   const [navOpen, setNavOpen] = useState(false);
//   const handleNavOpen = () => {
//     setNavOpen(!navOpen);
//   };
//   return (
//     <>
//       <header className={headerStyles.header}>
//         <div className={headerStyles.header__container}>
//           <div className={headerStyles.header__imageContainer}>
//             <Image
//               src={logo}
//               alt='лого'
//               className={headerStyles.header__logo}
//               width={200}
//             />
//           </div>
//           <Navigation />
//         </div>
//         <div className={headerStyles.header__flag}>
//           <div
//             style={{ backgroundColor: 'green' }}
//             className={headerStyles.header__flagSector}
//           />
//           <div
//             className={headerStyles.header__flagSector}
//             style={{ backgroundColor: 'white' }}
//           />
//           <div
//             className={headerStyles.header__flagSector}
//             style={{ backgroundColor: 'rgb(198, 29, 29)' }}
//           />
//         </div>
//       </header>
//       <Image
//         src={burger}
//         alt='burger'
//         className={headerStyles.header__mobileBurger}
//         onClick={handleNavOpen}
//       />
//       {navOpen && <LateralSlide handleNavOpen={handleNavOpen}/>}
//     </>
//   );
// };

// export default Header;

'use client';
import React, { useState, useContext, useEffect } from 'react';
import headerStyles from './header.module.scss';
import logo from '@/public/images/benelli_icon.png';
import Navigation from '../Navigation/Navigation';
import LateralSlide from '../LateralSlide/LateralSlide';
import { PopupContext } from '../../contexts/PopupContext';
import BurgerIcon from '../BurgerIcon/BurgerIcon';
import logoArsenal from '@/public/images/Frame 18.svg';
import Image from 'next/image';

const Header = () => {
  const popupContext = useContext(PopupContext);
  useEffect(() => {
    console.log('Popup is opened:', popupContext);
  }, [popupContext]);
  console.log(popupContext);
  const [navOpen, setNavOpen] = useState(false);
  const handleNavOpen = async () => {
    setNavOpen(!navOpen);
  };
  return (
    <>
      <header className={headerStyles.header}>
        <div className={headerStyles.header__container}>
          <div className={headerStyles.header__imageContainer}>
            <Image
              src={logo}
              alt='лого'
              className={headerStyles.header__logo}
            />
          </div>
          <Navigation />
          <Image
            src={logoArsenal}
            alt='лого'
            className={headerStyles.header__logoArsenal}
          />
        </div>
        <div className={headerStyles.header__flag}>
          <div
            style={{ backgroundColor: 'green' }}
            className={headerStyles.header__flagSector}
          />
          <div
            className={headerStyles.header__flagSector}
            style={{ backgroundColor: 'white' }}
          />
          <div
            className={headerStyles.header__flagSector}
            style={{ backgroundColor: 'rgb(198, 29, 29)' }}
          />
        </div>
      </header>
      {!popupContext.popupIsOpened && (
        <div className={headerStyles.header__mobileBurger}>
          <BurgerIcon handleNavOpen={handleNavOpen} navOpen={navOpen} />
        </div>
      )}
      <LateralSlide handleNavOpen={handleNavOpen} navOpen={navOpen} />
    </>
  );
};

export default Header;
