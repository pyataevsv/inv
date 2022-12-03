import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import s from './s.scss';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/virtual';
import { Pagination, Virtual } from 'swiper';
import { BannerSlide } from '../../common/BannerSlide';

interface Props extends React.HTMLProps<HTMLDivElement> {
  marginTop?: boolean;
  autoRoll?: number;
}

export const Banner = ({ marginTop, autoRoll }: Props) => {
  const slides = 3;

  const Roller = () => {
    const swiper = useSwiper();

    useEffect(() => {
      let i = 0;
      setInterval(() => {
        swiper.slideToLoop(i, 1000);
        i++;
        if (i == 3) {
          i = 0;
        }
      }, autoRoll);
    }, []);

    return <></>;
  };

  return (
    <div className={s.container}>
      {marginTop && <div className={s.withtitle}></div>}
      <Swiper
        pagination={{ clickable: true }}
        spaceBetween={50}
        modules={[Pagination, Virtual]}
        className={s.swiper}
        virtual
      >
        {autoRoll && <Roller />}
        <SwiperSlide className={s.swiperslide}>
          <BannerSlide />
        </SwiperSlide>
        <SwiperSlide className={s.swiperslide}>
          <BannerSlide />
        </SwiperSlide>
        <SwiperSlide className={s.swiperslide}>
          <BannerSlide />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
