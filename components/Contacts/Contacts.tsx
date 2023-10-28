import React from 'react';
import contactsStyle from './contacts.module.scss';
import motoIcon from '@/public/images/motoIcon1.png';
import Image from 'next/image';
// import Image from 'next/image';
// import building from '@/public/images/Benelli_building.png';

const Contacts = () => {
  return (
    <section className={contactsStyle.contacts}>
      <div className={contactsStyle.contacts__table}>
        <div className={contactsStyle.contacts__cell}>
          <Image
            src={motoIcon}
            alt='иконка'
            className={contactsStyle.contacts__icon}
          />
          Пн
        </div>
        <div className={contactsStyle.contacts__cell}></div>
        <div className={contactsStyle.contacts__cell}>
          <Image
            src={motoIcon}
            alt='иконка'
            className={contactsStyle.contacts__icon}
          />
          Вт
        </div>
        <div className={contactsStyle.contacts__cell}></div>
        <div className={contactsStyle.contacts__cell}>
          <Image
            src={motoIcon}
            alt='иконка'
            className={contactsStyle.contacts__icon}
          />
          Ср
        </div>
        <div
          className={contactsStyle.contacts__cell}
          style={{ margin: '0', marginLeft: 'auto', marginRight: '1rem' }}
        >
          11:00-19:00
        </div>
        <div className={contactsStyle.contacts__cell}>
          <Image
            src={motoIcon}
            alt='иконка'
            className={contactsStyle.contacts__icon}
          />
          Чт
        </div>
        <div className={contactsStyle.contacts__cell}></div>
        <div
          className={contactsStyle.contacts__cell}
          // style={{ borderBottom: '5px solid var(--main-light)' }}
        >
          <Image
            src={motoIcon}
            alt='иконка'
            className={contactsStyle.contacts__icon}
          />
          Пт
        </div>
        <div
          className={contactsStyle.contacts__cell}
          // style={{ borderBottom: '5px solid var(--main-light)' }}
        ></div>
        <div className={contactsStyle.contacts__cell}>
          <Image
            src={motoIcon}
            alt='иконка'
            className={contactsStyle.contacts__icon}
          />
          Сб
        </div>
        <div
          className={contactsStyle.contacts__cell}
          style={{ margin: '0', marginLeft: 'auto', marginRight: '1rem' }}
        >
          11:00-18:00
        </div>
        <div className={contactsStyle.contacts__cell}>
          <Image
            src={motoIcon}
            alt='иконка'
            className={contactsStyle.contacts__icon}
          />
          Вс
        </div>
        <div
          className={contactsStyle.contacts__cell}
          style={{ margin: '0', marginLeft: 'auto', marginRight: '1rem'}}
        >
          11:00-18:00
        </div>
      </div>
    </section>
  );
};

export default Contacts;
