'use client';
import React, { useState, useCallback} from 'react';
import orderButtonStyles from './orderButton.module.scss';
import Popup from '@/components/Popup/Popup';
import { orderProps } from '@/utils/interface';

const OrderButton: React.FC<orderProps> = ({ image, name }) => {
  const [opened, setOpened] = useState(false);
  const handleClickOpen = () => {
    setOpened(true); 
  };
  const handleClickClose = () => {
    setOpened(false);
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
