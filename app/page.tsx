import './globals.scss';
import MotoList from '@/components/MotoList/MotoList';
import Contacts from '@/components/Contacts/Contacts';
import React, { Suspense } from 'react';
import HeaderMobile from '@/components/HeaderMobile/HeaderMobile.tsx';
import api from '@/utils/api.ts';
import VideoComponent from '@/components/VideoComponent/VideoComponent.tsx';

async function getMotorcycles() {
  const motorcycles = await api.getMotorcycles()
  return motorcycles
}


export default async function Home() {
  const motorcycles = await getMotorcycles()
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <VideoComponent />
      </Suspense>
      <HeaderMobile />
      <MotoList motorcycles={motorcycles}/>
      <Contacts />
    </>
  );
}
