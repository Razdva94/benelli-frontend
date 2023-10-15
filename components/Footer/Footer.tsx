import React from 'react';
import Image from 'next/image';
import footerStyles from './footer.module.scss';
import logo from '@/public/images/1.svg';
import vk from '@/public/images/vk.png';
import telegram from '@/public/images/telega.png';
import instagram from '@/public/images/inst.png';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
      <div className={footerStyles.footer__container}>
        <div className={footerStyles.footer__sectorContainer}>
          <div className={footerStyles.footer__imageContainer}>
            <Image
              src={logo}
              alt='лого'
              className={footerStyles.footer__logo}
              width={200}
            />
          </div>
          <div className={footerStyles.footer__iconsContainer}>
            <Image
              src={vk}
              alt='вконтакте'
              className={footerStyles.footer__icon}
            />
            <Image
              src={telegram}
              alt='телега'
              className={footerStyles.footer__icon}
            />
            <Image
              src={instagram}
              alt='инста'
              className={footerStyles.footer__icon}
            />
          </div>
        </div>
        <div className={footerStyles.footer__sectorContainer}>
          <h5 className={footerStyles.footer__linkHeader} id='contacts'>Контакты</h5>
          <p style={{ textTransform: 'uppercase', color: 'var(--main-light)', fontSize: '.8rem'}}>Мотоцентр Арсенал</p>
          <p style={{color: 'var(--main-light)', margin: '0', fontSize: '.8rem'}}>Официальный дилер BENELLI</p>
          <p style={{color: 'var(--main-light)', margin: '0', fontSize: '.8rem'}}>в Санкт-Петербурге</p>
          <p style={{color: 'var(--main-light)', margin: '0', fontSize: '.8rem', marginTop:'1rem'}}>Пискаревский проспект 144АК</p>
          <p style={{color: 'var(--main-light)', margin: '0', fontSize: '.8rem'}}>+7(812) 456-1903</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// Официальный  дилер BENELLI
// в Санкт-Петербурге

// Пискаревский проспект 144АК
// +7(812) 456-1903
