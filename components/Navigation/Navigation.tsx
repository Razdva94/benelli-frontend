import React from 'react';
import navigationStyles from './navigation.module.scss';
import Link from 'next/link';

const Navigation = () => {
  return (
    <>
      <nav className={navigationStyles.navigation}>
        <Link
          className={navigationStyles.navigation__link}
          style={{ marginLeft: 'auto' }}
          href='#'
        >
         Главная
        </Link>
        <Link
          className={navigationStyles.navigation__link}
          href='#'
        >
          Мотоциклы
        </Link>
        <Link
          className={navigationStyles.navigation__link}
          href='#'
        >
          Контакты
        </Link>
      </nav>
    </>
  );
};

export default Navigation;
