import React from 'react';
import './contacts.css';
import building from '@/public/images/benelli__building.webp';
import mobileBuilding from '@/public/images/building__mobile.webp';
import Image from 'next/image';

const Contacts = () => {
  return (
    <section className='contacts'>
      <Image src={building} alt='здание' className='contacts__building' loading='eager' width={2000} height={1000}/>
      <Image src={mobileBuilding} alt='здание' className='contacts__building-mobile' loading='eager' width={1000} height={2000}/>
    </section>
  );
};

export default Contacts;
