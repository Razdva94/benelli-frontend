'use client';
import React, { useState } from 'react';
import headerStyles from './header.module.scss';
import logo from '@/public/images/benelli_icon.png';
import Navigation from '../Navigation/Navigation';
import LateralSlide from '../LateralSlide/LateralSlide';
import BurgerIcon from '../BurgerIcon/BurgerIcon';
import logoArsenal from '@/public/images/Frame 18.svg';
import Image from 'next/image';

const Header = () => {
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
        <div className={headerStyles.header__mobileBurger}>
          <BurgerIcon handleNavOpen={handleNavOpen} navOpen={navOpen} />
        </div>
      <LateralSlide handleNavOpen={handleNavOpen} navOpen={navOpen} />
    </>
  );
};

export default Header;
