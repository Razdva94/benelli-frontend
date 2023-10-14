import React from 'react';
import headerStyles from './header.module.scss';
import Image from 'next/image';
import logo from '@/public/images/1.svg';
import Navigation from '../Navigation/Navigation';

const Header = () => {
  return (
    <header className={headerStyles.header}>
      <div className={headerStyles.header__container}>
        <div className={headerStyles.header__imageContainer}>
          <Image
            src={logo}
            alt='лого'
            className={headerStyles.header__logo}
            width={200}
            height={500}
          />
        </div>
        <Navigation />
        <p className={headerStyles.header__number}>+7(812)456-1903</p>
      </div>
    </header>
  );
};

export default Header;
