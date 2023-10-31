'use client';
import React, { useState } from 'react';
import headerStyles from './header.module.scss';
import Image from 'next/image';
import logo from '@/public/images/benelli_icon.png';
import Navigation from '../Navigation/Navigation';
import burger from '@/public/images/burger.png';
import LateralSlide from '../LateralSlide/LateralSlide';

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  const handleNavOpen = () => {
    setNavOpen(!navOpen)
  }
  return (
    <>
      <header className={headerStyles.header}>
        <div className={headerStyles.header__container}>
          <div className={headerStyles.header__imageContainer}>
            <Image
              src={logo}
              alt='лого'
              className={headerStyles.header__logo}
              width={200}
            />
          </div>
          <Navigation />
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
      <Image
        src={burger}
        alt='burger'
        className={headerStyles.header__mobileBurger}
        onClick={handleNavOpen}
      />
      {navOpen && <LateralSlide handleNavOpen={handleNavOpen}/>}
    </>
  );
};

export default Header;
