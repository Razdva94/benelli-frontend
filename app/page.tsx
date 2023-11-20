import './globals.scss';
import MotoList from '@/components/MotoList/MotoList';
import Contacts from '@/components/Contacts/Contacts';
import React, { Suspense } from 'react';
// import dynamic from 'next/dynamic';
import HeaderMobile from '@/components/HeaderMobile/HeaderMobile.tsx';
import api from '@/utils/api.ts';
import VideoComponent from '@/components/VideoComponent/VideoComponent.tsx';

// const VideoComponent = dynamic(
//   () => import('../components/VideoComponent/VideoComponent.tsx') as any,
//   {
//     loading: () => <Preloader />,
//     ssr: false,
//   },
// );

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
