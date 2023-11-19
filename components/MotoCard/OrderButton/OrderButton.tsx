'use client';
import React, { useState, useCallback, useContext} from 'react';
import orderButtonStyles from './orderButton.module.scss';
import Popup from '@/components/Popup/Popup';
import { orderProps } from '@/utils/interface';
import { PopupContext } from '../../../contexts/PopupContext';

const OrderButton: React.FC<orderProps> = ({ image, name }) => {
  const popupContext = useContext(PopupContext)
  console.log(popupContext)
  const [opened, setOpened] = useState(false);
  const handleClickOpen = () => {
    setOpened(true); 
    popupContext.setPopupIsOpened(true)
  };
  const handleClickClose = () => {
    setOpened(false);
    popupContext.setPopupIsOpened(false)
  }

  return (
        <>
          <button
            type='button'
            className={orderButtonStyles.orderButton}
            onClick={handleClickOpen}
          >
            Заказать онлайн
          </button>
          <Popup image={image} name={name} onClose={handleClickClose} open={opened}/>
        </>
  );
};

export default OrderButton;
