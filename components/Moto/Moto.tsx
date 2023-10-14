import React from 'react';
import motoStyles from './moto.module.scss';
import Image from 'next/image';
import { MotoProps } from '@/utils/interface';

const Moto: React.FC<MotoProps> = ({ name, price, image }) => {
  console.log(name)
  return (
    <article className={motoStyles.moto}>
      {image && (
        <>
          <div className={motoStyles.moto__imageContainer}>
            <Image
              src={image}
              alt='фото мотоцикла'
              className={motoStyles.moto__image}
            />
          </div>
          <p className={motoStyles.moto__name}>{name}</p>
          <p className={motoStyles.moto__price}>{price}</p>
        </>
      )}
    </article>
  );
};

export default Moto;
