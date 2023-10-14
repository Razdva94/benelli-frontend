'use client';
import React from 'react';
const { Swiper, SwiperSlide } = require('swiper/react');
const { Navigation, Zoom, Thumbs, FreeMode } = require('swiper/modules');
import motoCardStyles from './motoCard.module.scss';
import { MotoProps } from '@/utils/interface';
import Link from 'next/link';
import 'swiper/css';
import 'swiper/css/zoom';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';
import Image from 'next/image';
import './style.css';
import { PERFORMANCE_NAME } from '@/utils/constants';
import OrderButton from './OrderButton/OrderButton';

const MotoCard: React.FC<MotoProps> = ({
  name,
  catalog,
  description,
  performance,
  price,
}) => {
  const [thumbsSwiper, setThumbsSwiper] = React.useState(null);
  return (
    <section className={motoCardStyles.motoCard}>
      <div className={motoCardStyles.motoCard__container}>
        <nav className={motoCardStyles.motoCard__linkContainer}>
          <Link href='' className={motoCardStyles.motoCard__link}>
            Главная &nbsp;/
          </Link>
          <Link href='' className={motoCardStyles.motoCard__link}>
            &nbsp;&nbsp;Мотоциклы&nbsp;&nbsp; /
          </Link>
          <p
            style={{ cursor: 'auto' }}
            className={motoCardStyles.motoCard__link}
          >
            &nbsp;&nbsp;{name}
          </p>
        </nav>
        <div className={motoCardStyles.motoCard__wrapper}>
          <div className={motoCardStyles.motoCard__catalogContainer}>
            <h3 className={motoCardStyles.motoCard__title}>Мотоцикл {name}</h3>
            {catalog && (
              <>
                <Swiper
                  style={{
                    height: 'fit-content',
                    width: '700px',
                    marginLeft: '0',
                    '--swiper-navigation-color': 'var(--main-orange)',
                    '--swiper-pagination-color': 'var(--main-orange)',
                  }}
                  zoom={true}
                  slidesPerView={1}
                  spaceBetween={30}
                  loop={true}
                  navigation={true}
                  modules={[FreeMode, Navigation, Zoom, Thumbs]}
                  thumbs={{ swiper: thumbsSwiper }}
                  className={motoCardStyles.mySwiper2}
                >
                  {catalog.map((el, i) => {
                    return (
                      <div
                        key={`catalog_${i}`}
                        className={motoCardStyles.motoCard__pictureContainer}
                      >
                        <SwiperSlide key={i}>
                          <div
                            className='swiper-zoom-container'
                            style={{ width: '700px', height: '470px' }}
                          >
                            <Image
                              className={motoCardStyles.motoCard__image}
                              src={el}
                              alt='мотик'
                            />
                          </div>
                        </SwiperSlide>
                      </div>
                    );
                  })}
                </Swiper>
                <Swiper
                  onSwiper={setThumbsSwiper}
                  spaceBetween={10}
                  slidesPerView={4}
                  freeMode={true}
                  watchSlidesProgress={true}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className={motoCardStyles.mySwiper}
                >
                  {catalog.map((el,i) => {
                    return (
                      <div
                        key={`thumbs_${i}`}
                        className={motoCardStyles.motoCard__pictureContainer}
                      >
                        <SwiperSlide key={i}>
                          <div
                            className='swiper-zoom-container'
                            style={{ width: '220px', height: '150px' }}
                          >
                            <Image
                              className={motoCardStyles.motoCard__image}
                              src={el}
                              alt='мотик'
                            />
                          </div>
                        </SwiperSlide>
                      </div>
                    );
                  })}
                </Swiper>
              </>
            )}
          </div>
          <div className={motoCardStyles.motoCard__textContainer}>
            <h3
              className={motoCardStyles.motoCard__title}
              style={{ borderBottom: '2px solid var(--main-orange)' }}
            >
              Технические характеристики
            </h3>
            {PERFORMANCE_NAME.map((el,i) => {
              return (
                <div key={`performance_${i}`} className={motoCardStyles.motoCard__cell}>
                  <h4 className={motoCardStyles.motoCard__miniTitle}>{el}</h4>
                  <p className={motoCardStyles.motoCard__performanceText}>
                    {performance[i]}
                  </p>
                </div>
              );
            })}
            <div className={motoCardStyles.motoCard__orderContainer}>
              <p className={motoCardStyles.motoCard__price}>{price}</p>
              {catalog && <OrderButton image={catalog[0]} name={name} />}
            </div>
          </div>
        </div>
        <div className={motoCardStyles.motoCard__textContainer}>
          {description &&
            description.map((text: string, i: number) => {
              return <p key={`description_${i}`} className={motoCardStyles.motoCard__text}>{text}</p>;
            })}
        </div>
      </div>
    </section>
  );
};

export default MotoCard;
