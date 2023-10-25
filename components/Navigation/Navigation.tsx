'use client';
import React, { useState } from 'react';
import navigationStyles from './navigation.module.scss';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';

function Navigation() {
  const session: any = useSession();
  return (
    <>
      {session.status === 'unauthenticated' ? (
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
            href='/#motorcycles'
          >
            Мотоциклы
          </Link>
          <Link className={navigationStyles.navigation__link} href='#'>
            Контакты
          </Link>
          <p className={navigationStyles.navigation__number}>+7(812)456-1903</p>
        </nav>
      ) : session.status === 'loading' ? (
        null
      ) : (
        <nav className={navigationStyles.navigation}>
          <Link
            className={navigationStyles.navigation__link}
            style={{ marginLeft: 'auto' }}
            href='/admin-panel-add'
          >
            Добавить мотоциклы
          </Link>
          <Link
            className={navigationStyles.navigation__link}
            href='/#motorcycles'
          >
            Удалить Мотоциклы
          </Link>
          <Link
            onClick={() => signOut()}
            className={navigationStyles.navigation__link}
            href='#'
          >
            Выход
          </Link>
          <p className={navigationStyles.navigation__number}>+7(812)456-1903</p>
        </nav>
      )}
    </>
  );
}

export default Navigation;
