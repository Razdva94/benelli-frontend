import React, { Suspense } from 'react';
import MotoCard from '@/components/MotoCard/MotoCard';
import api from '@/utils/api';
import { notFound } from 'next/navigation';
import { Metadata, ResolvingMetadata } from 'next';

export async function generateMetadata(
  { params, searchParams }: any,
  parent: ResolvingMetadata,
): Promise<any> {
  const name = params.motorcycles;
  const motorcycleNameWithSpaces = params.motorcycles.replace(/_/g, ' ');
  const motorcycle = await getMotorcycle({ motorcycleNameWithSpaces });
  return {
    title: `Мотоцикл ${name}`,
     description: motorcycle.description[0],
  };
}

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
      <head>
        <link
          rel='canonical'
          href={`https://benellispb.ru/${params.motorcycles}`}
        />
      </head>
      <MotoCard motorcycle={motorcycle} />
    </>
  );
};

export default page;
