import React from 'react';
import s from './s.scss';
import $ from 'classnames';
import { Button, ButtonType } from '../Button';

interface Props extends React.HTMLProps<HTMLDivElement> {}

export const BannerSlide = ({ ...props }: Props) => {
  return (
    <div className={s.slidecontainer}>
      <div>
        <div className={s.title}>Elon Must Dodge hype</div>
        <div className={s.description}>
          Успей купить криптовалюту, которой будут расплачиваться на Марсе
        </div>
      </div>
      <div>
        <Button type={ButtonType.mediumgrey} fill="grey">
          Узнать
        </Button>
      </div>
    </div>
  );
};
