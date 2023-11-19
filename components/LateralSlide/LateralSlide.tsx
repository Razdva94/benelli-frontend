// import React from 'react';
// import './LateralSlide.css';
// import cross from '@/public/images/cross.png';
// import Image from 'next/image';
// import Link from 'next/link';

// const LateralSlide: React.FC<any> = ({ handleNavOpen }) => {
//   return (
//     <div className='lateral-slide-container'>
//       <nav className='lateral-slide'>
//         <Image
//           src={cross}
//           alt='закрыть'
//           className='lateral-slide__cross'
//           onClick={handleNavOpen}
//         />
//         <Link
//           className='lateral-slide__text lateral-slide__text_margin'
//           href='/'
//           onClick={handleNavOpen}
//         >
//           Главная
//         </Link>
//         <Link
//           className='lateral-slide__text lateral-slide__text_margin'
//           href='/#motorcycles1'
//           onClick={handleNavOpen}
//         >
//           Мотоциклы
//         </Link>
//         <Link
//           className='lateral-slide__text lateral-slide__text_margin'
//           href='#footer'
//           onClick={handleNavOpen}
//         >
//           Контакты
//         </Link>
//       </nav>
//     </div>
//   );
// };

// export default LateralSlide;


import React, {useEffect} from 'react';
import './LateralSlide.css';
import BenelliIcon from '@/public/images/benelli_icon.png';
import Image from 'next/image';

const LateralSlide:React.FC<any> = ({ handleNavOpen, playSlide, navOpen }) => {
  const [startAnimation, setStartAnimation] = React.useState(true);
  useEffect(() => {
    const delay = 500;
    const timeoutId = setTimeout(() => {
      setStartAnimation(false);
    }, delay);

    return () => clearTimeout(timeoutId);
  }, []);
  console.log(playSlide)
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