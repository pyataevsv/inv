import React from 'react';
import s from './s.scss';
import $ from 'classnames';

export enum IconType {
  portfolio = 'portfolio',
  change = 'change',
}

interface Props extends React.HTMLProps<HTMLDivElement> {
  type: IconType;
}

export const Icon = ({ type }: Props) => (
  <div
    className={$(
      s.icon,
      { [s.portfolio]: type === IconType.portfolio },
      { [s.diff]: type === IconType.change }
    )}
  ></div>
);
