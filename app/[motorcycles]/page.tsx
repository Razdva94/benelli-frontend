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
import MotoCard from '@/components/MotoCard/MotoCard';

const Page = ({ motorcycleData }: { motorcycleData: any }) => {
  // Используйте данные в компоненте страницы
  return <MotoCard data={motorcycleData} />;
};

export async function getStaticPaths() {
  // Получите динамические пути для предварительной генерации страниц
  const paths = /* логика получения путей */;
  
  return {
    paths,
    fallback: true, // Установите true, если есть возможность появления новых страниц после сборки
  };
}

export async function getStaticProps({ params }: { params: { motorcycles: string } }) {
  // Получите данные для конкретной страницы на основе параметра
  const motorcycleData = /* логика получения данных */;
  
  return {
    props: {
      motorcycleData,
    },
  };
}

export default Page;
