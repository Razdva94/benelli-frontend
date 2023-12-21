import React, {useState} from 'react';
import actionStyles from './aciton.module.scss';
import Image from 'next/image';
import wheel from '@/public/images/wheel.png';
import PopupAction from '../PopupAction/PopupAction';

const Action: React.FC<any> = ({bannerLinks}) => {
  const [opened, setOpened] = useState(false);
  const handleClickOpen = () => {
    setOpened(true); 
  };
  const handleClickClose = () => {
    setOpened(false);
  }
  return (
    <>
      <Image src={wheel} alt='колесо' className={actionStyles.action} onClick={handleClickOpen}/>
      {opened && <PopupAction onClose={handleClickClose} bannerLinks={bannerLinks}/>}
    </>
  );
};

export default Action;
