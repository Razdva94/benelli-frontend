import React, { Suspense } from 'react';
import MotoCard from '@/components/MotoCard/MotoCard';
import api from '@/utils/api';
import { notFound } from 'next/navigation';
import { Metadata, ResolvingMetadata } from 'next';

export async function generateMetadata(
  { params, searchParams }: any,
  parent: ResolvingMetadata,
): Promise<any> {
  const motorcycleNameWithSpaces = params.motorcycles.replace(/_/g, ' ');
  const motorcycle = await getMotorcycle({ motorcycleNameWithSpaces });
  return {
    title: `Мотоцикл ${motorcycleNameWithSpaces}`,
    description: motorcycle.description[0],
    alternates: {
      canonical: `https://benellispb.ru/${params.motorcycles}`,
    },
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
      <MotoCard motorcycle={motorcycle} />
    </>
  );
};

export default page;
