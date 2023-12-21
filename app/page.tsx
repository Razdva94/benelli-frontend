import { Metadata } from 'next';
import './globals.scss';
import MotoList from '@/components/MotoList/MotoList';
import Contacts from '@/components/Contacts/Contacts';
import React from 'react';
import HeaderMobile from '@/components/HeaderMobile/HeaderMobile.tsx';
import api from '@/utils/api.ts';
import VideoComponent from '@/components/VideoComponent/VideoComponent.tsx';

export const metadata: Metadata = {
  title: 'Benelli мотоцентр СПб. Мотоциклы Benelli Купить Отзывы и Цена Производитель и Модели Stels',
  description:
    'Benelli мотоцентр СПб. Benelli Leoncino 500 и 800 теперь доступны в Санкт-Петербурге. Посетите наш магазин и купите этот стильный мотоцикл. Лучшие цены и условия',
    alternates: {
      canonical: 'https://benellispb.ru',
    },
};

async function getMotorcycles() {
  const motorcycles = await api.getMotorcycles();
  return motorcycles;
}

async function getBannerLinks() {
  const banners = await api.getBanners();
  return banners
}

export default async function Home() {
  const motorcycles = await getMotorcycles();
  const bannerLinksPromise = getBannerLinks();
  const bannerLinks = (await bannerLinksPromise)[0]?.bannerLinks;
  return (
    <>
      <VideoComponent />
      <HeaderMobile />
      <MotoList motorcycles={motorcycles} bannerLinks={bannerLinks}/>
      <Contacts />
    </>
  );
}
