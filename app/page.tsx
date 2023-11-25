import { Metadata } from 'next';
import './globals.scss';
import MotoList from '@/components/MotoList/MotoList';
import Contacts from '@/components/Contacts/Contacts';
import React from 'react';
import HeaderMobile from '@/components/HeaderMobile/HeaderMobile.tsx';
import api from '@/utils/api.ts';
import VideoComponent from '@/components/VideoComponent/VideoComponent.tsx';

export const metadata: Metadata = {
  title: 'Мотоциклы Benelli Купить Отзывы и Цена Производитель и Модели Stels',
  description:
    'Benelli Leoncino 500 и 800 теперь доступны в Санкт-Петербурге. Посетите наш магазин и купите этот стильный мотоцикл. Лучшие цены и условия',
};

async function getMotorcycles() {
  const motorcycles = await api.getMotorcycles();
  console.log(motorcycles);
  return motorcycles;
}

export default async function Home() {
  const motorcycles = await getMotorcycles();
  return (
    <>
      <head>
        <link rel='canonical' href='https://benellispb.ru/' />
      </head>
      <VideoComponent />
      <HeaderMobile />
      <MotoList motorcycles={motorcycles} />
      <Contacts />
    </>
  );
}
