import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import s from './s.scss';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/virtual';
import { Pagination, Virtual } from 'swiper';
import { BannerSlide } from '../../common/BannerSlide';
import useMatchMedia from 'use-match-media-hook';
import { mediaQueries } from '../../../helpers';

export type Slide = {
  mobImg: HTMLImageElement;
  descImg: HTMLImageElement;
  // title: string;
  // description: string;
};
interface Props extends React.HTMLProps<HTMLDivElement> {
  marginTop?: boolean;
  autoRoll?: number;
  slides: Slide[];
}

export const Banner = ({ slides, marginTop, autoRoll }: Props) => {
  const [mobile, desctop] = useMatchMedia(mediaQueries);

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
        {slides.map((i, key) => (
          <SwiperSlide key={key}>
            <BannerSlide img={mobile ? i.mobImg : i.descImg} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
