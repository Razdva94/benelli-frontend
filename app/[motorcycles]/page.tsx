import React from 'react';
import MotoCard from '@/components/MotoCard/MotoCard';
import api from '@/utils/api';
import { notFound } from 'next/navigation';

async function getMotorcycle(params: any) {
  const motorcycles = await api.getMotorcycle(params);
  if (!motorcycles) return undefined
  return motorcycles;
}


const page = async ({ params }: { params: { motorcycles: string } }) => {
  const motorcycleNameWithSpaces = params.motorcycles.replace(/_/g, ' ');
  const motorcycle = await getMotorcycle({ motorcycleNameWithSpaces });
  if (motorcycle) {
    console.log('1', motorcycle)
    return <MotoCard motorcycle={motorcycle} />;
  } else {
    console.log('error')
    notFound();
  }
};

export default page;
