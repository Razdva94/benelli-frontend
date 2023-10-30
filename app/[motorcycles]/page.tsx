// import React from 'react';
// import MotoCard from '@/components/MotoCard/MotoCard';

// const page = ({ params }: { params: { motorcycles: string } }) => {
//   console.log(params)
//   return (
//     <MotoCard params={params}
//     />
//   );
// };

// export default page;

import React from 'react';
import { MOTOCYCLES_lIST } from '@/utils/constants';
import MotoCard from '@/components/MotoCard/MotoCard';

const page = ({ params }: { params: { motorcycles: string } }) => {
  const moto = MOTOCYCLES_lIST.find((moto) => moto.name === params.motorcycles);
  if (!moto) {
    return <div>Motorcycle not found</div>;
  }
  const { name, catalog, description, performance, price } = moto;
  return (
    <MotoCard
      name={name.replaceAll('_', ' ')}
      catalog={catalog}
      description={description}
      performance={performance}
      price={price}
    />
  );
};

export default page;
