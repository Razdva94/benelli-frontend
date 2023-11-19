// import React from 'react';
// import popupStyles from './popup.module.scss';
// import Image from 'next/image';
// import closeIcon from '@/public/images/Close-Icon.svg';
// import { orderProps } from '@/utils/interface';
// import useForm from '@/hooks/useForm';
// import api from '@/utils/api';

// const Popup: React.FC<orderProps> = ({
//   image,
//   name: motoName,
//   onClose,
//   open,
// }) => {
//   console.log(image)
//   const url = process.env.NEXT_PUBLIC_URL_PICTURES
//   const { values, handleChange } = useForm({
//     motoName: '',
//     name: '',
//     number: '',
//     message: '',
//   });
//   const handleSubmitForm = (e: any, motoName: any) => {
//     e.preventDefault();
//     const { name, number, message } = values;
//     api.postMessage(motoName, name, number, message).then(onClose());
//   };

//   const onInputChange = (e: any) => {
//     handleChange(e);
//   };
//   return (
//     <>
//       <>
//         <div
//           className={`${popupStyles.popup} ${open && popupStyles.popup_opened}`}
//         >
//           <div className={popupStyles.popup__container}>
//             <img
//               src={`${url}${image}`}
//               alt='мотоцикл'
//               className={popupStyles.popup__image}
//               // width={1000}
//               //   height={1000}
//             />
//             <p className={popupStyles.popup__text}>Мотоцикл {motoName}</p>
//             <form
//               className={popupStyles.popup__form}
//               onSubmit={(e) => handleSubmitForm(e, motoName)}
//             >
//               <input
//                 className={popupStyles.popup__input}
//                 type='text'
//                 placeholder='Ваше имя'
//                 name='name'
//                 required
//                 onChange={(e) => onInputChange(e)}
//               />
//               <input
//                 className={popupStyles.popup__input}
//                 type='text'
//                 placeholder='Ваш телефон'
//                 name='number'
//                 required
//                 minLength={8}
//                 onChange={(e) => onInputChange(e)}
//               />
//               <textarea
//                 className={popupStyles.popup__inputArea}
//                 placeholder='Ваше сообщение'
//                 name='message'
//                 onChange={(e) => onInputChange(e)}
//               />
//               <button className={popupStyles.popup__button} type='submit'>
//                 Сохранить условия
//               </button>
//               <Image
//                 src={closeIcon}
//                 className={popupStyles.popup__closeIcon}
//                 alt='крестик'
//                 onClick={() => onClose()}
//               />
//             </form>
//           </div>
//         </div>
//       </>
//     </>
//   );
// };

// export default Popup;

import React, { useState } from 'react';
import './popup.css';
import closeIcon from '@/public/images/cross.png';
import useForm from '../../hooks/useForm';
import api from '../../utils/api';
import FormSubPopup from '../FormSubPopup/FormSubPopup';
import Image from 'next/image';

const Popup: React.FC<any> = ({ image, name: motoName, onClose, open }) => {
  const url = process.env.NEXT_PUBLIC_URL_PICTURES;
  //https://benellispb.ru/
  //http://localhost:3000/

  const [popupState, setPopupState] = useState(false);
  const [info, setInfo] = useState<any>([]);

  function openPopup() {
    setTimeout(() => setPopupState(false), 5000);
  }
  const { values, handleChange } = useForm({
    motoName: '',
    name: '',
    number: '',
    message: '',
  });
  const handleSubmitForm = (e: any, motoName: any) => {
    e.preventDefault();
    setInfo([`Отправляем информацию менеджеру`, 'loading']);
    setPopupState(true);
    const { name, number, message } = values;
    api
      .postMessage(motoName, name, number, message)
      .then(onClose())
      .then(() => {
        setInfo([
          'Спасибо, ваша заявка принята, в ближайшее время с Вами свяжется наш сотрудник',
          'afferm',
        ]);
        openPopup();
      });
  };

  const onInputChange = (e: any) => {
    handleChange(e);
  };
  return (
    <>
        <div className={`popup ${open && 'popup_opened'}`}>
          <div className='popup__container'>
            <img
              src={`${url}${image}`}
              alt='мотоцикл'
              className='popup__image'
            />
            <p className='popup__text'>Мотоцикл {motoName}</p>
            <form
              className='popup__form'
              onSubmit={(e) => handleSubmitForm(e, motoName)}
            >
              <input
                className='popup__input'
                type='text'
                placeholder='Ваше имя'
                name='name'
                required
                onChange={(e) => onInputChange(e)}
              />
              <input
                className='popup__input'
                type='text'
                placeholder='Ваш телефон'
                name='number'
                required
                minLength={8}
                onChange={(e) => onInputChange(e)}
              />
              <textarea
                className='popup__inputArea'
                placeholder='Ваше сообщение'
                name='message'
                onChange={(e) => onInputChange(e)}
              />
              <button className='popup__button' type='submit'>
                Сохранить условия
              </button>
              <Image
                src={closeIcon}
                className='popup__closeIcon'
                alt='крестик'
                onClick={() => onClose()}
              />
            </form>
          </div>
        </div>
        {popupState && <FormSubPopup info={info[0]} popupType={info[1]} />}
    </>
  );
};

export default Popup;
