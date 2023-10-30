import React from 'react';
import motoListStyles from './motoList.module.scss';
import Moto from '../Moto/Moto';
import { MOTOCYCLES_lIST } from '@/utils/constants';

const MotoList = () => {
  return (
    <section className={motoListStyles.motoList}>
      <div className={motoListStyles.motoList__container}>
        <h2 className={motoListStyles.motoList__title}>Мотоциклы</h2>
        <div className={motoListStyles.motoList__catalog}>
          {MOTOCYCLES_lIST.map((moto, i) => (
              <Moto
                name={moto.name.replaceAll('_', ' ')}
                price={moto.price}
                image={moto.image}
                key={i}
              />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MotoList;