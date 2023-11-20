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

// import React from 'react';
// import MotoCard from '@/components/MotoCard/MotoCard';
// import api from '@/utils/api';
// import { ServerResponse } from 'http';

// export default function MotoPage({ motorcycle }: any) {
//   return <MotoCard motorcycle={motorcycle} />;
// }

// export async function getServerSideProps({
//   params,
// }: {
//   params: { motorcycles: string };
// }) {
//   const motorcycleNameWithSpaces = params.motorcycles.replace(/_/g, ' ');

//   try {
//     const motorcycle = await api.getMotorcycle(motorcycleNameWithSpaces);

//     return {
//       props: {
//         motorcycle,
//       },
//       cache: ServerResponse.Cache.NoCache,
//     };
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     return {
//       notFound: true,
//     };
//   }
// }
