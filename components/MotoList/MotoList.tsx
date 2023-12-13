'use client';
import React, { useState } from 'react';
import Moto from '../Moto/Moto';
import api from '../../utils/api';
import './motoList.css';
import Action from '../Action/Action';

const MotoList: React.FC<any> = ({ motorcycles: initialMotorcycles }) => {
  const [motorcycles, setMotorcycles] = useState(initialMotorcycles);
  const handleDeleteMoto = (motoName: any) => {
    api
      .deleteMotorcycle(motoName)
      .then((res) => {
        const newArrMoto = motorcycles.filter((moto: any) => {
          return moto.motoName !== motoName;
        });
        setMotorcycles(newArrMoto);
        api.deleteMotoPhotos(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <section className='motoList'>
      <div className='motoList__container'>
        <h1 className='motoList__title' id='motorcycles1'>
          Мотоциклы
        </h1>
        <h3 className='motoList__subtitle'>Benelli</h3>
        <Action />
        <div
          className='motoList__catalog'
          style={{
            borderBottom: '2px solid rgb(22, 20, 20)',
            paddingBottom: '60px',
          }}
        >
          {motorcycles &&
            motorcycles.length > 0 &&
            motorcycles.map(
              (moto: any, i: any) =>
                !moto.motoName.startsWith('QJ') && (
                  <Moto
                    key={i}
                    name={moto.motoName.replaceAll('_', ' ')}
                    price={moto.motoPrice}
                    image={moto.motoLinks[0]}
                    handleDeleteMoto={handleDeleteMoto}
                  />
                ),
            )}
        </div>
        <h3 className='motoList__subtitle'>Benelli QJ</h3>
        <div className='motoList__catalog'>
          {motorcycles &&
            motorcycles.length > 0 &&
            motorcycles.map(
              (moto: any, i: any) =>
                moto.motoName.startsWith('QJ') && (
                  <Moto
                    key={i}
                    name={moto.motoName.replaceAll('_', ' ')}
                    price={moto.motoPrice}
                    image={moto.motoLinks[0]}
                    handleDeleteMoto={handleDeleteMoto}
                  />
                ),
            )}
        </div>
      </div>
    </section>
  );
};

export default MotoList;
