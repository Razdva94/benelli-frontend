// 'use client';
// import React, { useState, useEffect } from 'react';
// import motoListStyles from './motoList.module.scss';
// import Moto from '../Moto/Moto';
// import api from '@/utils/api';

// const MotoList = () => {
//   const [motorcycle, setMotorcycle] = useState([]);
//   const handleDeleteMoto = (motoName: string) => {
//     api.deleteMotorcycle(motoName).then(() => {
//       const newArrMoto = motorcycle.filter((moto: any) => {
//         return moto.motoName !== motoName;
//       });
//       console.log(newArrMoto);
//       setMotorcycle(newArrMoto);
//       localStorage.setItem('motorcycle', JSON.stringify(newArrMoto));
//     });
//   };

//   useEffect(() => {
//     api.getMotorcycles().then((res) => {
//       setMotorcycle(res);
//       localStorage.setItem('motorcycle', JSON.stringify(res));
//     });
//   }, []);
//   return (
//     <section className={motoListStyles.motoList} id='motorcycles1'>
//       <div className={motoListStyles.motoList__container}>
//         <h2 className={motoListStyles.motoList__title}>Мотоциклы</h2>
//         <div className={motoListStyles.motoList__catalog}>
//           {motorcycle.map(
//             (
//               moto: {
//                 motoName: string;
//                 motoPrice: string | undefined;
//                 mainImage: any;
//               },
//               i: React.Key | null | undefined,
//             ) => (
//               <Moto
//                 key={i}
//                 name={moto.motoName.replaceAll('_', ' ')}
//                 price={moto.motoPrice}
//                 image={moto.mainImage}
//                 handleDeleteMoto={handleDeleteMoto}
//               />
//             ),
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default MotoList;

import React from 'react';
import Link from 'next/link';
import motoListStyles from './motoList.module.scss';
import Moto from '../Moto/Moto';
import { MOTOCYCLES_lIST } from '@/utils/constants';

const MotoList = () => {
  return (
    <section className={motoListStyles.motoList}>
      <div className={motoListStyles.motoList__container}>
        <h2 className={motoListStyles.motoList__title}>Мотоциклы</h2>
        <div className={motoListStyles.motoList__catalog}>
          {MOTOCYCLES_lIST.map((moto, i) => (
            <Link href={`/${moto.name}`} style={{ textDecoration: 'none' }}>
              <Moto
                name={moto.name.replaceAll('_', ' ')}
                price={moto.price}
                image={moto.image}
                key={i}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MotoList;