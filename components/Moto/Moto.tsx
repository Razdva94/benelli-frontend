import React from 'react';
import motoStyles from './moto.module.scss';
import Image from 'next/image';
import Link from 'next/link';

const Moto: React.FC<any> = ({ name, price, image }) => {
  const formattedName = name.replace(/ /g, '_');
  return (
      <section className={motoStyles.moto}>
        <Link href={`/${formattedName}`} style={{ textDecoration: 'none' }}>
          <div className={motoStyles.moto__imageContainer}>
            <Image
              src={image}
              alt='фото мотоцикла'
              className={motoStyles.moto__image}
              width={10000}
              height={10000}
            />
          </div>
        </Link>
        <h4 className={motoStyles.moto__name}>{name}</h4>
        <p className={motoStyles.moto__price}>{price}</p>
      </section>
  );
};

export default Moto;
