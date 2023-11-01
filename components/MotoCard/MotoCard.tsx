'use client';
import React, { useEffect, useState } from 'react';
const { Swiper, SwiperSlide } = require('swiper/react');
const { Navigation, Zoom, Thumbs, FreeMode } = require('swiper/modules');
import motoCardStyles from './motoCard.module.scss';
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
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

const MotoCard: React.FC<any> = ({ params }) => {
  const url = 'http://localhost:3000/'
  const [motorcycles, setMotorcycles] = useState([]);
  useEffect(() => {
    const storedData = localStorage.getItem('motorcycle');

    if (storedData) {
      const motorcycleData = JSON.parse(storedData);
      setMotorcycles(motorcycleData);
    }
  }, []);
  const [thumbsSwiper, setThumbsSwiper] = React.useState(null);
  const motorcycle: any = motorcycles.find((moto: any) => {
    return moto.motoName === params.motorcycles.replace(/_/g, ' ');
  });
  if (motorcycle) {
    const { motoLinks, description, motoName, motoPerformance, motoPrice } =
      motorcycle;
    const formattedMotoName = motoName.replace(/_/g, ' ');
    const motoPerformanceArray: string[] = Object.values(
      motoPerformance,
    ) as string[];
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
              &nbsp;&nbsp;{formattedMotoName}
            </p>
          </nav>
          <div className={motoCardStyles.motoCard__wrapper}>
            <div className={motoCardStyles.motoCard__catalogContainer}>
              <h3 className={motoCardStyles.motoCard__title}>
                Мотоцикл <br />
                {formattedMotoName}
              </h3>
              {motoLinks && (
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
                    {motoLinks.map(
                      (
                        el: string | StaticImport,
                        i: React.Key | null | undefined,
                      ) => {
                        return (
                          <div
                            key={`catalog_${i}`}
                            className={
                              motoCardStyles.motoCard__pictureContainer
                            }
                          >
                            <SwiperSlide key={i}>
                              <div
                                className='swiper-zoom-container'
                                style={{ width: '700px', height: '470px' }}
                              >
                                <Image
                                  className={motoCardStyles.motoCard__image}
                                  src={`${url}${el}`}
                                  alt='мото'
                                  height={1000}
                                  width={1000}
                                  quality={100}
                                />
                              </div>
                            </SwiperSlide>
                          </div>
                        );
                      },
                    )}
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
                    {motoLinks.map(
                      (
                        el: string | StaticImport,
                        i: React.Key | null | undefined,
                      ) => {
                        return (
                          <div
                            key={`thumbs_${i}`}
                            className={
                              motoCardStyles.motoCard__pictureContainer
                            }
                          >
                            <SwiperSlide key={i}>
                              <div
                                className='swiper-zoom-container'
                                style={{ width: '220px', height: '150px' }}
                              >
                                <Image
                                  className={motoCardStyles.motoCard__image}
                                  src={`${url}${el}`}
                                  alt='мотик'
                                  width={10000}
                                  height={10000}
                                  quality={100}
                                />
                              </div>
                            </SwiperSlide>
                          </div>
                        );
                      },
                    )}
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
              {PERFORMANCE_NAME.map((el, i) => {
                return (
                  <div
                    key={`performance_${i}`}
                    className={motoCardStyles.motoCard__cell}
                  >
                    <h4 className={motoCardStyles.motoCard__miniTitle}>{el}</h4>
                    <p className={motoCardStyles.motoCard__performanceText}>
                      {motoPerformanceArray[i]}
                    </p>
                  </div>
                );
              })}
              <div className={motoCardStyles.motoCard__orderContainer}>
                <p className={motoCardStyles.motoCard__price}>{motoPrice}</p>
                {motoLinks && <OrderButton image={motoLinks[0]} name={formattedMotoName} />}
              </div>
            </div>
          </div>
          <div className={motoCardStyles.motoCard__textContainer}>
            {description &&
              description.map((text: string, i: number) => {
                return (
                  <p
                    key={`description_${i}`}
                    className={motoCardStyles.motoCard__text}
                  >
                    {text}
                  </p>
                );
              })}
          </div>
        </div>
      </section>
    );
  } else {
    console.log('Мотоцикл не найден');
  }
};

export default MotoCard;
