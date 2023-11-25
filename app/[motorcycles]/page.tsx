import React, { Suspense } from 'react';
import MotoCard from '@/components/MotoCard/MotoCard';
import api from '@/utils/api';
import { notFound } from 'next/navigation';
import Head from 'next/head';

async function getMotorcycle(params: any) {
  try {
    const motorcycles = await api.getMotorcycle(params);
    if (!motorcycles) {
      notFound();
    }
    return motorcycles;
  } catch (error) {
    console.error('Ошибка при запросе мотоцикла:', error);
    notFound();
  }
}

const page = async ({ params }: { params: { motorcycles: string } }) => {
  const motorcycleNameWithSpaces = params.motorcycles.replace(/_/g, ' ');
  const motorcycle = await getMotorcycle({ motorcycleNameWithSpaces });
  return (
    <>
      <Head>
        <link
          rel='canonical'
          href={`https://benellispb.ru/${params.motorcycles}`}
        />
      </Head>
      <MotoCard motorcycle={motorcycle} />
    </>
  );
};

export default page;
