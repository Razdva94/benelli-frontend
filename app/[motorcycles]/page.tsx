import React from 'react';
import MotoCard from '@/components/MotoCard/MotoCard';

const page = ({ params }: { params: { motorcycles: string } }) => {
  console.log(params)
  return (
    <MotoCard params={params}
    />
  );
};

export default page;


