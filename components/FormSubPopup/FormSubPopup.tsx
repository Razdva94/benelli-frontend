import React from 'react';
import formSubPopupStyles from './formSubPopup.module.scss';
import affermImage from '@/public/images/afferm.png';
import regectmImage from '@/public/images/regect.png';
import Image from 'next/image';

const FormSubPopup: React.FC<any> = ({ info, popupType }) => {
  return (
    <section
      className={formSubPopupStyles.formSubPopup}
    >
      <div
        className={`${formSubPopupStyles.formSubPopup__container} ${
          popupType
            ? formSubPopupStyles.formSubPopup__afferm
            : formSubPopupStyles.formSubPopup__negative
        }`}
      >
        <Image src={popupType ? affermImage : regectmImage} alt='иконка' width={100} height={100}/>
        <p className={formSubPopupStyles.formSubPopup__text}>{info}</p>
      </div>
    </section>
  );
};

export default FormSubPopup;
