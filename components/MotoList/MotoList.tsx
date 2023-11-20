// 'use client'
// import React, { useState, useEffect } from 'react';
// import './motoList.css';
// import Moto from '../Moto/Moto';
// import api from '../../utils/api';

// const MotoList = () => {
//   const [motorcycle, setMotorcycle] = useState([]);
//   const handleDeleteMoto = (motoName:any) => {
//     api
//       .deleteMotorcycle(motoName)
//       .then((res) => {
//         const newArrMoto = motorcycle.filter((moto:any) => {
//           return moto.motoName !== motoName;
//         });
//         setMotorcycle(newArrMoto);
//         localStorage.setItem('motorcycle', JSON.stringify(newArrMoto));
//         api.deleteMotoPhotos(res);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   useEffect(() => {
//     const storedMotorcycle = localStorage.getItem('motorcycle');

//     if (!storedMotorcycle) {
//       api
//         .getMotorcycles()
//         .then((res) => {
//           setMotorcycle(res);
//           localStorage.setItem('motorcycle', JSON.stringify(res));
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//     } else {
//       const parsedMotorcycle = JSON.parse(storedMotorcycle);
//       setMotorcycle(parsedMotorcycle);
//     }
//   }, []);
//   return (
//     <section className='motoList'>
//       <div className='motoList__container'>
//         <h2 className='motoList__title' id='motorcycles1'>
//           Мотоциклы
//         </h2>
//         <h3 className='motoList__subtitle'>Benelli</h3>
//         <div
//           className='motoList__catalog'
//           style={{
//             borderBottom: '2px solid rgb(22, 20, 20)',
//             paddingBottom: '60px',
//           }}
//         >
//           {motorcycle.length > 0 &&
//             motorcycle.map(
//               (moto: any, i) =>
//                 !moto.motoName.startsWith('QJ') && (
//                   <Moto
//                     key={i}
//                     name={moto.motoName.replaceAll('_', ' ')}
//                     price={moto.motoPrice}
//                     image={moto.motoLinks[0]}
//                     handleDeleteMoto={handleDeleteMoto}
//                   />
//                 ),
//             )}
//         </div>
//         <h3 className='motoList__subtitle'>Benelli QJ</h3>
//         <div className='motoList__catalog'>
//           {motorcycle.length > 0 &&
//             motorcycle.map(
//               (moto: any, i) =>
//                 moto.motoName.startsWith('QJ') && (
//                   <Moto
//                     key={i}
//                     name={moto.motoName.replaceAll('_', ' ')}
//                     price={moto.motoPrice}
//                     image={moto.motoLinks[0]}
//                     handleDeleteMoto={handleDeleteMoto}
//                   />
//                 ),
//             )}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default MotoList;
'use client';
import React, { useState } from 'react';
import Moto from '../Moto/Moto';
import api from '../../utils/api';
import './motoList.css';

const MotoList: React.FC<any> = ({ motorcycles: initialMotorcycles }) => {
  console.log(initialMotorcycles);
  const [motorcycles, setMotorcycles] = useState(initialMotorcycles);
  const handleDeleteMoto = (motoName: any) => {
    api
      .deleteMotorcycle(motoName)
      .then((res) => {
        const newArrMoto = motorcycles.filter((moto: any) => {
          return moto.motoName !== motoName;
        });
        setMotorcycles(newArrMoto);
        api.deleteMotoPhotos(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <section className='motoList'>
      <div className='motoList__container'>
        <h2 className='motoList__title' id='motorcycles1'>
          Мотоциклы
        </h2>
        <h3 className='motoList__subtitle'>Benelli</h3>
        <div
          className='motoList__catalog'
          style={{
            borderBottom: '2px solid rgb(22, 20, 20)',
            paddingBottom: '60px',
          }}
        >
          {motorcycles &&
            motorcycles.length > 0 &&
            motorcycles.map(
              (moto: any, i: any) =>
                !moto.motoName.startsWith('QJ') && (
                  <Moto
                    key={i}
                    name={moto.motoName.replaceAll('_', ' ')}
                    price={moto.motoPrice}
                    image={moto.motoLinks[0]}
                    handleDeleteMoto={handleDeleteMoto}
                  />
                ),
            )}
        </div>
        <h3 className='motoList__subtitle'>Benelli QJ</h3>
        <div className='motoList__catalog'>
          {motorcycles &&
            motorcycles.length > 0 &&
            motorcycles.map(
              (moto: any, i: any) =>
                moto.motoName.startsWith('QJ') && (
                  <Moto
                    key={i}
                    name={moto.motoName.replaceAll('_', ' ')}
                    price={moto.motoPrice}
                    image={moto.motoLinks[0]}
                    handleDeleteMoto={handleDeleteMoto}
                  />
                ),
            )}
        </div>
      </div>
    </section>
  );
};

export default MotoList;
