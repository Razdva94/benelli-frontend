import React from 'react';
import actionStyles from './aciton.module.scss';
import Image from 'next/image';
import wheel from '@/public/images/wheel.png';

const Action = () => {
  return <Image src={wheel} alt='колесо' className={actionStyles.action} />;
};

export default Action;
