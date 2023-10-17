import React from 'react';
import Image from 'next/image';
import footerStyles from './footer.module.scss';
import logo from '@/public/images/1-01.png';
import gerb from '@/public/images/gerb_sankt-peterburga_Abali.ru.svg';
import vk from '@/public/images/vk.png';
import telegram from '@/public/images/telega.png';
import instagram from '@/public/images/inst.png';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
      <div className={footerStyles.footer__container}>
        <div className={footerStyles.footer__imageContainer}>
          <Image
            src={logo}
            alt='лого'
            className={footerStyles.footer__logo}
            width={200}
          />
        </div>
        <div className={footerStyles.footer__textContainer}>
          <p
            className={footerStyles.footer__text}
            style={{ textTransform: 'uppercase' }}
          >
            Мотоцентр Арсенал
          </p>
          <p className={footerStyles.footer__text}>Официальный дилер BENELLI</p>
          <p className={footerStyles.footer__text}>в Санкт-Петербурге</p>
        </div>
        <div className={footerStyles.footer__textContainer}>
          <p className={footerStyles.footer__text}>
            Пискаревский проспект 144АК
          </p>
          <p className={footerStyles.footer__text}>+7(812) 456-1903</p>
          <Link
            href='https://t.me/+J-rVqZHkc-BjOGNi'
            className={footerStyles.footer__link}
            target='_blank'
          >
            Телеграм
            <Image
              src={telegram}
              alt='телега'
              className={footerStyles.footer__icon}
             
            />
          </Link>
        </div>
        <Image
          src={gerb}
          alt='герб'
          className={footerStyles.footer__logo}
          width={100}
        />
      </div>
    </footer>
  );
};

export default Footer;

// Официальный  дилер BENELLI
// в Санкт-Петербурге

// Пискаревский проспект 144АК
// +7(812) 456-1903
