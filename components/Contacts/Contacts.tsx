import React from 'react';
import './contacts.css';
import building from '@/public/images/benelli__building.webp';
import mobileBuilding from '@/public/images/building__mobile.webp';
import Image from 'next/image';

const Contacts = () => {
  return (
    <section className='contacts'>
      <Image
        src={building}
        alt='здание'
        className='contacts__building'
        loading='eager'
        fill
      />
      <Image
        src={mobileBuilding}
        alt='здание'
        className='contacts__building-mobile'
        loading='eager'
        fill
      />
    </section>
  );
};

export default Contacts;
