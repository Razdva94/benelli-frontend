import React from 'react';
import navigationStyles from './navigation.module.scss';
import Link from 'next/link';

function Navigation() {
  return (
        <nav className={navigationStyles.navigation}>
          <Link
            className={navigationStyles.navigation__link}
            style={{ marginLeft: 'auto' }}
            href='/'
          >
            Главная
          </Link>
          <Link
            className={navigationStyles.navigation__link}
            href='/#motorcycles1'
          >
            Мотоциклы
          </Link>
          <Link className={navigationStyles.navigation__link} href='#footer'>
            Контакты
          </Link>
          <p className={navigationStyles.navigation__number}>+7(812)456-1903</p>
        </nav>
  );
}

export default Navigation;
