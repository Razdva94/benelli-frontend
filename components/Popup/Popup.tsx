import React, { useState } from 'react';
import './popup.css';
import closeIcon from '@/public/images/cross.png';
import useForm from '../../hooks/useForm';
import api from '../../utils/api';
import FormSubPopup from '../FormSubPopup/FormSubPopup';
import Image from 'next/image';
import CrossIcon from '../CrossIcon/CrossIcon';

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
          <div className='popup__container-image'>
            <Image
              src={`${url}${image}`}
              alt='мотоцикл'
              className='popup__image'
              fill
              loading='eager'
              style={{
                objectFit: 'contain',
              }}
            />
          </div>
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
            <CrossIcon onClose={onClose}/>
            {/* <Image
              src={closeIcon}
              className='popup__closeIcon'
              alt='крестик'
              onClick={() => onClose()}
            /> */}
          </form>
        </div>
      </div>
      {popupState && <FormSubPopup info={info[0]} popupType={info[1]} />}
    </>
  );
};

export default Popup;
