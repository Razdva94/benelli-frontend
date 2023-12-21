import React from 'react';
import popupActionStyles from './popupAction.module.scss';
import CrossIcon from '../CrossIcon/CrossIcon';
import Image from 'next/image';
import benelliBuilding from '@/public/images/Benelli_building.png';

const PopupAction: React.FC<any> = ({ onClose, bannerLinks }) => {
  console.log('bannerLinks', bannerLinks[0]);
  const url = process.env.NEXT_PUBLIC_URL_PICTURES;
  return (
    <>
      <div
        className={`${popupActionStyles.popup} ${
          true && popupActionStyles.popup_opened
        }`}
      >
        <div className={popupActionStyles.popup__container}>
          <div className={popupActionStyles.popup__imageContainer}>
            <img
              className={popupActionStyles.popup__image}
              src={`${url}${bannerLinks[0]}`}
              alt='баннер'
              loading='eager'
              style={{
                objectFit: 'contain',
              }}
            />
            <img
              className={popupActionStyles.popup__imageMobile}
              src={`${url}${bannerLinks[1]}`}
              alt='мобильный баннер'
              loading='eager'
              style={{
                objectFit: 'contain',
              }}
            />
          </div>
        </div>
      </div>
      <CrossIcon onClose={onClose} />
    </>
  );
};

export default PopupAction;
