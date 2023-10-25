import React from 'react';
import { MOTOCYCLES_lIST } from '@/utils/constants';
import MotoCard from '@/components/MotoCard/MotoCard';

const page = ({ params }: { params: { motorcycles: string } }) => {
  console.log(params)
  return (
    <MotoCard params={params}
    />
  );
};

export default page;


