'use client';
import React from 'react';
import motoStyles from './moto.module.scss';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import cross from '@/public/images/gratis-png-iconos-de-la-computadora-cruzan-eliminar-boton-escritorio-mapa-del-tesoro-thumbnail.png';
import Link from 'next/link';

const Moto: React.FC<any> = ({ name, price, image, handleDeleteMoto }) => {
  const session: any = useSession();
  const formattedName = name.replace(/ /g, '_');
  return (
    <article className={motoStyles.moto}>
      {image && (
        <>
          {session.status === 'authenticated' && (
            <Image
              src={cross}
              alt='крест'
              className={motoStyles.moto__cross}
              onClick={() => handleDeleteMoto(name)}
              width={30}
              height={30}
              style={{ backgroundColor: 'red' }}
            />
          )}
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
        </>
      )}
    </article>
  );
};

export default Moto;
