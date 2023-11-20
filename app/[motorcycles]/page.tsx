import React from 'react';
import MotoCard from '@/components/MotoCard/MotoCard';
import api from '@/utils/api';


async function getMotorcycle(params: any) {
  const motorcycles = await api.getMotorcycle(params)
  return motorcycles
}

const page = async ({ params }: { params: { motorcycles: string } }) => {
  const motorcycleNameWithSpaces = params.motorcycles.replace(/_/g, ' ');
  const motorcycle = await getMotorcycle({ motorcycleNameWithSpaces });
  return (
    <MotoCard motorcycle={motorcycle}
    />
  );
};

export default page;


