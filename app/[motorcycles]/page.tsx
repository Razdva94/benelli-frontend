import React from 'react';
import MotoCard from '@/components/MotoCard/MotoCard';
import api from '@/utils/api';
import { notFound } from 'next/navigation';

// async function getMotorcycle(params: any) {
//   const motorcycles = await api.getMotorcycle(params);
//   if (!motorcycles) return undefined
//   return motorcycles;
// }

async function getMotorcycle(params: any) {
  try {
    // Вызываем метод getMotorcycle из модуля api с переданными параметрами
    const motorcycles = await api.getMotorcycle(params);

    if (!motorcycles) {
      // Если данные не были получены (например, сервер вернул пустой ответ), возвращаем undefined
      return undefined;
    }

    return motorcycles;
  } catch (error) {
    // Обрабатываем ошибку
    console.error('Ошибка при запросе мотоцикла:', error);
    // Можно вернуть undefined или бросить исключение, в зависимости от вашего подхода к обработке ошибок
    return undefined;
  }
}

const page = async ({ params }: { params: { motorcycles: string } }) => {
  const motorcycleNameWithSpaces = params.motorcycles.replace(/_/g, ' ');
  const motorcycle = await getMotorcycle({ motorcycleNameWithSpaces });
  if (motorcycle) {
    console.log('1', motorcycle)
    return <MotoCard motorcycle={motorcycle} />;
  } else {
    console.log('2','error')
    notFound();
  }
};

export default page;
