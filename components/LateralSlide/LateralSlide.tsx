import React from 'react';
import './LateralSlide.css';
import cross from '@/public/images/cross.png';
import Image from 'next/image';
import Link from 'next/link';

const LateralSlide: React.FC<any> = ({ handleNavOpen }) => {
  return (
    <div className='lateral-slide-container'>
      <nav className='lateral-slide'>
        <Image
          src={cross}
          alt='закрыть'
          className='lateral-slide__cross'
          onClick={handleNavOpen}
        />
        <Link
          className='lateral-slide__text lateral-slide__text_margin'
          href='/'
        >
          Главная
        </Link>
        <Link
          className='lateral-slide__text lateral-slide__text_margin'
          href='/#motorcycles1'
        >
          Мотоциклы
        </Link>
        <Link
          className='lateral-slide__text lateral-slide__text_margin'
          href='#footer'
        >
          Контакты
        </Link>
      </nav>
    </div>
  );
};

export default LateralSlide;
