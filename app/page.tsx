import './globals.scss';
import MotoList from '@/components/MotoList/MotoList';
import Contacts from '@/components/Contacts/Contacts';
import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';
import HeaderMobile from '@/components/HeaderMobile/HeaderMobile.tsx';

const VideoComponent = dynamic(
  () => import('../components/VideoComponent/VideoComponent.tsx') as any,
  {
    loading: () => <div>Loading...</div>,
    ssr: false,
  },
);

export default function Home() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <VideoComponent />
      </Suspense>
      <HeaderMobile />
      <MotoList />
      <Contacts />
    </>
  );
}
