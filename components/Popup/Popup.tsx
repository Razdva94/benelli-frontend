import React from 'react';
import popupStyles from './popup.module.scss';
import Image from 'next/image';
import closeIcon from '@/public/images/Close-Icon.svg';
import { orderProps } from '@/utils/interface';
import useForm from '@/hooks/useForm';
import api from '@/utils/api';

const Popup: React.FC<orderProps> = ({ image, name: motoName, onClose, open }) => {
  const { values, handleChange } = useForm({
    motoName: '',
    name: '',
    number: '',
    message: '',
  });
  const handleSubmitForm = (e: any, motoName: any) => {
    e.preventDefault();
    const {name, number, message} = values;
    api.postMessage(motoName, name, number, message)
    .then(onClose())
  };

  const onInputChange = (e: any) => {
    handleChange(e);
  };
  return (
    <>
      {open && (
        <>
          <div className={`${popupStyles.popup} ${popupStyles.popup_opened}`}>
            <div className={popupStyles.popup__container}>
              <Image
                src={image}
                alt='мотоцикл'
                className={popupStyles.popup__image}
              />
              <p className={popupStyles.popup__text}>Мотоцикл {motoName}</p>
              <form
                className={popupStyles.popup__form}
                onSubmit={(e) => handleSubmitForm(e, motoName)}
              >
                <input
                  className={popupStyles.popup__input}
                  type='text'
                  placeholder='Ваше имя'
                  name='name'
                  required
                  onChange={(e) => onInputChange(e)}
                />
                <input
                  className={popupStyles.popup__input}
                  type='text'
                  placeholder='Ваш телефон'
                  name='number'
                  required
                  minLength={8}
                  onChange={(e) => onInputChange(e)}
                />
                <textarea
                  className={popupStyles.popup__inputArea}
                  placeholder='Ваше сообщение'
                  name='message'
                  onChange={(e) => onInputChange(e)}
                />
                <button className={popupStyles.popup__button} type='submit'>
                  Сохранить условия
                </button>
              </form>
            </div>
          </div>
          <Image
            src={closeIcon}
            className={popupStyles.popup__closeIcon}
            alt='крестик'
            onClick={() => onClose()}
          />
        </>
      )}
    </>
  );
};

export default Popup;
