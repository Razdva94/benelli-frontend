import React, {useEffect} from 'react';
import './LateralSlide.css';
import BenelliIcon from '@/public/images/benelli_icon.png';
import Image from 'next/image';

const LateralSlide:React.FC<any> = ({ handleNavOpen, navOpen }) => {
  const [startAnimation, setStartAnimation] = React.useState(true);
  useEffect(() => {
    const delay = 500;
    const timeoutId = setTimeout(() => {
      setStartAnimation(false);
    }, delay);

    return () => clearTimeout(timeoutId);
  }, []);
  return (
    <div className={`${navOpen && 'lateral-slide__container'}`}>
      <nav
        className={`${startAnimation && 'slide'} ${
          navOpen ? 'slide_opened' : 'slide_closed'
        }`}
      >
        <Image className='lateral-slide__icon' src={BenelliIcon} alt='logo' />
        <a
          className='lateral-slide__text lateral-slide__text_margin'
          href='/'
          onClick={handleNavOpen}
        >
          Главная
        </a>
        <a
          className='lateral-slide__text lateral-slide__text_margin'
          href='/#motorcycles'
          onClick={handleNavOpen}
        >
          Мотоциклы
        </a>
        <a
          className='lateral-slide__text lateral-slide__text_margin'
          href='#footer'
          onClick={handleNavOpen}
        >
          Контакты
        </a>
      </nav>
    </div>
  );
};

export default LateralSlide;