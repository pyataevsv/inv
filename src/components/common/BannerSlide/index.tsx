import React from 'react';
import s from './s.scss';
import $ from 'classnames';
import { Button, ButtonType } from '../Button';

interface Props extends React.HTMLProps<HTMLDivElement> {
  img: HTMLImageElement;
}

export const BannerSlide = ({ img, ...props }: Props) => {
  return (
    <div
      className={s.slidecontainer}
      style={{ backgroundImage: `url(${img})` }}
    >
      <div>
        <div className={s.title}>Elon Must Dodge hype</div>
        <div className={s.description}>
          Успей купить криптовалюту, которой будут расплачиваться на Марсе
        </div>
      </div>
      <div>
        <Button type={ButtonType.mediumgrey}>Узнать</Button>
      </div>
    </div>
  );
};
